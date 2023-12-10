import { Divider, VStack, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Stat: FC<{
  label: string;
  value: any;
}> = ({ label, value }) => {
  return (
    <VStack
      border={"1px"}
      borderColor={"gray.300"}
      minWidth={"4rem"}
      alignItems={"flex-start"}
      height={"4.5rem"}
      shadow={"xl"}
      spacing={0}
      rounded={"md"}
    >
      <Text px="1" py="0" fontSize="sm" color="gray.800">
        {label}
      </Text>
      <Divider mt="1" borderWidth={"1px"} borderColor={"gray.300"} />
      <Text mx="auto" px="3" fontSize="2xl" fontWeight="bold">
        {value}
      </Text>
    </VStack>
  );
};
