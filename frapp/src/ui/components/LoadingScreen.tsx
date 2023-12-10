import { Screen } from "~/ui";
import { BounceLoader } from "react-spinners";
import { Center, VStack, Text, useToken } from "@chakra-ui/react";
import { FC } from "react";
export const Spinner: FC<{
  size?: number;
}> = ({ size = 90 }) => {
  const blue = useToken("colors", "blue.500");
  return <BounceLoader size={size} color={blue} />;
};
export const ScreenLoading = () => {
  return (
    <Screen title="">
      <Center h="80vh">
        <VStack>
          <Spinner />
          <Text fontWeight={"semibold"} mt="2" fontSize={"large"}>
            Cargando...
          </Text>
        </VStack>
      </Center>
    </Screen>
  );
};
