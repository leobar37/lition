import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { createContext } from "./context";
import { router } from "./router";
import { clientsRouter } from "./modules/clients";
import { authRouter } from "./modules/auth";
import { productsRouter } from "./modules/products";
import cors from "@fastify/cors";
export type * from "bd";

// fastify cors

const appRouter = router({
  clients: clientsRouter,
  auth: authRouter,
  products: productsRouter,
});

const server = fastify({
  maxParamLength: 5000,
});

server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter, createContext },
});

const PORT: number = process.env?.PORT ? Number(process.env.PORT) : 3000;
(async () => {
  try {
    await server.register(cors, {});
    await server.listen({ port: PORT });

    console.log(`server listening on ${PORT}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();

export type AppRouter = typeof appRouter;