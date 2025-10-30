"use client";
import Image from "next/image";
import umayr from "../assets/Testimonials/umayr.png";
import joel from "../assets/Testimonials/joel.jpg";
import kim from "../assets/Testimonials/kim.jpeg";
import konke from "../assets/Testimonials/konke.jpeg";
import john from "../assets/Testimonials/john.png";
import luntu from "../assets/Testimonials/luntu.png";
import React from "react";

const testimonials = [
  {
    name: "Joel Mukanya",
    title: "- CEO | JT Devs",
    message: "I will be very delighted to see him get hired as a developer.",
    image: joel,
  },
  {
    name: "Konke Malindi",
    title: "- Frontend Engineer",
    message: "Deno is like a sponge, constantly absorbing knowledge.",
    image: konke,
  },
  {
    name: "Kim-Lee Scott",
    title: "- HR Personel | DataBalk",
    message:
      "Deno is an incredibly hard worker and a great communicator which makes him a pleasure to work with.",
    image: kim,
  },
  {
    name: "John-Bruce Noad",
    title: "- QA Tester | Boldr",
    message:
      "Deno is a self-confident and determined individual. Once he sets his mind to something, it is near impossible to shift his course.",
    image: john,
  },
  {
    name: "Luntu Sogeyana",
    title: "- Frontend Engineer | DataBalk",
    message:
      "Deno is a reliable person who will not turn down a fellow coder's cry for help when they need it.",
    image: luntu,
  },
  {
    name: "Umayr Nordien",
    title: "- Software Development Intern | VOSS",
    message:
      "I know I can depend on Deno to collaborate with on both large scale projects and smaller casual ones.",
    image: umayr,
  },
];

const TestimonialsLayout = () => {
  return (
    <div className="testimonials container mx-auto grid gap-10 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      {testimonials.map((t, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 to-black p-[1px] shadow-lg transition-transform duration-300 hover:scale-[1.03]"
        >
          {/* Shiny Diagonal Effect */}
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform rotate-45 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-2000 ease-in-out"></div>
          </div>

          <div className="relative z-20 flex flex-col items-center bg-black rounded-2xl p-6 text-center text-white">
            <Image
              src={t.image}
              alt={t.name}
              width={120}
              height={120}
              className="rounded-full object-cover mb-4 border border-zinc-700 shadow-md"
            />
            <h2 className="text-lg font-semibold">{t.name}</h2>
            <h3 className="text-sm text-gray-400 mb-2">{t.title}</h3>
            <p className="text-sm leading-relaxed text-gray-300">{t.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsLayout;
