import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { FORMAT_SIMPLE_DATE, MONEY_PEN_SYMBOL } from "@lition/common";
import { Product, Purchase, Supplier } from "@server";
import dayjs from "dayjs";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "~/lib";
import { List, ListItem, Screen } from "~/ui";
import { useHandleLineSale } from "../helpers/useHandleLineSale";
const PurchaseItem: FC<{
  purchase: (Purchase & {
    supplier: Supplier;
  }) & {
    product: Product;
  };
}> = ({ purchase }) => {
  const navigate = useNavigate();

  const item = (label: string, content: string | ReactNode) => {
    return (
      <HStack>
        <Box fontWeight={"semibold"}>{label}:</Box>
        <Box>{content}</Box>
      </HStack>
    );
  };

  return (
    <ListItem
      label={
        <VStack alignItems={"flex-start"}>
          {item(
            "Cliente",
            purchase?.supplier?.name + " " + purchase?.supplier?.lastName
          )}
          {item("Fecha", dayjs(purchase.createdAt).format(FORMAT_SIMPLE_DATE))}
          {item("Total", `${MONEY_PEN_SYMBOL} ${purchase.total ?? 0}`)}
        </VStack>
      }
      directionActions={"column"}
      actions={
        <>
          <Button
            colorScheme="blue"
            onClick={() => {
              navigate(`/purchases/${purchase.id}`);
            }}
          >
            Ver
          </Button>
        </>
      }
    />
  );
};

export const Purchases = () => {
  const navigate = useNavigate();
  const purchasesQuery = api.purchases.list.useQuery();

  const { clear } = useHandleLineSale();

  return (
    <Screen back="/" title="Compras">
      <HStack spacing={4} justifyContent={"flex-end"} mt={3}>
        <Button
          colorScheme="blue"
          onClick={() => {
            clear();
            navigate("/purchases/new");
          }}
        >
          Nuevo
        </Button>
      </HStack>
      <List
        isLoading={purchasesQuery.isLoading}
        data={purchasesQuery.data ?? []}
        renderItem={(purchase) => {
          return <PurchaseItem purchase={purchase as any} />;
        }}
      />
    </Screen>
  );
};
