import {
  Container,
  Divider,
  HStack,
  VStack,
  Text,
  Button,
  Box,
  ButtonProps,
} from "@chakra-ui/react";
import { ReactNode, FC } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const BackButton: FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button fontSize={"medium"} colorScheme="blue" {...props}>
      <IoIosArrowBack />
    </Button>
  );
};

export const Screen: FC<{
  children: React.ReactNode;
  title?: ReactNode | string;
  back?: string;
  actionRight?: ReactNode;
}> = ({ children, back, title, actionRight }) => {
  const navigate = useNavigate();
  const backButton = back ? (
    <BackButton
      onClick={() => {
        navigate(back);
      }}
    />
  ) : null;
  const titleNode = title ? (
    <VStack alignItems={"flex-start"} spacing={1}>
      <HStack w="full" justifyContent={"space-between"}>
        <Text textAlign={"start"} fontSize="2xl" fontWeight="bold">
          {backButton}
          <Box as="span" pl="1">
            {title}
          </Box>
        </Text>
        {actionRight}
      </HStack>
      <Divider borderWidth={"2px"} borderColor={"blue.500"} />
    </VStack>
  ) : null;
  return (
    <HStack justifyContent={"center"}>
      <Container height={"95vh"} my="5" maxWidth={"md"}>
        {titleNode}
        {children}
      </Container>
    </HStack>
  );
};
