import { projectsMap } from "@/utils/constants/projects-map";
import type { HeroSectionProps } from "@/components/organism/HeroSection/HeroSection.props";
import type { ProjectsSectionProps } from "@/components/organism/ProjectsSection/ProjectsSections.props";

type HomePageDataModel = {
  heroBlock: HeroSectionProps;
  projectsBlock: ProjectsSectionProps;
};

export const homepageData: HomePageDataModel = {
  heroBlock: {
    label: "Stop thinking, start doing!",
    title:
      "Hi there, my name is Federico and i'm a passionate Front-end developer.",
    subTitle: "Let's discover my world!",
    ctaLabel: "My projects",
  },
  projectsBlock: {
    projects: projectsMap,
  },
};
