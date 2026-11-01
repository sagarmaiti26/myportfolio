"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-gray-700 dark:text-white/80"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-light">I&apos;m a </span>
        <span className="font-medium">Software Development Engineer (SDE-2)</span>
        <span className="font-light"> at </span>
        <span className="font-medium">Pointo</span>
        <span className="font-light">.</span>
      </p>

      <p className="mb-3">
        <span className="font-light">My core stack is </span>
        <span className="font-medium text-brand">
          TypeScript, React.js, Next.js, Node.js, NestJS, PostgreSQL, Docker and
          AWS.
        </span>
        <span className="font-light"> I enjoy working on </span>
        <span className="font-medium text-brand">
          system design, data engineering and DevOps
        </span>
        <span className="font-light">
          , and lately I&apos;ve been exploring AI-driven development and
          learning how to build with AI.
        </span>
      </p>

      <p className="mb-3">
        <span className="font-light">I graduated in </span>
        <span className="font-medium">Computer Science</span>
        <span className="font-light"> from </span>
        <span className="font-medium">
          Calcutta Institute of Engineering and Management
        </span>
        <span className="font-light">.</span>
      </p>
    </motion.section>
  );
}
