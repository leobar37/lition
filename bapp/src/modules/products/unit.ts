import { publicProcedure } from "../../router";
import { z } from "zod";

export const unitSub = {
  units: publicProcedure.query(({ ctx }) => {
    return ctx.bd.unit.findMany();
  }),
  unitOne: publicProcedure
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
