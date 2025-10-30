"use client";
import React from "react";
import AboutLayoutSection from "../components/AboutLayoutSection";
import SkillsLayout from "../components/SkillsLayout";

const AboutPage = () => {
  return (
    <main className="w-full h-screen overflow-hidden bg-black">
      <AboutLayoutSection />
      <SkillsLayout />
    </main>
  );
};

export default AboutPage;
