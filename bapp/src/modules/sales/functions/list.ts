import { z } from "zod";
import { isAuthedProcedure } from "../../../router";

export const list = isAuthedProcedure
  .input(
    z
      .object({
        clientId: z.number().optional(),
      })
      .optional()
  )
  .query(async ({ ctx, input }) => {
    const sales = await ctx.bd.sale.findMany({
      where: {
        businessId: ctx.bussiness?.id,
        clientId: input?.clientId,
        canceledAt: null,
      },
      include: {
        client: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return sales;
  });
