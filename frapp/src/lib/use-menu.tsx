import { UsersIcon, BoxIcon, MoneyIcon, HomeIcon, StoreIcon } from "~/ui/icons";
import { useAuthInfo } from "./auth";
export const useMenu = () => {
  const { authInfo } = useAuthInfo();

  const sharedItems = [
    {
      name: "Inicio",
      path: "/",
      icon: <HomeIcon />,
    },
  ];

  const items = authInfo?.business
    ? [
        ...sharedItems,

        {
          name: "Clientes",
          path: "/clients",
          icon: <UsersIcon />,
        },
        {
          name: "Productos",
          path: "/products",
          icon: <BoxIcon />,
        },
        {
          name: "Ventas",
          path: "/sales",
          icon: <MoneyIcon />,
        },
        // {
        //   name: "Proveedores",
        //   path: "/suppliers",
        // },
        // {
        //   name: "Compras",
        //   path: "/purchases",
        // },
      ]
    : [
        ...sharedItems,

        {
          name: "Negocios",
          path: "/business",
          icon: <StoreIcon />,
        },
        {
          name: "Usuarios",
          path: "/users",
          icon: <UsersIcon />,
        },
      ];

  return {
    items,
  };
};
