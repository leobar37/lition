import {
  Box,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Select,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { createContext } from "@chakra-ui/react-context";
import { isEmpty } from "radash";
import { FC, useEffect, useMemo, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Spinner } from "~/ui";

const ScrollbarsChakra = chakra(Scrollbars);

export type ListProps<T = any> = {
  data: T[];
  renderItem: (item: T) => JSX.Element;
  isLoading?: boolean;
  search?: Search<T>;
};

type PropConfig = {
  label: string;
};
type Search<T> = {
  props: Partial<Record<keyof T, PropConfig>>;
};

const [ListsPropsProvider, useListProps] = createContext<ListProps>({
  name: "ListProps",
});

type Props = {
  data: any[];
} & Pick<ListProps, "search">;

export const useSearch = ({ data, search }: Props) => {
  const [query, setQuery] = useState("");
  const [prop, setProp] = useState("");
  const filteredData = useMemo(() => {
    if (isEmpty(prop) || isEmpty(query) || !search) {
      return data;
    }
    return data.filter((item) => {
      if (!prop) {
        return true;
      }
      const value = item[prop];
      if (typeof value === "string") {
        return value.toLowerCase().indexOf(query.toLowerCase()) > -1;
      }
      return false;
    });
  }, [prop, query, data]);

  const props = useMemo(() => {
    if (!search?.props) {
      return {
        propsArr: [],
      };
    }
    const propsArr = Object.entries(search?.props);
    return {
      propsArr,
    };
  }, [search?.props]);

  useEffect(() => {
    if (props.propsArr.length > 0) {
      setProp(props.propsArr[0][0]);
    }
  }, [props.propsArr]);
  return {
    query,
    setQuery,
    prop,
    setProp,
    filteredData,
    ...props,
  };
};

const SearchComp: FC<ReturnType<typeof useSearch>> = ({
  query,
  setQuery,
  prop,
  setProp,
  propsArr,
}) => {
  const { search } = useListProps();

  if (!search) {
    return null;
  }

  const select =
    propsArr.length > 0 ? (
      <Select
        w="40%"
        value={prop}
        onChange={(e) => {
          setProp(e.target.value);
        }}
      >
        {propsArr.map(([key, value]) => {
          return <option value={key}>{(value as PropConfig).label}</option>;
        })}
      </Select>
    ) : null;

  return (
    <FormControl>
      <FormLabel>Buscar</FormLabel>
      <HStack>
        <InputGroup>
          <Input
            value={query}
            borderColor={"blue.400"}
            borderWidth={"1px"}
            px="1"
            size={"sm"}
            rounded={"md"}
            w="full"
            onChange={(e) => {
              const value = e.target.value;
              if (isEmpty(prop)) {
                return;
              }
              setQuery(value);
            }}
          />
        </InputGroup>
        {select}
      </HStack>
    </FormControl>
  );
};
export const List = <T = any,>({
  data,
  renderItem,
  isLoading = false,
  search,
}: ListProps<T>) => {
  const isEmpty = data.length === 0;

  const searchProps = useSearch({ data, search });

  const content = (
    <VStack spacing={5} px="5" py="4">
      {searchProps.filteredData.map((item) => {
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
      <ListsPropsProvider value={{ data, renderItem, isLoading, search }}>
        <Box>
          <SearchComp {...searchProps} />
          <ScrollbarsChakra
            px="2"
            mt="5"
            mx="auto"
            style={{
              height: "70vh",
            }}
          >
            {content}
          </ScrollbarsChakra>
        </Box>
      </ListsPropsProvider>
    );
  }

  return (
    <ListsPropsProvider value={{ data, renderItem, isLoading, search }}>
      <Box mx={"auto"}>
        <SearchComp {...searchProps} />
        {content}
      </Box>
    </ListsPropsProvider>
  );
};
