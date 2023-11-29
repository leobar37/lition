import { Button, HStack } from "@chakra-ui/react";
import { CreateUnitAliasInput, createUnitAliasSchema } from "@lition/common";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "~/lib";
import {
  FormInput,
  FormNumberInput,
  Screen,
  WrapperForm,
  useWrapperForm,
} from "~/ui";
import { useProductIdUnitAlias } from "../helpers";

import { useEffect } from "react";

export const UnitAliasUpdate = () => {
  const productId = useProductIdUnitAlias();
  const { id: idUnitAlias = null } = useParams();
  const form = useWrapperForm<CreateUnitAliasInput>({
    schema: createUnitAliasSchema,
  });

  const unitAliasQuery = api.products.oneUnitAlias.useQuery(
    {
      id: Number(idUnitAlias),
    },
    {
      enabled: idUnitAlias !== null,
    }
  );

  const unitAlias = unitAliasQuery.data;

  const navigate = useNavigate();
  const backUrl = `/products/${productId}`;

  const updateUnitAliasMutation = api.products.updateUnitAlias.useMutation();

  useEffect(() => {
    if (unitAlias) {
      form.reset({
        name: unitAlias.name,
        unitId: unitAlias.unitId,
        amount: unitAlias.amount,
      });
    }
  }, [unitAlias]);

  const onSubmit = form.handleSubmit(
    async (values) => {
      navigate(backUrl);
      updateUnitAliasMutation.mutateAsync({
        id: Number(idUnitAlias),
        input: values,
      });
    },
    (errors) => {
      console.log({
        errors,
      });
    }
  );
  const isDisabled =
    updateUnitAliasMutation.isLoading ||
    !form.formState.isValid ||
    !form.formState.isDirty;
  if (!unitAlias) {
    return <div>loading...</div>;
  }

  return (
    <Screen back={backUrl} title={`Editar | ${unitAlias.name}`}>
      <WrapperForm form={form}>
        <FormInput label="Nombre" name="name" />
        <FormNumberInput label="Cantidad" name="amount" />
        <HStack w="full" spacing={4} justifyContent={"flex-end"} mt={3}>
          <Button onClick={onSubmit} colorScheme="blue" isDisabled={isDisabled}>
            Guardar
          </Button>
        </HStack>
      </WrapperForm>
    </Screen>
  );
};
