import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  Screen,
  ListItem,
  List,
  EditIcon,
  DeleteIcon,
  useConfirmDialog,
} from "~/ui";
import { Product } from "@server";
import { api, useLitionFeedback } from "~/lib";
import { FC } from "react";
import { getQueryKey } from "@trpc/react-query";
import { useQueryClient } from "@tanstack/react-query";

const ListItemProduct: FC<{
  product: Product;
}> = ({ product }) => {
  const navigate = useNavigate();
  const deleteMutation = api.products.delete.useMutation();
  const deleteQueryKey = getQueryKey(api.products.list, undefined);
  const queryClient = useQueryClient();
  const confirm = useConfirmDialog();
  const { wrapAsync } = useLitionFeedback();

  return (
    <ListItem
      label={product.name}
      actions={
        <>
          <Button
            colorScheme="blue"
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
          >
            <EditIcon />
          </Button>
          <Button
            onClick={async () => {
              const action = async () => {
                await deleteMutation.mutateAsync({
                  id: product.id,
                });
                queryClient.invalidateQueries(deleteQueryKey);
              };
              confirm.open({
                title: "Eliminar producto",
                description: "¿Está seguro que desea eliminar este producto?",
                onConfirm: async () => {
                  await wrapAsync(action());
                },
              });
            }}
            colorScheme="red"
            textColor={"white"}
          >
            <DeleteIcon />
          </Button>
        </>
      }
    />
  );
};

export const Products = () => {
  const navigate = useNavigate();
  const productsQuery = api.products.list.useQuery();

  return (
    <Screen back="/" title="Productos">
      <HStack spacing={4} justifyContent={"flex-end"} mt={3}>
        <Button
          colorScheme="blue"
          onClick={() => {
            navigate("/products/new");
          }}
        >
          Nuevo
        </Button>
      </HStack>

      <List
        search={{
          props: {
            name: {
              label: "Nombre",
            },
          },
        }}
        data={productsQuery?.data ?? []}
        isLoading={productsQuery.isLoading}
        renderItem={(product) => (
          <ListItemProduct key={product.id} product={product as any} />
        )}
      />
    </Screen>
  );
};
