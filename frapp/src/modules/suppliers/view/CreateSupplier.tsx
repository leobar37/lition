import { Button, HStack, Stack } from "@chakra-ui/react";
import { CreateSupplierInput, createSupplierSchema } from "@lition/common";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useNavigate } from "react-router-dom";
import { api, useLitionFeedback } from "~/lib";
import {
  FormInput,
  FormTextArea,
  Screen,
  WrapperForm,
  useWrapperForm,
} from "~/ui";

export const CreateSupplier = () => {
  const form = useWrapperForm<CreateSupplierInput>({
    schema: createSupplierSchema,
  });
  const navigate = useNavigate();
  const createSupplierMutation = api.suppliers.create.useMutation();
  const listQueryKey = getQueryKey(api.suppliers.list, undefined);
  const queryClient = useQueryClient();

  const { wrapAsync } = useLitionFeedback();

  const onSubmit = form.handleSubmit(
    async (values) => {
      const action = async () => {
        await createSupplierMutation.mutateAsync(values);
        form.reset();
        queryClient.invalidateQueries(listQueryKey);
        navigate("/suppliers");
      };
      wrapAsync(action());
    },
    (errors) => {
      console.log("erors", errors);
    }
  );

  return (
    <Screen back="/suppliers" title="Crear proveedor">
      <WrapperForm form={form}>
        <Stack direction={"column"}>
          <FormInput name="name" label="Nombre" />
          <FormInput name="lastName" label="Apellidos" />
          <FormInput name="dni" label="Dni o Ruc" />
          <FormInput
            inputProps={{
              type: "email",
            }}
            name="email"
            label="Correo"
          />
          <FormInput name="phone" label="Celular" />
          <FormInput name="Dirección" label="direction" />
          <FormInput name="direction_reference" label="Referencia" />
          <FormTextArea name="note" label="Nota" />
          <HStack mt="4" justifyContent={"flex-end"} w="full">
            <Button type="button" onClick={onSubmit}>
              Guardar
            </Button>
          </HStack>
        </Stack>
      </WrapperForm>
    </Screen>
  );
};
