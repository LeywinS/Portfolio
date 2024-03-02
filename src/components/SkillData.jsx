"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
const SkillData = ({ src, width, height, index }) => {
  //L'animation apparait qu'une fois
  const { ref, inView } = useInView({ triggerOnce: true });
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animDelay }}
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

export default SkillData;
