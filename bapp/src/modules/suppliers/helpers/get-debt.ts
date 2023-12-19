import { BdType } from "../../../lib/bd";

export const getDebt = async (supplierId: number, prisma: BdType) => {
  const {
    _sum: { total: totalPaid },
  } = await prisma.transactionSupplier.aggregate({
    where: {
      supplierId: supplierId,
      paid: true,
    },
    _sum: {
      total: true,
    },
  });
  const {
    _sum: { total: totalPurchase },
  } = await prisma.purchase.aggregate({
    where: {
      supplierId: supplierId,
    },
    _sum: {
      total: true,
    },
  });
  return {
    debt: (totalPurchase ?? 0) - (totalPaid ?? 0),
  };
};
