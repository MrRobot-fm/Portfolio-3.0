import { defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const sizes = {
  xs: { w: 14, h: 14 },
  sm: { w: 16, h: 16 },
  md: { w: 18, h: 18 },
};

export const Icon = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "sm",
  },
});
