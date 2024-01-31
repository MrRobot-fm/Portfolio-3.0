import type { ChakraProps, ThemingProps } from "@chakra-ui/react";
import { ProjectModel } from "@/utils/constants/projects-map";

export type ProjectCardProps = ThemingProps & ChakraProps & ProjectModel;
