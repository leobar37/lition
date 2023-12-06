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
import { PaymentState, createSaleSchema } from "@lition/common";
import { omit } from "radash";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ClientsSelector, api } from "~/lib";
import {
  FormRadioGroup,
  Screen,
  SwitchFormInput,
  WrapperForm,
  useWrapperForm,
} from "~/ui";
import ItemsProducts from "../components/ItemsProducts";
import { ToAccount } from "../components/ToAccount";
import { useHandleLineSale } from "../helpers/useHandleLineSale";

const frCreateSaleSchema = createSaleSchema
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

type CreateSaleForm = z.infer<typeof frCreateSaleSchema>;

export const CreateSale = () => {
  const createdSale = api.sales.create.useMutation();
  const { lines, clear, getTotal } = useHandleLineSale();

  const form = useWrapperForm<CreateSaleForm>({
    defaultValues: {
      isDispatched: false,
    },
    schema: frCreateSaleSchema,
  });

  const navigate = useNavigate();

  const onSubmit = form.handleSubmit(
    async (data: CreateSaleForm) => {
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
      navigate("/sales");
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
            <Button colorScheme="blue" onClick={onSubmit}>
              Guardar
            </Button>
          </HStack>
        </Box>
      </WrapperForm>
    </Screen>
  );
};
