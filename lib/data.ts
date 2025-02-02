import React from "react";
import { FaSchool } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdBusinessCenter } from "react-icons/md";
import wanderlust from "@/public/wanderlust.png";
import space from "@/public/spacePortfolio.png";
import portfolio from "@/public/portfolio.png";
import message from "@/public/message.png";
import stock from "@/public/stock.jpeg";
import pixelgenie from "@/public/pixelgenie.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

//Experience
export const experienceData = [
  {
    title: "Pointo",
    type: "Full Stack Developer",
    subject:
      "(TypeScript, ReactJs, NestJs, NodeJs, PostgreSQL, Sequelize, FireBase, AWS)",
    marks: "Kolkata - Onsite",
    icon: React.createElement(MdBusinessCenter),
    date: "Jan 2025 - Present",
  },
  {
    title: "Pointo",
    type: "Full Stack Developer Intern",
    subject:
      "(TypeScript, ReactJs, NodeJs, ExpressJs, SQL, Sequelize, FireBase, AWS)",
    marks: "Kolkata - Onsite",
    icon: React.createElement(MdBusinessCenter),
    date: "Sep 2024 - Dec 2024",
  },
  {
    title: "One24",
    type: "Frontend Developer Intern",
    subject: "(TypeScript, ReactJs, NextJs, TailwindCSS, Redux-Toolkit)",
    marks: "Remote",
    icon: React.createElement(MdBusinessCenter),
    date: "2023 - 2024",
  },
] as const;

//EDUCATION
export const educationData = [
  {
    title: "Calcutta Institute Of Enginnering and Management",
    type: "B.Tech | Computer Science Engineering",
    subject:
      "(DBMS, Computer Network, Data Structure & Algorithm, Cryptography, Cloud-Computing, Operating System, Compiler Design)",
    marks: "CGPA : 9.23",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Ghoshpur High School (H.S)",
    type: "12th",
    subject: "Physics | Chemistry | Mathematics",
    marks: "",
    icon: React.createElement(FaSchool),
    date: "2018 - 2019",
  },
  {
    title: "Pulsita Bholanath Vidya Niketan (H.S)",
    type: "10th",
    subject: "Science",
    marks: "",
    icon: React.createElement(FaSchool),
    date: "2016 - 2017",
  },
] as const;

// PROJECTS

export const projectsData = [
  {
    title: "PixelGenie",
    description:
      "A SaaS application with AI features such as image restoration, generative fill, object removal and recoloring with integrated payments and credits system.",
    tags: ["Next.js", "Node.js", "TypeScript", "MongoDB", "Clerk", "Stripe"],
    imageUrl: pixelgenie,
    link: "https://pixelgenie-x.vercel.app/",
  },
  {
    title: "iMessage",
    description:
      "A real-time messaging web app inspired by iMessage with features like real-time personal and group chats, active member indicator, photo sharing and much more",
    tags: ["Next.js", "Node.js", "Pusher", "TypeScript", "MongoDB"],
    imageUrl: message,
    link: "https://imessage-x.vercel.app/",
  },
  {
    title: "Wanderlust",
    description:
      "A property rental website which enables users to create accounts, add their property for listings, view them on an interactive map, and leave reviews",
    tags: ["Express.js", "Node.js", "MongoDB", "Bootstrap"],
    imageUrl: wanderlust,
    link: "https://wanderlust-x.vercel.app/",
  },

  {
    title: " Personal Portfolio",
    description:
      "A Portfolio features captivating animations and seamless transitions. Integrated with an email API for easy communication, it's responsive across devices.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Framer-Motion"],
    imageUrl: portfolio,
    link: "https://sagarmaiti.vercel.app/",
  },
  {
    title: "Space Portfolio",
    description:
      "A portfolio is inspired by the awe inspiring beauty of space exploration and features captivating animations and seamless transitions",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer-Motion"],
    imageUrl: space,
    link: "https://space-portolio-sagar.vercel.app/",
  },
  {
    title: "Stock Price Prediction Model",
    description:
      "Collaborated in a team to develop a stock price predictive model using machine learning and scikit learn python library.",
    tags: ["Linear-regression", "Python", "Machine Learning", "ScikitLearn"],
    imageUrl: stock,
    link: "https://github.com/sagarmaiti26/Stock-Price-Prediction/",
  },
] as const;
// SKILLS

export const skillsData = [
  // Front End
  { skill: "HTML", color: "red-600" },
  { skill: "CSS", color: "blue-600" },
  { skill: "Tailwind", color: "teal-400" },
  { skill: "Bootstrap", color: "purple-600" },
  { skill: "React", color: "sky-400" },
  { skill: "Next.js", color: "black" },
  { skill: "Material UI", color: "blue-500" },

  // Back End
  { skill: "JavaScript", color: "yellow-400" },
  { skill: "TypeScript", color: "blue-500" },
  { skill: "Node.js", color: "green-500" },
  { skill: "Express.js", color: "gray-800" },
  { skill: "Java", color: "blue-700" },
  { skill: "SpringBoot", color: "green-500" },
  { skill: "Hibernate", color: "gray-600" },

  { skill: "MongoDB", color: "green-500" },
  { skill: "MySQL", color: "blue-700" },

  // Tools and Languages
  { skill: "Git", color: "orange-600" },
  { skill: "Framer Motion", color: "blue-600" },
  { skill: "VS Code", color: "blue-600" },
] as const;
