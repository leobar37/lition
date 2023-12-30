import { UsersIcon, BoxIcon, MoneyIcon } from "~/ui/icons";
export const useMenu = () => {
  const items = [
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
  ];

  return {
    items,
  };
};
