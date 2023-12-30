import { FORMAT_SIMPLE_DATE, SaleMeta } from "@lition/common";
import { Client } from "@server";
import dayjs from "dayjs";
import { FC, useMemo } from "react";
import { api } from "~/lib";
import { TextSender, moneyStrategyFormat } from "~/ui";
import { createMsgBuilder, formatPhone, normFloat } from "~/utils";

const SaleResumenMessage: FC<{
  saleId: number;
}> = ({ saleId }) => {
  const saleQuery = api.sales.sale.useQuery({
    id: saleId,
    withDebt: true,
  });
  const client = saleQuery.data?.client as any as Client;

  const sale = saleQuery.data;

  const resume = useMemo(() => {
    if (!sale || !client) {
      return "";
    }
    const msgBuilder = createMsgBuilder();

    const saleMeta = sale.meta as SaleMeta;
    const debtSale = (sale as any).debt ?? 0;
    msgBuilder
      .addTitle("Resumen de venta:")
      .addProp(`Fecha`, dayjs(sale.createdAt).format(FORMAT_SIMPLE_DATE))
      .addProp(`Cliente`, client.name + " " + client.lastName)
      .addProp(`Total`, moneyStrategyFormat.format(normFloat(sale.total ?? 0)));

    const lines = ((sale?.lines as any[]) ?? []).map((item) => {
      const note = item?.meta?.note ? `| ${item?.meta?.note}` : "";
      const msg = `${(item as any).product.name} x ${
        item.amount
      } = ${moneyStrategyFormat.format(
        normFloat(item.amount * item.price ?? 0)
      )} ${note}`;
      return msg;
    });

    if (saleMeta.status && saleMeta.status.paid && saleMeta.status.paid) {
      msgBuilder.addProp(
        "Dejó a cuenta",
        moneyStrategyFormat.format(normFloat(saleMeta.status.paid ?? 0))
      );

      msgBuilder.addProp(
        "Saldo",
        moneyStrategyFormat.format(normFloat(debtSale))
      );
    }

    msgBuilder.addSeparator();
    msgBuilder.list(lines);

    return msgBuilder.build();
    // @ts-ignore
  }, [sale, client]);

  if (saleQuery.isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    <TextSender
      text={resume}
      phone={formatPhone(client?.phone)}
      textAreaProps={{
        rows: 10,
      }}
    />
  );
};

export default SaleResumenMessage;
