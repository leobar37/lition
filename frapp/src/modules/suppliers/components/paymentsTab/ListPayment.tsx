import { Box, Text } from "@chakra-ui/react";
import { FORMAT_SIMPLE_DATE, FORMAT_TIME } from "@lition/common";
import { TransactionSupplier } from "@server";
import dayjs from "dayjs";
import { FC } from "react";
import { api } from "~/lib";
import {
  List,
  ListItem,
  MenuItems,
  TextSender,
  moneyStrategyFormat,
  useSimpleModal,
} from "~/ui";
import { formatPhone } from "~/utils";
import { useSupplier } from "../../helpers/use-supplier";

const ListItemPayment: FC<{
  payment: TransactionSupplier;
}> = ({ payment }) => {
  const simpleModal = useSimpleModal();
  const text = `Te pagué ${moneyStrategyFormat.format(
    payment.total
  )} el ${dayjs(payment.createdAt).format(FORMAT_SIMPLE_DATE)} a las ${dayjs(
    payment.createdAt
  ).format(FORMAT_TIME)}`;
  const { data: supplier } = useSupplier();
  const phone = formatPhone(supplier?.phone);
  return (
    <ListItem
      label={
        <Text fontSize={"medium"} minWidth={"30%"}>
          {text}
        </Text>
      }
      actions={
        <>
          <MenuItems
            items={[
              {
                label: "Ver transaction",
                action: () => {
                  simpleModal.open({
                    title: "",
                    content: <TextSender text={text} phone={phone} />,
                    actions: null,
                  });
                },
              },
            ]}
          />
        </>
      }
    />
  );
};

export const ListPayments = () => {
  const supplierQuery = useSupplier();
  const paymentsQuery = api.suppliers.myPayments.useQuery(
    {
      supplierId: supplierQuery.data?.id!,
    },
    {
      enabled: !!supplierQuery.data?.id,
    }
  );

  return (
    <Box w="full">
      <Text fontWeight={"semibold"} fontSize={"xl"}>
        Pagos
      </Text>
      <List
        data={paymentsQuery.data ?? []}
        isLoading={paymentsQuery.isLoading}
        renderItem={(payment) => {
          return <ListItemPayment payment={payment as any} />;
        }}
      />
    </Box>
  );
};

export default ListPayments;
