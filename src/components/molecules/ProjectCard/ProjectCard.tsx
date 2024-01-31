"use client";

import {
  LinkBox,
  LinkOverlay,
  chakra,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { moveUpScaleAndShowVariant50 } from "@/utils/animations/animations";
import { Button } from "@/components/atoms/Button/Button";
import { CustomImage } from "@/components/atoms/CustomImage/CustomImage";
import type { ProjectCardProps } from "./ProjectCardProps";

export const ProjectCard = (props: ProjectCardProps) => {
  const {
    projectName,
    tag,
    image,
    url,
    descriptions,
    liveDemoUrl,
    size,
    variant,
    colorScheme,
    ...rest
  } = props;

  const styles = useMultiStyleConfig("ProjectCard", {
    ...{ size, variant, colorScheme, ...rest },
  });

  return (
    <LinkBox sx={styles.linkBox}>
      <chakra.div __css={styles.root}>
        <chakra.div __css={styles.cardWrapper} {...rest}>
          <chakra.div __css={styles.infoWrapper}>
            <chakra.div
              as={motion.div}
              __css={styles.descriptionWrapper}
              variants={moveUpScaleAndShowVariant50}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3, once: true }}
            >
              <chakra.p __css={styles.projectLabel}>{`(${tag})`}</chakra.p>
              <chakra.h2 __css={styles.projectName}>{projectName}</chakra.h2>
              <chakra.p __css={styles.projectDescription}>
                {descriptions}
              </chakra.p>
            </chakra.div>
            <chakra.div
              as={motion.div}
              __css={styles.buttonWrapper}
              variants={moveUpScaleAndShowVariant50}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3, once: true }}
              zIndex={100}
            >
              <Button
                url={liveDemoUrl}
                label="live demo"
                size="link"
                icon={{ name: "arrow" }}
                textStyle="body"
                fontWeight={700}
              />
            </chakra.div>
          </chakra.div>
          <LinkOverlay as={NextLink} href={url}>
            <chakra.div
              as={motion.div}
              __css={styles.imageContainer}
              variants={moveUpScaleAndShowVariant50}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3, once: true }}
            >
              <chakra.div __css={styles.imageWrapper}>
                <CustomImage src={image} alt={projectName} imageFit="contain" />
              </chakra.div>
            </chakra.div>
          </LinkOverlay>
        </chakra.div>
      </chakra.div>
    </LinkBox>
  );
};
