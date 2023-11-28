import {
  FormControlProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { FC } from "react";
import { useSetupControl } from "./use-setup-control";

type NumberInputProps = {
  label?: string;
  name?: string;
  inputProps?: NumberInputProps;
} & FormControlProps;

export const FormNumberInput: FC<NumberInputProps> = ({
  label,
  name,
  inputProps,
  ...props
}) => {
  const { Wrapper, field } = useSetupControl({
    label,
    name,
    ...props,
  });

  return (
    <Wrapper>
      <NumberInput
        {...field}
        onChange={(e) => {
          field.onChange({
            target: {
              value: Number(e),
            },
          });
        }}
      >
        <NumberInputField
          borderColor={"blue.400"}
          borderWidth={"1px"}
          px="1"
          rounded={"md"}
          w="full"
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Wrapper>
  );
};
