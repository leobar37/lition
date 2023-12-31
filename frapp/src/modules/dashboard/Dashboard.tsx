import { Screen, CardButton } from "~/ui";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuthInfo } from "~/lib/auth";
import { LogoutIcon } from "~/ui/icons";
import { AUTH_INFO_KEY } from "~/lib/auth";
import storage from "~/lib/storage";
import { useEffect } from "react";
import { useMenu } from "~/lib/use-menu";

export const useLogout = () => {
  const navigate = useNavigate();
  return () => {
    navigate("/auth/login");
    storage.remove(AUTH_INFO_KEY);
  };
};

export const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthInfo();

  const { items } = useMenu();

  const { authInfo } = useAuthInfo();

  const logout = useLogout();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated]);

  return (
    <Screen
      disableMenu
      title={authInfo?.business?.name ?? "Admin"}
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
        {items
          .filter((d) => d.path !== "/")
          .map(({ path, name }, idx) => (
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
