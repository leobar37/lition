import {
  Button,
  FormControl,
  FormControlProps,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useController } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

type FormInputProps = {
  label?: string;
  name?: string;
  inputProps?: InputProps;
} & FormControlProps;

export const FormInput: FC<FormInputProps> = ({ label, name, inputProps, ...props }) => {
  const { field, fieldState } = useController({ name: name ?? "" });

  return (
    <FormControl mt="2" w="full" isInvalid={fieldState.invalid} {...props}>
      <FormLabel textColor={"blue.800"} fontWeight={"semibold"}>
        {label}
      </FormLabel>
      <Input
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

export const FormInputPassword: FC<FormInputProps> = ({ label, name, inputProps, ...props }) => {
  const { field, fieldState } = useController({ name: name ?? "" });
  const [ahow, setShow] = useState(false);
  return (
    <FormControl mt="2" w="full" isInvalid={fieldState.invalid} {...props}>
      <FormLabel textColor={"blue.800"} fontWeight={"semibold"}>
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          borderColor={"blue.400"}
          borderWidth={"1px"}
          px="2"
          pr="1rem"
          size={"sm"}
          rounded={"md"}
          w="full"
          {...inputProps}
          {...field}
          type={ahow ? "text" : "password"}
        />
        <InputRightElement width={"2rem"} height={"full"}>
          <Button onClick={() => setShow(!ahow)} variant={"unestyled"} textColor={"gray.600"}>
            {ahow ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
    </FormControl>
  );
};
