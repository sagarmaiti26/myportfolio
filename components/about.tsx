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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      
        <span className="font-light">I'm an <span className="font-medium">Computer Science Undergraduate from Calcutta Institute Of Engineering and Management.</span>{" "}I decided to pursue my
        passion for programming and my journey in web development began during my Third year of college.{" "}I'm passionate about creating beautiful, functional, and user-friendly websites and applications. My core stack
        is{" "}</span>
       
        <span className="font-medium">
          React.js, Next.js, Node.js, Express.js and MongoDB.{" "}
        </span>
         
        <span className="font-light">But I am always looking to
        learn new technologies. I am currently looking for a <span className="font-medium">Full-time position as a software
        developer.</span> </span>
      </p>
      <p></p>
    </motion.section>
  );
}
