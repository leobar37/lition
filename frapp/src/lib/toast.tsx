import { useToast as useChakraToast, UseToastOptions } from "@chakra-ui/react";
import { isPromise } from "radash";
import { useCallback, useMemo } from "react";

type AnyFunction = (...args: any[]) => any;
type ToastOptions = UseToastOptions & {
  callBack?: AnyFunction;
};
export type MapAsyncOptions = {
  successConfig?: ToastOptions;
  errorConfig?: ToastOptions;
  loadingConfig?: ToastOptions;
};

const commonConfig: UseToastOptions = {
  variant: "subtle",
  position: "top-right",
  duration: 1500,
};

const DEFAULT_CONFIG = {
  loadingConfig: {
    description: "Cargando...",
  },
  successConfig: {
    description: "Operación exitosa",
  },
  errorConfig: {
    description: "Ocurrió un error",
  },
};
export const useLitionFeedback = () => {
  const toast = useChakraToast();

  const wrapAsync = useCallback(
    async <T extends any>(
      callback: Promise<T>,
      options: MapAsyncOptions = {}
    ): Promise<T> => {
      options = {
        ...DEFAULT_CONFIG,
        ...options,
      };
      try {
        if (isPromise(callback)) {
          let loadingId: any | null = null;
          if (options.loadingConfig) {
            console.log("is promise");
            loadingId = toast({
              ...commonConfig,
              status: "loading",
              ...options.loadingConfig,
            });
          }
          const result = await (callback as unknown as Promise<any>);
          if (options.successConfig) {
            toast({
              ...commonConfig,
              status: "success",
              ...options.successConfig,
            });
            toast.close(loadingId);
            options.successConfig.callBack?.();
          }
          return result as any;
        }
      } catch (err) {
        if (options.errorConfig) {
          console.log("error", {
            err,
          });
          toast({
            ...commonConfig,
            status: "error",
            ...options.errorConfig,
          });
          options.errorConfig.callBack?.(err);
        }
        return Promise.reject(err) as any;
      }
      return null as any;
    },
    [toast]
  );

  const wrappedToast = useMemo(() => {
    const copyFn = toast;
    const newToast = (options: UseToastOptions) => {
      copyFn?.({
        ...commonConfig,
        ...options,
      });
    };
    return newToast as typeof toast;
  }, [toast]);

  return { toast: wrappedToast as typeof toast, wrapAsync };
};
