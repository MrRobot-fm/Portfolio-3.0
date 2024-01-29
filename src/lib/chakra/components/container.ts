import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  maxW: "full",
  gap: { base: 80, md: 120, lg: 160, xl: 240 },
};

const sizes = {
  default: defineStyle({
    px: { base: 16, md: 64, lg: 80 },
    pt: { base: 120, md: 160 },
    pb: { base: 160, lg: 240 },
    margin: 0,
  }),
};

export const Container = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "default",
  },
});
