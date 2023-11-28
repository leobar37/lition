import { publicProcedure } from "../../router";
export const unitSub = {
  units: publicProcedure.query(({ ctx }) => {
    return ctx.bd.unit.findMany();
  }),
};

export default unitSub;
