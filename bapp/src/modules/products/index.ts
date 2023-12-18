import { z } from "zod";
import { isAuthedProcedure, router } from "../../router";
import { create, list, update, deleteProduct } from "./func";
import unit from "./unit";
import unitAliasSub from "./unity-alias";

export const productsRouter = router({
  ...unitAliasSub,
  ...unit,
  list,
  create,
  delete: deleteProduct,
  update,
  one: isAuthedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const product = await ctx.bd.product.findUnique({
        where: {
          id: input.id,
        },
        include: {
          unit: true,
          unitAlias: true,
        },
      });
      return product;
    }),
});
