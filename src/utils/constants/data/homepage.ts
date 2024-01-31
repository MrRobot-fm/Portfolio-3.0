import { projectsMap } from "@/utils/constants/projects-map";
import type { HeroSectionProps } from "@/components/organism/HeroSection/HeroSection.props";
import type { ProjectsSectionProps } from "@/components/organism/ProjectsSection/ProjectsSections.props";
import type { SkillsSectionProps } from "@/components/organism/SkillsSection/SkillsSection.props";
import { techLogoMap } from "../skills-logo-map";

type HomePageDataModel = {
  heroBlock: HeroSectionProps;
  projectsBlock: ProjectsSectionProps;
  skillsBlock: SkillsSectionProps;
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
  skillsBlock: {
    sectionTitle: " My Skills",
    skills: [
      {
        title: "Languages & Markups",
        tech: ["Html", "Css", "Sass", "Javascript", "Typescript"],
      },
      {
        title: "Libraries & Frameworks",
        tech: [
          "React",
          "Next Js",
          "Redux Toolkit",
          "Tailwind Css",
          "Tailwind Variants",
          "Chakra UI",
          "Tanstack Query",
          "React Hook Form",
          "Framer Motion",
        ],
      },
      {
        title: "Code Quality & Standards",
        tech: ["Prettier", "ESLint", "Husky", "Conventional Commits"],
      },
      {
        title: "Tools & Platforms",
        tech: ["Git", "Github", "Figma", "Trello", "Slack"],
      },
    ],
    techLogos: techLogoMap,
  },
};
