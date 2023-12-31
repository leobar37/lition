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
  const [supplierId, paymentTpe] = watch(["supplierId", "paymentState"]);

  const { getTotal } = useHandleLineSale();

  const notIspayPartial = paymentTpe !== PaymentState.PAY_PARTIAL;

  const debtClientQuery = api.suppliers.myDebt.useQuery(
    {
      id: supplierId,
    },
    {
      enabled: !ignorePaymentState && !notIspayPartial && !!supplierId,
    }
  );

  if (
    (ignorePaymentState ? false : notIspayPartial) ||
    debtClientQuery.isLoading ||
    !debtClientQuery.data ||
    !supplierId
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
            Compra actual {moneyStrategyFormat.format(getTotal())}
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
