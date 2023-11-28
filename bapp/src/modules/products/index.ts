import { createProductSchema, updateProductSchema } from "@lition/common";
import { z } from "zod";
import { publicProcedure, router } from "../../router";
import unit from "./unit";
import unitAliasSub from "./unity-alias";
export const productsRouter = router({
  ...unitAliasSub,
  ...unit,
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
  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.bd.product.delete({
        where: {
          id: input.id,
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
    }),
});
