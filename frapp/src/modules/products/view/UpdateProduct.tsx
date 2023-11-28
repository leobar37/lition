import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { UpdateProductInput, updateProductSchema } from "@lition/common";
import { UnitAlias } from "@server";
import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "~/lib";
import {
  DeleteIcon,
  EditIcon,
  FormInput,
  Screen,
  WrapperForm,
  useWrapperForm,
} from "~/ui";
import { List, ListItem } from "~/ui/components";
const useProduct = () => {
  const { id = null } = useParams();
  const safeId = id ? Number(id) : -1;
  const productQuery = api.products.one.useQuery(
    {
      id: safeId,
    },
    {
      enabled: safeId > 0,
    }
  );
  return productQuery;
};

const UnitAliasItem: FC<{
  unitAlias: UnitAlias;
}> = ({ unitAlias }) => {
  const deleteUnitAliasMutation = api.products.deleteUnitAlias.useMutation();

  const navigate = useNavigate();
  const product = useProduct();

  return (
    <ListItem
      label={unitAlias.name}
      actions={
        <>
          <Button
            onClick={() => {
              navigate(`/products/${product.data?.id}/alias/${unitAlias.id}`);
            }}
            colorScheme="blue"
          >
            <EditIcon />
          </Button>
          <Button
            colorScheme="red"
            textColor={"white"}
            onClick={() => {
              deleteUnitAliasMutation.mutateAsync({
                id: unitAlias.id,
              });
            }}
          >
            <DeleteIcon />
          </Button>
        </>
      }
    />
  );
};

const UnitAliasList = () => {
  const navigate = useNavigate();
  const productQuery = useProduct();

  const productId = productQuery.data?.id ?? -1;

  const unitAliasQuery = api.products.unitAlias.useQuery(
    {
      productId: productId,
    },
    {
      enabled: productId > 0,
    }
  );

  return (
    <Box w="full">
      <Text fontWeight={"semibold"}>Alias de unidades:</Text>
      <HStack justifyContent={"flex-end"} w="full">
        <Button
          onClick={() => {
            navigate(`/products/${productQuery.data?.id}/create-alias`);
          }}
        >
          Nuevo
        </Button>
      </HStack>
      <List
        data={unitAliasQuery.data ?? []}
        renderItem={(unitAlias) => {
          return <UnitAliasItem unitAlias={unitAlias as any} />;
        }}
      />
    </Box>
  );
};

export const UpdateProduct = () => {
  const form = useWrapperForm<UpdateProductInput>({
    schema: updateProductSchema,
  });

  const productQuery = useProduct();

  const navigate = useNavigate();
  const product = productQuery.data;

  const updateProductMutation = api.products.update.useMutation();

  useEffect(() => {
    if (product) {
      console.log({
        product,
      });

      form.reset(product as UpdateProductInput);
    }
  }, [product]);

  const onSubmit = form.handleSubmit(async (values) => {
    console.log("values", {
      values,
    });

    await updateProductMutation.mutateAsync({
      id: product?.id ?? -1,
      data: values,
    });

    navigate("/products");
  });
  const isDisabled =
    productQuery.isLoading ||
    updateProductMutation.isLoading ||
    !form.formState.isDirty;

  if (productQuery.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Screen back="/products" title={`Editar | ${product?.name}`}>
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
          <UnitAliasList />
        </VStack>
      </WrapperForm>
    </Screen>
  );
};
