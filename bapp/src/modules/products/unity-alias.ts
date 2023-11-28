import { publicProcedure } from "../../router";
import { z } from "zod";
import { createUnitAliasSchema, updateUnitAliasSchema } from "@lition/common";

export const unitAliasSub = {
  oneUnitAlias: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.bd.unitAlias.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  unitAlias: publicProcedure
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
  createUnitAlias: publicProcedure
    .input(
      z.object({
        productId: z.number(),
        input: createUnitAliasSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.bd.unitAlias.create({
        data: {
          ...input.input,
          productId: input.productId,
        },
      });
    }),
  updateUnitAlias: publicProcedure
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
  deleteUnitAlias: publicProcedure
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
