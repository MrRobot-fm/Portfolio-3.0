import { Container } from "@chakra-ui/react";
import { homepageData } from "@/utils/constants/data/homepage";
import { AboutMeSection } from "@/components/organism/AboutSection/AboutMeSection";
import { HeroSection } from "@/components/organism/HeroSection/HeroSection";
import { ProjectsSection } from "@/components/organism/ProjectsSection/ProjectsSection";
import { SkillsSection } from "@/components/organism/SkillsSection/SkillsSection";

export default function Home() {
  const { heroBlock, projectsBlock, skillsBlock, aboutMeBlock } = homepageData;

  return (
    <Container>
      <HeroSection {...heroBlock} />
      <ProjectsSection {...projectsBlock} />
      <SkillsSection {...skillsBlock} />
      <AboutMeSection {...aboutMeBlock} />
    </Container>
  );
}
