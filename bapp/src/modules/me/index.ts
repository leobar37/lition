import { bussinessSchema } from "@lition/common";
import { isAdminProcedure, router } from "../../router";
import { z } from "zod";

export const me = router({
  list: isAdminProcedure.query(async ({ ctx }) => {
    return ctx.bd.business.findMany({});
  }),
  one: isAdminProcedure
    .input(
      z.object({
        bussinessId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.bd.business.findUnique({
        where: {
          id: input.bussinessId,
        },
      });
    }),
  create: isAdminProcedure
    .input(bussinessSchema)
    .mutation(async ({ ctx, input }) => {
      // create empty
      const createdBussiness = await ctx.bd.business.create({
        data: {
          name: input.name,
          code: input.code,
        },
      });
      const anonUser = await ctx.bd.user.create({
        data: {
          name: "anon",
          lastName: "anon",
          password: "anon",
          phone: "anon",
          username: "anon",
          businessId: createdBussiness.id,
        },
      });
      const updatedBusiness = await ctx.bd.business.update({
        data: {
          anonymusClientId: anonUser.id,
        },
        where: {
          id: createdBussiness.id,
        },
      });
      return updatedBusiness;
    }),

  update: isAdminProcedure
    .input(
      z.object({
        id: z.number(),
        input: bussinessSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updatedBusiness = await ctx.bd.business.update({
        data: input.input,
        where: {
          id: input.id,
        },
      });
      return updatedBusiness;
    }),
});
