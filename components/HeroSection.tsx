"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-4">
      <div className="grid grid-cols-1 sm:grid-cols-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-9 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-brand text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-bold">
            <span className="text-brand">
              Hello, I&apos;m Sagar{" "}
            </span>
            </h1>
            <h3>
                <span className="text-gray-700 dark:text-white/80 text-xl sm:text-xl lg:text-2xl lg:leading-normal font-medium">I am into </span>
                <span className="text-gray-950 dark:text-white lg:text-3xl font-bold "><TypeAnimation
              sequence={[
                "Software Development",
                1000,
                "System Design",
                1000,
                "Data Engineering",
                1000,
                "DevOps",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /></span>
            
            </h3>
         
          <p className="text-gray-700 font-light lg:text-lg sm:text-base mb-6  dark:text-white/80">
          I design and build scalable, reliable systems, from backend services and data pipelines to cloud infrastructure and automated deployments. Lately, I've been exploring AI-driven development.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-3 place-self-center "
        >
          <div className="rounded-full w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] relative">
            
            <Image
              src="/sagarmaiti26.jpg"
              alt="Sagar Maiti"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full border-[0.1rem]  borderBlack shadow-xl "
              width={350}
              height={350}
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;