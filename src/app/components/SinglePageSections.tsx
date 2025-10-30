"use client"
import Projectslayout from "./ProjectsLayout"
import SkillsLayout from "./SkillsLayout";
import ContactLayout from "./Contact"
import TestimonialsLayout from "./Testimonials"
import React, { useEffect, useRef } from "react";
import HomeLayoutSection from "./HomeLayoutSection";
import AboutLayoutSection from "./AboutLayoutSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSections from "./AnimatedSections";
import Slider from "./Slider";
import Image from "next/image";
import art from "../assets/About/rugby4.png";


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SinglePageSetions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const animatedSectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;
    const animatedSection = animatedSectionsRef.current;

    if (!container || !horizontal || !animatedSection) return;

    const scrollWidth = (horizontal.scrollWidth - window.innerWidth) + 500;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        pinSpacing: true,
      }
    });

    tl.to(horizontal, {
      x: -(horizontal.scrollWidth - window.innerWidth),
      ease: "none"
    });

    // Add fade out effect at the end of horizontal scroll
    tl.to(container, {
      opacity: 0.3,
      duration: 0.3
    }, "-=0.3");

    // Fade in the animated sections
    gsap.fromTo(animatedSection, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: animatedSection,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  
  return (
    <div className="">
      <div 
        ref={animatedSectionsRef}
        className="relative w-full h-screen overflow-hidden"
      >
        <AnimatedSections />
      </div>
    </div>        
  )
};

export default SinglePageSetions;