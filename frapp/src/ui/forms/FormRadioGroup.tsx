import { RadioGroup } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { useController } from "react-hook-form";

export const FormRadioGroup: FC<{
  name?: string;
  children?: ReactNode;
}> = ({ name, children }) => {
  const { field } = useController({ name: name ?? "" });
  return <RadioGroup {...field}>{children}</RadioGroup>;
};
