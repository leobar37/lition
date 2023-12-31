import { Box, Button, HStack } from "@chakra-ui/react";
import { Business } from "@server";
import { FC } from "react";
import { api } from "~/lib";
import { List, ListItem, Screen, MenuItems } from "~/ui";
import { useNavigate } from "react-router-dom";

const ListItemBusiness: FC<{
  business: Business;
}> = ({ business }) => {
  const navigate = useNavigate();
  return (
    <ListItem
      label={`${business.name}`}
      actions={
        <MenuItems
          items={[
            {
              label: "Editar",
              action: () => {
                navigate(`/business/update/${business.id}`);
              },
            },
            {
              label: "Ver",
              action: () => {},
            },
          ]}
        />
      }
    />
  );
};

export const ListBusiness = () => {
  const bussinessQuery = api.me.list.useQuery();
  const navigate = useNavigate();
  return (
    <Screen back="/" title="Negocios">
      <Box mt="4">
        <HStack justifyContent={"flex-end"}>
          <Button
            onClick={() => {
              navigate("/business/new");
            }}
          >
            Crear
          </Button>
        </HStack>
        <List
          search={{
            props: {
              name: {
                label: "Nombre",
              },
            },
          }}
          data={bussinessQuery.data ?? []}
          isLoading={bussinessQuery.isLoading}
          renderItem={(business) => {
            return <ListItemBusiness business={business as any} />;
          }}
        />
      </Box>
    </Screen>
  );
};
