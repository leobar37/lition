import { Button, HStack } from "@chakra-ui/react";
import { Option, lineSaleSchema } from "@lition/common";
import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { ProductSelector, useProductsSelectorHook } from "~/lib";
import { CustomDrawer, WrapperForm, useWrapperForm } from "~/ui";
import { LineSale, saleItemAtom } from "../data";
import { useHandleLineSale } from "../helpers/useHandleLineSale";
import { useSalelineDisclosure } from "./ItemsProducts";
import PriceTabsSelector from "./PriceTabsSelector";

const lineSaleSchemaInput = lineSaleSchema.omit({
  total: true,
  aliasId: true,
});

const DEFAULT_VALUES = {
  amount: 1,
  price: 0,
  productId: -1,
};

export const MyDrawer = () => {
  const modalDisclousure = useSalelineDisclosure();
  const [index, setTabIndex] = useState(0);
  const saleItem = useAtomValue(saleItemAtom);
  const setSaleItem = useSetAtom(saleItemAtom);
  const isEdit = !!saleItem;
  const { add, update, lines } = useHandleLineSale();
  const { findById: findByIdPr } = useProductsSelectorHook();

  const form = useWrapperForm<LineSale>({
    defaultValues: DEFAULT_VALUES,
    schema: useMemo(() => {
      if (index === 0) return lineSaleSchemaInput;
      return lineSaleSchemaInput.and(
        z.object({
          aliasId: z.number(),
        })
      );
    }, [index]),
  });

  useEffect(() => {
    if (saleItem && modalDisclousure.isOpen) {
      let values: any = {
        productId: saleItem.productId,
        amount: saleItem.amount,
        price: saleItem.price,
      };
      if ((saleItem as any)?.aliasId) {
        values = {
          ...values,
          aliasId: (saleItem as any)?.aliasId,
        };
        setTabIndex(1);
      }
      form.reset(values);
    }
  }, [modalDisclousure.isOpen]);

  const handle = () => {
    const values = form.getValues();
    const total = values.amount * values.price;
    const pr = findByIdPr(values.productId);
    const aliasName = !values?.aliasId
      ? null
      : pr?.unitAlias.find((alias) => alias.id === values.aliasId)?.name;

    if (!isEdit) {
      add({
        ...values,
        total: total,
        productName: pr?.name,
        symbol: aliasName ? aliasName : pr?.unit.symbol,
      });
      modalDisclousure.onClose();
      form.reset(DEFAULT_VALUES);
      setTabIndex(0);
    } else {
      update(
        {
          ...values,
          total: total,
          symbol: aliasName ? aliasName : pr?.unit.symbol,
        },
        saleItem.productId
      );
      modalDisclousure.onClose();
      form.reset(DEFAULT_VALUES);
    }
  };

  const filteredOptions = useCallback(
    (options: Option[]) => {
      if (isEdit) {
        return options;
      }
      return options.filter((option) => {
        return !lines.find((line) => line.productId === option.value);
      });
    },
    [lines, isEdit]
  );

  const buttonIsDisabled = !form.formState.isValid;

  return (
    <CustomDrawer
      title="Item"
      beforeClose={() => {
        form.reset(DEFAULT_VALUES);
        setSaleItem(null);
      }}
      footer={
        <HStack>
          <Button isDisabled={buttonIsDisabled} onClick={handle}>
            {isEdit ? "Editar" : "Agregar"}
          </Button>
        </HStack>
      }
      {...modalDisclousure}
    >
      <WrapperForm form={form}>
        <ProductSelector
          name="productId"
          interceptOptions={filteredOptions}
          label="Producto"
          isDisabled={isEdit}
        />
        <PriceTabsSelector index={index} setTabIndex={setTabIndex} />
      </WrapperForm>
    </CustomDrawer>
  );
};
