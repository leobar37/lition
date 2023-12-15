import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useResolveSupplieId = (callback: (clientId: string) => void) => {
  const [params] = useSearchParams();
  const clientId = params.get("supplier");
  useEffect(() => {
    if (clientId) {
      callback(clientId);
    }
  }, [clientId]);
};
