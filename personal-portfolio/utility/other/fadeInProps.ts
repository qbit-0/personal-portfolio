import { motion, Variants } from "framer-motion";
import React from "react";

type Props = { children: React.ReactNode };

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
    rotate: 5,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.75,
    },
  },
};

export const fadeInProps = {
  component: motion.div,
  variants: variants,
  initial: "offscreen",
  whileInView: "onscreen",
  viewport: { once: true, amount: 0.2 },
};
