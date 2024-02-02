"use client";

import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AboutMeList } from "@/components/molecules/AboutMeList/AboutMeList";
import type { AboutMeSectionProps } from "./AboutMeSection.props";

export const AboutMeSection = (props: AboutMeSectionProps) => {
  const { description, descriptionLabel } = props;
  return (
    <Flex
      as={motion.section}
      id="about"
      flexDir="column"
      gap={{ base: 40, md: 90 }}
      py={60}
      bg="primary.white"
      zIndex={100}
    >
      <AboutMeList
        descriptionLabel={descriptionLabel}
        description={description}
      />
    </Flex>
  );
};
