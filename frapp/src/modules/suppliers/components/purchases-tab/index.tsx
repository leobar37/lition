import { Box, Button, VStack } from "@chakra-ui/react";
import { FORMAT_SIMPLE_DATE, FORMAT_TIME } from "@lition/common";
import { Purchase } from "@server";
import dayjs from "dayjs";
import { FC } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { api } from "~/lib";
import { Eye, List, ListItem, item, moneyStrategyFormat } from "~/ui";
import { useSupplier } from "../../helpers/use-supplier";

const PurchaseLine: FC<{
  purchase: Purchase;
}> = ({ purchase }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <ListItem
      label={
        <VStack alignItems={"flex-start"}>
          {item(
            "Fecha",
            dayjs(purchase.createdAt).format(FORMAT_SIMPLE_DATE) +
              " : " +
              dayjs(purchase.createdAt).format(FORMAT_TIME)
          )}
          {item("Monto", moneyStrategyFormat.format(purchase.total))}
        </VStack>
      }
      actions={
        <>
          <Button
            colorScheme="orange"
            onClick={() => {
              navigate({
                pathname: `/purchases/${purchase.id}`,
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

const PurchasesTab = () => {
  const supplierQuery = useSupplier();
  const salesQuery = api.purchases.list.useQuery({
    supplierId: supplierQuery.data?.id!,
  });
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box>
      <Button
        colorScheme={"blue"}
        onClick={() => {
          navigate({
            pathname: `/purchases/new`,
            search: createSearchParams({
              back: location.pathname + location.search,
              supplier: supplierQuery.data?.id + "",
            }).toString(),
          });
        }}
      >
        Nueva compra
      </Button>
      <List
        isLoading={salesQuery.isLoading}
        data={salesQuery.data ?? []}
        renderItem={(item) => {
          return <PurchaseLine purchase={item as any} />;
        }}
      />
    </Box>
  );
};

export default PurchasesTab;
