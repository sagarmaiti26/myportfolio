import React from "react";
import { FaSchool } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wanderlust from "@/public/wanderlust.png";
import space from "@/public/spacePortfolio.png";
import portfolio from "@/public/portfolio.png";
import message from "@/public/message.png";
import stock from "@/public/stock.jpeg";

// Section
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

//EDUCATION
export const educationData = [
  {
    title: "Calcutta Institute Of Enginnering and Management",
    type: "B.Tech | Computer Science Engineering",
    subject: "(DBMS, Computer Network, Data Structure & Algorithm, Cryptography, Cloud-Computing, Operating System, Compiler Design)",
    marks:
      "CGPA : 9.23"
    ,
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Ghoshpur High School (H.S)",
    type: "12th",
    subject: "Physics | Chemistry | Mathematics",
    marks:
      "",
    icon: React.createElement(FaSchool),
    date: "2018-2019",
  },
  {
    title: "Pulsita Bholanath Vidya Niketan(H.S)",
    type: "10th",
    subject: "Science",
    marks:
      "",
    icon: React.createElement(FaSchool),
    date: "2016-2017",
  },
] as const;

// PROJECTS

export const projectsData = [
  {
    title: "iMessage",
    description:
      "A real-time messaging web app inspired by iMessage with features like real-time personal and group chats, active member indicator, photo sharing and much more",
    tags: ["Next.js", "Node.js", "Pusher", "TypeScript", "MongoDB"],
    imageUrl: message,
    link: "https://imessage-x.vercel.app"
  }, {
    title: "Wanderlust",
    description:
      "A property rental website which enables users to create accounts, add their property for listings, view them on an interactive map, and leave reviews",
    tags: ["Express.js", "Node.js", "MongoDB", "Bootstrap"],
    imageUrl: wanderlust,
    link: "https://wanderlust-x.vercel.app"
  },

  
  {
    title: " Personal Portfolio",
    description:
      "A Portfolio features captivating animations and seamless transitions. Integrated with an email API for easy communication, it's responsive across devices.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Framer-Motion"],
    imageUrl: portfolio,
    link: "https://sagarmaiti.vercel.app"
  },
  {
    title: "Space Portfolio",
    description:
      "A portfolio is inspired by the awe inspiring beauty of space exploration and features captivating animations and seamless transitions",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer-Motion"],
    imageUrl: space,
    link: "https://space-portolio-sagar.vercel.app"
  },
  {
    title: "Stock Price Prediction",
    description:
      "Collaborated in a team to develop a stock price predictive model using machine learning and scikit learn python library.",
    tags: ["Machine Learning", "Python", "Typescript", "Scikit Learn"],
    imageUrl: stock,
    link: "https://github.com/sagarmaiti26/Stock-Price-Prediction"
  },
] as const;
// SKILLS

export const skillsData = [
  // Front End
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "React",
  "Next.js",
  "Material UI",

  // Back End
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Java",
  "SpringBoot",
  "Hibernate",

  "MongoDB",
  "MySQL",

  // Tools and Languages
  "Git",
  "Framer Motion",
  "VS Code"
] as const;
