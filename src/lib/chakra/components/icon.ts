import { defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const sizes = {
  xs: { w: 16, h: 16 },
  sm: { w: 22, h: 22 },
  md: { w: 30, h: 30 },
};

export const Icon = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "xs",
  },
});
