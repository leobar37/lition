import { Screen, CardButton } from "~/ui";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuthInfo } from "~/lib/auth";
import { LogoutIcon } from "~/ui/icons";
import { AUTH_INFO_KEY } from "~/lib/auth";
import storage from "~/lib/storage";
export const useLogout = () => {
  const navigate = useNavigate();
  return () => {
    navigate("/auth/login");
    storage.remove(AUTH_INFO_KEY);
  };
};

export const Dashboard = () => {
  const navigate = useNavigate();
  const items = [
    {
      name: "Clientes",
      path: "/clients",
    },
    {
      name: "Productos",
      path: "/products",
    },
    {
      name: "Ventas",
      path: "/sales",
    },
    {
      name: "Proveedores",
      path: "/suppliers",
    },
    {
      name: "Compras",
      path: "/purchases",
    },
  ];

  const { authInfo } = useAuthInfo();
  const logout = useLogout();

  return (
    <Screen
      title={authInfo?.business.name}
      actionRight={
        <Button
          onClick={() => {
            logout();
          }}
        >
          <LogoutIcon />
        </Button>
      }
    >
      <Grid
        maxWidth={"md"}
        mx="auto"
        mt="5"
        templateColumns={"repeat(2,1fr)"}
        gap={3}
      >
        {items.map(({ path, name }, idx) => (
          <GridItem>
            <CardButton
              onClick={() => {
                navigate(path);
              }}
              key={idx}
              title={name}
            />
          </GridItem>
        ))}
      </Grid>
    </Screen>
  );
};
