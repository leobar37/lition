import {
  HStack,
  VStack,
  Text,
  Divider,
  Stack,
  StackDirection,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { isString } from "radash";

type ListItemProps = {
  label: string | ReactNode;
  actions: ReactNode;
  directionActions?: StackDirection;
};
export const ListItem: FC<ListItemProps> = ({
  label,
  actions,
  directionActions = "row",
}) => {
  return (
    <VStack w="full" mb="2">
      <HStack alignItems={"center"} w="full" justifyContent={"space-between"}>
        {isString(label) ? <Text>{label}</Text> : label}
        <Stack direction={directionActions}>{actions}</Stack>
      </HStack>
      <Divider w="full" borderWidth={"1px"} borderColor={"gray.500"} />
    </VStack>
  );
};
