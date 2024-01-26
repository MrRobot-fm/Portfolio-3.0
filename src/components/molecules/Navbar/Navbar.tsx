"use client";

import {
  Box,
  Flex,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import useBreakpoints from "@/hooks/use-breakpoints";
import { Icon } from "@/components/atoms/Icon/Icon";
import { NavLink } from "@/components/atoms/NavLink/NavLink";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { NavbarProps } from "./Navbar.props";

export const Navbar = (props: NavbarProps) => {
  const { links } = props;

  const { isDesktop, isLargeDesktop } = useBreakpoints();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isDesktop || isLargeDesktop) {
      onClose();
    }

    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos < currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    document.body.style.overflow = isOpen ? "hidden" : "visible";

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop, isLargeDesktop, isOpen, onClose]);

  return (
    <Box
      w="full"
      px={{ base: 16, md: 80 }}
      py={{ base: 16, md: 24 }}
      position="fixed"
      top={`${visible ? "-100%" : 0}`}
      transition="0.6s ease-in-out"
      bg="primary.white"
      zIndex={100}
    >
      <Flex as="header" justifyContent="space-between" alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={100}
          mixBlendMode="difference"
        >
          <Link href="/">
            <Text fontSize={28} fontWeight={800} color="primary.white">
              federico.
              <Text
                mixBlendMode="color"
                as="span"
                fontSize="inherit"
                fontWeight="inherit"
                color="#696969"
              >
                dev
              </Text>
            </Text>
          </Link>
        </Box>
        <UnorderedList
          display={{ base: "none", lg: "block" }}
          listStyleType="none"
        >
          <Flex gap={40} px={40}>
            {links.map((link) => (
              <NavLink
                key={link.label}
                label={link.label}
                url={link.path}
                close={onClose}
                variant="secondary"
                size="textLink"
              />
            ))}
          </Flex>
        </UnorderedList>
        <Box display={{ base: "block", lg: "none" }} zIndex={100}>
          <Icon
            name={isOpen ? "close" : "hamburger"}
            size="md"
            color={isOpen ? "primary.white" : "lightOrange"}
            _hover={{ cursor: "pointer" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Box>
      </Flex>
      <DropdownMenu links={links} open={isOpen} close={onClose} />
    </Box>
  );
};
