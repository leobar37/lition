import { useSetupControl, FormInputOptions } from "./use-setup-control";
import { Switch } from "@chakra-ui/react";

export const SwitchFormInput = ({
  label,
  name,
  ...props
}: FormInputOptions) => {
  const { Wrapper, field } = useSetupControl({
    name,
    label,
    ...props,
  });

  const value = field.value ?? false;

  return (
    <Wrapper>
      <Switch isChecked={value} {...field} />
    </Wrapper>
  );
};
