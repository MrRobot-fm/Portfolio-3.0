import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bg: "primary.white",
    py: 24,
  },
  button: {
    "&.chakra-accordion__button": {
      "> h2": {
        flex: 1,
        textStyle: "heading1",
        fontWeight: 500,
        textAlign: "left",
        color: "dark.70",
      },
    },
    _hover: {
      backgroundColor: "transparent",
    },
  },
  panel: {
    "&.chakra-accordion__panel": {
      display: "flex",
      gap: 16,
      flexDir: "column",
      py: 16,
      "> p": {
        textStyle: "heading3",
        fontWeight: 500,
        color: "dark.70",
      },
    },
  },
});

const sizes = {
  default: definePartsStyle({
    icon: {
      "&.chakra-accordion__icon": {
        w: { base: 35, md: 45 },
        h: { base: 35, md: 45 },
      },
    },
  }),
};

export const Accordion = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "default",
  },
});
