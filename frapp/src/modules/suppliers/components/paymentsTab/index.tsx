import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  HStack,
  Spinner,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AddPaymentInput, addPaymentSchema } from "@lition/common";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { atom } from "jotai";
import { api, useLitionFeedback } from "~/lib";
import {
  CustomDrawer,
  FormNumberInput,
  TextSender,
  WrapperForm,
  moneyStrategyFormat,
  useWrapperForm,
} from "~/ui";
import { formatPhone, makeDisclosure } from "~/utils";
import { useSupplier } from "../../helpers/use-supplier";
import ListPayments from "./ListPayment";

const isOpenPaymentDrawer = atom(false);

const useOpenPaymentDrawer = makeDisclosure(isOpenPaymentDrawer);

export const PaymentsTab = () => {
  const supplierQuery = useSupplier();

  const addPaymentMutation = api.suppliers.addPayment.useMutation();
  const debtClientQuery = api.suppliers.myDebt.useQuery(
    {
      id: Number(supplierQuery.data?.id),
    },
    {
      enabled: !!supplierQuery.data?.id,
    }
  );

  const { toast, wrapAsync } = useLitionFeedback();
  const debtClientQueryQueryKey = getQueryKey(api.suppliers.myDebt, undefined);
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
          supplierId: supplierQuery.data?.id!,
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
    <Stat>
      <StatLabel>Deuda:</StatLabel>
      <StatNumber>
        {moneyStrategyFormat.format(debtClientQuery.data?.debt)}
      </StatNumber>
    </Stat>
  );

  if (debtClientQuery.isLoading) {
    return <Spinner />;
  }

  const debtIsZero = debtClientQuery.data?.debt === 0;

  const textDebt = `Hola ${
    supplierQuery.data?.name
  }, te debo  ${moneyStrategyFormat.format(debtClientQuery.data?.debt)}`;

  return (
    <VStack alignItems={"flex-start"} w="full">
      {debtElement}
      {!debtIsZero && (
        <>
          <Button
            colorScheme="blue"
            onClick={() => {
              openPaymentDrawer.onOpen();
            }}
          >
            Agregar pago
          </Button>
          <Accordion w={"full"}>
            <AccordionItem>
              <AccordionButton>
                <HStack justifyContent={"space-between"} w="full">
                  <Text>Mensaje</Text>
                  <AccordionIcon />
                </HStack>
              </AccordionButton>
              <AccordionPanel>
                <TextSender
                  text={textDebt}
                  phone={formatPhone(supplierQuery.data?.phone ?? "")}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      )}
      <CustomDrawer title="Agregar pago" {...openPaymentDrawer}>
        <WrapperForm form={form}>
          {debtElement}
          <FormNumberInput
            inputProps={{
              min: 0,
            }}
            label="Monto a cuenta(S/.)"
            name="amount"
          />
          <HStack mt={4} justifyContent={"flex-end"}>
            <Button onClick={pay} isLoading={addPaymentMutation.isLoading}>
              Agregar pago
            </Button>
          </HStack>
        </WrapperForm>
      </CustomDrawer>
      <ListPayments />
    </VStack>
  );
};

export default PaymentsTab;
