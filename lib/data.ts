import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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

export const experiencesData = [
  {
    title: "Front-End developer",
    location: "Hyderabad, Telangana",
    description:
      "I worked as a front-end developer for 1 year and 8 months at Genpact India Pvt. Ltd. My tech stack included HTML, CSS, JavaScript, React, and Bootstrap. I also upskilled myself with TypeScript and Tailwind.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2019",
  },
  {
    title: "Front-End Developer",
    location: "Hyderabad, Telangana",
    description:
      "I worked as a front-end developer for 2 years and 7 months at Uber India Sytems Pvt. Ltd. My primary tech stack was HTML, CSS, React, Typescript, Tailwind. In addition to my ongoing projects, I also contributed to various ad-hoc initiatives.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "Hyderabad, Telangana",
    description:
      "I'm now a front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I upskilled myself to Full-stack with Next.js, Node.js, Mongodb and Express. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce store",
    description:
      "I worked as a developer on this startup project for 1 year and 8 months. Focused on unique shopping experience.",
    tags: ["React", "BootStrap", "Javascript", "HTML", "CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Uber for Business Dashboard",
    description:
      "Business Dashboard for clients to book Uber services for events in bulk.",
    tags: ["React", "TypeScript", "Tailwind", "Redux", "MaterialUI"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Gym Management",
    description:
      "One of my personal projects where users can subscribe to gym membership and schedule sessions with trainers.",
    tags: ["React", "Javascript", "Tailwind", "Firebase"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "MaterialUI",
  "Framer Motion",
] as const;
