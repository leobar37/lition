import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { Screen, ScreenLoading } from "~/ui";
import PaymentsTab from "../components/paymentsTab";
import PurchasesTab from "../components/purchases-tab";
import { useSupplier } from "../helpers/use-supplier";

export const SeeSupplier = () => {
  const supplierQuery = useSupplier();
  const [params, setSearch] = useSearchParams();
  const tab = params.get("tab") ? parseInt(params.get("tab") as string) : 0;
  if (supplierQuery.isLoading) {
    return <ScreenLoading />;
  }
  return (
    <Screen back="/suppliers" title={`${supplierQuery.data?.fullName}`}>
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
          <Tab>Compras</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PaymentsTab />
          </TabPanel>
          <TabPanel>
            <PurchasesTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Screen>
  );
};
