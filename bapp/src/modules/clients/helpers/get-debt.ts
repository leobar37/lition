import { BdType } from "../../../lib/bd";
export const getDebt = async (clientId: number, prisma: BdType) => {
  const lastTransaction = await prisma.transaction.findFirst({
    where: {
      clientId: clientId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!lastTransaction) {
    return {
      debt: 0,
    };
  }
  const debt = lastTransaction?.totalDebt - lastTransaction?.totalPaid;
  return {
    debt: debt,
  };
};
