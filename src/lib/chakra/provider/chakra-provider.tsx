"use client";

import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { theme } from "@/lib/chakra";

export const ChakraProviders = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
