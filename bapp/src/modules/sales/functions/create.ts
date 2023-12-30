import { PaymentState, createSaleSchema } from "@lition/common";
import { SaleLineItem, Transaction } from "bd";
import { isAuthedProcedure } from "../../../router";

export const create = isAuthedProcedure
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
        meta: {
          note: saleLine.note,
        },
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
        paid: true,
        total: toAccount,
        clientId: clientId,
      });
    }

    const { debt } = await ctx.shared.clients.getDebt(clientId, ctx.bd);

    await bd.transaction.createMany({
      data: transactions as any[],
    });

    const totalPaid = transactions.reduce((acc, t) => acc + t.total!, 0);
    let status = {
      debt: debt,
      paid: totalPaid,
      result: debt - totalPaid,
    };
    await bd.sale.update({
      where: {
        id: createdSale.id,
      },
      data: {
        meta: {
          ...(createdSale.meta as any),
          status: status,
        },
      },
    });
    return {
      sale: createdSale,
      status,
    };
  });
