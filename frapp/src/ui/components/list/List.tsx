import { VStack, Text } from "@chakra-ui/react";

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
  return (
    <VStack w="full" mt="5" spacing={5}>
      {data.map((item) => {
        return renderItem(item);
      })}

      {isEmpty && !isLoading && <Text my="4">No hay elementos</Text>}
      {isLoading && (
        <Text my="4" fontSize={"x-large"}>
          Cargando...
        </Text>
      )}
    </VStack>
  );
};
