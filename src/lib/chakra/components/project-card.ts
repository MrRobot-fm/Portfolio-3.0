import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers([
    "linkBox",
    "root",
    "cardWrapper",
    "imageContainer",
    "imageWrapper",
    "infoWrapper",
    "projectName",
    "projectLabel",
    "descriptionListWrapper",
    "descriptionWrapper",
    "projectDescription",
    "buttonWrapper",
  ]);

const baseStyle = definePartsStyle({
  linkBox: {
    position: "sticky",
    top: 0,
  },
  root: {
    w: "full",
    h: "100vh",
    py: 24,
  },
  cardWrapper: {
    w: "full",
    h: "full",
    display: "flex",
    overflow: "hidden",
    flexDir: { base: "column", lg: "row" },
    bg: "dark.70",
    rounded: { base: 20, md: 42 },
    gap: { base: 0, md: 64 },
    px: { base: 40, md: 70 },
    py: 40,
  },
  imageContainer: {
    w: "full",
    h: "full",
    flex: { base: 1, md: 4 },
    display: "grid",
    placeItems: "center",
  },
  imageWrapper: {
    overflow: "hidden",
  },
  infoWrapper: {
    w: "full",
    display: "flex",
    flex: { base: 1, md: 2 },
    flexDirection: "column",
    justifyContent: "center",
    alignItems: { base: "center", lg: "start" },
    gap: 24,
    color: "primary.white",
  },
  projectName: {
    textStyle: { base: "display", md: "heading1", xl: "display" },
    textTransform: "uppercase",
  },
  projectLabel: {
    textStyle: { base: "body", md: "heading3", lg: "heading4", xl: "heading3" },
    textTransform: "uppercase",
  },
  descriptionWrapper: {
    w: { base: "full", md: "90%", lg: "full", xl: "80%" },
    display: "flex",
    flexDir: "column",
    gap: 24,
    textAlign: { base: "center", lg: "start" },
  },
  projectDescription: {
    textStyle: { base: "body", md: "heading2", xl: "heading3" },
    fontWeight: { xl: 500 },
    color: "grey.20",
    textAlign: {
      base: "center",
      lg: "start",
    },
  },
  buttonWrapper: {
    w: { base: "50%", sm: "30%", md: "20%", lg: "25%", xl: "15%" },
    pt: { lg: 20 },
  },
});

const sizes = {
  default: definePartsStyle({
    imageWrapper: {
      aspectRatio: "4/3",
      maxW: { base: 390, md: 638, lg: 725, xl: 800 },
      h: { base: 233, sm: 270, md: 387, lg: 454, xl: 551 },
    },
  }),
};

export const ProjectCard = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "default",
  },
});
