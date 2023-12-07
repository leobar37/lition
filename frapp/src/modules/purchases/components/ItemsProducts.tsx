import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { atom, useSetAtom } from "jotai";
import { FC } from "react";
import { DeleteIcon, EditIcon, List, ListItem, item } from "~/ui";
import { makeDisclosure } from "~/utils";
import { LineSale, saleItemAtom } from "../data";
import { useHandleLineSale } from "../helpers/useHandleLineSale";
import { MyDrawer } from "./MyDrawerItem";
import {
  ItemsProductContextProps,
  ItemsProductProvider,
} from "../helpers/ItemsProductContext";
import { useItemsProductContext } from "../helpers/ItemsProductContext";

const lineSaleAtomDrawer = atom(false);

export const useSalelineDisclosure = makeDisclosure(lineSaleAtomDrawer);

const LineSaleItem: FC<{
  line: LineSale;
}> = ({ line }) => {
  const drawerState = useSalelineDisclosure();

  const setSaleItem = useSetAtom(saleItemAtom);
  const { deleteLine } = useHandleLineSale();

  const itemsProducts = useItemsProductContext();

  const actions = itemsProducts.isEdit ? (
    <>
      <Button
        onClick={() => {
          drawerState.onOpen();
          setSaleItem(line);
        }}
        colorScheme="blue"
      >
        <EditIcon />
      </Button>

      <Button
        colorScheme="red"
        onClick={() => {
          deleteLine(line.productId);
        }}
      >
        <DeleteIcon />
      </Button>
    </>
  ) : null;

  return (
    <ListItem
      label={
        <VStack alignItems={"flex-start"}>
          {item("Producto", line.productName)}
          {item("Total", line.total)}
          {item("Cantidad", line.amount)}
          {item("Precio", line.price)}
        </VStack>
      }
      actions={actions}
    />
  );
};

export const ItemsProducts: FC<Partial<ItemsProductContextProps>> = ({
  isEdit = false,
}) => {
  const drawerState = useSalelineDisclosure();
  const { lines } = useHandleLineSale();
  const setSaleItem = useSetAtom(saleItemAtom);

  return (
    <ItemsProductProvider
      value={{
        isEdit,
      }}
    >
      <Box mt={4}>
        <FormControl>
          <FormLabel>Items</FormLabel>
          <Box>
            {!isEdit && (
              <HStack justifyContent={"flex-end"}>
                <Button
                  onClick={() => {
                    drawerState.onOpen();
                    setSaleItem(null);
                  }}
                >
                  Agregar
                </Button>
              </HStack>
            )}
            <List
              data={lines}
              renderItem={(line) => {
                return <LineSaleItem line={line} />;
              }}
            />
          </Box>
          <MyDrawer />
        </FormControl>
      </Box>
    </ItemsProductProvider>
  );
};

export default ItemsProducts;
