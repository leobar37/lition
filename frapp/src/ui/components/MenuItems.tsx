import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  VStack,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";
import { DotsIcon } from "../icons";
import { FC } from "react";

export type MenuItemsProps = {
  items: { label: string; action: () => void }[];
};
export const MenuItems: FC<MenuItemsProps> = ({ items }) => {
  return (
    <Popover>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button colorScheme="white" textColor={"blue.800"} fontSize={"xl"}>
              <DotsIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent w={"12rem"} p="2">
            <VStack w="full" alignItems={"flex-start"}>
              {items.map((item) => (
                <>
                  <Button
                    w="full"
                    colorScheme="white"
                    textColor={"black"}
                    key={item.label}
                    textAlign={"start"}
                    onClick={() => {
                      item.action();
                      onClose();
                    }}
                  >
                    <Text textAlign={"start"} w="full">
                      {item.label}
                    </Text>
                  </Button>
                  <Divider borderWidth={"1px"} borderColor={"blue.800"} />
                </>
              ))}
            </VStack>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};
