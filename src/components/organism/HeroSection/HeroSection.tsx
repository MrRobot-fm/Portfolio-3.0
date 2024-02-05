import { Flex, Heading, Text } from "@chakra-ui/react";
import { PAGES_PATH } from "@/utils/constants/pages-path";
import { Button } from "@/components/atoms/Button/Button";
import type { HeroSectionProps } from "./HeroSection.props";

export const HeroSection = (props: HeroSectionProps) => {
  const { label, title, subTitle, ctaLabel, sectionProps } = props;

  return (
    <Flex
      flexDir="column"
      maxW={{ base: 1200, xl: 1600 }}
      gap={{ base: 48, md: 80 }}
      {...sectionProps}
    >
      <Flex flexDir="column" gap={40}>
        <Text color="dark.70" fontWeight="bold">
          {label}
        </Text>
        <Heading as="h1" size="displayBig" color="dark.70">
          {title}
          <Text as="span" display="block" size="displayBig" color="lightOrange">
            {subTitle}
          </Text>
        </Heading>
      </Flex>
      <Button
        url={PAGES_PATH.PROJECTS}
        label={ctaLabel}
        variant="primary"
        icon={{ name: "arrow" }}
      />
    </Flex>
  );
};
