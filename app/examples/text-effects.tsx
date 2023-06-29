"use client";
import React from "react";

interface MotionWrapperProps {
  text: string;
}

export function TypingEffect({ text }: MotionWrapperProps) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 200);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i]);

  return (
    <h1 className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-xl md:leading-[5rem]">
      {displayedText ? displayedText : ""}
    </h1>
  );
}

import { motion } from "framer-motion";

export function BlurIn({ text }: { text: string }) {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants1}
      className="text-center font-display text-4xl w-full font-bold tracking-[-0.02em] drop-shadow-sm md:text-xl md:leading-[5rem]"
    >
      {text}
    </motion.h1>
  );
}
