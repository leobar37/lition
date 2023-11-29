import { Button, HStack, Box, VStack, Text, Switch } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, Screen } from "~/ui";
import { api } from "~/lib";
import { FC, ReactNode } from "react";
import { Sale, Client, Product } from "@server";
import { FORMAT_SIMPLE_DATE, MONEY_PEN_SYMBOL } from "@lition/common";
import dayjs from "dayjs";

const SaleItem: FC<{
  sale: (Sale & {
    client: Client;
  }) & {
    product: Product;
  };
}> = ({ sale }) => {
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
          {item("Despachado", <Switch isChecked={sale.isDispatched} />)}
        </VStack>
      }
      directionActions={"column"}
      actions={
        <>
          <Button
            colorScheme="blue"
            onClick={() => {
              // navigate(`/sales/1`);
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
