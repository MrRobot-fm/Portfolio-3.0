import { defineStyleConfig } from "@chakra-ui/react";
import { textStyles } from "@/lib/chakra/theme";

const sizes = {
  ...textStyles,
};

export const Heading = defineStyleConfig({
  defaultProps: { size: "display" },
  sizes,
});
