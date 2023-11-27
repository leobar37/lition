import { publicProcedure, router } from "../../router";
import { loginSchema } from "@lition/common";
import { passwordHandleStrategy } from "../../lib";
import { TRPCError } from "@trpc/server";
import { omit } from "radash";

export const authRouter = router({
  login: publicProcedure.input(loginSchema).mutation(async ({ ctx, input }) => {
    const { password, username } = input;
    const user = await ctx.bd.user.findUnique({
      where: {
        username,
      },
      include: {
        business: true,
      },
    });
    if (!user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "User not found",
      });
    }
    const isPasswordCorrect = await passwordHandleStrategy.compare(
      password,
      user.password
    );
    if (!isPasswordCorrect) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Wrong password",
      });
    }
    const token = ctx.jwt.sign({ id: user.id, bussinessId: user.businessId });

    return {
      token,
      user: omit(user, ["password", "business"]),
      business: user.business,
    };
  }),
});
