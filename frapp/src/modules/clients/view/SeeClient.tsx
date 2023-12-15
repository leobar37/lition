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
import { FORMAT_SIMPLE_DATE } from "@lition/common";
import { Sale } from "@server";
import dayjs from "dayjs";
import { FC } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { api } from "~/lib";
import {
  Eye,
  List,
  ListItem,
  Screen,
  ScreenLoading,
  item,
  moneyStrategyFormat,
} from "~/ui";

import PaymentTab from "../components/PaymentTab";
import { useClient } from "../helpers";

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
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box>
      <Button
        colorScheme={"blue"}
        onClick={() => {
          navigate({
            pathname: `/sales/new`,
            search: createSearchParams({
              back: location.pathname + location.search,
              client: clientQuery.data?.id + "",
            }).toString(),
          });
        }}
      >
        Nueva venta
      </Button>
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
  const [params, setSearch] = useSearchParams();
  const tab = params.get("tab") ? parseInt(params.get("tab") as string) : 0;

  if (clientQuery.isLoading) {
    return <ScreenLoading />;
  }

  return (
    <Screen back="/clients" title={`${client?.name}`}>
      <Tabs
        mt="2"
        index={tab}
        onChange={(idx) => {
          setSearch({
            tab: idx + "",
          });
        }}
      >
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
