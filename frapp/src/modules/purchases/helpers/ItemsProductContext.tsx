import { createContext } from "@chakra-ui/react-context";

export type ItemsProductContextProps = {
  isEdit: boolean;
};

export const [ItemsProductProvider, useItemsProductContext] =
  createContext<ItemsProductContextProps>({
    strict: true,
  });
