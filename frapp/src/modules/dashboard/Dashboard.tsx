import { Screen, CardButton } from "~/ui";
import { Grid, GridItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuthInfo } from "~/lib/auth";

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
  ];
  const { authInfo } = useAuthInfo();

  return (
    <Screen title={authInfo?.business.name}>
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
