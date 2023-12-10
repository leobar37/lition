import { Button, HStack, VStack } from "@chakra-ui/react";
import { UpdateClientInput, updateClientSchema } from "@lition/common";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "~/lib/trpc";
import {
  FormInput,
  FormTextArea,
  Screen,
  WrapperForm,
  useWrapperForm,
  ScreenLoading,
} from "~/ui";
import { useClient } from "../helpers";

export const UpdateClient: FC = () => {
  const form = useWrapperForm<UpdateClientInput>({
    schema: updateClientSchema,
  });

  const clientQuery = useClient();

  const navigate = useNavigate();
  const updateClientMutation = api.clients.update.useMutation();
  const createClient = form.handleSubmit(async (input: UpdateClientInput) => {
    await updateClientMutation.mutateAsync({
      data: input,
      id: clientQuery.data?.id ?? 0,
    });
    form.reset();
    navigate("/clients");
  });
  const isDisabled =
    !form.formState.isValid ||
    form.formState.isSubmitting ||
    !form.formState.isDirty;

  const client = clientQuery.data;
  useEffect(() => {
    if (client) {
      form.reset(client);
    }
  }, [client]);

  if (clientQuery.isLoading) {
    return <ScreenLoading />;
  }

  return (
    <Screen back="/clients" title={`Editar | ${client?.name}`}>
      <WrapperForm form={form}>
        <VStack as="form" alignItems={"flex-start"} spacing={1}>
          <FormInput name="name" label="Nombre" />
          <FormInput name="lastName" label="Apellidos" />
          <FormInput name="phone" label="Teléfono" />
          <FormInput name="dni" label="Dni" />
          <FormInput name="direction" label="Dirección" />
          <FormInput name="direction_reference" label="Referencia" />
          <FormTextArea name="note" label="Notas" />
          <HStack w="full" spacing={4} justifyContent={"flex-end"} mt={3}>
            <Button
              onClick={createClient}
              isDisabled={isDisabled}
              colorScheme="blue"
            >
              Editar
            </Button>
          </HStack>
        </VStack>
      </WrapperForm>
    </Screen>
  );
};
