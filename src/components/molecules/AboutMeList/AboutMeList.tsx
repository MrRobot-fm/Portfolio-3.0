import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { moveUpScaleAndShowVariant100px } from "@/utils/animations/animations";
import { AnimatedSquare } from "@/components/atoms/AnimatedSquare/AnimatedSquare";

export const AboutMeList = ({
  descriptionLabel,
  description,
}: {
  descriptionLabel: string;
  description: { text: string }[];
}) => {
  return (
    <Flex flexDir="column" gap={{ base: 20, lg: 60 }}>
      <Box
        as={motion.div}
        flex={2}
        color="lightOrange"
        variants={moveUpScaleAndShowVariant100px({})}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Text
          as="h3"
          size="heading3"
          fontWeight={500}
          textTransform="uppercase"
        >
          {`(${descriptionLabel})`}
        </Text>
      </Box>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Flex flexDir="column" flex={5} gap={40}>
          {description.map((description, index) => (
            <Box
              key={index}
              color="dark.70"
              as={motion.div}
              variants={moveUpScaleAndShowVariant100px({})}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Text size="heading2" fontWeight={500}>
                {description.text}
              </Text>
            </Box>
          ))}
        </Flex>
        <Flex
          flex={2}
          justifyContent={{ base: "start", md: "center" }}
          pt={{ base: 30, lg: 0 }}
          as={motion.div}
          variants={moveUpScaleAndShowVariant100px({})}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AnimatedSquare />
        </Flex>
      </Flex>
    </Flex>
  );
};
