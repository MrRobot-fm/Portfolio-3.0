"use client";

import { Box, Skeleton, useMultiStyleConfig } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import type { CustomImageProps } from "./CustomImage.props";

export const CustomImage = (props: CustomImageProps) => {
  const {
    src = "/",
    alt = "image",
    fill = true,
    priority,
    quality,
    placeholder,
    blurDataURL,
    size,
    sizes = "75vw",
    imageFit = "cover",
    fadeDuration,
    loadingTime = 0,
    ...rest
  } = props;

  const { container, skeleton } = useMultiStyleConfig("CustomImage", { size });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadingInterval = () => {
    setTimeout(() => {
      setIsLoading(true);
    }, loadingTime * 1000);
  };

  return (
    <Box __css={container} {...rest}>
      <Skeleton sx={skeleton} isLoaded={isLoading} fadeDuration={fadeDuration}>
        <Image
          fill={fill}
          priority={priority}
          quality={quality}
          sizes={sizes}
          alt={alt}
          src={src}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          style={{ objectFit: imageFit }}
          onLoad={loadingInterval}
        />
      </Skeleton>
    </Box>
  );
};
