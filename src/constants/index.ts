import {
  Code2,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Plug,
  Workflow,
} from "lucide-react";
import SavoraImg from "../assets/savora-img.png";
import SpaceTourismImg from "../assets/space-tourism-img.png";
import HooBankImg from "../assets/hoobank-img.png";
import CourseTube from "../assets/course-tube-img.png";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "Strapi",
  "Figma",
  "Git",
  "GitHub",
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "Bootstrap", "Figma"],
  },
  {
    title: "Backend & APIs",
    skills: ["Strapi", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
];

export const highlights = [
  {
    icon: Code2,
    title: "React Development",
    description: "Building interfaces with React and reusable components.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive UI",
    description:
      "Creating layouts that work across different screen sizes and devices.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Working with REST APIs and external services to build data-driven applications.",
  },
  {
    icon: Workflow,
    title: "State Management",
    description:
      "Using tools such as Zustand and Redux Toolkit to manage application state.",
  },
];

export const projects = [
  {
    title: "Savore Food Ordering App",
    description:
      "A food ordering application built with React and Strapi. It includes authentication, protected routes, API integration, form validation, and global cart and user state management.",
    imageSrc: SavoraImg,
    tags: [
      "React",
      "Strapi",
      "Typescript",
      "Tailwind",
      "React Hook Form",
      "Zod",
    ],
    link: "https://savora-food-order-app.vercel.app/",
    github:
      "https://github.com/Abdalla2200/Savora-food-order-app-with-React---Strapi---TypeScript-",
  },
  {
    title: "CourseTube",
    description:
      "A React application that turns YouTube playlists into structured learning experiences using the YouTube Data API and Zustand for application state and learning progress.",
    imageSrc: CourseTube,
    tags: ["React", "Typescript", "Tailwind"],
    link: "https://course-tube-mu.vercel.app/",
    github: "https://github.com/Abdalla2200/CourseTube-",
  },

  {
    title: "HooBank Landing Page",
    description:
      "A responsive React landing page built from a Figma design, using Tailwind CSS for styling and Framer Motion for animations.",
    imageSrc: HooBankImg,
    tags: ["React", "Typescript", "Tailwind", "Framer Motion"],
    link: "https://hoo-bank-landing-page-two.vercel.app/",
    github:
      "https://github.com/Abdalla2200/HooBank-Landing-page-with-react--tailwind-framer-motion",
  },
  {
    title: "Space Tourism",
    description:
      "A responsive multi-page website built with HTML, CSS, and JavaScript based on a Frontend Mentor design challenge.",
    imageSrc: SpaceTourismImg,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://space-tourism-website-form-frontend.vercel.app/",
    github:
      "https://github.com/Abdalla2200/Space-Tourism-Website-form-frontend-mentor",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abdallaessam3300@gmail.com",
    href: "mailto:abdallaessam3300@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+2 01100564932",
    href: "https://wa.me/201100564932",
  },
];
