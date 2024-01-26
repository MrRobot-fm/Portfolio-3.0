import { Box } from "@chakra-ui/react";
import React from "react";
import { Button } from "../Button/Button";
import { ButtonProps } from "../Button/Button.props";

export const AnimatedTextLink = (props: ButtonProps) => {
  const { label, url, isMenuLink, ...rest } = props;

  return (
    <Box role="group" position="relative" overflow="hidden">
      <Box
        overflow="hidden"
        _groupHover={{ transform: "translateY(-100%)" }}
        transition="all 0.3s ease"
      >
        <Button label={label} url={url} isMenuLink={isMenuLink} {...rest} />
      </Box>
      <Box
        position="absolute"
        top="100%"
        _groupHover={{
          transform: "translateY(-100%)",
        }}
        transition="all 0.3s ease"
      >
        <Button
          label={label}
          url={url}
          _groupHover={{ opacity: 0.5 }}
          isMenuLink={isMenuLink}
          {...rest}
        />
      </Box>
    </Box>
  );
};
