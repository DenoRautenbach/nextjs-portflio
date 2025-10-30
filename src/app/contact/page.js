"use client";
import React from "react";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../components/Contact"), {
  ssr: false,
});

const ContactPage = () => {
  return (
    <main className="w-full h-screen overflow-hidden bg-black">
      <Contact />
    </main>
  );
};

export default ContactPage;
