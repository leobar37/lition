import { updateProductSchema } from "@lition/common";
import { isAuthedProcedure } from "../../../router";
import { z } from "zod";
export const update = isAuthedProcedure
  .input(z.object({ id: z.number(), data: updateProductSchema }))
  .mutation(async ({ ctx, input }) => {
    const product = await ctx.bd.product.update({
      where: {
        id: input.id,
      },
      data: {
        ...input.data,
      },
    });
    return product;
  });
