import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import {
  Screen,
  ScreenLoading,
  List,
  ListItem,
  item,
  moneyStrategyFormat,
  Eye,
} from "~/ui";
import { useClient } from "../helpers";
import PaymentTab from "../components/PaymentTab";
import { api } from "~/lib";
import { FC } from "react";
import { Sale } from "@server";
import dayjs from "dayjs";
import { FORMAT_SIMPLE_DATE } from "@lition/common";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";

const SaleLine: FC<{
  sale: Sale;
}> = ({ sale }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <ListItem
      label={
        <VStack alignItems={"flex-start"}>
          {item("Fecha", dayjs(sale.createdAt).format(FORMAT_SIMPLE_DATE))}
          {item("Monto", moneyStrategyFormat.format(sale.total))}
        </VStack>
      }
      actions={
        <>
          <Button
            colorScheme="orange"
            onClick={() => {
              navigate({
                pathname: `/sales/${sale.id}`,
                search: createSearchParams({
                  back: location.pathname + location.search,
                }).toString(),
              });
            }}
          >
            <Eye />
          </Button>
        </>
      }
    />
  );
};

const SalesTab = () => {
  const clientQuery = useClient();
  const salesQuery = api.sales.list.useQuery({
    clientId: clientQuery.data?.id,
  });
  return (
    <Box>
      <List
        isLoading={salesQuery.isLoading}
        data={salesQuery.data ?? []}
        renderItem={(item) => {
          return <SaleLine sale={item as any} />;
        }}
      />
    </Box>
  );
};
export const SeeClient = () => {
  const clientQuery = useClient();

  const client = clientQuery.data;
  if (clientQuery.isLoading) {
    return <ScreenLoading />;
  }
  return (
    <Screen back="/clients" title={`${client?.name}`}>
      <Tabs mt="2">
        <TabList>
          <Tab>Pagos</Tab>
          <Tab>Ventas</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PaymentTab />
          </TabPanel>
          <TabPanel>
            <SalesTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Screen>
  );
};
