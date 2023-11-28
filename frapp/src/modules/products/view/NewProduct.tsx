import { FormInput, Screen, WrapperForm, useWrapperForm } from "~/ui";
import { createProductSchema, CreateProductInput } from "@lition/common";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { api } from "~/lib";
import { useNavigate } from "react-router-dom";
export const NewProduct = () => {
  const form = useWrapperForm<CreateProductInput>({
    schema: createProductSchema,
  });
  const createProduct = api.products.create.useMutation();
  const navigate = useNavigate();

  const onSubmit = form.handleSubmit(async (values) => {
    await createProduct.mutateAsync(values);
    navigate("/products");
  });
  const isDisabled = createProduct.isLoading || !form.formState.isValid;

  return (
    <Screen back="/products" title="Nuevo producto">
      <WrapperForm form={form}>
        <VStack as="form" alignItems={"flex-start"} spacing={1}>
          <FormInput name="name" label="Nombre" />
          <FormInput name="description" label="Descripción" />
          <HStack w="full" spacing={4} justifyContent={"flex-end"} mt={3}>
            <Button
              onClick={onSubmit}
              colorScheme="blue"
              isDisabled={isDisabled}
            >
              Guardar
            </Button>
          </HStack>
        </VStack>
      </WrapperForm>
    </Screen>
  );
};
