import { FormControl, FormControlProps, FormLabel } from "@chakra-ui/react";
import { FC, PropsWithChildren, useCallback } from "react";
import { useController } from "react-hook-form";

export type FormInputOptions = {
  name?: string;
  label?: string;
} & FormControlProps;
export const useSetupControl = ({
  label,
  name,
  ...props
}: FormInputOptions) => {
  const { field, fieldState, ...rest } = useController({ name: name ?? "" });

  const Wrapper: FC<PropsWithChildren> = useCallback(({ children }) => {
    return (
      <FormControl mt="2" w="full" isInvalid={fieldState.invalid} {...props}>
        <FormLabel textColor={"blue.800"} fontWeight={"semibold"}>
          {label}
        </FormLabel>
        {children}
      </FormControl>
    );
  }, []);
  return {
    Wrapper,
    field,
    fieldState,
    ...rest,
  };
};
