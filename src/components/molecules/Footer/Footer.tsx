"use client";

import { Flex, Text, UnorderedList, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { moveRightAndShow100px } from "@/utils/animations/animations";
import { PAGES_PATH } from "@/utils/constants/pages-path";
import { Button } from "@/components/atoms/Button/Button";
import { FooterLegalInfo } from "@/components/atoms/FooterLegalInfo/FooterLegalInfo";
import { NavLink } from "@/components/atoms/NavLink/NavLink";
import { SocialLink } from "@/components/atoms/SocialLink/SocialLink";
import type { FooterProps } from "./Footer.props";

export const Footer = (props: FooterProps) => {
  const { label, caption, ctaLabel, footerLinks, socialLinks, legalInfo } =
    props;

  const currentYear = dayjs(new Date()).format("YYYY");

  return (
    <VStack
      as="footer"
      spacing={40}
      bg="primary.black"
      p={{ base: 30, md: 80 }}
      align="stretch"
    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        gap={104}
      >
        <VStack
          as={motion.div}
          flex={1}
          spacing={64}
          align="start"
          variants={moveRightAndShow100px({})}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <VStack spacing={24} color="primary.white" align="start">
            <Text>{label}</Text>
            <Text as="h1" size="display" fontWeight={500}>
              {caption}
            </Text>
          </VStack>
          <Button
            url={PAGES_PATH.CONTACTS}
            label={ctaLabel}
            variant="secondary"
            icon={{ name: "arrow" }}
          />
        </VStack>
        <Flex flex={1} gap={24} justifyContent="space-between">
          <UnorderedList listStyleType="none">
            <Flex flexDir="column" gap={16}>
              {footerLinks.map((link, index) => (
                <NavLink
                  key={link.label}
                  label={link.label}
                  url={link.path}
                  variant="secondary"
                  size="textLink"
                  color="primary.white"
                  index={index}
                  isFooterLink
                />
              ))}
            </Flex>
          </UnorderedList>
          <UnorderedList listStyleType="none">
            <Flex flexDir="column" gap={16} minW={{ base: 150, md: 200 }}>
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={`${index}-${link.label}`}
                  socialLinks={link}
                  index={index}
                  icon={{ name: "arrow" }}
                  size="link"
                />
              ))}
            </Flex>
          </UnorderedList>
        </Flex>
      </Flex>
      <FooterLegalInfo currentYear={currentYear} label={legalInfo} />
    </VStack>
  );
};
