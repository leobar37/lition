import { Box, Button, VStack } from "@chakra-ui/react";
import { FORMAT_SIMPLE_DATE } from "@lition/common";
import { Sale } from "@server";
import dayjs from "dayjs";
import { FC, Suspense, useMemo } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { api } from "~/lib";
import {
  ItemAction,
  List,
  ListItem,
  MenuItems,
  TextSender,
  item,
  moneyStrategyFormat,
  useSimpleModal,
} from "~/ui";

import { formatPhone } from "~/utils";
import { useClient } from "../../helpers";
const createMsgBuilder = () => {
  const msgBuilder = {
    tokens: [] as Array<string>,
    line: (msg: string) => {
      msgBuilder.tokens.push(msg);
      return msgBuilder;
    },
    build: () => {
      return msgBuilder.tokens.join("\n");
    },
    addTitle: (title: string) => {
      msgBuilder.tokens.push(`${title}`);
      msgBuilder.tokens.push(
        Array.from({ length: title.length })
          .map((_) => "-")
          .join("")
      );
      return msgBuilder;
    },
    list: (items: string[]) => {
      msgBuilder.tokens.push(items.map((item) => `- ${item}`).join("\n"));
      return msgBuilder;
    },
    addProp: (prop: string, value: string | number) => {
      msgBuilder.tokens.push(`*${prop}*: ${value}`);
      return msgBuilder;
    },
  };
  return msgBuilder;
};
const SaleReumenMessage: FC<{
  saleId: number;
}> = ({ saleId }) => {
  const saleQuery = api.sales.sale.useQuery({
    id: saleId,
  });

  const clientQuery = useClient();

  const sale = saleQuery.data;

  const resume = useMemo(() => {
    if (!sale) {
      return "";
    }
    const msgBuilder = createMsgBuilder();
    msgBuilder
      .addTitle("Resumen de venta")
      .addProp(`Fecha`, dayjs(sale.createdAt).format(FORMAT_SIMPLE_DATE))
      .addProp(`Monto`, moneyStrategyFormat.format(sale.total))
      .addProp(`Cliente`, clientQuery.data?.name ?? "")
      .addProp(`Telefono`, formatPhone(clientQuery.data?.phone))
      .addTitle(`Productos`);
    const lines = ((sale?.lines as any[]) ?? []).map((item) => {
      const msg = `${item.productId} x ${
        item.amount
      } = ${moneyStrategyFormat.format(item.amount * item.price)}`;
      return msg;
    });
    msgBuilder.list(lines);
    return msgBuilder.build();
  }, [sale]);

  if (saleQuery.isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    <TextSender
      text={resume}
      phone={formatPhone(clientQuery.data?.phone)}
      textAreaProps={{
        rows: 10,
      }}
    />
  );
};
export const SaleLine: FC<{
  sale: Sale;
}> = ({ sale }) => {
  const navigate = useNavigate();
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
          content: <SaleReumenMessage saleId={sale.id} />,
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
      actions={
        <>
          <MenuItems items={items} />
        </>
      }
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
