import { api } from "~/lib";
import { FormInputSelect } from "~/ui";
import { FC, useMemo } from "react";
import { FormInputOptions } from "~/ui/forms/use-setup-control";

export const useProductsSelectorHook = () => {
  const productsQuery = api.products.list.useQuery();
  const options = useMemo(
    () =>
      (productsQuery?.data ?? []).map((product) => ({
        label: product.name,
        value: product.id,
      })),
    [productsQuery.data]
  );
  const findById = (id: number) => {
    return productsQuery.data?.find((product) => product.id === id);
  };
  return {
    options,
    ...productsQuery,
    findById,
  };
};
export const ProductSelector: FC<FormInputOptions> = ({ ...props }) => {
  const { options } = useProductsSelectorHook();
  return <FormInputSelect {...props} options={options} />;
};
