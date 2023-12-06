import { router, publicProcedure } from "../../router";
import { createSupplierSchema, updateSupplierSchema } from "@lition/common";
import { TRPCError } from "@trpc/server";
import { pick } from "radash";
import { z } from "zod";

export const suppliersRouter = router({
  delete: publicProcedure
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
  update: publicProcedure
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
  one: publicProcedure
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
  list: publicProcedure.query(async ({ ctx }) => {
    const bussiness = ctx.bussiness;
    const suppliers = await ctx.bd.supplier.findMany({
      where: {
        businessId: bussiness?.id,
        deletedAt: null,
      },
    });
    return suppliers;
  }),
  create: publicProcedure
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
