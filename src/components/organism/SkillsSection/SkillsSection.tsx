"use client";

import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { moveRightAndShowVariant10 } from "@/utils/animations/animations";
import { InfiniteScrollBlock } from "@/components/molecules/InfiniteScrollBlock/InfiniteScrollBlock";
import { SkillsAccordion } from "@/components/molecules/SkillsAccordion/SkillsAccordion";
import { SkillsSectionProps } from "./SkillsSection.props";

export const SkillsSection = (props: SkillsSectionProps) => {
  const { sectionTitle, skills, techLogos } = props;
  return (
    <Flex
      as={motion.section}
      id="skills"
      flexDir="column"
      gap={{ base: 40, md: 90 }}
      py={60}
      variants={moveRightAndShowVariant10}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <Text size="heading2" fontWeight={500} color="lightOrange">
        {sectionTitle}
      </Text>
      <SkillsAccordion skills={skills} />
      <InfiniteScrollBlock techLogos={techLogos} />
    </Flex>
  );
};