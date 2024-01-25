import { extendTheme } from "@chakra-ui/react";
import { Heading, Text } from "@/lib/chakra/components";
import {
  breakpoints,
  fonts,
  global,
  sizes,
  space,
  textStyles,
} from "@/lib/chakra/theme";

export const theme = extendTheme({
  breakpoints,
  sizes,
  space,
  fonts,
  textStyles,
  components: {
    Heading,
    Text,
  },
  styles: {
    global,
  },
});
