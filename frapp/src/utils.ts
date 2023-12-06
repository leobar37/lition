import { useDisclosure } from "@chakra-ui/react";
import { PrimitiveAtom, useAtom } from "jotai";

export const makeDisclosure = (atom: PrimitiveAtom<boolean>) => () => {
  const [state, setState] = useAtom(atom);
  return useDisclosure({
    isOpen: state,
    onClose: () => {
      setState(false);
    },
    onOpen: () => {
      setState(true);
    },
  });
};
