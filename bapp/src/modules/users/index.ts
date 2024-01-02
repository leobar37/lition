import { z } from "zod";
import { isAdminProcedure } from "../../router";
import { router } from "../../router";
import { passwordHandleStrategy } from "../../lib/bcrypt";
import { ErrorCodes, Roles, createUserSchema } from "@lition/common";
import { TRPCError } from "@trpc/server";

export const users = router({
  update: isAdminProcedure
    .input(
      z.object({
        id: z.number(),
        input: createUserSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, input: userInput } = input;
      const user = await ctx.bd.user.findUnique({
        where: {
          id,
        },
      });
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }
      const password = await passwordHandleStrategy.encrypt(userInput.password);
      const updatedUser = await ctx.bd.user.update({
        where: {
          id,
        },
        data: {
          ...userInput,
          password,
        },
      });
      return updatedUser;
    }),
  create: isAdminProcedure
    .input(createUserSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.bd.user.findUnique({
        where: {
          username: input.username,
        },
      });
      if (!user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: ErrorCodes.ALREADY_EXISTS,
        });
      }
      const password = await passwordHandleStrategy.encrypt(input.password);
      const createdUser = ctx.bd.user.create({
        data: {
          ...input,
          password,
        },
      });
      return createdUser;
    }),
  one: isAdminProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const user = await ctx.bd.user.findUnique({
        where: {
          id: input.id,
        },
      });
      return user;
    }),
  delete: isAdminProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      await ctx.bd.user.delete({
        where: {
          id,
        },
      });
      return true;
    }),
  list: isAdminProcedure
    .input(
      z.object({
        businessId: z.number().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { businessId } = input;
      const users = await ctx.bd.user.findMany({
        where: {
          businessId: businessId,
        },
      });

      return users.filter((user) => !user.roles.includes(Roles.SUPER_ADMIN));
    }),
});
