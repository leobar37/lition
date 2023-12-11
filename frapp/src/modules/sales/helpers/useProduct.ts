import { useFormContext } from "react-hook-form";
import { api } from "~/lib";
export const useProductInForm = () => {
  const { watch } = useFormContext();

  const productId = watch("productId");

  return api.products.one.useQuery(
    {
      id: productId,
    },
    {
      enabled: !!productId,
    }
  );
};
