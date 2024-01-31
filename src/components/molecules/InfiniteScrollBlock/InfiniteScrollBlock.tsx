"use client";

import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { infiniteScrollAnimation } from "@/utils/animations/animations";
import type { TechLogoMapModel } from "@/utils/constants/skills-logo-map";
import { CustomImage } from "@/components/atoms/CustomImage/CustomImage";

export const InfiniteScrollBlock = ({
  techLogos,
}: {
  techLogos: TechLogoMapModel[];
}) => {
  return (
    <Flex
      as={motion.div}
      w="full"
      position="relative"
      display="flex"
      overflow="hidden"
      h="fit-content"
      pt={{ md: 40 }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 3.5, type: "tween" },
      }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <Box whiteSpace="nowrap" animation={infiniteScrollAnimation}>
        {techLogos.map((item, index) => (
          <Box key={index} w={45} h={45} display="inline-flex" mx={30}>
            <CustomImage src={item?.src} alt={item.name} />
          </Box>
        ))}
      </Box>
      <Box whiteSpace="nowrap" animation={infiniteScrollAnimation}>
        {techLogos.map((item, index) => (
          <Box key={index} w={45} h={45} display="inline-flex" mx={30}>
            <CustomImage src={item?.src} alt={item.name} />
          </Box>
        ))}
      </Box>
      <Box whiteSpace="nowrap" animation={infiniteScrollAnimation}>
        {techLogos.map((item, index) => (
          <Box key={index} w={45} h={45} display="inline-flex" mx={30}>
            <CustomImage src={item?.src} alt={item.name} />
          </Box>
        ))}
      </Box>
    </Flex>
  );
};
