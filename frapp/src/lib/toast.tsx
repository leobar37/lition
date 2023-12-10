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
export const useLitionFeedback = () => {
  const toast = useChakraToast();

  const wrapAsync = useCallback(
    async <T extends any>(
      callback: Promise<T>,
      options: MapAsyncOptions
    ): Promise<T> => {
      try {
        if (isPromise(callback)) {
          if (options.loadingConfig) {
            toast({
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
            options.successConfig.callBack?.();
          }
          return result as any;
        }
      } catch (err) {
        console.error(err);
        if (options.errorConfig) {
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
