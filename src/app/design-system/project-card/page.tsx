import { Container } from "@chakra-ui/react";
import { projectsMap } from "@/utils/constants/projects-map";
import { ProjectCard } from "@/components/molecules/ProjectCard/ProjectCard";

export default function ProjectCardModel() {
  return (
    <Container px={{ base: 8, md: 24 }} h="100vh">
      {projectsMap.map((project, index) => (
        <ProjectCard key={`${index}-${project.projectName}`} {...project} />
      ))}
    </Container>
  );
}
