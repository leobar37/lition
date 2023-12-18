import { TRPCError, initTRPC } from "@trpc/server";
import { Context } from "./context";
import { jwtHandleStrategy } from "./lib";
import { Business, User } from "bd";
import { isEmpty } from "radash";

export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const middleware = t.middleware;

export const isAuthedMiddleware = middleware(async (opts) => {
  const { req, bd } = opts.ctx;

  const headerAuthorization = req.headers["authorization"];
  const token = headerAuthorization?.split(" ")[1];
  const validToken = jwtHandleStrategy.verify(token ?? "");

  if (!validToken) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }

  // verify token if this is valid
  const infoAuth = jwtHandleStrategy.decode(token ?? "");
  let user: User | null = null;
  let bussiness: Business | null = null;
  if (token && !isEmpty(token) && infoAuth) {
    user = await bd.user.findUnique({
      where: {
        id: infoAuth.id,
      },
    });
    bussiness = await bd.business.findUnique({
      where: {
        id: infoAuth.bussinessId,
      },
    });
  }

  return opts.next({
    ctx: {
      ...opts.ctx,
      bd,
      req,
      user,
      bussiness,
    },
  });
});

export const publicProcedure = t.procedure;
export const isAuthedProcedure = t.procedure.use(isAuthedMiddleware);
