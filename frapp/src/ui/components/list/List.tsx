import { Center, Text, VStack, chakra } from "@chakra-ui/react";
import { Spinner } from "~/ui";
import { Scrollbars } from "react-custom-scrollbars-2";

const ScrollbarsChakra = chakra(Scrollbars);
export type ListProps<T> = {
  data: T[];
  renderItem: (item: T) => JSX.Element;
  isLoading?: boolean;
};

export const List = <T = any,>({
  data,
  renderItem,
  isLoading = false,
}: ListProps<T>) => {
  const isEmpty = data.length === 0;

  const content = (
    <VStack spacing={5} px="5" py="4">
      {data.map((item) => {
        return renderItem(item);
      })}
      {isEmpty && !isLoading && <Text my="4">No hay elementos</Text>}
      {isLoading && (
        <Center>
          <VStack alignItems={"center"}>
            <Spinner />
            <Text fontWeight={"semibold"} fontSize={"x-large"}>
              Cargando...
            </Text>
          </VStack>
        </Center>
      )}
    </VStack>
  );

  if (data.length > 6) {
    return (
      <ScrollbarsChakra
        px="2"
        mt="4"
        style={{
          height: "calc(100vh - 200px)",
        }}
      >
        {content}
      </ScrollbarsChakra>
    );
  }

  return content;
};
