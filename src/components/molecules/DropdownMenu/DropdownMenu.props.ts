import type { HTMLChakraProps, ThemingProps } from "@chakra-ui/react";
import type { MenuLinkModel } from "@/utils/constants/menu-links";

export interface DropdownMenuProps
  extends ThemingProps,
    HTMLChakraProps<"div"> {
  close: () => void;
  open: boolean;
  links: MenuLinkModel[];
  isMenuLink?: boolean;
}
