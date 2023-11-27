import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Screen, ListItem, List } from "~/ui";
import { Product } from "@server";
import { api } from "~/lib";
import { FC } from "react";

const ListItemProduct: FC<{
  product: Product;
}> = ({ product }) => {
  return <ListItem label={product.name} actions={<></>} />;
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
