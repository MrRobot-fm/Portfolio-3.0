"use client";

import { Box, Flex, Slide, UnorderedList } from "@chakra-ui/react";
import { useEffect } from "react";
import { useScrollBehavior } from "@/hooks/use-scroll-behavior";
import { NavLink } from "@/components/atoms/NavLink/NavLink";
import type { DropdownMenuProps } from "./DropdownMenu.props";

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { open, close, links } = props;

  const { disableScroll, enableScroll } = useScrollBehavior();

  useEffect(() => {
    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [disableScroll, enableScroll, open]);

  return (
    <Box zIndex={10000}>
      <Slide
        direction="right"
        in={open}
        transition={{ enter: { duration: 0.2 }, exit: { duration: 0.2 } }}
      >
        <Flex
          w="full"
          h="100vh"
          alignItems="center"
          bg="lightOrange"
          color="secondary.white"
          px={{ base: 16, md: 80 }}
        >
          <UnorderedList listStyleType="none">
            <Flex gap={40} flexDirection="column">
              {links.map((link, index) => (
                <NavLink
                  key={`${index}-${link.label}`}
                  label={link.label}
                  url={link.path}
                  variant="primary"
                  size="textLink"
                  isOpen={open}
                  close={close}
                  index={index}
                  isMenuLink
                />
              ))}
            </Flex>
          </UnorderedList>
        </Flex>
      </Slide>
    </Box>
  );
};
