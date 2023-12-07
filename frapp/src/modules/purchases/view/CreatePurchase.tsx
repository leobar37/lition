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
import { PaymentState, createPurchaseSchema } from "@lition/common";
import { omit } from "radash";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { SupplierSelector, api } from "~/lib";
import { FormRadioGroup, Screen, WrapperForm, useWrapperForm } from "~/ui";
import ItemsProducts from "../components/ItemsProducts";
import { ToAccount } from "../components/ToAccount";
import { useHandleLineSale } from "../helpers/useHandleLineSale";

const frCreatePurchaseSchema = createPurchaseSchema
  .omit({
    paymentSource: true,
    total: true,
    usedAlias: true,
    lines: true,
  })
  .and(
    z.object({
      toAccount: z.number().optional().nullable(),
      paymentState: z.nativeEnum(PaymentState),
    })
  )
  .refine((data) => {
    return data.paymentState === PaymentState.PAY_PARTIAL
      ? (data?.toAccount ?? 0) > 0
      : true;
  })
  .transform((data) => {
    return data.paymentState !== PaymentState.PAY_PARTIAL
      ? omit(data, ["toAccount"])
      : data;
  });

type CreatePurchaseForm = z.infer<typeof frCreatePurchaseSchema>;

export const CreatePurchase = () => {
  const createdPurchase = api.purchases.create.useMutation();
  const { lines, clear, getTotal } = useHandleLineSale();

  const form = useWrapperForm<CreatePurchaseForm>({
    schema: frCreatePurchaseSchema,
  });

  const navigate = useNavigate();

  const onSubmit = form.handleSubmit(
    async (data: CreatePurchaseForm) => {
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
      navigate("/purchases");
      form.reset();
      clear();
    },
    (errors) => {
      console.log("error", {
        errors,
      });
    }
  );

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
            <Button colorScheme="blue" onClick={onSubmit}>
              Guardar
            </Button>
          </HStack>
        </Box>
      </WrapperForm>
    </Screen>
  );
};
