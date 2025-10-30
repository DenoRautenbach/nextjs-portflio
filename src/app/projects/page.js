"use client";
import React from "react";
import dynamic from "next/dynamic";

const ProjectsLayout = dynamic(() => import("../components/ProjectsLayout"), {
  ssr: false,
});

const ProjectsPage = () => {
  return (
    <main className="w-full h-screen overflow-hidden bg-black">
      <ProjectsLayout />
    </main>
  );
};

export default ProjectsPage;
