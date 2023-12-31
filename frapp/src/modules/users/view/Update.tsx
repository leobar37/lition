import { Button, HStack } from "@chakra-ui/react";
import { CreateUserSchema, createUserSchema } from "@lition/common";
import { omit } from "radash";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreSelector, api } from "~/lib";
import {
  FormInput,
  FormInputPassword,
  Screen,
  WrapperForm,
  useWrapperForm,
} from "~/ui";
import { User } from "@server";
import { z } from "zod";
export const useUser = () => {
  const { id = "-1" } = useParams();

  return api.users.one.useQuery(
    {
      id: parseInt(id),
    },
    {
      enabled: id !== "-1",
    }
  );
};

const editUserSchema = createUserSchema
  .omit({
    password: true,
  })
  .and(
    z.object({
      password: z.string().optional().nullable(),
    })
  );

export const UpdateUser = () => {
  const updateUser = api.users.update.useMutation();
  const userQuery = useUser();
  const form = useWrapperForm<CreateUserSchema>({
    schema: editUserSchema,
  });

  useEffect(() => {
    const user = userQuery.data as any as Omit<User, "meta">;
    if (user) {
      form.reset(
        {
          ...(omit(user, ["password"]) as any),
          password: "",
        },
        {
          keepDirty: false,
        }
      );
    }
  }, [userQuery.data]);

  const onSubmit = form.handleSubmit(() => {});

  const buttonIsDisabled =
    form.formState.isSubmitting ||
    !form.formState.isValid ||
    !form.formState.isDirty;
  return (
    <Screen back="/users" title="Editar usuario">
      <WrapperForm form={form}>
        <StoreSelector label="Negocio" name="businessId" />
        <FormInput label="Username" name="username" />
        <FormInputPassword label="Contraseña" name="password" />
        <FormInput label="Nombre" name="name" />
        <FormInput label="Apellido" name="lastName" />
        <HStack mt="2" justifyContent={"flex-end"}>
          <Button
            isDisabled={buttonIsDisabled}
            isLoading={updateUser.isLoading}
            onClick={onSubmit}
            colorScheme="blue"
          >
            Guardar
          </Button>
        </HStack>
      </WrapperForm>
    </Screen>
  );
};
