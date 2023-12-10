import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { useRef } from "react";

type AlertConfirmState = {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel?: () => void;
};

const defaultState: AlertConfirmState = {
  isOpen: false,
  title: "",
  description: "",
  onConfirm: () => {},
  onCancel: () => {},
};
const confirmDialogAtom = atom<AlertConfirmState>(
  defaultState as AlertConfirmState
);

export const useAlerDisclousure = () => {
  const [value, setValue] = useAtom(confirmDialogAtom);
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

export const useConfirmDialog = () => {
  const setValue = useSetAtom(confirmDialogAtom);
  return {
    open: (opts: Omit<AlertConfirmState, "isOpen">) => {
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
export const ConfirmDialog = () => {
  const alertInfo = useAtomValue(confirmDialogAtom);
  const cancelRef = useRef(null);
  const alertDisclosure = useAlerDisclousure();

  return (
    <AlertDialog
      isOpen={alertInfo.isOpen ?? false}
      leastDestructiveRef={cancelRef}
      onClose={alertDisclosure.onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {alertInfo.title}
          </AlertDialogHeader>
          <AlertDialogBody>{alertInfo.description}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={alertDisclosure.onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                alertInfo?.onConfirm();
                alertDisclosure.onClose();
              }}
              ml={3}
            >
              Aceptar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
