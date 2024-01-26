import { defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const sizes = {
  xs: { w: "2rem", h: "2rem" },
  sm: { w: "2.4rem", h: "2.4rem" },
  md: { w: "4rem", h: "4rem" },
};

export const Icon = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "sm",
  },
});
