import type { BoxProps } from "@chakra-ui/react";

export interface HeroSectionProps {
  label: string;
  title: string;
  subTitle: string;
  ctaLabel: string;
  sectionProps?: BoxProps;
}
