import { SetStateAction } from "jotai";
import { FC } from "react";
import { api } from "~/lib";
import { useFormContext } from "react-hook-form";
import { useUnitAliasSourceInForm } from "../helpers/useUnitAliasSourceInForm";
import {
  FormControl,
  FormLabel,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  Center,
  VStack,
} from "@chakra-ui/react";
import { FormInputSelect, FormNumberInput, moneyStrategyFormat } from "~/ui";
import { Spinner } from "~/ui";

type PriceTabsSelectorProps = {
  index: number;
  setTabIndex: React.Dispatch<SetStateAction<number>>;
};

const UnitAliasSelector = () => {
  const { options } = useUnitAliasSourceInForm();
  return <FormInputSelect label="Alias" name="aliasId" options={options} />;
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

export const PriceTabsSelector: FC<PriceTabsSelectorProps> = ({
  setTabIndex,
  index,
}) => {
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

  if (!selectedProduct) {
    return null;
  }

  if (!selectedProduct || unitQuery.isLoading || !unitQuery.data)
    return (
      <Center mt="4">
        <VStack>
          <Spinner />
          <Text>Cargando unidades</Text>
        </VStack>
      </Center>
    );

  return (
    <FormControl mt="2">
      <FormLabel>
        <Text>Cantidad</Text>
      </FormLabel>
      <Tabs
        variant={"soft-rounded"}
        isLazy
        index={index}
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
              formatValue={moneyStrategyFormat.format as any}
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

export default PriceTabsSelector;
