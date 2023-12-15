import { publicProcedure } from "../../../router";
import { z } from "zod";

export const sale = publicProcedure
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
        lines: true,
      },
    });
    return sale;
  });
