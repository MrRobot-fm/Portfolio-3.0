import { ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  moveRightAndShow,
  staggeredMoveUpAndShow50px,
} from "@/utils/animations/animations";
import { AnimatedTextLink } from "../AnimatedTextLink/AnimatedTextLink";
import type { NavLinkProps } from "./NavLink.props";

export const NavLink = (props: NavLinkProps) => {
  const {
    label,
    url,
    isMenuLink = false,
    isFooterLink = false,
    isOpen = false,
    close,
    index = 0,
    ...rest
  } = props;

  const framerAnimations = {
    variants: staggeredMoveUpAndShow50px({ index }),
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <ListItem
      as={motion.li}
      {...(isMenuLink && moveRightAndShow({ state: isOpen, index }))}
      {...(isFooterLink && framerAnimations)}
    >
      <AnimatedTextLink
        {...(close && { onClick: () => close() })}
        {...{ label, url, isMenuLink, ...rest }}
      />
    </ListItem>
  );
};
