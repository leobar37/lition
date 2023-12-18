import { StatusSaleType } from "@lition/common";
import { Sale } from "bd";
import { isAuthedProcedure } from "../../../router";

import { z } from "zod";

export const updateFlags = isAuthedProcedure
  .input(
    z.object({
      id: z.number(),
      type: z.nativeEnum(StatusSaleType),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const type = input.type;
    const sale = await ctx.bd.sale.findUnique({
      where: {
        id: input.id,
      },
    });

    let updatedSale: Sale | null = null;
    switch (type) {
      case StatusSaleType.CANCEL: {
        updatedSale = await ctx.bd.sale.update({
          where: {
            id: input.id,
          },
          data: {
            canceledAt: new Date(),
          },
        });
        break;
      }
      case StatusSaleType.TOGGLE_DISPATCH: {
        updatedSale = await ctx.bd.sale.update({
          where: {
            id: input.id,
          },
          data: {
            isDispatched: !sale?.isDispatched,
          },
        });
        break;
      }
    }

    return updatedSale;
  });
