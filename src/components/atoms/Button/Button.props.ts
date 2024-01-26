import type { HTMLChakraProps, ThemingProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { IconProps } from "@/components/atoms/Icon/Icon.props";

export interface ButtonProps extends HTMLChakraProps<"button">, ThemingProps {
  url?: string;
  target?: string;
  label?: string;
  children?: ReactNode;
  icon?: IconProps;
  isMenuLink?: boolean;
}
