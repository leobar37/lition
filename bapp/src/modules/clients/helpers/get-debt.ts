import { BdType } from "../../../lib/bd";
export const getDebt = async (clientId: number, prisma: BdType) => {
  const {
    _sum: { total: totalPaid },
  } = await prisma.transaction.aggregate({
    where: {
      clientId: clientId,
      paid: true,
    },
    _sum: {
      total: true,
    },
  });

  const {
    _sum: { total: totalSale },
  } = await prisma.sale.aggregate({
    where: {
      clientId: clientId,
    },
    _sum: {
      total: true,
    },
  });

  return {
    debt: (totalSale ?? 0) - (totalPaid ?? 0),
  };
};
