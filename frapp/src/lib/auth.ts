import { atomWithStorage } from "jotai/utils";
import { api } from "../lib/trpc";
import { useAtom } from "jotai";

export const AUTH_INFO_KEY = "authInfo";
export type AuthInfo = ReturnType<typeof api.auth.login.useMutation>["data"];

export const authAtom = atomWithStorage<AuthInfo | null>(AUTH_INFO_KEY, null);

export const useAuthInfo = () => {
  const [authInfo, setAuthInfo] = useAtom(authAtom);
  return {
    authInfo,
    setAuthInfo,
    isAuthenticated: !!authInfo?.token,
  };
};
