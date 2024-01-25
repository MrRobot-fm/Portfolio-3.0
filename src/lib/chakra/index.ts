import { extendTheme } from "@chakra-ui/react";
import { breakpoints, global, sizes, space } from "@/lib/chakra/theme";

export const theme = extendTheme({
  breakpoints,
  sizes,
  space,
  styles: {
    global,
  },
});
