import { extendTheme } from "@chakra-ui/react";
import {
  Button,
  Container,
  CustomImage,
  Heading,
  Icon,
  ProjectCard,
  Text,
} from "@/lib/chakra/components";
import {
  breakpoints,
  colors,
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
  colors,
  components: {
    Heading,
    Text,
    Icon,
    Button,
    CustomImage,
    Container,
    ProjectCard,
  },
  styles: {
    global,
  },
});
