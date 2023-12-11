import { useDisclosure } from "@chakra-ui/react";
import { PrimitiveAtom, useAtom } from "jotai";
import { get } from "radash";
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

// create isDev utility using env variable

export const isDev = process.env?.NODE_ENV === "development";

export const transform = <T = any>(
  obj: T,
  transforms: Partial<Record<keyof T, (value: any) => any>> = {}
): T => {
  const newObj: any = obj;
  Object.entries(transforms).forEach(([key, transform]) => {
    const value = get(obj, key, false);
    if (transform) {
      newObj[key] = (transform as any)(value);
    } else {
      newObj[key] = value;
    }
  });
  return newObj;
};
