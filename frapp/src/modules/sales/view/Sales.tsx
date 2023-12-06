import { Box, Button, HStack, Switch, VStack } from "@chakra-ui/react";
import { FORMAT_SIMPLE_DATE, MONEY_PEN_SYMBOL } from "@lition/common";
import { Client, Product, Sale } from "@server";
import dayjs from "dayjs";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "~/lib";
import { List, ListItem, Screen } from "~/ui";
const SaleItem: FC<{
  sale: (Sale & {
    client: Client;
  }) & {
    product: Product;
  };
}> = ({ sale }) => {
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
          {item("Cliente", sale?.client?.name + " " + sale?.client?.lastName)}
          {item("Fecha", dayjs(sale.createdAt).format(FORMAT_SIMPLE_DATE))}
          {item("Total", `${MONEY_PEN_SYMBOL} ${sale.total ?? 0}`)}
          {item(
            "Despachado",
            <Switch disabled isChecked={sale.isDispatched} />
          )}
        </VStack>
      }
      directionActions={"column"}
      actions={
        <>
          <Button
            colorScheme="blue"
            onClick={() => {
              navigate(`/sales/${sale.id}`);
            }}
          >
            Ver
          </Button>
          <Button>Editar</Button>
        </>
      }
    />
  );
};

export const Sales = () => {
  const navigate = useNavigate();
  const salesQuery = api.sales.list.useQuery();
  return (
    <Screen back="/" title="Ventas">
      <HStack spacing={4} justifyContent={"flex-end"} mt={3}>
        <Button
          colorScheme="blue"
          onClick={() => {
            navigate("/sales/new");
          }}
        >
          Nuevo
        </Button>
      </HStack>
      <List
        data={salesQuery.data ?? []}
        renderItem={(sale) => {
          return <SaleItem sale={sale as any} />;
        }}
      />
    </Screen>
  );
};
