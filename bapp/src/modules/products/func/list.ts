import { isAuthedProcedure } from "../../../router";

export const list = isAuthedProcedure.query(async ({ ctx }) => {
  const products = await ctx.bd.product.findMany({
    where: {
      businessId: ctx.bussiness?.id,
    },
    include: {
      unit: true,
      unitAlias: true,
    },
  });
  return products;
});
