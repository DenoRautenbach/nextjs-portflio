'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';
import Image from "next/image";
import art from "../assets/About/rugby4.png";
import HomeLayoutSection from './HomeLayoutSection';

gsap.registerPlugin(Observer, SplitText);

const sectionsData = [
  { title: 'Lets explore', image: '/bgs/skills2.png' },
  { title: 'Animated with GSAP', image: 'bgs/skills3.webp' },
  { title: 'GreenSock', image: 'bgs/mushashi.png' },
  { title: 'Animation platform', image: 'bgs/home3.webp' },
  { title: 'Keep scrolling', image: 'bgs/home4.png' },
];

const AnimatedSections: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [animationsActive, setAnimationsActive] = useState(false);
  const currentIndexRef = useRef(-1);

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
        onComplete: () => (animating = false),
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

    // Initialize first section when animations become active
    if (animationsActive && currentIndexRef.current === -1) {
      gotoSection(0, 1);
    }

    // Observer for animated sections
    const observer = Observer.create({
      target: wrapper,
      type: 'wheel,touch',
      wheelSpeed: -1,
      preventDefault: animationsActive,
      allowNativeTouchScrolling: !animationsActive,
      onDown: () => {
        if (!animationsActive) return;
        if (currentIndexRef.current === 0) {
          // Go back using the same smooth animation as forward
          !animating && gotoSection(currentIndexRef.current - 1, -1);
          return;
        }
        !animating && gotoSection(currentIndexRef.current - 1, -1);
      },
      onUp: () => {
        if (!animationsActive) {
          // Activate animations when scrolling down from top
          setAnimationsActive(true);
          return;
        }
        !animating && gotoSection(currentIndexRef.current + 1, 1);
      },
      tolerance: 10,
    } as any);

    return () => {
      observer.kill();
      splitHeadings.forEach(s => s && s.revert && s.revert());
      gsap.globalTimeline.clear();
    };
  }, [animationsActive]);

  return (
    <div 
      ref={wrapperRef} 
      className="fixed top-0 left-0 z-20 h-screen w-full overflow-hidden text-white uppercase"
    >
      {/* <Image
        className="w-full transition-none"
        src={art}
        alt="art"
        /> */}
        {/* <HomeLayoutSection /> */}
      {sectionsData.map((section, i) => (
        <section
          key={i}
          className="animated-section fixed top-0 left-0 w-full h-full opacity-0"
        >
          <div className="animated-outer w-full h-full overflow-hidden">
            <div className="animated-inner w-full h-full overflow-hidden">
              <div
                className="animated-bg flex items-center justify-center absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%), url(${section.image})`,
                }}
              >
                <h2 className="animated-heading section-heading text-center text-[clamp(1rem,8vw,10rem)] font-semibold w-[90vw] max-w-[1200px]">
                  {section.title}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AnimatedSections;