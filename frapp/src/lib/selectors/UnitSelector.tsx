import { FC, useMemo } from "react";
import { api } from "~/lib/trpc";
import { FormInputSelect } from "~/ui";
import { FormInputOptions } from "~/ui/forms/use-setup-control";

export const useUnitsSelectorHook = () => {
  const unitsQuery = api.products.units.useQuery();
  const options = useMemo(
    () =>
      (unitsQuery.data ?? []).map((unit) => {
        return {
          label: unit.name,
          value: unit.id,
        };
      }),
    [unitsQuery.data]
  );

  const findUnitById = (id: number) => {
    return (unitsQuery.data ?? []).find((unit) => unit.id === id);
  };

  return {
    options,
    findUnitById,
    ...unitsQuery,
  };
};

export const UnitSelector: FC<FormInputOptions> = ({ ...props }) => {
  const { options } = useUnitsSelectorHook();
  return <FormInputSelect {...props} options={options} />;
};
