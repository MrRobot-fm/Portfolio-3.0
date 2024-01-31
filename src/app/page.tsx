import { Container } from "@chakra-ui/react";
import { homepageData } from "@/utils/constants/data/homepage";
import { HeroSection } from "@/components/organism/HeroSection/HeroSection";
import { ProjectsSection } from "@/components/organism/ProjectsSection/ProjectsSection";

export default function Home() {
  const { heroBlock, projectsBlock } = homepageData;

  return (
    <Container>
      <HeroSection {...heroBlock} />
      <ProjectsSection {...projectsBlock} />
    </Container>
  );
}
