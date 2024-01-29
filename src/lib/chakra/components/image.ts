import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(["container", "skeleton"]);

const baseStyle = definePartsStyle({
  container: {
    display: "flex",
    position: "relative",
    overflow: "hidden",
  },
  skeleton: {
    position: "absolute",
    w: "full",
    h: "full",
  },
});

const sizes = {
  fluid: definePartsStyle({
    container: {
      w: "full",
      h: "full",
    },
  }),
  md: definePartsStyle({
    container: { w: "15rem", h: "15rem" },
  }),
};

export const CustomImage = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "fluid",
  },
});
