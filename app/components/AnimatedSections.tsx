'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';
import Magnet from './Magnet';
import Projectslayout from './ProjectsLayout';
import Hero from './Hero';
import ContactForm from './ContactForm';
import MarvelIntro from './MarvelIntro';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Observer, SplitText);
}

// Individual Section Components
const AboutSection = () => (
  <div className="animated-bg flex items-center justify-center absolute top-0 left-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%), url(/bgs/bg.jpg)`,
    }}>
    {/* <h2 className="animated-heading section-heading text-center text-[clamp(1rem,8vw,10rem)] font-semibold w-[90vw] max-w-[1200px]">
      Welcome
    </h2> */}
    {/* <div className="absolute md:bottom-80 bottom-70 z-20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4">
        {[
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/deno-rautenbach-b1698018a',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/DenoRautenbach',
          },
          {
            label: 'Resumé',
            href: 'https://drive.google.com/file/d/1n83D2cESFx-vWTbqv9AiRL_VVO85fibv/view?usp=sharing',
          },
        ].map(({ label, href }) => (
          <Magnet key={label} padding={60} magnetStrength={10}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm sm:text-base text-white transition-all bg-black/10 hover:bg-white/10 backdrop-blur-sm"
            >
              <span>{label}</span>
            </a>
          </Magnet>
        ))}
      </div> */}
    <Hero />
  </div>
);

const ProjectsSection = () => (
  <div className="animated-bg flex items-center justify-center absolute top-0 left-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%), url(bgs/bg5.jpg)`,
    }}>
    <div className="flex flex-col items-start w-full px-4 md:px-12">
      <div className="flex items-center gap-2 text-[#00f0ff] font-mono text-sm tracking-widest mb-4">
        <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse" />
        01. WORK
      </div>
      <h2 className="text-5xl md:text-7xl font-black tracking-normal mix-blend-difference text-white">
        FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">PROJECTS</span>
      </h2>
    </div>
    <Projectslayout />
  </div>
);

const ContactSection = () => {
  const [isFormVisible, setIsFormVisible] = React.useState(false);

  return (
    <div className="animated-bg flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black">
        <div className="absolute inset-0 z-0">
            <MarvelIntro onRevealChange={setIsFormVisible} />
        </div>
      <div 
        className={`relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 gap-8 md:ml-auto md:mr-20 transition-opacity duration-1000 ease-in-out ${
          isFormVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
          <ContactForm />
      </div>
    </div>
  );
};

const TestimonialsSection = () => (
  <div className="animated-bg flex items-center justify-center absolute top-0 left-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%), url(bgs/home3.webp)`,
    }}>
    <h2 className="animated-heading section-heading text-center text-[clamp(1rem,8vw,10rem)] font-semibold w-[90vw] max-w-[1200px]">
      Testimonials
    </h2>
  </div>
);

const ExploreSection = () => (
  <div className="animated-bg flex items-center justify-center absolute top-0 left-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%), url(bgs/home4.png)`,
    }}>
    <h2 className="animated-heading section-heading text-center text-[clamp(1rem,8vw,10rem)] font-semibold w-[90vw] max-w-[1200px]">
      Explore More
    </h2>
  </div>
);

// Main Component
const AnimatedSections: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(-1);

  // Array of section components - change order or add/remove sections here
  const sectionComponents = [
    AboutSection,
    ProjectsSection,
    ContactSection,
    TestimonialsSection,
    ExploreSection,
  ];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

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

    let animating = false;
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
      animating = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut' },
        onComplete: () => { animating = false; },
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

    // Observer for animated sections
    const observer = Observer.create({
      target: wrapper,
      type: 'wheel,touch',
      wheelSpeed: -1,
      preventDefault: true,
      onDown: () => {
        if (!animating && currentIndexRef.current > 0) {
          gotoSection(currentIndexRef.current - 1, -1);
        }
      },
      onUp: () => {
        if (!animating && currentIndexRef.current < sections.length - 1) {
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

  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 z-20 h-screen w-full overflow-hidden text-white uppercase"
    >
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
  );
};

export default AnimatedSections;