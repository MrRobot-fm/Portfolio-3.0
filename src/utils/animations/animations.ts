import { Variants } from "framer-motion";

export const moveRightAndShow = ({
  state,
  index,
}: {
  state: boolean;
  index: number;
}) => {
  return {
    transition: "transform 0.3s, opacity 0.7s ease",
    transform: state ? "translateX(0)" : "translateX(100%)",
    transitionDelay: state ? `calc(0.2s*${(index as number) + 1})` : "",
    opacity: state ? 1 : 0,
  };
};

export const moveRightAndShowVariant: Variants = {
  hidden: {
    x: "-50%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.6, type: "tween" },
  },
};

export const moveLeftAndShowVariant: Variants = {
  hidden: {
    x: "50%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, type: "tween" },
  },
};

export const moveUpScaleAndShowVariant: Variants = {
  hidden: {
    y: "50%",
    opacity: 0,
    scale: 0.96,
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, type: "tween" },
  },
};

export const moveDownAndShowVariant: Variants = {
  hidden: {
    y: "-50%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, type: "tween" },
  },
};
