import {
  Box,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { PaymentState } from "@lition/common";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { api } from "~/lib";
import { FormNumberInput, moneyStrategyFormat } from "~/ui";
import { useHandleLineSale } from "../helpers/useHandleLineSale";
type ToAccountProps = {
  ignorePaymentState?: boolean;
};

export const ToAccount: FC<ToAccountProps> = ({
  ignorePaymentState = false,
}) => {
  const { watch } = useFormContext();
  const [clientId, paymentTpe] = watch(["clientId", "paymentState"]);

  const notIspayPartial = paymentTpe !== PaymentState.PAY_PARTIAL;

  const { getTotal } = useHandleLineSale();

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
      <StatGroup>
        <Stat>
          <StatLabel>Deuda</StatLabel>
          <StatNumber>
            {moneyStrategyFormat.format(debtClientQuery.data.debt + getTotal())}
          </StatNumber>
          <StatHelpText>
            Venta actual {moneyStrategyFormat.format(getTotal())}
          </StatHelpText>
        </Stat>
      </StatGroup>
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
