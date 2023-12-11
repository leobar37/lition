import { Button, HStack } from "@chakra-ui/react";
import { Client } from "@server";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, List, ListItem, Screen, useConfirmDialog } from "~/ui";
import { DeleteIcon, EditIcon } from "~/ui/icons";
import { api, useLitionFeedback } from "../../../lib";

const LisItemClient: FC<{
  client: Client;
}> = ({ client }) => {
  const deleteClient = api.clients.delete.useMutation();
  const queryClient = useQueryClient();
  const listQueryKey = getQueryKey(api.clients.list, undefined);
  const navigate = useNavigate();
  const confirm = useConfirmDialog();
  const { wrapAsync } = useLitionFeedback();

  return (
    <ListItem
      label={client.name + " " + client.lastName}
      actions={
        <>
          <Button
            size={"xs"}
            onClick={() => {
              navigate(`/clients/see/${client.id}`);
            }}
          >
            <Eye />
          </Button>
          <Button
            size={"xs"}
            colorScheme="blue"
            onClick={() => {
              navigate(`/clients/${client.id}`);
            }}
          >
            <EditIcon />
          </Button>

          <Button
            size={"xs"}
            onClick={async () => {
              const action = async () => {
                await deleteClient.mutateAsync(client.id);
                queryClient.invalidateQueries(listQueryKey);
              };
              confirm.open({
                title: "Eliminar cliente",
                description: "¿Está seguro que desea eliminar este cliente?",
                onConfirm: async () => {
                  await wrapAsync(action());
                },
              });
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
        search={{
          props: {
            name: {
              label: "Nombre",
            },
            dni: {
              label: "DNI",
            },
            lastName: {
              label: "Apellido",
            },
            phone: {
              label: "Celular",
            },
          },
        }}
        isLoading={clientsQuery.isLoading}
        data={clientsQuery.data ?? []}
        renderItem={(client) => (
          <LisItemClient key={client.id} client={client as any} />
        )}
      />
    </Screen>
  );
};
