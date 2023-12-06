import {
  PaymentState,
  createSaleSchema,
  updateSaleSchema,
} from "@lition/common";
import { SaleLineItem, Transaction } from "bd";
import { publicProcedure, router } from "../../router";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const sales = router({
  list: publicProcedure.query(async ({ ctx }) => {
    const sales = await ctx.bd.sale.findMany({
      where: {
        businessId: ctx.bussiness?.id,
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

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        input: updateSaleSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const bd = ctx.bd;
      const {
        id,
        input: { isDispatched, lines, total, paymentSource },
      } = input;
      console.log("reach here");

      const prevSale = await bd.sale.findFirst({
        where: {
          id: id,
        },
      });

      if (!prevSale) {
        throw new TRPCError({
          code: "NOT_FOUND",
          cause: "Sale not found",
        });
      }

      await bd.sale.update({
        where: {
          id: id,
        },
        data: {
          isDispatched: isDispatched,
          total: total,
        },
      });

      for await (const line of lines) {
        if (!line.id) {
          await bd.saleLineItem.create({
            data: {
              amount: line.amount,
              price: line.price,
              aliasId: line.aliasId,
              productId: line.productId,
              saleId: prevSale.id,
            },
          });
        } else
          await bd.saleLineItem.update({
            where: {
              id: line.id,
            },
            data: {
              amount: line.amount,
              price: line.price,
            },
          });
      }

      if (paymentSource && paymentSource.toAccount > 0) {
        await bd.transaction.insertAndCalculate([
          {
            clientId: prevSale.clientId,
            paid: true,
            total: paymentSource?.toAccount ?? 0,
          },
        ]);
      }

      return {
        sale: prevSale,
      };
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
