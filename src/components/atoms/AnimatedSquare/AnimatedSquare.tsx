"use client";

import { Box } from "@chakra-ui/react";
import { infiniteRotateAnimation } from "@/utils/animations/animations";

export const AnimatedSquare = () => {
  return (
    <Box w={30} h={30} bg="lightOrange" animation={infiniteRotateAnimation} />
  );
};
