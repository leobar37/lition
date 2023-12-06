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
const lineSaleAtomDrawer = atom(false);

export const useSalelineDisclosure = makeDisclosure(lineSaleAtomDrawer);

const LineSaleItem: FC<{
  line: LineSale;
}> = ({ line }) => {
  const drawerState = useSalelineDisclosure();

  const setSaleItem = useSetAtom(saleItemAtom);
  const { deleteLine } = useHandleLineSale();

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
      actions={
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
      }
    />
  );
};

export const ItemsProducts = () => {
  const drawerState = useSalelineDisclosure();
  const { lines } = useHandleLineSale();
  const setSaleItem = useSetAtom(saleItemAtom);

  return (
    <Box>
      <FormControl>
        <FormLabel>Items</FormLabel>
        <Box>
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
  );
};

export default ItemsProducts;
