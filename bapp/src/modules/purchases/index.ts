import {
  PaymentState,
  StatusSaleType,
  createPurchaseSchema,
} from "@lition/common";
import { Purchase, PurchaseLineItem, TransactionSupplier } from "bd";
import { z } from "zod";
import { publicProcedure, router } from "../../router";

export const purchases = router({
  list: publicProcedure.query(async ({ ctx }) => {
    const sales = await ctx.bd.purchase.findMany({
      where: {
        businessId: ctx.bussiness?.id,
        canceledAt: null,
      },
      include: {
        supplier: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return sales;
  }),
  one: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const purchase = await ctx.bd.purchase.findFirst({
        where: {
          id: input.id,
        },
        include: {
          supplier: true,
          lines: true,
        },
      });
      return purchase;
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
      let updatedPurchase: Purchase | null = null;
      switch (type) {
        case StatusSaleType.CANCEL: {
          updatedPurchase = await ctx.bd.purchase.update({
            where: {
              id: input.id,
            },
            data: {
              canceledAt: new Date(),
            },
          });
          break;
        }
      }
      return updatedPurchase;
    }),
  create: publicProcedure
    .input(createPurchaseSchema)
    .mutation(async ({ ctx, input }) => {
      const bd = ctx.bd;
      const { total, supplierId, paymentSource, paymentState } = input;

      const createdPurchase = await bd.purchase.create({
        data: {
          meta: {},
          total: total ?? 0,
          supplierId,
          businessId: ctx.bussiness?.id!,
        },
      });

      // save line sales
      let lines: Partial<PurchaseLineItem>[] = [];

      for await (const purchaseLine of input.lines) {
        lines.push({
          amount: purchaseLine.amount,
          price: purchaseLine.price,
          productId: purchaseLine.productId,
          purchaseId: createdPurchase.id,
          aliasId: purchaseLine.aliasId,
        });
      }

      await bd.purchaseLineItem.createMany({
        data: lines as any[],
      });

      const transactions: Partial<TransactionSupplier>[] = [];

      if (paymentState === PaymentState.PAY_ENTIRE) {
        transactions.push({
          paid: false,
          total: total,
          supplierId: supplierId,
        });
        transactions.push({
          paid: true,
          total: total,
          supplierId: supplierId,
        });
      }
      if (paymentState === PaymentState.PAY_PARTIAL && paymentSource) {
        const { toAccount } = paymentSource;
        transactions.push({
          supplierId,
          paid: false,
          total: total,
        });
        transactions.push({
          paid: true,
          total: toAccount,
          supplierId,
        });
      }
      if (paymentState === PaymentState.DEBT) {
        transactions.push({
          paid: false,
          total: total,
          supplierId,
        });
      }
      await bd.transactionSupplier.insertAndCalculate(transactions);

      return {
        purchase: createdPurchase,
      };
    }),
});
