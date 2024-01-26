import type { ChakraProps, ThemingProps } from "@chakra-ui/react";
import type { MenuLinkModel } from "@/utils/constants/menu-links";

export type LinksNavbar = {
  text: string;
  route: string;
};

export interface NavbarProps extends ChakraProps, ThemingProps {
  links: MenuLinkModel[];
}
