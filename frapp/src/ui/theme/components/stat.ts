import { statAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleLabel = defineStyle({
  fontWeight: "medium",
});

const baseStyleHelpText = defineStyle({
  opacity: 0.8,
  marginBottom: "2",
});

const baseStyleNumber = defineStyle({
  verticalAlign: "baseline",
  fontWeight: "semibold",
});

const baseStyleIcon = defineStyle({
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle",
});

const baseStyle = definePartsStyle({
  label: baseStyleLabel,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon,
});

const notableVariant = definePartsStyle({
  container: {
    boxShadow: "lg",
    px: 3,
    py: 3,
  },
});
const sizes = {
  md: definePartsStyle({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" },
  }),
};

export const statTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
  },
  variants: {
    notable: notableVariant,
  },
});
