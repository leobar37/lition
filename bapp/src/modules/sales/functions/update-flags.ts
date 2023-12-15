import { StatusSaleType } from "@lition/common";
import { TRPCError } from "@trpc/server";
import { Sale, Transaction } from "bd";
import { publicProcedure } from "../../../router";

import { z } from "zod";

export const updateFlags = publicProcedure
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
        const { debt } = await ctx.shared.clients.getDebt(
          sale?.clientId!,
          ctx.bd
        );
        if (sale?.total! > debt) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "cannot-cancel-this-purchase",
          });
        }
        updatedSale = await ctx.bd.sale.update({
          where: {
            id: input.id,
          },
          data: {
            canceledAt: new Date(),
          },
        });
        const discountTransaction: Partial<Transaction> = {
          clientId: sale?.clientId!,
          paid: true,
          total: sale?.total!,
          isSilent: true,
        };
        await ctx.bd.transaction.insertAndCalculate([discountTransaction]);
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
