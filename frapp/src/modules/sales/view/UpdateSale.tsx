import {
  Button,
  HStack,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { FORMAT_SIMPLE_DATE, StatusSaleType, isNill } from "@lition/common";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClientsSelector, api, useLitionFeedback } from "~/lib";
import { useProductsSelectorHook } from "~/lib/selectors/ProductSelector";
import {
  Screen,
  ScreenLoading,
  WrapperForm,
  moneyStrategyFormat,
  useWrapperForm,
  useConfirmDialog,
  useBackUrl,
} from "~/ui";
import ItemsProducts from "../components/ItemsProducts";
import { EditSaleForm, frEditSaleSchema } from "../domain";
import { useHandleLineSale } from "../helpers/useHandleLineSale";
import { useNavigate } from "react-router-dom";
const useCurrentSale = () => {
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

const DispatchButton = () => {
  const dispatchMutation = api.sales.updateFlags.useMutation();
  const currentSale = useCurrentSale();

  const queryClient = useQueryClient();

  const queryKey = getQueryKey(api.sales.sale);

  if (currentSale.data?.isDispatched) {
    return null;
  }

  return (
    <Button
      isLoading={dispatchMutation.isLoading}
      colorScheme="blue"
      onClick={async () => {
        await dispatchMutation.mutateAsync({
          id: currentSale.data?.id!,
          type: StatusSaleType.TOGGLE_DISPATCH,
        });
        queryClient.invalidateQueries(queryKey);
      }}
    >
      Despachar
    </Button>
  );
};

const CancelButton = () => {
  const navigate = useNavigate();
  const dispatchMutation = api.sales.updateFlags.useMutation();
  const currentSale = useCurrentSale();
  const queryClient = useQueryClient();
  const queryKey = getQueryKey(api.sales.sale);
  const listQueryKey = getQueryKey(api.sales.list);
  const confirmDialog = useConfirmDialog();
  const { wrapAsync } = useLitionFeedback();

  const withBackUrl = useBackUrl();

  if (!isNill(currentSale.data?.canceledAt)) {
    return null;
  }

  return (
    <Button
      colorScheme="blue"
      isLoading={dispatchMutation.isLoading}
      onClick={async () => {
        const action = async () => {
          await dispatchMutation.mutateAsync({
            id: currentSale.data?.id!,
            type: StatusSaleType.CANCEL,
          });
          queryClient.invalidateQueries(queryKey);
          queryClient.invalidateQueries(listQueryKey);
        };
        confirmDialog.open({
          title: "Cancelar venta",
          description: "¿Está seguro que desea cancelar la venta?",
          onConfirm: async () => {
            await wrapAsync(action());
            navigate(withBackUrl("/sales"));
          },
        });
      }}
    >
      Cancelar venta
    </Button>
  );
};

export const UpdateSale = () => {
  const saleQuery = useCurrentSale();

  const form = useWrapperForm<EditSaleForm>({
    defaultValues: {
      isDispatched: false,
      toAccount: 0,
    },
    schema: frEditSaleSchema,
  });
  const saleData = saleQuery.data;
  const { findById } = useProductsSelectorHook();
  const { setLines } = useHandleLineSale();

  useEffect(() => {
    if (saleData) {
      const lines: any[] = (saleData.lines as any[]).map((line) => {
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
        isDispatched: saleData.isDispatched,
        clientId: saleData.clientId ?? 0,
      });
    }
  }, [saleQuery.data]);

  if (saleQuery.isLoading) return <ScreenLoading />;

  return (
    <Screen
      back="/sales"
      title={`Editar | ${dayjs(saleQuery.data?.createdAt).format(
        FORMAT_SIMPLE_DATE
      )}`}
    >
      <WrapperForm form={form}>
        <StatGroup mt="2">
          <Stat>
            <StatLabel>Total:</StatLabel>
            <StatNumber>
              {moneyStrategyFormat.format(saleData?.total)}
            </StatNumber>
          </Stat>
        </StatGroup>
        <ClientsSelector isDisabled label="Cliente" name="clientId" />
        <ItemsProducts isEdit={false} />
        <HStack mt="2">
          <DispatchButton />
          <CancelButton />
        </HStack>
      </WrapperForm>
    </Screen>
  );
};
