import {
  addPaymentSchema,
  createSupplierSchema,
  updateSupplierSchema,
} from "@lition/common";
import { TRPCError } from "@trpc/server";
import { pick } from "radash";
import { z } from "zod";
import { isAuthedProcedure, router } from "../../router";
import { getDebt } from "./helpers";

export const shared = {
  getDebt,
};

export const suppliersRouter = router({
  myPayments: isAuthedProcedure
    .input(
      z.object({
        supplierId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const transactions = await ctx.bd.transactionSupplier.findMany({
        where: {
          supplierId: input.supplierId,
          paid: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return transactions;
    }),
  addPayment: isAuthedProcedure
    .input(addPaymentSchema.and(z.object({ supplierId: z.number() })))
    .mutation(async ({ ctx, input: { amount, supplierId } }) => {
      await ctx.bd.transactionSupplier.create({
        data: {
          supplierId: supplierId,
          paid: true,
          total: amount,
        },
      });
      return true;
    }),
  myDebt: isAuthedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx: { bd }, input: { id } }) => {
      return getDebt(id, bd);
    }),
  delete: isAuthedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input: { id } }) => {
      const bd = ctx.bd;
      const supplier = await bd.supplier.findUnique({
        where: {
          id: id,
        },
      });
      if (!supplier) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No se encontro el proveedor",
        });
      }
      const updated = await bd.supplier.update({
        where: {
          id: id,
        },
        data: {
          deletedAt: new Date(),
        },
      });
      return updated;
    }),
  update: isAuthedProcedure
    .input(
      z.object({
        id: z.number(),
        input: updateSupplierSchema,
      })
    )
    .mutation(async ({ ctx, input: { id, input } }) => {
      const bd = ctx.bd;
      const supplier = await bd.supplier.findUnique({
        where: {
          id: id,
        },
      });
      if (!supplier) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No se encontro el proveedor",
        });
      }
      const updatedSupplier = await bd.supplier.update({
        where: {
          id: id,
        },
        data: {
          ...pick(input, [
            "name",
            "lastName",
            "direction",
            "direction_reference",
            "email",
            "phone",
            "note",
          ]),
        },
      });
      return updatedSupplier;
    }),
  one: isAuthedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx, input: { id } }) => {
      return ctx.bd.supplier.findUnique({
        where: {
          id,
        },
      });
    }),
  list: isAuthedProcedure.query(async ({ ctx }) => {
    const bussiness = ctx.bussiness;
    const suppliers = await ctx.bd.supplier.findMany({
      where: {
        businessId: bussiness?.id,
        deletedAt: null,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return suppliers;
  }),
  create: isAuthedProcedure
    .input(createSupplierSchema)
    .mutation(async ({ ctx, input }) => {
      const bd = ctx.bd;
      const alreadyExist = await bd.supplier.findFirst({
        where: {
          dni: input.dni ?? "",
          deletedAt: null,
        },
      });
      if (alreadyExist) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Ya existe un proveedor con ese dni",
        });
      }
      const businessId = ctx.bussiness?.id;

      const createdSupplier = await bd.supplier.create({
        data: {
          ...pick(input, [
            "name",
            "lastName",
            "direction",
            "direction_reference",
            "email",
            "phone",
            "note",
            "dni",
          ]),
          businessId: businessId,
        },
      });
      return createdSupplier;
    }),
});
