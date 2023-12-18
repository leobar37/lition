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

export const formatPhone = (phone?: string) => {
  const result = phone ? (phone.startsWith("+51") ? phone : "+51" + phone) : "";
  return result.replace(/\s/g, "");
};

export type AnyFunction = (
  ...args: any[]
) => any | ((...args: any) => Promise<any>);

const LINE_SALT = "\r\n\r\n";

export const createMsgBuilder = () => {
  const msgBuilder = {
    tokens: [] as Array<string>,
    line: (msg: string) => {
      msgBuilder.tokens.push(msg);
      msgBuilder.tokens.push(LINE_SALT);
      return msgBuilder;
    },
    build: () => {
      const result = msgBuilder.tokens.join(" ");
      return result;
    },
    addTitle: (title: string) => {
      msgBuilder.tokens.push(`*-${title}-*`);
      msgBuilder.tokens.push(LINE_SALT);

      return msgBuilder;
    },
    lineEmpty: () => {
      msgBuilder.tokens.push(LINE_SALT);
      return msgBuilder;
    },
    list: (items: string[]) => {
      msgBuilder.tokens.push(items.map((item) => `- ${item}`).join(LINE_SALT));
      msgBuilder.tokens.push(LINE_SALT);
      return msgBuilder;
    },
    addProp: (prop: string, value: string | number) => {
      msgBuilder.tokens.push(`*${prop}*: ${value}`);
      msgBuilder.tokens.push(LINE_SALT);
      return msgBuilder;
    },
  };
  return msgBuilder;
};
