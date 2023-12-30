import {
  Center,
  FormControl,
  FormLabel,
  Stat,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SetStateAction } from "jotai";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { api } from "~/lib";
import {
  FormInputSelect,
  FormNumberInput,
  Spinner,
  moneyStrategyFormat,
} from "~/ui";
import { useUnitAliasSourceInForm } from "../helpers/useUnitAliasSourceInForm";
import { validId } from "@lition/common";
import { normFloat } from "~/utils";

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
  const total = normFloat(amount * price);
  return (
    <Stat>
      <StatLabel>Precio</StatLabel>
      <StatNumber>{moneyStrategyFormat.format(total)}</StatNumber>
    </Stat>
  );
};

export const PriceTabsSelector: FC<PriceTabsSelectorProps> = ({
  setTabIndex,
  index,
}) => {
  const { watch } = useFormContext();
  const selectedProduct = watch("productId");

  const productQuery = api.products.one.useQuery(
    {
      id: Number(selectedProduct),
    },
    {
      enabled: validId(selectedProduct),
    }
  );

  const { options } = useUnitAliasSourceInForm();

  const unit = productQuery.data?.unit;

  if (!selectedProduct || selectedProduct === -1) {
    return null;
  }

  if (productQuery.isLoading || !productQuery.data)
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
