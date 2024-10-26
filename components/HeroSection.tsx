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
          <h1 className="text-white text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-bold">
            <span className="text-gray-900">
              Hello, I&apos;m Sagar{" "}
            </span>
            </h1>
            <h3>
                <span className="dark:text-gray-900 text-white text-xl sm:text-xl lg:text-2xl lg:leading-normal font-medium">I am into </span>
                <span className="text-gray-900 dark:text-gray-100 lg:text-3xl font-bold "><TypeAnimation
              sequence={[
                "Full Stack Developement",
                1000,
                "Frontend Developement",
                1000,
                "Backend Developement",
                1000,
                "UI/UX Design",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /></span>
            
            </h3>
         
          <p className="text-gray-950 font-light lg:text-lg sm:text-base mb-6  dark:text-gray-950">
          I focus on developing beautiful and user friendly web applications.
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
              src="/SagarMaiti.png"
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