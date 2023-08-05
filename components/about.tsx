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
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am experienced software developer with 5 years of experience. Skilled in
        programming, web development, e-commerce, back-end, VR, AR, and video games.
        Developed core data visualization applications used in{" "}
        <span className="font-bold text-blue-500">CERN's</span> largest experiment
        and presented them at ICHEP2020. Currently working as a software developer at
        EPAM.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing chess,
        workout, running and reading. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">history and philosophy</span>
      </p>
    </motion.section>
  );
}
