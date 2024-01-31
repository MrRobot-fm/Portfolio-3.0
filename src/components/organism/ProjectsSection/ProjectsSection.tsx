"use client";

import { Flex } from "@chakra-ui/react";
import { ProjectCard } from "@/components/molecules/ProjectCard/ProjectCard";
import type { ProjectsSectionProps } from "./ProjectsSections.props";

export const ProjectsSection = (props: ProjectsSectionProps) => {
  const { projects } = props;
  return (
    <Flex as="section" id="projects" flexDir="column">
      {projects.map((project, index) => {
        const isEven =
          index % 2 === 0 ? { bg: "lightOrange" } : { bg: "primary.black" };

        return <ProjectCard key={index} {...{ ...isEven, ...project }} />;
      })}
    </Flex>
  );
};
