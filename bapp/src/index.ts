import cors from "@fastify/cors";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { createContext } from "./context";
import { authRouter } from "./modules/auth";
import { clientsRouter } from "./modules/clients";
import { me } from "./modules/me";
import { productsRouter } from "./modules/products";
import { purchases } from "./modules/purchases";
import { sales } from "./modules/sales";
import { suppliersRouter } from "./modules/suppliers";
import { router } from "./router";
export type * from "bd";
import { passwordHandleStrategy } from "./lib/bcrypt";

// fastify cors

const appRouter = router({
  clients: clientsRouter,
  auth: authRouter,
  products: productsRouter,
  sales: sales,
  suppliers: suppliersRouter,
  purchases: purchases,
  me: me,
});

const server = fastify({
  maxParamLength: 5000,
});

server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter, createContext },
});

server.get("/", async () => {
  return { status: "ready, omar gay" };
});

const PORT: number = process.env?.PORT ? Number(process.env.PORT) : 5000;
(async () => {
  try {
    await server.register(cors, {});
    await server.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`server listening on ${PORT}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();

export type AppRouter = typeof appRouter;
