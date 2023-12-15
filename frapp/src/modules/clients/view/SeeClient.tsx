import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { Screen, ScreenLoading } from "~/ui";
import SalesTab from "../components/sales-tab";
import PaymentTab from "../components/PaymentTab";
import { useClient } from "../helpers";

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
