import { FC } from "react";
import { FormProvider } from "react-hook-form";

export const WrapperForm: FC<{
  form: any;
  children: React.ReactNode;
}> = ({ form, children }) => {
  return <FormProvider {...form}>{children}</FormProvider>;
};
