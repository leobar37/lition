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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SupplierSelector, api, useLitionFeedback } from "~/lib";
import {
  FormRadioGroup,
  Screen,
  WrapperForm,
  useWrapperForm,
  useBackUrl,
} from "~/ui";
import ItemsProducts from "../components/ItemsProducts";
import { ToAccount } from "../components/ToAccount";
import { CreatePurchaseForm, frCreatePurchaseSchema } from "../data";
import { useHandleLineSale } from "../helpers/useHandleLineSale";
import { useResolveSupplieId } from "../helpers/useResolveSupplierId";

export const CreatePurchase = () => {
  const createdPurchase = api.purchases.create.useMutation();
  const { lines, clear, getTotal } = useHandleLineSale();
  const form = useWrapperForm<CreatePurchaseForm>({
    schema: frCreatePurchaseSchema,
  });
  const { wrapAsync } = useLitionFeedback();
  const withBackUrl = useBackUrl();

  useEffect(() => {
    clear();
  }, []);

  useResolveSupplieId((supplierId) => {
    form.setValue("supplierId", parseInt(supplierId));
  });

  const navigate = useNavigate();

  const onSubmit = form.handleSubmit(
    async (data: CreatePurchaseForm) => {
      const action = async () => {
        let finalData: any = {
          supplierId: data.supplierId,
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
        await createdPurchase.mutateAsync(finalData);
        navigate(withBackUrl("/purchases"));
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
    createdPurchase.isLoading || lines.length === 0 || !form.formState.isValid;

  return (
    <Screen back="/purchases" title="Nueva Compra">
      <WrapperForm form={form}>
        <Box mt="4" as="form">
          <SupplierSelector label="Proveedor" name="supplierId" />
          <ItemsProducts />
          <FormControl mt="2">
            <FormLabel>
              <Text>Tipo de pago</Text>
            </FormLabel>
            <FormRadioGroup name="paymentState">
              <VStack my="2" alignItems={"flex-start"}>
                <Radio value={PaymentState.PAY_ENTIRE}>
                  Pagar todo en esta compra
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
              isDisabled={isDisabled}
              colorScheme="blue"
              onClick={onSubmit}
            >
              Guardar
            </Button>
          </HStack>
        </Box>
      </WrapperForm>
    </Screen>
  );
};
