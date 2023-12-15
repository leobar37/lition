import { Button, HStack } from "@chakra-ui/react";
import { Supplier } from "@server";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, Screen } from "~/ui";
import { DeleteIcon, EditIcon, Eye } from "~/ui/icons";
import { api, useLitionFeedback } from "../../../lib";
import { useConfirmDialog } from "~/ui";

const LisItemSupplier: FC<{
  supplier: Supplier;
}> = ({ supplier }) => {
  const deleteClient = api.suppliers.delete.useMutation();
  const queryClient = useQueryClient();
  const listQueryKey = getQueryKey(api.suppliers.list, undefined);
  const navigate = useNavigate();
  const confirm = useConfirmDialog();
  const { wrapAsync } = useLitionFeedback();

  return (
    <ListItem
      label={supplier.name + " " + supplier.lastName}
      actions={
        <>
          <Button
            size="xs"
            onClick={() => {
              navigate(`/suppliers/see/${supplier.id}`);
            }}
          >
            <Eye />
          </Button>
          <Button
            size="xs"
            colorScheme="blue"
            onClick={() => {
              navigate(`/suppliers/${supplier.id}`);
            }}
          >
            <EditIcon />
          </Button>
          <Button
            size="xs"
            onClick={async () => {
              const action = async () => {
                await deleteClient.mutateAsync({
                  id: supplier.id,
                });
                queryClient.invalidateQueries(listQueryKey);
              };
              confirm.open({
                title: "Eliminar proveedor",
                description: "¿Está seguro que desea eliminar este proveedor?",
                onConfirm: async () => {
                  wrapAsync(action());
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

export const Suppliers = () => {
  const navigate = useNavigate();
  const suppliersQuery = api.suppliers.list.useQuery();

  return (
    <Screen back="/" title="Proveedores">
      <HStack spacing={4} justifyContent={"flex-end"} mt={3}>
        <Button
          colorScheme="blue"
          onClick={() => {
            navigate("/suppliers/new");
          }}
        >
          Nuevo
        </Button>
      </HStack>
      <List
        isLoading={suppliersQuery.isLoading}
        data={suppliersQuery.data ?? []}
        renderItem={(supplier) => (
          <LisItemSupplier key={supplier.id} supplier={supplier as any} />
        )}
      />
    </Screen>
  );
};
