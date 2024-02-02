import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { moveRightAndShow100px } from "@/utils/animations/animations";

export const FooterLegalInfo = ({
  currentYear,
  label,
}: {
  currentYear: string;
  label: string;
}) => {
  return (
    <Box w="full" pt={70}>
      <Box maxW="fit-content">
        <Text
          as={motion.p}
          size="body"
          fontWeight={700}
          color="dark.50"
          variants={moveRightAndShow100px({ delay: 0.4 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >{`Ⓒ ${currentYear} ${label}`}</Text>
      </Box>
    </Box>
  );
};
