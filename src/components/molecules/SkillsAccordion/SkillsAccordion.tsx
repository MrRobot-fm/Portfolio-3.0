"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";

export const SkillsAccordion = ({
  skills,
}: {
  skills: { title: string; tech: string[] }[];
}) => {
  return (
    <Accordion allowMultiple>
      {skills.map((item, index) => (
        <AccordionItem key={`${index}-${item.title}`}>
          <AccordionButton>
            <Text
              as="h2"
              flex="1"
              size="heading1"
              fontWeight={500}
              textAlign="left"
            >
              {item.title}
            </Text>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            {item.tech.map((tech, index) => (
              <Text key={`${index}-${tech}`}>{tech}</Text>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}

      {/* <AccordionItem>
        <AccordionButton>
          <Text
            as="h2"
            flex="1"
            size="heading1"
            fontWeight={500}
            textAlign="left"
          >
            Libraries & Frameworks
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text
            as="h2"
            flex="1"
            size="heading1"
            fontWeight={500}
            textAlign="left"
          >
            Code Quality & Standards
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text
            as="h2"
            flex="1"
            size="heading1"
            fontWeight={500}
            textAlign="left"
          >
            Tools & Platforms
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem> */}
    </Accordion>
  );
};
