import { PaymentState, createSaleSchema } from "@lition/common";
import { Transaction } from "bd";
import { publicProcedure, router } from "../../router";

export const sales = router({
  list: publicProcedure.query(async ({ ctx }) => {
    const sales = await ctx.bd.sale.findMany({
      where: {
        businessId: ctx.bussiness?.id,
      },
      include: {
        client: true,
        product: true,
      },
    });
    return sales;
  }),
  create: publicProcedure
    .input(createSaleSchema)
    .mutation(async ({ ctx, input }) => {
      const bd = ctx.bd;
      const {
        price,
        amount,
        isDispatched = false,
        usedAlias,
        total,
        clientId,
        productId,
        paymentSource,
        paymentState,
      } = input;
      const createdSale = await bd.sale.create({
        data: {
          amount: amount ?? 0,
          price: price ?? 0,
          isDispatched: isDispatched,
          meta: !!usedAlias
            ? {
                usedAlias,
              }
            : {},
          total: total ?? 0,
          clientId,
          businessId: ctx.bussiness?.id!,
          productId: productId,
        },
      });

      const transactions: Omit<Transaction, "id">[] = [];
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
      const createTransactions = await bd.transaction.createMany({
        data: transactions,
      });
      return {
        sale: createdSale,
        transactions: createTransactions,
      };
    }),
});
