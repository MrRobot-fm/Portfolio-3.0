import type { ImageProps } from "next/image";

export type BaseImageAttribs =
  | "src"
  | "alt"
  | "sizes"
  | "quality"
  | "placeholder"
  | "blurDataURL"
  | "loader";

export type ImageAttribs =
  | "width"
  | "height"
  | "src"
  | "alt"
  | "fill"
  | "sizes"
  | "quality"
  | "priority"
  | "placeholder"
  | "blurDataURL"
  | "loader"
  | "onError"
  | "onLoadingComplete"
  | "layout";

export type ImageModel = Partial<Pick<ImageProps, BaseImageAttribs>>;
