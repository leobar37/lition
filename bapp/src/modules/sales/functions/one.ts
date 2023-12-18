import { isAuthedProcedure } from "../../../router";
import { z } from "zod";

export const sale = isAuthedProcedure
  .input(
    z.object({
      id: z.number(),
    })
  )
  .query(async ({ ctx, input }) => {
    const sale = await ctx.bd.sale.findFirst({
      where: {
        id: input.id,
      },
      include: {
        client: true,
        lines: {
          include: {
            product: true,
          },
        },
      },
    });
    return sale;
  });
