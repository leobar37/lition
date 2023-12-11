import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  ModalProps,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export const CustomDrawer: FC<
  ModalProps & { title: string; footer?: ReactNode; beforeClose?: () => void }
> = ({ title, footer, children, onClose, beforeClose, ...props }) => {
  return (
    <Drawer
      {...props}
      onClose={() => {
        beforeClose?.();
        onClose();
      }}
    >
      <DrawerOverlay />
      <DrawerContent maxWidth="98vw">
        <DrawerHeader>
          {title}
          <ModalCloseButton
            onClick={() => {
              beforeClose?.();
              onClose();
            }}
          />
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
        {footer && <DrawerFooter>{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
};
