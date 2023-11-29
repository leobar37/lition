import { createClientSchema } from "@lition/common";
import { publicProcedure, router } from "../../router";
import { updateClientSchema } from "@lition/common";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const clientsRouter = router({
  myDebt: publicProcedure
    .input(
      z.object({
        clientId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const transactions = await ctx.bd.transaction.findMany({
        where: {
          clientId: input.clientId,
          paid: false,
        },
      });
      const debt = transactions.reduce((acc, curr) => {
        return acc + curr.total;
      }, 0);

      return {
        transactions,
        debt,
      };
    }),
  one: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    const id = input;
    const client = await ctx.bd.client.findUnique({
      where: {
        id: id,
        deletedAt: null,
      },
    });
    if (!client) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Client not found",
      });
    }
    return client;
  }),
  create: publicProcedure
    .input(createClientSchema)
    .mutation(async ({ ctx, input }) => {
      const client = await ctx.bd.client.create({
        data: {
          ...input,
          business: {
            connect: {
              id: ctx.bussiness?.id,
            },
          },
        },
      });
      return client;
    }),
  list: publicProcedure.query(async ({ ctx }) => {
    const business = ctx.bussiness;
    const clients = await ctx.bd.client.findMany({
      where: {
        businessId: business?.id,
        deletedAt: null,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return clients;
  }),
  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        data: updateClientSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { data, id } = input;
      const client = await ctx.bd.client.update({
        where: {
          id: id,
        },
        data: data,
      });
      return client;
    }),
  delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    const id = input;
    const client = await ctx.bd.client.update({
      where: {
        id: id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
    return client;
  }),
});
