"use client";

import { motion } from "framer-motion";

import React from "react";

import { useSectionInView } from "hooks/useSectionInView";

import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[52rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 space-y-3">
        <p>
          🛠️ 5 years of hands-on experience in crafting innovative software
          solutions. Proficient in a wide range of programming languages and
          technologies for both web and immersive experiences.
        </p>
        <p>
          👨‍💻 At the heart of it, I'm a problem solver. My expertise spans the realms
          of programming, web development, e-commerce, back-end architecture, and the
          exciting realms of VR, AR, and video game development.
        </p>
        <p>
          🔬 Notably, I've contributed to pioneering data visualization applications
          pivotal to <span className="font-bold text-blue-500">CERN's</span>{" "}
          experiments. My work was showcased at ICHEP2020, highlighting the fusion of
          technology and science.
        </p>
        <p>🚀 Currently working as a Software Developer at SohoHouse</p>
      </p>
    </motion.section>
  );
}
