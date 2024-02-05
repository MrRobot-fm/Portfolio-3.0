"use client";

import { Box } from "@chakra-ui/react";
import { useMousePosition } from "@/hooks/use-mouse-position";

export const Cursor = () => {
  const { position } = useMousePosition();

  return (
    <Box
      w={20}
      h={20}
      display={{ base: "none", lg: "block" }}
      position="fixed"
      rounded="full"
      bg="primary.white"
      zIndex={10000}
      pointerEvents="none"
      transform="translate(-50%, -50%)"
      mixBlendMode="difference"
      transition="transform 100ms ease"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};
