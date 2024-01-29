import type {
  ChakraProps,
  SkeletonProps,
  ThemingProps,
} from "@chakra-ui/react";
import type { ImageProps } from "next/image";
import type { ImageAttribs } from "@/utils/types/model/image.model";

export type CustomImageProps = ThemingProps &
  Partial<Pick<ImageProps, ImageAttribs>> &
  Omit<ChakraProps, "fill"> &
  Omit<SkeletonProps, "fill"> & {
    imageFit?: "cover" | "contain";
    loadingTime?: number;
  };
