import { Button, HStack, VStack } from "@chakra-ui/react";
import { CreateClientInput, createClientSchema } from "@lition/common";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useLitionFeedback } from "~/lib";
import { api } from "~/lib/trpc";
import {
  FormInput,
  FormTextArea,
  Screen,
  WrapperForm,
  useWrapperForm,
} from "~/ui";
import { formatPhone, transform } from "~/utils";

export const NewClient: FC = () => {
  const form = useWrapperForm<CreateClientInput>({
    schema: createClientSchema,
  });

  const { wrapAsync } = useLitionFeedback();
  const clientsQueryKey = getQueryKey(api.clients.list);

  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const createClientMutation = api.clients.create.useMutation();
  const createClient = form.handleSubmit(async (input: CreateClientInput) => {
    const action = async () => {
      await createClientMutation.mutateAsync(
        transform(input, {
          phone: (phone) => formatPhone(phone),
        })
      );
      form.reset();
      navigate("/clients");
    };
    await wrapAsync(action());
    queryClient.invalidateQueries(clientsQueryKey);
  });
  const isDisabled = !form.formState.isValid || form.formState.isSubmitting;

  return (
    <Screen back="/clients" title="Nuevo cliente">
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
              Guardar
            </Button>
          </HStack>
        </VStack>
      </WrapperForm>
    </Screen>
  );
};
