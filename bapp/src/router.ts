import { TRPCError, initTRPC } from "@trpc/server";
import { Context } from "./context";
import { jwtHandleStrategy } from "./lib";
import { Business, User } from "bd";
import { isEmpty } from "radash";
import { Roles } from "@lition/common";

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
    if (infoAuth?.bussinessId) {
      bussiness = await bd.business.findUnique({
        where: {
          id: infoAuth.bussinessId,
        },
      });
    }
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

export const isAdminMiddleware = isAuthedMiddleware.unstable_pipe((opts) => {
  const { user } = opts.ctx;
  if (!(user?.roles ?? []).includes(Roles.SUPER_ADMIN)) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }
  return opts.next({
    ctx: {
      ...opts.ctx,
      user,
    },
  });
});

export const publicProcedure = t.procedure;
export const isAuthedProcedure = t.procedure.use(isAuthedMiddleware);
export const isAdminProcedure = t.procedure.use(isAdminMiddleware);
