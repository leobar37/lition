import {
  FormControlProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberInputProps,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useSetupControl } from "./use-setup-control";
import { isNumber } from "radash";
type FormNumberInputProps = {
  label?: string;
  name?: string;
  inputProps?: NumberInputProps;
  formatValue?: (value: string) => string;
  parseValue?: (value: string) => string;
} & FormControlProps;

export const moneyStrategyFormat = {
  format: (value: string) => {
    return "S/" + value;
  },
  parse: (value: string) => {
    return value.replace("S/", "");
  },
};

export const FormNumberInput: FC<FormNumberInputProps> = ({
  label,
  name,
  inputProps,
  formatValue,
  parseValue,
  ...props
}) => {
  const { Wrapper, field } = useSetupControl({
    label,
    name,
    ...props,
  });

  const [value, setValue] = useState("0");

  useEffect(() => {
    const parsedValue = Number(value);

    if (!isNumber(parsedValue)) {
      return;
    }

    field.onChange({
      target: {
        value: parsedValue,
      },
    });
  }, [value]);
  return (
    <Wrapper>
      <NumberInput
        {...field}
        value={value ?? 0}
        format={formatValue as any}
        parse={parseValue}
        {...inputProps}
        onChange={(e) => {
          const value = parseValue ? parseValue(e) : e;
          setValue(value.toString());
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
