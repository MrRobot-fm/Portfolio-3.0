import { keyframes } from "@emotion/react";
import type { Variants } from "framer-motion";

const scroll = keyframes`
    0%{
        transform: translateX(0);
    }
    
    100%{
        transform: translateX(-100%);
    }
`;

export const infiniteScrollAnimation = `${scroll} 10s linear infinite`;

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

export const moveRightAndShowVariant50: Variants = {
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

export const moveRightAndShowVariant10: Variants = {
  hidden: {
    x: "-10%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.8, type: "tween" },
  },
};

export const moveLeftAndShowVariant50: Variants = {
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

export const moveUpScaleAndShowVariant50: Variants = {
  hidden: {
    y: "50%",
    opacity: 0,
    scale: 0.98,
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, type: "tween" },
  },
};

export const moveUpScaleAndShowVariant100px: Variants = {
  hidden: {
    y: 100,
    scale: 0.98,
    opacity: 0,
  },
  show: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, type: "tween" },
  },
};

export const moveDownAndShowVariant50: Variants = {
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

export const projectCardShowAndScaleVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.7,
    },
  },
};

export const staggeredMoveUpAndShow50px = ({
  index,
}: {
  index: number;
}): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.2,
        type: "tween",
      },
    },
  };
};

export const moveRightAndShow100px = ({
  delay = 0,
}: {
  delay?: number;
}): Variants => {
  return {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ...(delay && { delay }), type: "tween" },
    },
  };
};
