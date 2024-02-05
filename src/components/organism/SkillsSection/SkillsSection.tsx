"use client";

import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { moveUpScaleAndShowVariant100px } from "@/utils/animations/animations";
import { InfiniteScrollBlock } from "@/components/molecules/InfiniteScrollBlock/InfiniteScrollBlock";
import { SkillsAccordion } from "@/components/molecules/SkillsAccordion/SkillsAccordion";
import type { SkillsSectionProps } from "./SkillsSection.props";

export const SkillsSection = (props: SkillsSectionProps) => {
  const { sectionTitle, skills, techLogos } = props;
  return (
    <Flex
      as={motion.section}
      id="skills"
      flexDir="column"
      gap={{ base: 40, md: 90 }}
      py={60}
      variants={moveUpScaleAndShowVariant100px({})}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <Text
        size="heading3"
        fontWeight={500}
        textTransform="uppercase"
        color="lightOrange"
      >
        {`(${sectionTitle})`}
      </Text>
      <SkillsAccordion skills={skills} />
      <InfiniteScrollBlock techLogos={techLogos} />
    </Flex>
  );
};
