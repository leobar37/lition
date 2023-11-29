import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PaymentState, createSaleSchema } from "@lition/common";
import { omit } from "radash";
import { FC, SetStateAction, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { ClientsSelector, ProductSelector, api } from "~/lib";
import {
  FormInputSelect,
  FormNumberInput,
  FormRadioGroup,
  Screen,
  SwitchFormInput,
  WrapperForm,
  moneyStrategyFormat,
  useWrapperForm,
} from "~/ui";

export const useUnitAliasSourceInForm = (
  form?: ReturnType<typeof useWrapperForm>
) => {
  const { watch } = form ? form : useFormContext();
  const productId = watch("productId");
  const safeProductId = Number(productId ?? "-1");
  const unitAliasQuery = api.products.unitAlias.useQuery(
    {
      productId: safeProductId,
    },
    {
      enabled: safeProductId > 0,
    }
  );
  const options = useMemo(
    () =>
      (unitAliasQuery.data ?? []).map((alias) => {
        return {
          label: alias.name,
          value: alias.id,
        };
      }),
    [unitAliasQuery.data]
  );
  const findUnitAliasById = (id: number) => {
    return unitAliasQuery.data?.find((alias) => alias.id === id);
  };
  return {
    options,
    unitAliasQuery,
    findUnitAliasById,
  };
};

const UnitAliasSelector = () => {
  const { options } = useUnitAliasSourceInForm();
  return <FormInputSelect label="Alias" name="aliasId" options={options} />;
};

const ToAccount = () => {
  const { watch } = useFormContext();
  const [clientId, paymentTpe] = watch(["clientId", "paymentState"]);

  const notIspayPartial = paymentTpe !== PaymentState.PAY_PARTIAL;

  const debtClientQuery = api.clients.myDebt.useQuery(
    {
      clientId: Number(clientId),
    },
    {
      enabled: !notIspayPartial,
    }
  );

  if (
    notIspayPartial ||
    debtClientQuery.isLoading ||
    !debtClientQuery.data ||
    !clientId
  )
    return null;
  return (
    <Box>
      <Text fontSize={"large"}>Debe {debtClientQuery.data?.debt} s/.</Text>
      <FormNumberInput
        inputProps={{
          min: 0,
        }}
        formatValue={moneyStrategyFormat.format}
        parseValue={moneyStrategyFormat.parse}
        label="Abono"
        name="toAccount"
      />
    </Box>
  );
};

const PriceDisplay: FC = () => {
  const { watch } = useFormContext();
  const [amount, price] = watch(["amount", "price", "aliasId"]);

  return (
    <HStack w="full" justifyContent={"space-between"}>
      <Text fontSize={"large"} fontWeight={"semibold"}>
        Precio
      </Text>
      <Text fontSize={"large"}>{amount * price} s/.</Text>
    </HStack>
  );
};

const frCreateSaleSchema = createSaleSchema
  .omit({
    paymentSource: true,
    total: true,
    usedAlias: true,
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

type PriceTabsSelectorProps = {
  setTabIndex: React.Dispatch<SetStateAction<number>>;
};

const PriceTabsSelector: FC<PriceTabsSelectorProps> = ({ setTabIndex }) => {
  const { watch } = useFormContext();
  const selectedProduct = watch("productId");
  const unitQuery = api.products.unitOne.useQuery(
    {
      id: Number(selectedProduct),
    },
    {
      enabled: !!selectedProduct,
    }
  );
  const { options } = useUnitAliasSourceInForm();

  const unit = unitQuery.data;
  if (!selectedProduct || unitQuery.isLoading || !unitQuery.data) return null;
  return (
    <FormControl mt="2">
      <FormLabel>
        <Text>Cantidad</Text>
      </FormLabel>
      <Tabs
        variant={"soft-rounded"}
        isLazy
        onChange={(index) => {
          setTabIndex(index);
        }}
      >
        <TabList>
          <Tab>Personalizado</Tab>
          {options.length > 0 && <Tab>Alias</Tab>}
        </TabList>
        <TabPanels>
          <TabPanel>
            <PriceDisplay />
            <FormNumberInput
              inputProps={{
                min: 0,
              }}
              label={`Unidad(${unit?.symbol})`}
              name="amount"
            />
            <FormNumberInput
              formatValue={moneyStrategyFormat.format}
              parseValue={moneyStrategyFormat.parse}
              label="Precio por unidad"
              name="price"
              inputProps={{
                min: 0,
              }}
            />
          </TabPanel>
          <TabPanel>
            <PriceDisplay />
            <UnitAliasSelector />
            <FormNumberInput
              inputProps={{
                min: 0,
              }}
              label="Cantidad"
              name="amount"
            />
            <FormNumberInput
              inputProps={{
                min: 0,
              }}
              formatValue={moneyStrategyFormat.format}
              parseValue={moneyStrategyFormat.parse}
              label="Precio por alias"
              name="price"
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </FormControl>
  );
};

export const CreateSale = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const createdSale = api.sales.create.useMutation();

  const form = useWrapperForm<CreateSaleForm>({
    defaultValues: {
      isDispatched: false,
    },
    schema: useMemo(() => {
      if (tabIndex === 0) return frCreateSaleSchema;
      return frCreateSaleSchema.and(
        z.object({
          aliasId: z.number(),
        })
      );
    }, [tabIndex]),
  });

  const { findUnitAliasById } = useUnitAliasSourceInForm(form as any);

  const onSubmit = form.handleSubmit(
    async (data) => {
      const total = data.amount * data.price;
      let finalData: any = {
        amount: data.amount,
        price: data.price,
        isDispatched: data.isDispatched,
        clientId: data.clientId,
        productId: data.productId,
        total: total,
        paymentState: data.paymentState,
        usedAlias: {},
      };
      if (data.paymentState === PaymentState.PAY_PARTIAL) {
        finalData = {
          ...finalData,
          paymentSource: {
            toAccount: (data as any).toAccount,
          },
        };
      }
      if ((data as any)?.aliasId) {
        finalData = {
          ...finalData,
          usedAlias: findUnitAliasById((data as any).aliasId),
        };
      }
      await createdSale.mutateAsync(finalData);
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
          <ProductSelector label="Producto" name="productId" />
          <PriceTabsSelector setTabIndex={setTabIndex} />
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
