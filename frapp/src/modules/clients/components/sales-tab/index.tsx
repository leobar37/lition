import { Box, Button, VStack } from "@chakra-ui/react";
import { FORMAT_SIMPLE_DATE } from "@lition/common";
import { Sale } from "@server";
import dayjs from "dayjs";
import { FC } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { api } from "~/lib";
import {
  ItemAction,
  List,
  ListItem,
  MenuItems,
  item,
  moneyStrategyFormat,
  useSimpleModal,
} from "~/ui";
import { useClient } from "../../helpers";
import SaleResumeMessage from "./SaleResumeMessage";

export const SaleLine: FC<{
  sale: Sale;
}> = ({ sale }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const simpleModal = useSimpleModal();
  const clientQuery = useClient();

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
          content: (
            <SaleResumeMessage
              client={clientQuery.data as any}
              saleId={sale.id}
            />
          ),
        });
      },
    },
  ];
  return (
    <ListItem
      label={
        <VStack alignItems={"flex-start"}>
          {item("Fecha", dayjs(sale.createdAt).format(FORMAT_SIMPLE_DATE))}
          {item("Monto", moneyStrategyFormat.format(sale.total))}
        </VStack>
      }
      actions={<MenuItems items={items} />}
    />
  );
};

export const SalesTab = () => {
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

export default SalesTab;
