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
import { useEffect } from "react";
import { useLitionFeedback } from "~/lib";

export const Login = () => {
  const form = useWrapperForm<LoginInput>({
    schema: loginSchema,
  });
  const navigate = useNavigate();
  const loginMutation = api.auth.login.useMutation();
  const { setAuthInfo, isAuthenticated } = useAuthInfo();

  const { wrapAsync } = useLitionFeedback();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const onSubmit = form.handleSubmit(
    async (data) => {
      const action = async () => {
        const result = await loginMutation.mutateAsync(data);
        setAuthInfo(result);
        navigate("/");
      };
      await wrapAsync(action(), {
        successConfig: {
          title: "Bienvenido",
          description: "Has ingresado correctamente",
        },
      });
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
              isLoading={loginMutation.isLoading}
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
