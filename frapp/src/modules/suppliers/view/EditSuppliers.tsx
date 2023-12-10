import { FormInput, Screen, ScreenLoading } from "~/ui";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "~/lib";
import { UpdateSupplierInput, updateSupplierSchema } from "@lition/common";
import { useWrapperForm, WrapperForm, FormTextArea } from "~/ui";
import { Stack, HStack, Button } from "@chakra-ui/react";
import { useEffect } from "react";

export const useSupplier = () => {
  const { id = "-1" } = useParams();
  const safeId = Number(id);

  return api.suppliers.one.useQuery(
    {
      id: safeId,
    },
    {
      enabled: safeId > 0,
    }
  );
};

export const UpdateSupplier = () => {
  const supplierQuery = useSupplier();
  const form = useWrapperForm<UpdateSupplierInput>({
    schema: updateSupplierSchema,
  });
  const supplier = supplierQuery.data;
  const updateSupplierMutation = api.suppliers.update.useMutation();

  const navigate = useNavigate();
  useEffect(() => {
    if (supplier) {
      form.reset(supplier);
    }
  }, [supplierQuery.data]);

  const onSubmit = form.handleSubmit(async (values) => {
    await updateSupplierMutation.mutateAsync({
      id: supplier?.id!,
      input: values,
    });
    navigate("/suppliers");
    form.reset();
  });

  const isDisabledButton =
    form.formState.isSubmitting || !form.formState.isValid;
  if (supplierQuery.isLoading || !supplierQuery.data) return <ScreenLoading />;

  return (
    <Screen back="/suppliers" title={supplier?.name}>
      <WrapperForm form={form}>
        <Stack direction={"column"}>
          <FormInput name="name" label="Nombre" />
          <FormInput name="lastName" label="Apellidos" />
          <FormInput isDisabled name="dni" label="Dni o Ruc" />
          <FormInput
            inputProps={{
              type: "email",
            }}
            name="email"
            label="Correo"
          />
          <FormInput name="phone" label="Celular" />
          <FormInput name="direction" label="direction" />
          <FormInput name="direction_reference" label="Referencia" />
          <FormTextArea name="note" label="Nota" />
          <HStack mt="4" justifyContent={"flex-end"} w="full">
            <Button
              type="button"
              onClick={onSubmit}
              isDisabled={isDisabledButton}
            >
              Actualizar
            </Button>
          </HStack>
        </Stack>
      </WrapperForm>
    </Screen>
  );
};
