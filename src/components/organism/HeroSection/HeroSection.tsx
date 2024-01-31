import { Flex, Heading, Text } from "@chakra-ui/react";
import { Button } from "@/components/atoms/Button/Button";
import type { HeroSectionProps } from "./HeroSection.props";

export const HeroSection = (props: HeroSectionProps) => {
  const { label, title, subTitle, ctaLabel, sectionProps } = props;

  return (
    <Flex
      flexDir="column"
      maxW={1200}
      gap={{ base: 48, md: 80 }}
      {...sectionProps}
    >
      <Flex flexDir="column" gap={40}>
        <Text color="dark.70" fontWeight="bold">
          {label}
        </Text>
        <Heading as="h1" color="dark.70">
          {title}
          <Text as="span" display="block" size="display" color="lightOrange">
            {subTitle}
          </Text>
        </Heading>
      </Flex>
      <Button
        url="#projects"
        label={ctaLabel}
        variant="primary"
        icon={{ name: "arrow" }}
      />
    </Flex>
  );
};
