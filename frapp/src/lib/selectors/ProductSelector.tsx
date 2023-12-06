import { api } from "~/lib";
import { FormInputSelect } from "~/ui";
import { FC, useMemo } from "react";
import { FormInputOptions } from "~/ui/forms/use-setup-control";
import { Option } from "@lition/common";

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

type ProductSelectorProps = {
  interceptOptions?: (options: Option[]) => Option[];
} & FormInputOptions;
export const ProductSelector: FC<ProductSelectorProps> = ({
  interceptOptions,
  ...props
}) => {
  const { options } = useProductsSelectorHook();
  const optionsIntercepted = useMemo(() => {
    return interceptOptions ? interceptOptions(options as any[]) : options;
  }, [interceptOptions]);
  return <FormInputSelect {...props} options={optionsIntercepted} />;
};
