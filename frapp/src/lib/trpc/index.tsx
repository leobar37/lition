import type { AppRouter } from "@server";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { FC, useState } from "react";
import { isDev } from "~/utils";
import { AUTH_INFO_KEY } from "../auth";
import storage from "../storage";
import { useNavigate } from "react-router-dom";
import { SimpleModal } from "~/ui";
export const api = createTRPCReact<AppRouter>();

export const TrpcIntegration: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const navigate = useNavigate();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (err) => {
            const errorData = (err as any).data;
            if (errorData?.code === "UNAUTHORIZED") {
              storage.remove(AUTH_INFO_KEY);
              navigate("/auth/login");
            }
          },
        }),
      })
  );

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          url: isDev
            ? "http://localhost:5000/trpc"
            : "https://lition-back.gymspace.fit/trpc",
          headers: () => {
            const authInfo = storage.get<any>(AUTH_INFO_KEY);
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
        <SimpleModal />
      </api.Provider>
    </QueryClientProvider>
  );
};
