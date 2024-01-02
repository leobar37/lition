import { Box, Button, HStack } from "@chakra-ui/react";
import { User } from "@server";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { StoreSelector, api, useLitionFeedback } from "~/lib";
import {
  List,
  ListItem,
  Screen,
  WrapperForm,
  useWrapperForm,
  MenuItems,
  useConfirmDialog,
} from "~/ui";
import { getQueryKey } from "@trpc/react-query";
import { useQueryClient } from "@tanstack/react-query";
const UserListItem: FC<{
  user: User;
}> = ({ user }) => {
  const navigate = useNavigate();
  const deleteUser = api.users.delete.useMutation();
  const confirmDialog = useConfirmDialog();
  const { wrapAsync } = useLitionFeedback();

  const usersKey = getQueryKey(api.users.list);

  const queryClient = useQueryClient();

  return (
    <ListItem
      label={`${user.username}`}
      actions={
        <MenuItems
          items={[
            {
              label: "Editar",
              action: () => {
                navigate(`/users/${user.id}`);
              },
            },
            {
              label: "Eliminar",
              action: () => {
                confirmDialog.open({
                  title: "Eliminar usuario",
                  description: "¿Está seguro que desea eliminar este usuario?",
                  onConfirm: async () => {
                    const action = async () => {
                      await deleteUser.mutateAsync({
                        id: user.id,
                      });
                      queryClient.invalidateQueries(usersKey);
                    };
                    wrapAsync(action());
                  },
                });
              },
            },
          ]}
        />
      }
    />
  );
};

export const ListUsers = () => {
  const form = useWrapperForm({
    schema: undefined,
  });

  const navigate = useNavigate();
  const businessId = Number(form.watch("businessId") ?? "-1");
  const usersQuery = api.users.list.useQuery({
    businessId: businessId === -1 ? undefined : businessId,
  });

  return (
    <WrapperForm form={form}>
      <Screen back="/" title="Usuarios">
        <Box>
          <StoreSelector label="Negocio" name="businessId" />
          <HStack justifyContent={"flex-end"} mt="2">
            <Button
              colorScheme="blue"
              onClick={() => {
                navigate("/users/new");
              }}
            >
              Crear
            </Button>
          </HStack>
          <List
            data={usersQuery.data ?? []}
            isLoading={usersQuery.isLoading}
            renderItem={(user) => {
              return <UserListItem user={user as any} />;
            }}
          />
        </Box>
      </Screen>
    </WrapperForm>
  );
};
