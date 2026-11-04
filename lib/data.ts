import message from '@/public/message.png';
import pixelgenie from '@/public/pixelgenie.png';
import wanderlust from '@/public/wanderlust.png';
import React from 'react';
import { FaSchool } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { MdBusinessCenter } from 'react-icons/md';

// Section
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

//Experience
export const experienceData = [
  {
    title: 'Pointo',
    subject: '(React.js, NestJS, PostgreSQL, Docker, AWS, Postman, Jira)',
    marks: 'Bangalore - Onsite',
    icon: React.createElement(MdBusinessCenter),
    date: 'Sep 2024 - Present',
    roles: [
      { title: 'SDE-2', date: 'Apr 2026 - Present', current: true },
      { title: 'SDE-1', date: 'Sep 2024 - Mar 2026' },
    ],
  },
  {
    title: 'One24',
    subject: '(TypeScript, ReactJs, NextJs, TailwindCSS, Redux-Toolkit)',
    marks: 'Remote',
    icon: React.createElement(MdBusinessCenter),
    date: 'Jan 2024 - Jun 2024',
    roles: [
      { title: 'Frontend Developer Intern', date: 'Jan 2024 - Jun 2024' },
    ],
  },
] as const;

//EDUCATION
export const educationData = [
  {
    title: 'Calcutta Institute Of Enginnering and Management',
    type: 'B.Tech | Computer Science Engineering',
    subject:
      '(DBMS, Computer Network, Data Structure & Algorithm, Cryptography, Cloud-Computing, Operating System, Compiler Design)',
    marks: 'CGPA : 9.23',
    icon: React.createElement(LuGraduationCap),
    date: '2019 - 2023',
  },
  {
    title: 'Ghoshpur High School (H.S)',
    type: '12th',
    subject: 'Physics | Chemistry | Mathematics',
    marks: '',
    icon: React.createElement(FaSchool),
    date: '2018 - 2019',
  },
  {
    title: 'Pulsita Bholanath Vidya Niketan (H.S)',
    type: '10th',
    subject: 'Science',
    marks: '',
    icon: React.createElement(FaSchool),
    date: '2016 - 2017',
  },
] as const;

// PROJECTS

export const projectsData = [
  {
    title: 'PixelGenie',
    description:
      'A SaaS application with AI features such as image restoration, generative fill, object removal and recoloring with integrated payments and credits system.',
    tags: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Clerk', 'Stripe'],
    imageUrl: pixelgenie,
    link: 'https://pixelgenie-x.vercel.app/',
  },
  {
    title: 'iMessage',
    description:
      'A real-time messaging web app inspired by iMessage with features like real-time personal and group chats, active member indicator, photo sharing and much more',
    tags: ['Next.js', 'Node.js', 'Pusher', 'TypeScript', 'MongoDB'],
    imageUrl: message,
    link: 'https://imessage-x.vercel.app/',
  },
  {
    title: 'Wanderlust',
    description:
      'A property rental website which enables users to create accounts, add their property for listings, view them on an interactive map, and leave reviews',
    tags: ['Express.js', 'Node.js', 'MongoDB', 'Bootstrap'],
    imageUrl: wanderlust,
    link: 'https://wanderlust-x.vercel.app/',
  },
] as const;
// SKILLS

export const skillsData = [
  // Languages
  { skill: 'JavaScript', color: 'yellow-400' },
  { skill: 'TypeScript', color: 'blue-500' },
  { skill: 'Python', color: 'blue-600' },

  // Frontend
  { skill: 'React.js', color: 'sky-400' },
  { skill: 'Next.js', color: 'black' },
  { skill: 'Redux', color: 'purple-600' },
  { skill: 'Tailwind', color: 'teal-400' },
  { skill: 'Bootstrap', color: 'purple-600' },
  { skill: 'Sass', color: 'pink-500' },

  // Backend
  { skill: 'Node.js', color: 'green-500' },
  { skill: 'Express.js', color: 'gray-800' },
  { skill: 'NestJS', color: 'red-600' },

  // Database
  { skill: 'PostgreSQL', color: 'blue-700' },
  { skill: 'MongoDB', color: 'green-500' },

  // AI
  { skill: 'Generative AI', color: 'purple-600' },
  { skill: 'LangChain', color: 'green-500' },
  { skill: 'LangGraph', color: 'teal-400' },
  { skill: 'RAG', color: 'blue-500' },
  { skill: 'MCP', color: 'orange-600' },

  // Developer Tools
  { skill: 'Git', color: 'orange-600' },
  { skill: 'AWS', color: 'orange-600' },
  { skill: 'Docker', color: 'blue-500' },
  { skill: 'Postman', color: 'orange-600' },
  { skill: 'Jira', color: 'blue-600' },
  { skill: 'BitBucket', color: 'blue-600' },
] as const;
