import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { ReactNode } from "react";

type ModalConfirmState = {
  isOpen: boolean;
  title: string;
  content: ReactNode;
  actions?: ReactNode;
};

const defaultState: ModalConfirmState = {
  isOpen: false,
  title: "",
  actions: null,
  content: null,
};
const simpleModalAtom = atom<ModalConfirmState>(
  defaultState as ModalConfirmState
);

export const useSimpleModalDisclousure = () => {
  const [value, setValue] = useAtom(simpleModalAtom);
  return useDisclosure({
    isOpen: value?.isOpen,
    onClose: () => {
      setValue((prev) => {
        return {
          ...prev,
          isOpen: false,
        };
      });
    },
    onOpen: () => {
      setValue((prev) => {
        return {
          ...prev,
          isOpen: true,
        };
      });
    },
  });
};

export const useSimpleModal = () => {
  const setValue = useSetAtom(simpleModalAtom);
  return {
    open: (opts: Omit<ModalConfirmState, "isOpen">) => {
      setValue({
        isOpen: true,
        ...opts,
      });
    },
    close: () => {
      setValue(defaultState);
    },
  };
};
export const SimpleModal = () => {
  const simpleModalInfo = useAtomValue(simpleModalAtom);
  const alertDisclosure = useSimpleModalDisclousure();

  return (
    <Drawer
      size={"sm"}
      isOpen={simpleModalInfo.isOpen}
      onClose={alertDisclosure.onClose}
    >
      <DrawerOverlay />
      <DrawerContent maxWidth={"98vw"}>
        <DrawerHeader>{simpleModalInfo.title}</DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody>{simpleModalInfo.content}</DrawerBody>
        <DrawerFooter>{simpleModalInfo.actions}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
