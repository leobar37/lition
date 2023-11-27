import { VStack } from "@chakra-ui/react";

export type ListProps<T> = {
  data: T[];
  renderItem: (item: T) => JSX.Element;
};

export const List = <T = any,>({ data, renderItem }: ListProps<T>) => {
  return (
    <VStack w="full" mt="5" spacing={5}>
      {data.map((item) => {
        return renderItem(item);
      })}
    </VStack>
  );
};
