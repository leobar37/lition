import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import { jwtHandleStrategy } from "./lib";
import { prismaClient } from "./lib/bd";
import * as fromClients from "./modules/clients";
import * as fromSuppliers from "./modules/suppliers";
export const shared = {
  suppliers: fromSuppliers.shared,
  clients: fromClients.shared,
};
export async function createContext({ req, res }: CreateFastifyContextOptions) {
  return {
    req,
    res,
    bd: prismaClient,
    jwt: jwtHandleStrategy,
    shared,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
