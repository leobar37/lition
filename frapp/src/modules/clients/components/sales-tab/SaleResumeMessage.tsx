import { FORMAT_SIMPLE_DATE } from "@lition/common";
import { Client } from "@server";
import dayjs from "dayjs";
import { FC, useMemo } from "react";
import { api } from "~/lib";
import { TextSender, moneyStrategyFormat } from "~/ui";
import { createMsgBuilder, formatPhone } from "~/utils";

const SaleResumenMessage: FC<{
  saleId: number;
  client: Client;
}> = ({ saleId, client }) => {
  const saleQuery = api.sales.sale.useQuery({
    id: saleId,
  });
  const sale = saleQuery.data;
  const resume = useMemo(() => {
    if (!sale || !client) {
      return "";
    }
    const msgBuilder = createMsgBuilder();
    msgBuilder
      .addTitle("Resumen de venta:")
      .addProp(`Fecha`, dayjs(sale.createdAt).format(FORMAT_SIMPLE_DATE))
      .addProp(`Monto`, moneyStrategyFormat.format(sale.total))
      .addProp(`Cliente`, client.name + " " + client.lastName)
      .addProp(`Telefono`, formatPhone(client?.phone))
      .addTitle(`Items:`);
    const lines = ((sale?.lines as any[]) ?? []).map((item) => {
      const msg = `${(item as any).product.name} x ${
        item.amount
      } = ${moneyStrategyFormat.format(item.amount * item.price)}`;
      return msg;
    });
    msgBuilder.list(lines);
    msgBuilder.addProp(`Total`, moneyStrategyFormat.format(sale.total));
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
