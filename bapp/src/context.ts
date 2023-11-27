import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import { prismaClient } from "./lib/bd";
import { jwtHandleStrategy } from "./lib";
import { isEmpty } from "radash";
import { Business, User } from "bd";
export async function createContext({ req, res }: CreateFastifyContextOptions) {
  const headerAuthorization = req.headers["authorization"];
  const token = headerAuthorization?.split(" ")[1];
  // verify token if this is valid
  const infoAuth = jwtHandleStrategy.decode(token ?? "");
  let user: User | null = null;
  let bussiness: Business | null = null;
  if (token && !isEmpty(token) && infoAuth) {
    user = await prismaClient.user.findUnique({
      where: {
        id: infoAuth.id,
      },
    });
    bussiness = await prismaClient.business.findUnique({
      where: {
        id: infoAuth.bussinessId,
      },
    });
  }

  return {
    req,
    res,
    bd: prismaClient,
    jwt: jwtHandleStrategy,
    user,
    bussiness,
  };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
