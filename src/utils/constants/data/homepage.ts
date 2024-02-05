import { projectsMap } from "@/utils/constants/projects-map";
import { techLogoMap } from "@/utils/constants/skills-logo-map";
import type { AboutMeSectionProps } from "@/components/organism/AboutSection/AboutMeSection.props";
import type { HeroSectionProps } from "@/components/organism/HeroSection/HeroSection.props";
import type { ProjectsSectionProps } from "@/components/organism/ProjectsSection/ProjectsSections.props";
import type { SkillsSectionProps } from "@/components/organism/SkillsSection/SkillsSection.props";

type HomePageDataModel = {
  heroBlock: HeroSectionProps;
  projectsBlock: ProjectsSectionProps;
  skillsBlock: SkillsSectionProps;
  aboutMeBlock: AboutMeSectionProps;
};

export const homepageData: HomePageDataModel = {
  heroBlock: {
    label: "Stop thinking, start doing!",
    title:
      "Hi there! My name is Federico and i'm a passionate Front-end developer.",
    subTitle: "Let's discover my world!",
    ctaLabel: "My projects",
  },
  projectsBlock: {
    projects: projectsMap,
  },
  skillsBlock: {
    sectionTitle: "My Skills",
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
  aboutMeBlock: {
    descriptionLabel: "About Me",
    description: [
      {
        text: "Hi, my name is Federico, i was born in '87 and i live in Rome. After years of experience in the pharmaceutical distribution industry, i decided to get back into the game and follow my passion for web development with the goal of creating a positive impact on people through my products and services, leaving a part of me in every line of code.",
      },
      {
        text: "I describe myself as a person who is precise, reliable and curious about learning new things to achieve my goals. I love to travel and explore new horizons. I like to work on minimal, clean and modern graphical interfaces to create usable UX/UI side applications that strike the user's eye at first impact.",
      },
    ],
  },
};
