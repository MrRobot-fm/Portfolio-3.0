import type { HeroSectionProps } from "@/components/organism/HeroSection/HeroSection.props";

type HomePageDataModel = {
  heroBlock: HeroSectionProps;
};

export const homepageData: HomePageDataModel = {
  heroBlock: {
    label: "Stop thinking, start doing!",
    title:
      "Hi there, my name is Federico and i'm a passionate Front-end developer.",
    subTitle: "Let's discover my world!",
    ctaLabel: "My projects",
  },
};
