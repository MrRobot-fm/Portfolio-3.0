"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { moveRightAndShow100px } from "@/utils/animations/animations";
import { PAGES_PATH } from "@/utils/constants/pages-path";
import { Button } from "@/components/atoms/Button/Button";
import type { HeroSectionProps } from "./HeroSection.props";

export const HeroSection = (props: HeroSectionProps) => {
  const { label, title, subTitle, ctaLabel, sectionProps } = props;

  return (
    <Flex
      flexDir="column"
      maxW={{ base: 1200, xl: 1600 }}
      gap={{ base: 48, md: 80 }}
      {...sectionProps}
    >
      <Flex flexDir="column" gap={40}>
        <Text
          as={motion.p}
          color="dark.70"
          fontWeight="bold"
          variants={moveRightAndShow100px({})}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {label}
        </Text>
        <Heading
          as={motion.h1}
          size="displayBig"
          color="dark.70"
          variants={moveRightAndShow100px({ delay: 0.4 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {title}
          <Text as="span" display="block" size="displayBig" color="lightOrange">
            {subTitle}
          </Text>
        </Heading>
      </Flex>
      <Box
        as={motion.div}
        variants={moveRightAndShow100px({ delay: 0.8 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Button
          url={PAGES_PATH.PROJECTS}
          label={ctaLabel}
          variant="primary"
          icon={{ name: "arrow" }}
        />
      </Box>
    </Flex>
  );
};
