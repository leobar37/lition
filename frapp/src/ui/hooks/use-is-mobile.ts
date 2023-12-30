import { useMediaQuery } from "@chakra-ui/react";

export const useIsMobile = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 600px)");
  return !isLargerThan;
};
