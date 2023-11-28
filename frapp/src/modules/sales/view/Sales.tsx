import { Screen } from "~/ui";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const Sales = () => {
  const navigate = useNavigate();
  return (
    <Screen back="" title="Ventas">
      <HStack spacing={4} justifyContent={"flex-end"} mt={3}>
        <Button
          colorScheme="blue"
          onClick={() => {
            navigate("/sales/new");
          }}
        >
          Nuevo
        </Button>
      </HStack>
      <Text>Esto es una prueba</Text>
    </Screen>
  );
};
