import { defineStyleConfig } from "@chakra-ui/react";
import { textStyles } from "@/lib/chakra/theme";

const sizes = {
  ...textStyles,
};

export const Text = defineStyleConfig({
  defaultProps: { size: "body" },
  sizes,
});
