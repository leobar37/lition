import ReactSelect from "react-select";
import { FormInputOptions } from "./use-setup-control";
import { chakra } from "@chakra-ui/react";
import { FC } from "react";
import { useSetupControl } from "./use-setup-control";

type FormInputSelectProps = {
  options: {
    label: string;
    value: string | number;
  }[];
} & FormInputOptions;

const Select = chakra(ReactSelect);

export const FormInputSelect: FC<FormInputSelectProps> = ({
  options,
  isDisabled,
  ...props
}) => {
  const { Wrapper, field } = useSetupControl(props);
  const value = options.find((opt) => opt.value === field.value);
  return (
    <Wrapper>
      <Select
        isDisabled={isDisabled}
        options={options}
        {...field}
        value={value}
        onChange={(val: any) => {
          field.onChange({
            target: {
              value: val?.value,
            },
          });
        }}
      />
    </Wrapper>
  );
};
