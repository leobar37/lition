import { PaymentState, StatusSaleType, createSaleSchema } from "@lition/common";
import { Sale, SaleLineItem, Transaction } from "bd";
import { z } from "zod";
import { publicProcedure, router } from "../../router";

export const sales = router({
  list: publicProcedure
    .input(
      z
        .object({
          clientId: z.number().optional(),
        })
        .optional()
    )
    .query(async ({ ctx, input }) => {
      const sales = await ctx.bd.sale.findMany({
        where: {
          businessId: ctx.bussiness?.id,
          clientId: input?.clientId,
          canceledAt: null,
        },
        include: {
          client: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return sales;
    }),
  sale: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const sale = await ctx.bd.sale.findFirst({
        where: {
          id: input.id,
        },
        include: {
          client: true,
          lines: true,
        },
      });
      return sale;
    }),

  updateFlags: publicProcedure
    .input(
      z.object({
        id: z.number(),
        type: z.nativeEnum(StatusSaleType),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const type = input.type;
      const sale = await ctx.bd.sale.findUnique({
        where: {
          id: input.id,
        },
      });

      let updatedSale: Sale | null = null;
      switch (type) {
        case StatusSaleType.CANCEL: {
          updatedSale = await ctx.bd.sale.update({
            where: {
              id: input.id,
            },
            data: {
              canceledAt: new Date(),
            },
          });
          break;
        }
        case StatusSaleType.TOGGLE_DISPATCH: {
          updatedSale = await ctx.bd.sale.update({
            where: {
              id: input.id,
            },
            data: {
              isDispatched: !sale?.isDispatched,
            },
          });
          break;
        }
      }

      return updatedSale;
    }),
  create: publicProcedure
    .input(createSaleSchema)
    .mutation(async ({ ctx, input }) => {
      const bd = ctx.bd;
      const {
        isDispatched = false,
        total,
        clientId,
        paymentSource,
        paymentState,
      } = input;

      const createdSale = await bd.sale.create({
        data: {
          isDispatched: isDispatched,
          meta: {},
          total: total ?? 0,
          clientId,
          businessId: ctx.bussiness?.id!,
        },
      });

      // save line sales
      let lines: Partial<SaleLineItem>[] = [];
      for await (const saleLine of input.lines) {
        lines.push({
          amount: saleLine.amount,
          price: saleLine.price,
          productId: saleLine.productId,
          saleId: createdSale.id,
          aliasId: saleLine.aliasId,
        });
      }

      await bd.saleLineItem.createMany({
        data: lines as any[],
      });

      const transactions: Partial<Transaction>[] = [];
      // create transactions
      if (paymentState === PaymentState.PAY_ENTIRE) {
        transactions.push({
          paid: true,
          total: total,
          clientId: clientId,
        });

        transactions.push({
          paid: false,
          total: total,
          clientId: clientId,
        });
      }
      if (paymentState === PaymentState.PAY_PARTIAL && paymentSource) {
        const { toAccount } = paymentSource;
        transactions.push({
          clientId: clientId,
          paid: false,
          total: total,
        });
        transactions.push({
          paid: true,
          total: toAccount,
          clientId: clientId,
        });
      }
      if (paymentState === PaymentState.DEBT) {
        transactions.push({
          paid: false,
          total: total,
          clientId: clientId,
        });
      }
      await bd.transaction.insertAndCalculate(transactions);

      return {
        sale: createdSale,
      };
    }),
});
