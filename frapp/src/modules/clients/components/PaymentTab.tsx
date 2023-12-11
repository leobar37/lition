import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  HStack,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AddPaymentInput,
  FORMAT_SIMPLE_DATE,
  FORMAT_TIME,
  addPaymentSchema,
} from "@lition/common";
import { Transaction } from "@server";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import dayjs from "dayjs";
import { atom } from "jotai";
import { FC } from "react";
import { api, useLitionFeedback } from "~/lib";
import {
  CustomDrawer,
  DotsIcon,
  FormNumberInput,
  List,
  ListItem,
  WrapperForm,
  moneyStrategyFormat,
  useWrapperForm,
  useSimpleModal,
  TextSender,
} from "~/ui";
import { makeDisclosure } from "~/utils";
import { useClient } from "../helpers";

type MenuItemsProps = {
  items: { label: string; action: () => void }[];
};

const formatPhone = (phone?: string) => {
  return phone ? (phone.startsWith("+51") ? phone : "+51" + phone) : "";
};

const MenuItems: FC<MenuItemsProps> = ({ items }) => {
  return (
    <Popover>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button colorScheme="white" textColor={"blue.800"} fontSize={"xl"}>
              <DotsIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent w={"12rem"} p="2">
            <VStack w="full" alignItems={"flex-start"}>
              {items.map((item) => (
                <>
                  <Button
                    w="full"
                    colorScheme="white"
                    textColor={"black"}
                    key={item.label}
                    textAlign={"start"}
                    onClick={() => {
                      item.action();
                      onClose();
                    }}
                  >
                    <Text textAlign={"start"} w="full">
                      {item.label}
                    </Text>
                  </Button>
                  <Divider borderWidth={"1px"} borderColor={"blue.800"} />
                </>
              ))}
            </VStack>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};
const isOpenPaymentDrawer = atom(false);

const ListItemPayment: FC<{
  payment: Transaction;
}> = ({ payment }) => {
  const simpleModal = useSimpleModal();
  const text = `Pagó ${moneyStrategyFormat.format(payment.total)} el ${dayjs(
    payment.createdAt
  ).format(FORMAT_SIMPLE_DATE)} a las ${dayjs(payment.createdAt).format(
    FORMAT_TIME
  )}`;

  const { data: client } = useClient();

  const phone = formatPhone(client?.phone);

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

const ListPayments = () => {
  const clientQuery = useClient();
  const paymentsQuery = api.clients.myPayments.useQuery(
    {
      clientId: clientQuery.data?.id!,
    },
    {
      enabled: !!clientQuery.data?.id,
    }
  );

  return (
    <Box>
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
    clientQuery.data?.name
  }, tu deuda total es de ${moneyStrategyFormat.format(
    debtClientQuery.data?.debt
  )}`;
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
                  phone={formatPhone(clientQuery.data?.phone ?? "")}
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
