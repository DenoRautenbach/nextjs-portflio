"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HorizontalScrollWrapperProps {
  children: React.ReactNode;
}

const HorizontalScrollWrapper: React.FC<HorizontalScrollWrapperProps> = ({ children }) => {
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const horizontalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!horizontalSectionRef.current || !horizontalContentRef.current) return;

    const horizontalSection = horizontalSectionRef.current;
    const horizontalContent = horizontalContentRef.current;

    // Calculate the total width for horizontal scroll
    const getHorizontalScrollWidth = () => {
      return horizontalContent.scrollWidth - window.innerWidth;
    };

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(horizontalSection, {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
      });

      gsap.set(horizontalContent, {
        display: 'flex',
        width: 'auto',
        height: '100vh'
      });

      // Create horizontal scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: horizontalSection,
          start: 'top top',
          end: () => `+=${getHorizontalScrollWidth()}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.to(horizontalContent, {
        x: () => -getHorizontalScrollWidth(),
        ease: 'none'
      });

      // Cleanup function for ScrollTrigger
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="horizontal-scroll-section" ref={horizontalSectionRef}>
      <div className="horizontal-scroll-content" ref={horizontalContentRef}>
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollWrapper;