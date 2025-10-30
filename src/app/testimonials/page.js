"use client";
import React from "react";
import dynamic from "next/dynamic";

const TestimonialsLayout = dynamic(() => import("../components/Testimonials"), {
  ssr: false,
});

const TestimonialsPage = () => {
  return (
    <main className="w-full h-screen overflow-hidden bg-black">
      <TestimonialsLayout />
    </main>
  );
};

export default TestimonialsPage;
