import { isAuthedProcedure } from "../../../router";
import { z } from "zod";

export const sale = isAuthedProcedure
  .input(
    z.object({
      id: z.number(),
      withDebt: z.boolean().optional().default(false),
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
    const { debt } = input.withDebt
      ? await ctx.shared.clients.getDebt(sale?.clientId!, ctx.bd)
      : { debt: -1 };

    return {
      ...sale,
      debt,
    };
  });
