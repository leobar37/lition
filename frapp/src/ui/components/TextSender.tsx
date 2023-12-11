import {
  Button,
  InputGroup,
  Text,
  Textarea,
  VStack,
  useClipboard,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useLitionFeedback } from "~/lib";
import { CopyIcon } from "..";

export type Options = {
  phone?: string;
};

export const buildWhatsappMessage = (text: string, options?: Options) => {
  const { phone } = options || {};
  return `https://wa.me/${phone || ""}/?text=${text}`;
};
type TextSenderProps = {
  text: string;
  phone?: string;
};
export const TextSender: FC<TextSenderProps> = ({ text, phone = "" }) => {
  const { hasCopied, onCopy, value, setValue } = useClipboard(text, {});
  const { toast } = useLitionFeedback();

  useEffect(() => {
    if (hasCopied) {
      toast({
        status: "success",
        title: "Copiado",
      });
    }
  }, [hasCopied]);

  return (
    <VStack spacing={4} alignItems={"flex-start"}>
      <Button
        colorScheme="whatsapp"
        onClick={() => {
          window.open(buildWhatsappMessage(text, { phone }), "_blank");
        }}
      >
        Enviar a WhatsApp
      </Button>
      <Button
        variant={"unestyled"}
        _active={{
          transform: "scale(1.1)",
        }}
        onClick={onCopy}
      >
        <Text pr="2">Copiar texto</Text> <CopyIcon fontSize={"lg"} />
      </Button>

      <InputGroup>
        <Textarea
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </InputGroup>
    </VStack>
  );
};
