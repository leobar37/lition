import { isAuthedProcedure } from "../../router";
import { z } from "zod";
import { createUnitAliasSchema, updateUnitAliasSchema } from "@lition/common";
import { TRPCError } from "@trpc/server";

export const unitAliasSub = {
  oneUnitAlias: isAuthedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.bd.unitAlias.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  unitAlias: isAuthedProcedure
    .input(
      z.object({
        productId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.bd.unitAlias.findMany({
        where: {
          productId: input.productId,
        },
      });
    }),
  createUnitAlias: isAuthedProcedure
    .input(
      z.object({
        productId: z.number(),
        input: createUnitAliasSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.bd.product.findUnique({
        where: {
          id: input.productId,
        },
      });
      if (!product) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Product not found",
        });
      }

      return await ctx.bd.unitAlias.create({
        data: {
          ...input.input,
          unitId: product.unitId,
          productId: input.productId,
        },
      });
    }),
  updateUnitAlias: isAuthedProcedure
    .input(
      z.object({
        id: z.number(),
        input: updateUnitAliasSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.bd.unitAlias.update({
        where: {
          id: input.id,
        },
        data: {
          ...input.input,
        },
      });
    }),
  deleteUnitAlias: isAuthedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.bd.unitAlias.delete({
        where: {
          id: input.id,
        },
      });
    }),
};

export default unitAliasSub;
