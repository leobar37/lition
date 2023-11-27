import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import { FC } from "react";
import { useController } from "react-hook-form";

type FormTextAreaProps = {
  label?: string;
  name?: string;
  inputProps?: TextareaProps;
} & FormControlProps;

export const FormTextArea: FC<FormTextAreaProps> = ({
  label,
  name,
  inputProps,
  ...props
}) => {
  const { field, fieldState } = useController({ name: name ?? "" });

  return (
    <FormControl mt="2" w="full" isInvalid={fieldState.invalid} {...props}>
      <FormLabel textColor={"blue.800"} fontWeight={"semibold"}>
        {label}
      </FormLabel>
      <Textarea
        borderColor={"blue.400"}
        borderWidth={"1px"}
        px="1"
        size={"sm"}
        rounded={"md"}
        w="full"
        {...inputProps}
        {...field}
      />
      <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
    </FormControl>
  );
};
