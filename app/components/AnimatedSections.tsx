'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';

import Hero from './Hero';
import Explore from './Explore';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection';
import TestimonialsSection from './TestimonialsSection';

import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Observer, SplitText);
}

// Individual Section Components
const HeroSection = () => (
  <div className="animated-bg flex items-center justify-center absolute top-0 left-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%), url(/bgs/bg.jpg)`,
    }}>
    <Hero />
  </div>
);

const ExploreSection = () => (
  <div className="animated-bg flex items-center justify-center absolute top-0 left-0 w-full h-full overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage: 'url(/bgs/bulb.jpg)',
      backgroundAttachment: 'fixed'
    }}>
    <Explore />
  </div>
);

const ProjectsSectionWrapper = () => (
  <div className="animated-bg w-full h-full">
    <ProjectsSection />
  </div>
);

const TestimonialsSectionWrapper = () => (
  <div className="animated-bg w-full h-full">
    <TestimonialsSection />
  </div>
);

const AboutSectionWrapper = () => (
  <div className="animated-bg w-full h-full">
    <AboutSection />
  </div>
);

const ContactSectionWrapper = () => (
  <div className="animated-bg w-full h-full">
    <ContactSection />
  </div>
);

// Main Component
const AnimatedSections: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(-1);
  const animatingRef = useRef(false);
  const gotoSectionRef = useRef<((index: number, direction: number) => void) | null>(null);

  const handleNavClick = (index: number) => {
    if (animatingRef.current || index === currentIndexRef.current || !gotoSectionRef.current) return;
    const direction = index > currentIndexRef.current ? 1 : -1;
    gotoSectionRef.current(index, direction);
  };

  // Array of section components

  const sectionComponents = [
    HeroSection,
    ProjectsSectionWrapper,
    AboutSectionWrapper,
    TestimonialsSectionWrapper,
    ContactSectionWrapper,
  ];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Check if we are on mobile to skip GSAP initialization
    if (window.innerWidth < 768) return;

    const sections = Array.from(wrapper.querySelectorAll<HTMLElement>('section.animated-section'));
    const images = Array.from(wrapper.querySelectorAll<HTMLElement>('.animated-bg'));
    const headings = Array.from(wrapper.querySelectorAll<HTMLElement>('.animated-heading'));
    const outerWrappers = Array.from(wrapper.querySelectorAll<HTMLElement>('.animated-outer'));
    const innerWrappers = Array.from(wrapper.querySelectorAll<HTMLElement>('.animated-inner'));

    const splitHeadings = headings.map(
      (heading) =>
        new SplitText(heading, {
          type: 'chars,words,lines',
          linesClass: 'clip-text',
        })
    );

    const wrap = gsap.utils.wrap(0, sections.length);

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    // Initialize first section immediately
    if (currentIndexRef.current === -1) {
      gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });
      gsap.set([outerWrappers[0], innerWrappers[0]], { yPercent: 0 });
      gsap.set(images[0], { yPercent: 0 });
      gsap.set(splitHeadings[0]?.chars || [], { autoAlpha: 1, yPercent: 0 });
      currentIndexRef.current = 0;
    }

    function gotoSection(index: number, direction: number) {
      if (!sections[index] || !outerWrappers[index] || !innerWrappers[index] || !images[index]) {
        return;
      }

      index = wrap(index);
      animatingRef.current = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut' },
        onComplete: () => { animatingRef.current = false; },
      });

      if (currentIndexRef.current >= 0 && sections[currentIndexRef.current]) {
        gsap.set(sections[currentIndexRef.current], { zIndex: 0 });
        tl.to(images[currentIndexRef.current], { yPercent: -15 * dFactor }).set(sections[currentIndexRef.current], {
          autoAlpha: 0,
        });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        { yPercent: (i: number) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
          splitHeadings[index]?.chars || [],
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: 'power2',
            stagger: { each: 0.02, from: 'random' },
          },
          0.2
        );

      currentIndexRef.current = index;
    }

    gotoSectionRef.current = gotoSection;

    // Observer for animated sections
    const observer = Observer.create({
      target: wrapper,
      type: 'wheel,touch',
      wheelSpeed: -1,
      preventDefault: true,

      onDown: () => {
        if (!animatingRef.current && currentIndexRef.current > 0) {
          gotoSection(currentIndexRef.current - 1, -1);
        }
      },
      onUp: () => {
        if (!animatingRef.current && currentIndexRef.current < sections.length - 1) {
          gotoSection(currentIndexRef.current + 1, 1);
        }
      },
      tolerance: 10,
    } as never);

    return () => {
      observer.kill();
      splitHeadings.forEach(s => s && s.revert && s.revert());
      gsap.globalTimeline.clear();
    };
  }, []);

  // Handle Mobile Scroll (Native) vs Desktop (GSAP)
  useEffect(() => {
    // We only need to check responsiveness for the layout rendering.
    // The GSAP logic above should probably be wrapped or disabled for mobile 
    // but since we are conditionally rendering the DOM structure based on CSS media queries (md:hidden), 
    // we should also ensure the GSAP logic doesn't try to animate elements that might not exist or be visible in the same way.

    // Actually, a better approach for the GSAP effect is to only run it if window width > 768px.
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (!isDesktop) {
      // Kill any existing GSAP instances if we resized from desktop to mobile
      // (This is a simplified approach; a full resize handler would be more robust)
      return;
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed md:fixed top-0 left-0 z-20 h-screen w-full overflow-y-auto md:overflow-hidden text-white uppercase"
    >
      <SiteHeader onNavLinkClick={handleNavClick} />
      <SiteFooter />

      {/* Mobile Layout: Vertical Stack */}
      <div className="md:hidden w-full flex flex-col">
        {/* Helper to offset header */}
        <div id="hero" className="w-full h-screen relative">
          <HeroSection />
        </div>
        <div id="projects" className="w-full min-h-screen relative bg-black">
          <ProjectsSectionWrapper />
        </div>
        <div id="about" className="w-full min-h-screen relative bg-black">
          <AboutSectionWrapper />
        </div>
        <div id="testimonials" className="w-full min-h-screen relative bg-black">
          <TestimonialsSectionWrapper />
        </div>
        <div id="contact" className="w-full min-h-screen relative bg-black">
          <ContactSectionWrapper />
        </div>
      </div>

      {/* Desktop Layout: Fixed Sections with GSAP */}
      <div className="hidden md:block w-full h-full">
        {sectionComponents.map((SectionComponent, i) => (
          <section
            key={i}
            className="animated-section fixed top-0 left-0 w-full h-full opacity-0"
          >
            <div className="animated-outer w-full h-full overflow-hidden">
              <div className="animated-inner w-full h-full overflow-hidden">
                <SectionComponent />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSections;
