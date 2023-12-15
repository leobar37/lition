import { PaymentState, createSaleSchema } from "@lition/common";
import { SaleLineItem, Transaction } from "bd";
import { publicProcedure } from "../../../router";

export const create = publicProcedure
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
  });
