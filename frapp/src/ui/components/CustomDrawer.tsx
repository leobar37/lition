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
  ModalProps & { title: string; footer?: ReactNode }
> = ({ title, footer, children, onClose, ...props }) => {
  return (
    <Drawer {...props} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent maxWidth="98vw">
        <DrawerHeader>
          {title}
          <ModalCloseButton onClick={onClose} />
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
        {footer && <DrawerFooter>{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
};
