import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { moveUpScaleAndShowVariant100px } from "@/utils/animations/animations";
import { PAGES_PATH } from "@/utils/constants/pages-path";
import { Button } from "@/components/atoms/Button/Button";

export const AboutMeList = ({
  descriptionLabel,
  description,
}: {
  descriptionLabel: string;
  description: { text: string }[];
}) => {
  return (
    <Flex flexDir={{ base: "column", lg: "row" }} gap={{ base: 20, lg: 0 }}>
      <Box
        as={motion.div}
        flex={2}
        color="lightOrange"
        variants={moveUpScaleAndShowVariant100px}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Text as="h3" size="heading2" fontWeight={500}>
          {descriptionLabel}
        </Text>
      </Box>
      <Flex flexDir="column" flex={6} gap={40}>
        {description.map((description, index) => (
          <Box
            key={index}
            color="dark.70"
            as={motion.div}
            variants={moveUpScaleAndShowVariant100px}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <Text size="heading2" fontWeight={400}>
              {description.text}
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex
        flex={2}
        justifyContent={{ base: "start", lg: "end" }}
        pt={{ base: 30, lg: 0 }}
        as={motion.div}
        variants={moveUpScaleAndShowVariant100px}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Button
          url={PAGES_PATH.CONTACTS}
          label="join me"
          variant="secondary"
          icon={{ name: "arrow" }}
        />
      </Flex>
    </Flex>
  );
};
