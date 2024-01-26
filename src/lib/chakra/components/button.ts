import {
  StyleFunctionProps,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(["root", "label", "icon"]);

const baseStyle = definePartsStyle({
  root: {
    rounded: 64,
    gap: 8,
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textStyle: "heading4",
    transition: "all 0.4s ease-in-out",
  },
  label: {
    display: "inline-flex",
    fontFamily: "inherit",
    fontWeight: "inherit",
    fontSize: "inherit",
    whiteSpace: "nowrap",
    textTransform: "capitalize",
  },
  icon: {
    w: 16,
    h: 16,
    display: "inline-flex",
    transition: "transform 0.3s ease-in-out",
  },
});

const sizes = {
  default: {
    root: {
      w: "fit-content",
      h: "fit-content",
      px: 32,
      py: 16,
    },
  },
  link: {
    root: {
      w: "full",
      h: "fit-content",
      p: 0,
    },
  },
  textLink: {
    root: {
      w: "fit-content",
      h: "fit-content",
      p: 0,
    },
  },
};

const variants = {
  primary: ({ size = "default" }: StyleFunctionProps) => {
    return {
      root: {
        bg: "primary.black",
        color: "primary.white",

        _hover: {
          bg: "primary.white",
          color: "primary.black",
          borderWidth: 1,
          borderColor: "primary.black",
          borderStyle: "solid",
        },

        ...(["link", "textLink"].includes(size) && {
          bg: "transparent",
          rounded: 0,
          justifyContent: "space-between",
          _hover: {
            border: 0,
            opacity: 0.5,
          },
        }),
      },

      icon: {
        _groupHover: {
          transform: "rotate(45deg)",
        },
      },
    };
  },
  secondary: ({ size = "default" }: StyleFunctionProps) => {
    return {
      root: {
        bg: "grey.5",
        color: "primary.black",
        _hover: {
          bg: "primary.white",
          borderWidth: 1,
          borderColor: "primary.black",
          borderStyle: "solid",
        },

        ...(["link", "textLink"].includes(size) && {
          bg: "transparent",
          rounded: 0,
          justifyContent: "space-between",
          _hover: {
            border: 0,
            opacity: 0.5,
          },
        }),
      },

      icon: {
        _groupHover: {
          transform: "rotate(45deg)",
        },
      },
    };
  },
};

export const Button = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "default",
    variant: "primary",
  },
});
