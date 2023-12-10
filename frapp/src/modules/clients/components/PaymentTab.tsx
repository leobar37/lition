import { Button, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import { AddPaymentInput, addPaymentSchema } from "@lition/common";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { api, useLitionFeedback } from "~/lib";
import {
  CustomDrawer,
  FormNumberInput,
  WrapperForm,
  moneyStrategyFormat,
  useWrapperForm,
} from "~/ui";
import { useClient } from "../helpers";
import { atom } from "jotai";
import { makeDisclosure } from "~/utils";

const isOpenPaymentDrawer = atom(false);

const useOpenPaymentDrawer = makeDisclosure(isOpenPaymentDrawer);

export const PaymentsTab = () => {
  const clientQuery = useClient();
  const addPaymentMutation = api.clients.addPayment.useMutation();
  const debtClientQuery = api.clients.myDebt.useQuery(
    {
      clientId: Number(clientQuery.data?.id),
    },
    {
      enabled: !!clientQuery.data?.id,
    }
  );

  const { toast, wrapAsync } = useLitionFeedback();

  const debtClientQueryQueryKey = getQueryKey(api.clients.myDebt, undefined);
  const queryClient = useQueryClient();

  const openPaymentDrawer = useOpenPaymentDrawer();

  const form = useWrapperForm<AddPaymentInput>({
    defaultValues: {
      amount: 0,
    },
    schema: addPaymentSchema,
  });

  const pay = form.handleSubmit(
    async (values: AddPaymentInput) => {
      const action = async () => {
        if (values.amount > (debtClientQuery?.data?.debt ?? 0)) {
          toast({
            title: "El monto a cuenta no puede ser mayor a la deuda",
            icon: "warning",
          });
          return;
        }
        await addPaymentMutation.mutateAsync({
          clientId: clientQuery.data?.id!,
          amount: values.amount,
        });
        form.reset();
        queryClient.invalidateQueries(debtClientQueryQueryKey);
        openPaymentDrawer.onClose();
      };
      await wrapAsync(action());
    },
    (err) => {
      console.log("err", err);
    }
  );

  const debtElement = (
    <HStack>
      <Text fontWeight={"semibold"}>Deuda:</Text>
      <Text>{moneyStrategyFormat.format(debtClientQuery.data?.debt)}</Text>
    </HStack>
  );

  if (debtClientQuery.isLoading) {
    return <Spinner />;
  }

  const debtIsZero = debtClientQuery.data?.debt === 0;

  return (
    <VStack alignItems={"flex-start"}>
      {debtElement}
      {!debtIsZero && (
        <Button
          onClick={() => {
            openPaymentDrawer.onOpen();
          }}
        >
          Agregar pago
        </Button>
      )}
      <CustomDrawer title="Agregar pago" {...openPaymentDrawer}>
        <WrapperForm form={form}>
          {debtElement}
          <FormNumberInput label="Monto a cuenta(S/.)" name="amount" />
          <HStack mt={4} justifyContent={"flex-end"}>
            <Button onClick={pay} isLoading={addPaymentMutation.isLoading}>
              Agregar pago
            </Button>
          </HStack>
        </WrapperForm>
      </CustomDrawer>
    </VStack>
  );
};

export default PaymentsTab;
