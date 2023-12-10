import { Button, HStack } from "@chakra-ui/react";
import {
  FORMAT_SIMPLE_DATE,
  StatusSaleType,
  createPurchaseSchema,
  isNill,
} from "@lition/common";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { z } from "zod";
import { SupplierSelector, api } from "~/lib";
import { useProductsSelectorHook } from "~/lib/selectors/ProductSelector";
import { Screen, ScreenLoading, WrapperForm, useWrapperForm } from "~/ui";
import ItemsProducts from "../components/ItemsProducts";
import { useHandleLineSale } from "../helpers/useHandleLineSale";

const useCurrentPurchase = () => {
  const { id = "-1" } = useParams();
  const purchaseQuery = api.purchases.one.useQuery(
    {
      id: Number(id),
    },
    {
      enabled: Number(id) > 0,
    }
  );
  return purchaseQuery;
};

const frEditPurchaseSchema = createPurchaseSchema
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

type EditPurchaseForm = z.infer<typeof frEditPurchaseSchema>;

const CancelButton = () => {
  const dispatchMutation = api.purchases.updateFlags.useMutation();
  const currentPurchase = useCurrentPurchase();
  const queryClient = useQueryClient();
  const queryKey = getQueryKey(api.purchases.one);

  if (!isNill(currentPurchase.data?.canceledAt)) {
    return null;
  }

  return (
    <Button
      colorScheme="blue"
      isLoading={dispatchMutation.isLoading}
      onClick={async () => {
        await dispatchMutation.mutateAsync({
          id: currentPurchase.data?.id!,
          type: StatusSaleType.CANCEL,
        });
        queryClient.invalidateQueries(queryKey);
      }}
    >
      Cancelar Compra
    </Button>
  );
};

export const UpdatePurchase = () => {
  const purchaseQuery = useCurrentPurchase();

  const form = useWrapperForm<EditPurchaseForm>({
    defaultValues: {
      toAccount: 0,
    },
    schema: frEditPurchaseSchema,
  });

  const purchaseData = purchaseQuery.data;
  const { findById } = useProductsSelectorHook();
  const { setLines } = useHandleLineSale();

  useEffect(() => {
    if (purchaseData) {
      const lines: any[] = (purchaseData.lines as any[]).map((line) => {
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
        supplierId: purchaseData.supplierId ?? 0,
      });
    }
  }, [purchaseQuery.data]);

  if (purchaseQuery.isLoading) return <ScreenLoading />;

  return (
    <Screen
      back="/purchases"
      title={`Editar | ${dayjs(purchaseQuery.data?.createdAt).format(
        FORMAT_SIMPLE_DATE
      )}`}
    >
      <WrapperForm form={form}>
        <SupplierSelector isDisabled label="Proveedor" name="supplierId" />
        <ItemsProducts isEdit={false} />
        <HStack mt={"4"}>
          <CancelButton />
        </HStack>
      </WrapperForm>
    </Screen>
  );
};
