import { useFormContext } from "react-hook-form";
import { useWrapperForm } from "~/ui";
import { api } from "~/lib";
import { useMemo } from "react";

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
