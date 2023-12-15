import { BdType } from "../../../lib/bd";

export const getDebt = async (supplierId: number, prisma: BdType) => {
  const lastTransation = await prisma.transactionSupplier.findFirst({
    where: {
      supplierId: supplierId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!lastTransation) {
    return {
      debt: 0,
    };
  }
  const totalDebt = lastTransation?.totalDebt ?? 0;
  const totalPaid = lastTransation?.totalPaid ?? 0;

  return {
    debt: totalDebt - totalPaid,
  };
};
