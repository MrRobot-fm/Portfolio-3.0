import type { TechLogoMapModel } from "@/utils/constants/skills-logo-map";

export type SkillsSectionProps = {
  sectionTitle: string;
  skills: {
    title: string;
    tech: string[];
  }[];
  techLogos: TechLogoMapModel[];
};
