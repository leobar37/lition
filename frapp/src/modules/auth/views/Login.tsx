import { Button, HStack } from "@chakra-ui/react";
import {
  Screen,
  FormInput,
  useWrapperForm,
  WrapperForm,
  FormInputPassword,
} from "~/ui";
import { Box } from "@chakra-ui/react";
import { loginSchema, LoginInput } from "@lition/common";
import { api } from "~/lib/trpc";
import { useAuthInfo } from "~/lib/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const form = useWrapperForm<LoginInput>({
    schema: loginSchema,
  });
  const navigate = useNavigate();
  const loginMutation = api.auth.login.useMutation();
  const { setAuthInfo } = useAuthInfo();
  const onSubmit = form.handleSubmit(
    async (data) => {
      const result = await loginMutation.mutateAsync(data);
      setAuthInfo(result);
      navigate("/");
    },
    (errors) => {
      console.log("error", errors);
    }
  );
  const isDisabled = loginMutation.isLoading || !form.formState.isValid;

  return (
    <Screen title="Ingreso">
      <WrapperForm form={form}>
        <Box as="form">
          <FormInput name="username" label="Usuario" />
          <FormInputPassword name="password" label="Contraseña" />
          <HStack mt="4" justifyContent={"center"}>
            <Button
              isDisabled={isDisabled}
              w="full"
              type="button"
              onClick={onSubmit}
            >
              Ingresar
            </Button>
          </HStack>
        </Box>
      </WrapperForm>
    </Screen>
  );
};
