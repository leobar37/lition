import { isAuthedProcedure } from "../../router";
import { z } from "zod";

export const unitSub = {
  units: isAuthedProcedure.query(({ ctx }) => {
    return ctx.bd.unit.findMany();
  }),
  unitOne: isAuthedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.bd.unit.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
};

export default unitSub;
