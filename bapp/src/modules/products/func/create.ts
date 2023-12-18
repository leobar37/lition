import { createProductSchema } from "@lition/common";
import { isAuthedProcedure } from "../../../router";

export const create = isAuthedProcedure
  .input(createProductSchema)
  .mutation(({ ctx, input }) => {
    const product = ctx.bd.product.create({
      data: {
        ...input,
        unitId: input.unitId,
        businessId: ctx.bussiness?.id!,
      },
    });
    return product;
  });
