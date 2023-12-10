import { Screen } from "~/ui";
import { BounceLoader } from "react-spinners";
import { Center, VStack, Text, useToken } from "@chakra-ui/react";
export const ScreenLoading = () => {
  const blue = useToken("colors", "blue.500");
  return (
    <Screen title="">
      <Center h="80vh">
        <VStack>
          <BounceLoader size={90} color={blue} />
          <Text fontWeight={"semibold"} mt="2" fontSize={"large"}>
            Cargando...
          </Text>
        </VStack>
      </Center>
    </Screen>
  );
};
