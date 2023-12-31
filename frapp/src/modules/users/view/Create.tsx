import { Button, HStack } from "@chakra-ui/react";
import { CreateUserSchema, createUserSchema } from "@lition/common";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useNavigate } from "react-router-dom";
import { StoreSelector, api, useLitionFeedback } from "~/lib";
import {
  FormInput,
  FormInputPassword,
  Screen,
  WrapperForm,
  useWrapperForm,
} from "~/ui";

export const CreateUser = () => {
  const form = useWrapperForm<CreateUserSchema>({
    schema: createUserSchema,
  });

  const navigate = useNavigate();

  const { wrapAsync } = useLitionFeedback();

  const listUsersQueryKey = getQueryKey(api.users.list);

  const queryClient = useQueryClient();

  const createUser = api.users.create.useMutation();
  const onSubmit = form.handleSubmit((data) => {
    const action = async () => {
      await createUser.mutateAsync(data);
      navigate("/users");
      form.reset();
      queryClient.invalidateQueries(listUsersQueryKey);
    };
    wrapAsync(action());
  });

  return (
    <Screen back="/users" title="Crear usuario">
      <WrapperForm form={form}>
        <StoreSelector label="Negocio" name="businessId" />
        <FormInput label="Username" name="username" />
        <FormInputPassword label="Contraseña" name="password" />
        <FormInput label="Nombre" name="name" />
        <FormInput label="Apellido" name="lastName" />
        <HStack mt="2" justifyContent={"flex-end"}>
          <Button
            isLoading={createUser.isLoading}
            colorScheme="blue"
            onClick={onSubmit}
          >
            Guardar
          </Button>
        </HStack>
      </WrapperForm>
    </Screen>
  );
};
