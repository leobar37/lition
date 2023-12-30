import {
  Box,
  Button,
  HStack,
  Select,
  Spinner,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  DateIntervalType,
  FORMAT_SIMPLE_DATE,
  MONEY_PEN_SYMBOL,
} from "@lition/common";
import { Client, Product, Sale } from "@server";
import dayjs from "dayjs";
import { FC, ReactNode, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { api } from "~/lib";
import SaleResumenMessage from "~/modules/clients/components/sales-tab/SaleResumeMessage";
import {
  ItemAction,
  List,
  ListItem,
  MenuItems,
  Screen,
  moneyStrategyFormat,
  useSimpleModal,
} from "~/ui";
import { useHandleLineSale } from "../helpers/useHandleLineSale";

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

  const location = useLocation();

  const simpleModal = useSimpleModal();

  const items: ItemAction[] = [
    {
      label: "Ver",
      action: () => {
        navigate({
          pathname: `/sales/${sale.id}`,
          search: createSearchParams({
            back: location.pathname + location.search,
          }).toString(),
        });
      },
    },
    {
      label: "(M) Resumen",
      action: () => {
        simpleModal.open({
          title: "Resumen de venta",
          content: <SaleResumenMessage saleId={sale.id} />,
        });
      },
    },
  ];

  return (
    <ListItem
      label={
        <VStack alignItems={"flex-start"}>
          {item("Cliente", sale?.client?.name + " " + sale?.client?.lastName)}
          {item("Fecha", dayjs(sale.createdAt).format(FORMAT_SIMPLE_DATE))}
          {item("Total", `${MONEY_PEN_SYMBOL} ${sale.total ?? 0}`)}
        </VStack>
      }
      directionActions={"column"}
      actions={
        <>
          <MenuItems items={items} />
        </>
      }
    />
  );
};

const SaleResumen = () => {
  const [interval, setInterval] = useState(DateIntervalType.DAY);
  const saleResumeQuery = api.sales.allSaleResume.useQuery({
    mode: interval,
  });

  if (saleResumeQuery.isLoading) return <Spinner />;
  const saleResume = saleResumeQuery.data;

  const mapperNames = {
    [DateIntervalType.DAY]: "Día",
    [DateIntervalType.WEEK]: "Semana",
    [DateIntervalType.MONTH]: "Mes",
  };

  return (
    <VStack alignItems={"flex-start"} spacing={4}>
      <Box>
        <Text fontSize={"medium"} fontWeight={"semibold"}>
          Resumen de ventas
        </Text>
        <Select
          mt="3"
          value={interval}
          onChange={(e) => {
            setInterval(e.target.value as any);
          }}
        >
          {Object.entries(mapperNames).map(([key, value]) => {
            return <option value={key}>{value}</option>;
          })}
        </Select>
      </Box>
      <StatGroup w="full">
        <Stat variant={"notable"}>
          <StatLabel>Ventas</StatLabel>
          <StatNumber>{saleResume?.count}</StatNumber>
        </Stat>
        <Stat variant={"notable"}>
          <StatLabel>Total</StatLabel>
          <StatNumber>
            {moneyStrategyFormat.format(saleResume?.total ?? 0)}
          </StatNumber>
        </Stat>
      </StatGroup>
      <StatGroup w="full">
        <Stat variant={"notable"}>
          <StatLabel>Monto ingresado</StatLabel>
          <StatNumber>
            {moneyStrategyFormat.format(saleResume?.paid)}
          </StatNumber>
        </Stat>
        <Stat variant={"notable"}>
          <StatLabel>Deuda</StatLabel>
          <StatNumber>
            {moneyStrategyFormat.format(saleResume?.debt)}
          </StatNumber>
        </Stat>
      </StatGroup>
    </VStack>
  );
};
export const Sales = () => {
  const navigate = useNavigate();

  const salesQuery = api.sales.list.useQuery();

  const { clear } = useHandleLineSale();

  return (
    <Screen back="/" title="Ventas">
      <Tabs mt="4">
        <TabList>
          <Tab>Resumen</Tab>
          <Tab>Ventas</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SaleResumen />
          </TabPanel>
          <TabPanel>
            <HStack spacing={4} justifyContent={"flex-end"} mt={3}>
              <Button
                colorScheme="blue"
                onClick={() => {
                  navigate("/sales/new");
                  clear();
                }}
              >
                Nuevo
              </Button>
            </HStack>
            <List
              data={salesQuery.data ?? []}
              isLoading={salesQuery.isLoading}
              renderItem={(sale) => {
                return <SaleItem sale={sale as any} />;
              }}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Screen>
  );
};
