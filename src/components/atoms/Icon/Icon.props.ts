import type { HTMLChakraProps, ThemingProps } from "@chakra-ui/react";

export type IconName = "hamburger" | "close" | "arrow" | "arrowDown";

export interface IconProps extends ThemingProps, HTMLChakraProps<"div"> {
  name: IconName;
}
