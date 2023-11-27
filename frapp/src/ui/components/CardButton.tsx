import { Center, Text, VStack, CenterProps } from "@chakra-ui/react";
import { FC } from "react";

export const CardButton: FC<
  {
    title?: string;
  } & CenterProps
> = ({ title, ...props }) => {
  return (
    <Center
      borderColor={"gray.300"}
      borderWidth={"1px"}
      width={"auto"}
      height={"8rem"}
      rounded={"md"}
      shadow={"md"}
      cursor={"pointer"}
      _active={{
        shadow: "lg",
        transform: "scale(0.95)",
      }}
      {...props}
    >
      <VStack>
        <Text fontWeight={"semibold"}>{title}</Text>
      </VStack>
    </Center>
  );
};
