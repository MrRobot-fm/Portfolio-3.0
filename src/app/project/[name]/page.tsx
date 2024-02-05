"use client";

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import v from "voca";
import {
  moveUpScaleAndShowVariant100px,
  showAndScaleVariant,
} from "@/utils/animations/animations";
import { homepageData } from "@/utils/constants/data/homepage";
import { projectDetailsData } from "@/utils/constants/data/project-details";
import { Button } from "@/components/atoms/Button/Button";
import { CustomImage } from "@/components/atoms/CustomImage/CustomImage";
import { ProjectDetailsInfo } from "@/components/molecules/ProjectDetailsInfo/ProjectDetailsInfo";
import { ProjectsSection } from "@/components/organism/ProjectsSection/ProjectsSection";

export default function ProjectDetailsPage({
  params,
}: {
  params: { name: string };
}) {
  const projectDetail = projectDetailsData.filter(
    (item) => v.slugify(item.name) === params.name
  );

  const { projectsBlock } = homepageData;

  const filteredProjects = projectsBlock.projects.filter(
    (project) =>
      project.projectName !== v.titleCase(params.name).replace("-", " ")
  );

  return (
    <Container alignItems="center">
      {projectDetail.map((project, index) => (
        <Flex
          key={`${index}-${project.name}`}
          w="full"
          flexDir="column"
          alignItems="center"
          overflow="hidden"
          gap={{ base: 38, lg: 108 }}
        >
          <Flex
            display="flex"
            flexDir="column"
            w="full"
            maxW={{ base: 550, md: 840 }}
            gap={48}
          >
            <Text
              as={motion.h1}
              size="displayBig"
              fontSize={{ base: 50, md: 70, lg: 90 }}
              textAlign="center"
              fontWeight={700}
              textTransform="uppercase"
              variants={moveUpScaleAndShowVariant100px({})}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {project.name}
            </Text>
            <Flex
              as={motion.div}
              w="full"
              flexDir={{ base: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
              gap={{ base: 26, md: 64 }}
              variants={moveUpScaleAndShowVariant100px({ delay: 0.6 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {project.links.map((link, index) => {
                const colorScheme = index === 0 ? "light" : "dark";

                return (
                  <Button
                    key={`${index}-${link.label}`}
                    label={link.label}
                    url={link.url}
                    variant="tertiary"
                    icon={{ name: "arrow" }}
                    colorScheme={colorScheme}
                  />
                );
              })}
            </Flex>
          </Flex>
          <Box
            as={motion.div}
            w="full"
            maxH={{ lg: 541, xl: 761 }}
            aspectRatio="4/3"
            bg="primary.white"
            variants={moveUpScaleAndShowVariant100px({ delay: 1 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <CustomImage
              src={project.mainImage}
              alt={project.name}
              imageFit="contain"
            />
          </Box>

          <Flex flexDir="column" gap={{ base: 90, md: 180 }} py={80} maxW={840}>
            {project.info.map((detail, index) => {
              const isReverse = index % 2 === 0 ? false : true;
              return (
                <ProjectDetailsInfo
                  key={`${index}-${detail.label}`}
                  index={index}
                  label={detail.label}
                  description={detail.text}
                  isReverse={isReverse}
                />
              );
            })}
          </Flex>

          <Box
            as={motion.div}
            w="full"
            maxH={{ lg: 541, xl: 761 }}
            aspectRatio="4/3"
            bg="primary.white"
            variants={moveUpScaleAndShowVariant100px({})}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <CustomImage
              src={project.detailImage}
              alt={project.name}
              imageFit="contain"
            />
          </Box>
          <Flex
            as={motion.div}
            w="full"
            flexDir={{ base: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            gap={{ base: 26, md: 64 }}
            pt={60}
            variants={showAndScaleVariant({ delay: 0.4 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {project.links.map((link, index) => {
              const colorScheme = index === 0 ? "light" : "dark";
              return (
                <Button
                  key={`${index}-${link.label}`}
                  label={link.label}
                  url={link.url}
                  variant="tertiary"
                  icon={{ name: "arrow" }}
                  colorScheme={colorScheme}
                />
              );
            })}
          </Flex>
        </Flex>
      ))}
      <Flex flexDir="column" gap={80} w="full">
        <Text
          size="heading4"
          textTransform="uppercase"
          fontWeight={600}
          color="dark.70"
          textAlign="start"
        >
          (More Projects)
        </Text>
        <ProjectsSection projects={filteredProjects} />
      </Flex>
    </Container>
  );
}
