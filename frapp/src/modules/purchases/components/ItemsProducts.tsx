import {
  Box,
  Button,
  Divider,
  FormControl,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
} from "@chakra-ui/react";
import { atom, useSetAtom } from "jotai";
import { FC } from "react";
import {
  DeleteIcon,
  EditIcon,
  List,
  ListItem,
  item,
  moneyStrategyFormat,
} from "~/ui";
import { makeDisclosure } from "~/utils";
import { LineSale, saleItemAtom } from "../data";
import {
  ItemsProductContextProps,
  ItemsProductProvider,
  useItemsProductContext,
} from "../helpers/ItemsProductContext";
import { useHandleLineSale } from "../helpers/useHandleLineSale";
import { MyDrawer } from "./MyDrawerItem";
import { useConfirmDialog } from "~/ui";
const lineSaleAtomDrawer = atom(false);

export const useSalelineDisclosure = makeDisclosure(lineSaleAtomDrawer);

const LinePurchaseItem: FC<{
  line: LineSale;
}> = ({ line }) => {
  const drawerState = useSalelineDisclosure();

  const setSaleItem = useSetAtom(saleItemAtom);
  const { deleteLine } = useHandleLineSale();

  const itemsProducts = useItemsProductContext();

  const confirmDialog = useConfirmDialog();

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
          confirmDialog.open({
            title: "Eliminar",
            description: "¿Está seguro de eliminar este item?",
            onConfirm: () => {
              deleteLine(line.productId);
            },
          });
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
          {item("Total", moneyStrategyFormat.format(line.total))}
          {item("Cantidad", moneyStrategyFormat.format(line.amount))}
          {item("Precio", moneyStrategyFormat.format(line.price))}
        </VStack>
      }
      actions={actions}
    />
  );
};

export const ItemsProducts: FC<Partial<ItemsProductContextProps>> = ({
  isEdit = true,
}) => {
  const drawerState = useSalelineDisclosure();
  const { lines, getTotal } = useHandleLineSale();
  const setSaleItem = useSetAtom(saleItemAtom);

  const moneyElement = (
    <Stat>
      <StatLabel>Total:</StatLabel>
      <StatNumber>{moneyStrategyFormat.format(getTotal())}</StatNumber>
    </Stat>
  );

  return (
    <ItemsProductProvider
      value={{
        isEdit,
      }}
    >
      <Box mt={4} borderWidth={"1px"} borderColor={"gray.200"} p="2">
        <FormControl>
          <Box>
            {!isEdit && (
              <HStack justifyContent={"space-between"} px="2">
                {moneyElement}
              </HStack>
            )}
            {isEdit && (
              <HStack justifyContent={"space-between"}>
                {moneyElement}
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
            <Divider borderWidth={"1px"} mt="2" borderColor={"gray.300"} />
            <List
              data={lines}
              renderItem={(line) => {
                return <LinePurchaseItem line={line} />;
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
