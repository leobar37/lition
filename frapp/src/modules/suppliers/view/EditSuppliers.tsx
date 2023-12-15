import { Button, HStack, Stack } from "@chakra-ui/react";
import { UpdateSupplierInput, updateSupplierSchema } from "@lition/common";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "~/lib";
import {
  FormInput,
  FormTextArea,
  Screen,
  ScreenLoading,
  WrapperForm,
  useWrapperForm,
} from "~/ui";
import { useSupplier } from "../helpers/use-supplier";

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
