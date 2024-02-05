import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { moveXAndShowVariant10 } from "@/utils/animations/animations";
import { AnimatedSquare } from "@/components/atoms/AnimatedSquare/AnimatedSquare";

export const ProjectDetailsInfo = ({
  label,
  description,
  isReverse = false,
}: {
  label: string;
  description: string;
  isReverse?: boolean;
  index?: number;
}) => {
  return (
    <Flex w="full">
      <Flex
        as={motion.div}
        flexDir="column"
        gap={{ base: 24, md: 56 }}
        w="full"
        variants={moveXAndShowVariant10({ isReverse })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Text
          textTransform="uppercase"
          fontWeight={600}
          color="lightOrange"
          textAlign={isReverse ? "end" : "start"}
        >
          {`(${label})`}
        </Text>
        <Flex
          flexDir={{ base: "column", lg: isReverse ? "row-reverse" : "row" }}
          gap={48}
        >
          <Text
            size="heading3"
            flex={3}
            textAlign={isReverse ? "end" : "start"}
          >
            {description}
          </Text>
          <Box
            display="flex"
            flex={1}
            px={5}
            justifyContent={{
              base: isReverse ? "end" : "start",
              lg: isReverse ? "start" : "end",
            }}
          >
            <AnimatedSquare />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
