import { Button, HStack } from "@chakra-ui/react";
import { CreateUnitAliasInput, createUnitAliasSchema } from "@lition/common";
import { useNavigate } from "react-router-dom";
import { api } from "~/lib";
import {
  FormInput,
  FormNumberInput,
  Screen,
  WrapperForm,
  useWrapperForm,
} from "~/ui";
import { useProductIdUnitAlias } from "../helpers";

export const UnitAliasCreate = () => {
  const productId = useProductIdUnitAlias();
  const form = useWrapperForm<CreateUnitAliasInput>({
    schema: createUnitAliasSchema,
  });
  const navigate = useNavigate();
  const backUrl = `/products/${productId}`;

  const createUnitAliasMutation = api.products.createUnitAlias.useMutation();

  const onSubmit = form.handleSubmit(
    async (values) => {
      await createUnitAliasMutation.mutateAsync({
        input: values,
        productId: Number(productId),
      });
      navigate(backUrl);
    },
    (errors) => {
      console.log({
        errors,
      });
    }
  );

  return (
    <Screen back={backUrl} title="Crear alias">
      <WrapperForm form={form}>
        <FormInput label="Nombre" name="name" />
        <FormNumberInput label="Cantidad" name="amount" />
        <HStack w="full" spacing={4} justifyContent={"flex-end"} mt={3}>
          <Button onClick={onSubmit} colorScheme="blue">
            Guardar
          </Button>
        </HStack>
      </WrapperForm>
    </Screen>
  );
};
