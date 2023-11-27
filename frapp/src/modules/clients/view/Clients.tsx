import { Button, HStack } from "@chakra-ui/react";
import { Client } from "@server";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, Screen } from "~/ui";
import { DeleteIcon, EditIcon } from "~/ui/icons";
import { api } from "../../../lib";

const LisItemClient: FC<{
  client: Client;
}> = ({ client }) => {
  const deleteClient = api.clients.delete.useMutation();
  const queryClient = useQueryClient();
  const listQueryKey = getQueryKey(api.clients.list, undefined);
  const navigate = useNavigate();
  return (
    <ListItem
      label={client.name + " " + client.lastName}
      actions={
        <>
          <Button
            colorScheme="blue"
            onClick={() => {
              navigate(`/clients/${client.id}`);
            }}
          >
            <EditIcon />
          </Button>
          <Button
            onClick={async () => {
              await deleteClient.mutateAsync(client.id);
              queryClient.invalidateQueries(listQueryKey);
            }}
            colorScheme="red"
            textColor={"white"}
          >
            <DeleteIcon />
          </Button>
        </>
      }
    />
  );
};

export const Clients = () => {
  const navigate = useNavigate();
  const clientsQuery = api.clients.list.useQuery();
  return (
    <Screen back="/" title="Clientes">
      <HStack spacing={4} justifyContent={"flex-end"} mt={3}>
        <Button
          colorScheme="blue"
          onClick={() => {
            navigate("/clients/new");
          }}
        >
          Nuevo
        </Button>
      </HStack>
      <List
        data={clientsQuery.data ?? []}
        renderItem={(client) => (
          <LisItemClient key={client.id} client={client as any} />
        )}
      />
    </Screen>
  );
};
