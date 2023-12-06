import { Button, HStack, Text } from "@chakra-ui/react";
import { FORMAT_SIMPLE_DATE, createSaleSchema } from "@lition/common";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { z } from "zod";
import { ClientsSelector, api } from "~/lib";
import { useProductsSelectorHook } from "~/lib/selectors/ProductSelector";
import { Screen, SwitchFormInput, WrapperForm, useWrapperForm } from "~/ui";
import ItemsProducts from "../components/ItemsProducts";
import { ToAccount } from "../components/ToAccount";
import { useHandleLineSale } from "../helpers/useHandleLineSale";
import { useNavigate } from "react-router-dom";
const useProduct = () => {
  const { id = "-1" } = useParams();
  const saleQuery = api.sales.sale.useQuery(
    {
      id: Number(id),
    },
    {
      enabled: Number(id) > 0,
    }
  );
  return saleQuery;
};

const frEditSaleSchema = createSaleSchema
  .omit({
    paymentSource: true,
    total: true,
    usedAlias: true,
    paymentState: true,
    lines: true,
  })
  .and(
    z.object({
      toAccount: z.number().optional().nullable(),
    })
  );

type EditSaleForm = z.infer<typeof frEditSaleSchema>;

export const UpdateSale = () => {
  const saleQuery = useProduct();

  const form = useWrapperForm<EditSaleForm>({
    defaultValues: {
      isDispatched: false,
      toAccount: 0,
    },
    schema: frEditSaleSchema,
  });

  const navigate = useNavigate();

  const updateSaleMutation = api.sales.update.useMutation();

  const saleData = saleQuery.data;
  const { findById } = useProductsSelectorHook();

  const { setLines, lines, getTotal } = useHandleLineSale();

  useEffect(() => {
    const data = saleQuery.data;
    if (data) {
      const lines = data.lines.map((line) => {
        const product = findById(line.productId);
        return {
          productName: product?.name ?? "",
          productId: line.productId,
          total: line.amount * line.price,
          amount: line.amount,
          price: line.price,
          aliasId: line.aliasId,
          id: line.id,
        };
      });
      setLines(lines);
      form.reset({
        isDispatched: data.isDispatched,
        clientId: data.clientId ?? 0,
      });
    }
  }, [saleQuery.data]);

  const onSubmit = form.handleSubmit(
    async (values: EditSaleForm) => {
      try {
        await updateSaleMutation.mutateAsync({
          id: saleData.id,
          input: {
            isDispatched: values.isDispatched,
            lines: lines.map((line) => {
              return {
                id: line.id,
                amount: line.amount,
                price: line.price,
                productId: line.productId,
                total: line.total,
                aliasId: line?.aliasId ?? undefined,
              };
            }),
            paymentSource: {
              toAccount: values.toAccount,
            },
            total: getTotal(),
          },
        });
        console.log("updated saled");

        navigate("/sales");
      } catch (error) {
        console.log("error", error);
      }
    },
    (errs) => {
      console.log("errors", errs);
    }
  );

  if (saleQuery.isLoading) return <Text>Cargando...</Text>;

  return (
    <Screen
      back="/sales"
      title={`Editar | ${dayjs(saleQuery.data?.createdAt).format(
        FORMAT_SIMPLE_DATE
      )}`}
    >
      <WrapperForm form={form}>
        <SwitchFormInput label="Despachado" name="isDispatched" />
        <ClientsSelector isDisabled label="Cliente" name="clientId" />
        <ItemsProducts />
        <ToAccount ignorePaymentState />
      </WrapperForm>
      <HStack w="full" spacing={4} justifyContent={"flex-end"} mt={3}>
        <Button colorScheme="blue" onClick={onSubmit}>
          Editar
        </Button>
      </HStack>
    </Screen>
  );
};
