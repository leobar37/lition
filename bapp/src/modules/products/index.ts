import { publicProcedure, router } from "../../router";
import { createProductSchema, updateClientSchema } from "@lition/common";
import { z } from "zod";

export const productsRouter = router({
  list: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.bd.product.findMany({
      where: {
        businessId: ctx.bussiness?.id,
      },
    });
    return products;
  }),
  create: publicProcedure
    .input(createProductSchema)
    .mutation(({ ctx, input }) => {
      const product = ctx.bd.product.create({
        data: {
          ...input,
          business: {
            connect: {
              id: ctx.bussiness?.id,
            },
          },
        },
      });
      return product;
    }),

  one: publicProcedure
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
      });
      return product;
    }),
  update: publicProcedure
    .input(z.object({ id: z.number(), data: updateClientSchema }))
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.bd.product.update({
        where: {
          id: input.id,
        },
        data: {
          ...input,
        },
      });
      return product;
    }),
});
