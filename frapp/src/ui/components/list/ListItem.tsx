import { HStack, VStack, Text, Divider } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
type ListItemProps = {
  label: string | ReactNode;
  actions: ReactNode;
};
export const ListItem: FC<ListItemProps> = ({ label, actions }) => {
  return (
    <VStack w="full" mb="2">
      <HStack alignItems={"center"} w="full" justifyContent={"space-between"}>
        <Text fontWeight={"semibold"}>{label}</Text>
        <HStack>{actions}</HStack>
      </HStack>
      <Divider w="full" borderWidth={"1px"} borderColor={"gray.500"} />
    </VStack>
  );
};
