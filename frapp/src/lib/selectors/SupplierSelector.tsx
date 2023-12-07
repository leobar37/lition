import { api } from "~/lib";
import { FormInputSelect } from "~/ui";
import { FC, useEffect, useMemo } from "react";
import { FormInputOptions } from "~/ui/forms/use-setup-control";
import { Option } from "@lition/common";

export const useSupplierSelectorHook = () => {
  const supplierQuery = api.suppliers.list.useQuery();
  const options = useMemo(
    () =>
      (supplierQuery?.data ?? []).map((supplier) => ({
        label: supplier.name,
        value: supplier.id,
      })),
    [supplierQuery.data]
  );

  useEffect(() => {
    if (!supplierQuery.isFetched) {
      supplierQuery.refetch();
    }
  }, [supplierQuery.isFetched]);
  const findById = (id: number) => {
    return supplierQuery.data?.find((product) => product.id === id);
  };
  return {
    options,
    ...supplierQuery,
    findById,
  };
};

type SupplierSelectorProps = {
  interceptOptions?: (options: Option[]) => Option[];
} & FormInputOptions;

export const SupplierSelector: FC<SupplierSelectorProps> = ({
  interceptOptions,
  ...props
}) => {
  const { options } = useSupplierSelectorHook();
  const optionsIntercepted = useMemo(() => {
    return interceptOptions ? interceptOptions(options as any[]) : options;
  }, [interceptOptions, options]);
  return <FormInputSelect {...props} options={optionsIntercepted} />;
};
