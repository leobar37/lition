import { FC, useMemo } from "react";
import { api } from "~/lib";
import { FormInputSelect } from "~/ui";
import { FormInputOptions } from "~/ui/forms/use-setup-control";
export type StoreSelectorProps = FormInputOptions;

export const useStoreSelectorHook = () => {
  const storeQuery = api.me.list.useQuery();
  const options = useMemo(
    () =>
      (storeQuery?.data ?? []).map((supplier) => ({
        label: supplier.name,
        value: supplier.id,
      })),
    [storeQuery.data]
  );
  const findById = (id: number) => {
    return storeQuery.data?.find((product) => product.id === id);
  };
  return {
    options,
    ...storeQuery,
    findById,
  };
};
export const StoreSelector: FC<StoreSelectorProps> = ({ ...props }) => {
  const storeQuery = useStoreSelectorHook();
  return (
    <FormInputSelect
      {...props}
      inputProps={{
        isLoading: storeQuery.isLoading,
      }}
      options={(storeQuery?.data ?? []).map((store) => ({
        label: store.name,
        value: store.id,
      }))}
    />
  );
};
