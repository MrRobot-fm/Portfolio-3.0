import { ListItem } from "@chakra-ui/react";
import { moveRightAndShow } from "@/utils/animations/animations";
import { AnimatedTextLink } from "../AnimatedTextLink/AnimatedTextLink";
import type { NavLinkProps } from "./NavLink.props";

export const NavLink = (props: NavLinkProps) => {
  const {
    label,
    url,
    isMenuLink,
    isOpen = false,
    close,
    index = 0,
    ...rest
  } = props;

  return (
    <ListItem {...(isMenuLink && moveRightAndShow({ state: isOpen, index }))}>
      <AnimatedTextLink
        onClick={() => close()}
        {...{ label, url, isMenuLink, ...rest }}
      />
    </ListItem>
  );
};
