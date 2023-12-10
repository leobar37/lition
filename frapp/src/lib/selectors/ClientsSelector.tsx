import { FormInputSelect } from "~/ui";
import { api } from "~/lib";
import { FC } from "react";
import { FormInputOptions } from "~/ui/forms/use-setup-control";

export const ClientsSelector: FC<FormInputOptions> = ({ ...props }) => {
  const clientsQuery = api.clients.list.useQuery();
  return (
    <FormInputSelect
      {...props}
      inputProps={{
        isLoading: clientsQuery.isLoading,
      }}
      options={(clientsQuery?.data ?? []).map((client) => ({
        label: client.name,
        value: client.id,
      }))}
    />
  );
};
