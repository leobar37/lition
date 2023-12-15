import { createClientSchema } from "@lition/common";
import { publicProcedure, router } from "../../router";
import { updateClientSchema, addPaymentSchema } from "@lition/common";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { Transaction } from "bd";
import { getDebt } from "./helpers";

export const shared = {
  getDebt,
};
export const clientsRouter = router({
  myPayments: publicProcedure
    .input(
      z.object({
        clientId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const transactions = await ctx.bd.transaction.findMany({
        where: {
          clientId: input.clientId,
          paid: true,
        },
      });
      return transactions;
    }),

  addPayment: publicProcedure
    .input(addPaymentSchema.and(z.object({ clientId: z.number() })))
    .mutation(async ({ ctx, input: { amount, clientId } }) => {
      const transaction: Partial<Transaction> = {
        clientId: clientId,
        paid: true,
        total: amount,
      };
      await ctx.bd.transaction.insertAndCalculate([transaction]);
      return true;
    }),
  myDebt: publicProcedure
    .input(
      z.object({
        clientId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      return getDebt(input.clientId, ctx.bd);
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
          businessId: ctx.bussiness?.id,
        },
      });
      return client;
    }),
  list: publicProcedure.query(async ({ ctx }) => {
    const business = ctx.bussiness;
    return await ctx.bd.client.findMany({
      where: {
        businessId: business?.id,
        deletedAt: null,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
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
    // update sales to canceled
    await ctx.bd.sale.updateMany({
      where: {
        clientId: id,
      },
      data: {
        canceledAt: new Date(),
      },
    });
    return client;
  }),
});
