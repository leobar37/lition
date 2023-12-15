import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PaymentState } from "@lition/common";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ClientsSelector, api, useLitionFeedback } from "~/lib";
import {
  FormRadioGroup,
  Screen,
  SwitchFormInput,
  WrapperForm,
  useWrapperForm,
  useBackUrl,
} from "~/ui";
import ItemsProducts from "../components/ItemsProducts";
import { ToAccount } from "../components/ToAccount";
import { useHandleLineSale } from "../helpers/useHandleLineSale";

import { useEffect } from "react";
import { CreateSaleForm, frCreateSaleSchema } from "../domain";

const useResolveClientId = (callback: (clientId: string) => void) => {
  const [params] = useSearchParams();
  const clientId = params.get("client");
  useEffect(() => {
    if (clientId) {
      callback(clientId);
    }
  }, [clientId]);
};

export const CreateSale = () => {
  const createdSale = api.sales.create.useMutation();
  const { lines, clear, getTotal } = useHandleLineSale();
  const { wrapAsync } = useLitionFeedback();

  const withBackUrl = useBackUrl();
  const form = useWrapperForm<CreateSaleForm>({
    defaultValues: {
      isDispatched: false,
    },
    schema: frCreateSaleSchema,
  });

  useEffect(() => {
    clear();
  }, []);
  useResolveClientId((clientId) => {
    form.setValue("clientId", parseInt(clientId));
  });

  const navigate = useNavigate();

  const onSubmit = form.handleSubmit(
    async (data: CreateSaleForm) => {
      const action = async () => {
        let finalData: any = {
          isDispatched: data.isDispatched,
          clientId: data.clientId,
          total: getTotal(),
          paymentState: data.paymentState,
          lines: lines.map((line) => {
            return {
              amount: line.amount,
              price: line.price,
              productId: line.productId,
              total: line.total,
              aliasId: line.aliasId,
            };
          }),
        };
        if (data.paymentState === PaymentState.PAY_PARTIAL) {
          finalData = {
            ...finalData,
            paymentSource: {
              toAccount: (data as any).toAccount,
            },
          };
        }
        await createdSale.mutateAsync(finalData);
        navigate(withBackUrl("/sales"));

        form.reset();
        clear();
      };
      await wrapAsync(action());
    },
    (errors) => {
      console.log("error", {
        errors,
      });
    }
  );

  const isDisabled =
    !lines.length || !form.formState.isValid || createdSale.isLoading;

  return (
    <Screen back="/sales" title="Nueva Venta">
      <WrapperForm form={form}>
        <Box mt="4" as="form">
          <SwitchFormInput label="Despachado" name="isDispatched" />
          <ClientsSelector label="Cliente" name="clientId" />
          <ItemsProducts />
          <FormControl mt="2">
            <FormLabel>
              <Text>Tipo de pago</Text>
            </FormLabel>
            <FormRadioGroup name="paymentState">
              <VStack my="2" alignItems={"flex-start"}>
                <Radio value={PaymentState.PAY_ENTIRE}>
                  Pagar todo en esta venta
                </Radio>
                <VStack alignItems={"flex-start"}>
                  <Radio value={PaymentState.PAY_PARTIAL}>A cuenta</Radio>
                  <ToAccount />
                </VStack>
                <Radio value={PaymentState.DEBT}>Deuda</Radio>
              </VStack>
            </FormRadioGroup>
          </FormControl>
          <HStack w="full" spacing={4} justifyContent={"flex-end"} mt={3}>
            <Button
              colorScheme="blue"
              onClick={onSubmit}
              isDisabled={isDisabled}
            >
              Guardar
            </Button>
          </HStack>
        </Box>
      </WrapperForm>
    </Screen>
  );
};
