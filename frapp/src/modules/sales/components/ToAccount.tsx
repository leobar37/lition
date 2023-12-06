import { useFormContext } from "react-hook-form";
import { useHandleLineSale } from "../helpers/useHandleLineSale";
import { api } from "~/lib";
import { PaymentState } from "@lition/common";
import { Box, VStack } from "@chakra-ui/react";
import { FormNumberInput, moneyStrategyFormat } from "~/ui";
import { Text } from "@chakra-ui/react";
import { FC } from "react";

type ToAccountProps = {
  ignorePaymentState?: boolean;
};

export const ToAccount: FC<ToAccountProps> = ({
  ignorePaymentState = false,
}) => {
  const { watch } = useFormContext();
  const [clientId, paymentTpe] = watch(["clientId", "paymentState"]);

  const { getTotal } = useHandleLineSale();

  const notIspayPartial = paymentTpe !== PaymentState.PAY_PARTIAL;

  const debtClientQuery = api.clients.myDebt.useQuery(
    {
      clientId: Number(clientId),
    },
    {
      enabled: ignorePaymentState ? !!clientId : !notIspayPartial,
    }
  );

  if (
    (ignorePaymentState ? false : notIspayPartial) ||
    debtClientQuery.isLoading ||
    !debtClientQuery.data ||
    !clientId
  ) {
    return null;
  }

  return (
    <Box>
      <VStack alignItems={"flex-start"}>
        <Text fontSize={"small"}>
          Deuda : {moneyStrategyFormat.format(debtClientQuery.data.debt + "")}`
        </Text>
        <Text fontSize={"small"}>
          Valor de esta venta : {moneyStrategyFormat.format(getTotal())}`
        </Text>
      </VStack>
      <FormNumberInput
        inputProps={{
          min: 0,
        }}
        formatValue={moneyStrategyFormat.format}
        parseValue={moneyStrategyFormat.parse}
        label="Abono"
        name="toAccount"
      />
    </Box>
  );
};
