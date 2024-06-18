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

        <span className="font-light">I'm a <span className="font-medium">B.Tech Computer Science Graduate <span className="font-light">from</span>  Calcutta Institute Of Engineering and Management.</span>{" "}I decided to pursue my
          passion for programming and my journey in web development began during my 3rd year of college.{" "}I'm passionate about creating beautiful and user-friendly web applications. My core stack
          is{" "}</span>

        <span className="font-medium">
          React.js, Next.js, Node.js, Express.js, MongoDB.  {" "}
        </span>

        I am also proficient in
        <span className="font-medium">{" "}
          Java, SQL, Data Structures and Algorithms.{" "}
        </span>

        <span className="font-light"> I am always looking to
          learn new technologies. Currently I am looking for a a full-time position that aligns with my skillset, where I can contribute to the company's growth and enhance my skills.</span>
      </p>
      <p></p>
    </motion.section>
  );
}
