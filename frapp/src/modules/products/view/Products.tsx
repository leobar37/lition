import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Screen, ListItem, List, EditIcon, DeleteIcon } from "~/ui";
import { Product } from "@server";
import { api } from "~/lib";
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
              await deleteMutation.mutateAsync({
                id: product.id,
              });
              queryClient.invalidateQueries(deleteQueryKey);
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
        data={productsQuery?.data ?? []}
        renderItem={(product) => (
          <ListItemProduct key={product.id} product={product as any} />
        )}
      />
    </Screen>
  );
};
