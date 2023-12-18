import { isAuthedProcedure } from "../../../router";
import { z } from "zod";
export const deleteProduct = isAuthedProcedure
  .input(z.object({ id: z.number() }))
  .mutation(async ({ ctx, input }) => {
    const product = await ctx.bd.product.delete({
      where: {
        id: input.id,
      },
    });
    return product;
  });
