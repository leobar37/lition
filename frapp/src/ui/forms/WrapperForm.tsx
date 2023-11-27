import { FormProvider } from "react-hook-form";
import { FC } from "react";
import { useWrapperForm } from "./use-wrapper-form";

export const WrapperForm: FC<{
  form: any;
  children: React.ReactNode;
}> = ({ form, children }) => {
  return <FormProvider {...form}>{children}</FormProvider>;
};
