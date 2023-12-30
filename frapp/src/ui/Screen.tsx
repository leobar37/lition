import {
  Box,
  Button,
  ButtonProps,
  Container,
  Divider,
  HStack,
  Text,
  VStack,
  useToken,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Action, Fab } from "react-tiny-fab";
import { useMenu } from "~/lib";
import { MenuIcon } from "./icons/Menu";
export const useBackUrl = () => {
  const [searchParams] = useSearchParams();
  const backUrl = searchParams.get("back");
  return (url: string) => {
    if (backUrl) {
      return backUrl;
    }
    return url;
  };
};

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
  disableMenu?: boolean;
}> = ({ children, back, title, actionRight, disableMenu = false }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const backUrl = searchParams.get("back");

  const { items } = useMenu();

  const orange = useToken("colors", "orange.500");
  const backButton =
    back || backUrl ? (
      <BackButton
        onClick={() => {
          if (backUrl) return navigate(backUrl);
          if (back) navigate(back);
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

  const floatActions = !disableMenu && (
    <Fab
      icon={<MenuIcon />}
      mainButtonStyles={{
        backgroundColor: orange,
      }}
    >
      {items.map((item) => {
        return (
          <Action
            text={item.name}
            onClick={() => {
              navigate(item.path);
            }}
          >
            {item.icon}
          </Action>
        );
      })}
    </Fab>
  );
  return (
    <HStack justifyContent={"center"}>
      <Container py="4" minHeight={"95vh"} my="5" maxWidth={"md"}>
        {titleNode}
        {children}
        {floatActions}
      </Container>
    </HStack>
  );
};
