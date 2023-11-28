import { api } from "~/lib";
import { FormInputSelect } from "~/ui";
import { FC } from "react";
import { FormInputOptions } from "~/ui/forms/use-setup-control";
export const ProductSelector: FC<FormInputOptions> = ({ ...props }) => {
  const productsQuery = api.products.list.useQuery();
  return (
    <FormInputSelect
      {...props}
      options={(productsQuery?.data ?? []).map((product) => ({
        label: product.name,
        value: product.id,
      }))}
    />
  );
};
