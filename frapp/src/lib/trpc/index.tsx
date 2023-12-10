import type { AppRouter } from "@server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, FC } from "react";
import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import storage from "../storage";
import { AUTH_INFO_KEY, AuthInfo } from "../auth";
import { isDev } from "~/utils";
export const api = createTRPCReact<AppRouter>();

export const TrpcIntegration: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          url: isDev
            ? "http://localhost:5000/trpc"
            : "https://lition-back.gymspace.fit/trpc",
          headers: () => {
            const authInfo = storage.get<AuthInfo>(AUTH_INFO_KEY);
            if (authInfo) {
              return {
                authorization: `Bearer ${authInfo.token}`,
              };
            }
            return {};
          },
        }),
      ],
    })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </api.Provider>
    </QueryClientProvider>
  );
};
