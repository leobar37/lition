import {
  Tab,
  TabList,
  Tabs,
  VStack,
  Text,
  TabPanels,
  TabPanel,
  HStack,
  Button,
} from "@chakra-ui/react";
import {
  Screen,
  moneyStrategyFormat,
  CustomDrawer,
  FormNumberInput,
} from "~/ui";
import { useClient } from "../helpers";
import { api } from "~/lib";
import { atom } from "jotai";
import { makeDisclosure } from "~/utils";
import { useWrapperForm, WrapperForm } from "~/ui";
import { addPaymentSchema, AddPaymentInput } from "@lition/common";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useLitionFeedback } from "~/lib";

const isOpenPaymentDrawer = atom(true);

const useOpenPaymentDrawer = makeDisclosure(isOpenPaymentDrawer);

const PaymentsTab = () => {
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

  const { toast } = useLitionFeedback();

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
      if (values.amount > (debtClientQuery?.data?.debt ?? 0)) {
        toast({
          title: "El monto a cuenta no puede ser mayor a la deuda",
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
  return (
    <VStack alignItems={"flex-start"}>
      {debtElement}
      <Button
        onClick={() => {
          openPaymentDrawer.onOpen();
        }}
      >
        Agregar pago
      </Button>
      <CustomDrawer title="Agregar pago" {...openPaymentDrawer}>
        <WrapperForm form={form}>
          {debtElement}
          <FormNumberInput label="Monto a cuenta(S/.)" name="amount" />
          <HStack mt={4} justifyContent={"flex-end"}>
            <Button onClick={pay}>Agregar pago</Button>
          </HStack>
        </WrapperForm>
      </CustomDrawer>
    </VStack>
  );
};

export const SeeClient = () => {
  const clientQuery = useClient();

  const client = clientQuery.data;
  if (clientQuery.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Screen back="/clients" title={`${client?.name}`}>
      <Tabs mt="2">
        <TabList>
          <Tab>Pagos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PaymentsTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Screen>
  );
};
