import { Box, VStack, Radio, Text } from "@chakra-ui/react";
import {
  Screen,
  useWrapperForm,
  WrapperForm,
  FormNumberInput,
  FormInputSelect,
  FormRadioGroup,
} from "~/ui";
import { useFormContext } from "react-hook-form";
import { ClientsSelector, ProductSelector, api } from "~/lib";
import { Tabs, TabList, TabPanel, TabPanels, Tab } from "@chakra-ui/react";

const UnitAliasSelector = () => {
  const { watch } = useFormContext();
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
  const options = (unitAliasQuery.data ?? []).map((alias) => {
    return {
      label: alias.name,
      value: alias.id,
    };
  });
  return <FormInputSelect label="Alias" name="" options={options} />;
};

const ToAccount = () => {
  const { watch } = useFormContext();
  const paymentTpe = watch("type_payment");

  if (paymentTpe === "all_this_sale") return null;
  return (
    <Box>
      <Text fontSize={"large"}>Debe 55 s/.</Text>
      <FormNumberInput label="Abono" name="abono" />
    </Box>
  );
};

export const CreateSale = () => {
  const form = useWrapperForm({
    schema: undefined,
  });
  return (
    <Screen title="Nueva Venta">
      <WrapperForm form={form}>
        <Box as="form">
          <ClientsSelector label="Cliente" name="clientId" />
          <ProductSelector label="Producto" name="productId" />
          <FormNumberInput label="Precio" name="price" />
          <FormRadioGroup name="type_payment">
            <VStack my="2" alignItems={"flex-start"}>
              <Radio value="all_this_sale">Pagar todo en esta venta</Radio>
              <Radio value="to_account">A cuenta</Radio>
            </VStack>
            <ToAccount />
          </FormRadioGroup>

          <Tabs variant={"soft-rounded"} mt="4" isLazy>
            <TabList>
              <Tab>Personalizado</Tab>
              <Tab>Alias</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FormNumberInput label="Cantidad(kg)" name="quantity" />
              </TabPanel>
              <TabPanel>
                <UnitAliasSelector />
                <FormNumberInput label="Cantidad" name="quantity" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </WrapperForm>
    </Screen>
  );
};
