import { Button, HStack } from "@chakra-ui/react";
import { Supplier } from "@server";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, Screen } from "~/ui";
import { DeleteIcon, EditIcon } from "~/ui/icons";
import { api } from "../../../lib";

const LisItemSupplier: FC<{
  supplier: Supplier;
}> = ({ supplier }) => {
  const deleteClient = api.suppliers.delete.useMutation();
  const queryClient = useQueryClient();
  const listQueryKey = getQueryKey(api.suppliers.list, undefined);
  const navigate = useNavigate();

  return (
    <ListItem
      label={supplier.name + " " + supplier.lastName}
      actions={
        <>
          <Button
            colorScheme="blue"
            onClick={() => {
              navigate(`/suppliers/${supplier.id}`);
            }}
          >
            <EditIcon />
          </Button>
          <Button
            onClick={async () => {
              await deleteClient.mutateAsync({
                id: supplier.id,
              });
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
        data={suppliersQuery.data ?? []}
        renderItem={(supplier) => (
          <LisItemSupplier key={supplier.id} supplier={supplier as any} />
        )}
      />
    </Screen>
  );
};
