'use client'
import React from "react";
import Image from "next/image";
import LogoLoop from './LogoLoop';

import reactjs from "../assets/reactjs.png";
import nextjs from "../assets/nextjs.png";
import typescript from "../assets/typescript.png";
import tailwindcss from "../assets/tailwindcss.png";
import nodejs from "../assets/nodejs.png";
import vuejs from "../assets/vuejs.png";
import python from "../assets/python.png";
import wordpress from "../assets/wordpress.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";

// Prepare image pairs for hover effect
const hoverLogos = [
  { front: reactjs, back: wordpress, alt: "React / WordPress" },
  { front: nextjs, back: nodejs, alt: "Next.js / Node.js" },
  { front: typescript, back: vuejs, alt: "TypeScript / Vue.js" },
  { front: tailwindcss, back: python, alt: "Tailwind / Python" },
  { front: mysql, back: github, alt: "MySQL / GitHub" },
];

const SkillsLayout: React.FC = () => {
  return (
    <div className="container relative grid lg:grid-cols-5 md:grid-cols-1 w-3/4 pb-16 mx-auto gap-8">
      {hoverLogos.map((logo, index) => (
        <div key={index} className="group relative w-full h-48">
          <Image
            src={logo.front}
            alt={logo.alt}
            className="transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 w-full h-full object-contain"
          />
          <Image
            src={logo.back}
            alt={logo.alt}
            className="absolute top-0 left-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default SkillsLayout;
