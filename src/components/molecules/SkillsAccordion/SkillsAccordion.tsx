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
            <Text as="h2">{item.title}</Text>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            {item.tech.map((tech, index) => (
              <Text key={`${index}-${tech}`}>{tech}</Text>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
