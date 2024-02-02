import { ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { staggeredMoveUpAndShow50px } from "@/utils/animations/animations";
import { Button } from "@/components/atoms/Button/Button";
import type { SocialLinkProps } from "./SocialLink.props";

export const SocialLink = (props: SocialLinkProps) => {
  const { index, socialLinks, ...rest } = props;

  return (
    <ListItem
      as={motion.li}
      key={socialLinks.label}
      variants={staggeredMoveUpAndShow50px({ index })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Button label={socialLinks.label} url={socialLinks.url} {...rest} />
    </ListItem>
  );
};
