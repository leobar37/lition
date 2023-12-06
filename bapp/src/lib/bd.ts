import { PrismaClient, Transaction } from "bd";

export const addTransactions = async (
  bd: PrismaClient,
  transactions: Partial<Transaction>[]
) => {
  const clientId = transactions[0].clientId;
  const lasTransaction = await bd.transaction.findFirst({
    where: {
      clientId: clientId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  let totalDebt = lasTransaction?.totalDebt ?? 0;
  let totalPaid = lasTransaction?.totalPaid ?? 0;
  for await (const transaction of transactions) {
    const isDebt = !transaction.paid;
    if (isDebt) {
      totalDebt += transaction.total ?? 0;
    } else {
      totalPaid += transaction.total ?? 0;
    }

    await bd.transaction.create({
      data: {
        ...transaction,
        totalDebt,
        totalPaid,
      } as any,
    });
  }
};

export const prismaClient = new PrismaClient().$extends({
  model: {
    transaction: {
      insertAndCalculate: (transactions: Partial<Transaction>[]) =>
        addTransactions(prismaClient as any, transactions),
    },
  },
});

export default prismaClient;
