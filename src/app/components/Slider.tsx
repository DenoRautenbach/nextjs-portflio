import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';

// Register the Observer plugin (client only)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(Observer);
}

interface SlideData {
  heading: string;
  imageUrl: string;
  backgroundColor: string;
}

interface OverlayImage {
  src: string;
  alt: string;
}

const Slider: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const slideImagesRef = useRef<HTMLImageElement[]>([]);
  const outerWrappersRef = useRef<HTMLDivElement[]>([]);
  const innerWrappersRef = useRef<HTMLDivElement[]>([]);
  const countRef = useRef<HTMLSpanElement>(null);
  
  const animating = useRef(false);
  const currentIndex = useRef(0);

  const slides: SlideData[] = [
    {
      heading: "SCROLL",
      imageUrl: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=80&w=400",
      backgroundColor: "#6d597a"
    },
    {
      heading: "SWIPE",
      imageUrl: "https://images.unsplash.com/photo-1558603668-6570496b66f8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=85&w=400",
      backgroundColor: "#355070"
    },
    {
      heading: "SCROLL",
      imageUrl: "https://images.unsplash.com/photo-1537165924986-cc3568f5d454?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=85&w=400",
      backgroundColor: "#b56576"
    },
    {
      heading: "SWIPE",
      imageUrl: "https://images.unsplash.com/photo-1589271243958-d61e12b61b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=80&w=400",
      backgroundColor: "#9a8c98"
    }
  ];

  const overlayImages: OverlayImage[] = [
    {
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTU4Mw&ixlib=rb-1.2.1&q=80&w=800",
      alt: "Overlay image 1"
    },
    {
      src: "https://images.unsplash.com/photo-1594666757003-3ee20de41568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTcwOA&ixlib=rb-1.2.1&q=80&w=800",
      alt: "Overlay image 2"
    },
    {
      src: "https://images.unsplash.com/photo-1579830341096-05f2f31b8259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTQ5Ng&ixlib=rb-1.2.1&q=80&w=800",
      alt: "Overlay image 3"
    },
    {
      src: "https://images.unsplash.com/photo-1603771628302-c32c88e568e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTUxNg&ixlib=rb-1.2.1&q=80&w=800",
      alt: "Overlay image 4"
    }
  ];

  const wrap = (value: number, max: number): number => {
    return ((value % max) + max) % max;
  };

  const gotoSection = (index: number, direction: number) => {
    animating.current = true;
    index = wrap(index, sectionsRef.current.length);

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "expo.inOut" },
      onComplete: () => {
        animating.current = false;
      }
    });

    const currentSection = sectionsRef.current[currentIndex.current];
    const heading = currentSection?.querySelector(".slide__heading") as HTMLElement;
    const nextSection = sectionsRef.current[index];
    const nextHeading = nextSection?.querySelector(".slide__heading") as HTMLElement;

    gsap.set([sectionsRef.current, imagesRef.current], { zIndex: 0, autoAlpha: 0 });
    gsap.set([sectionsRef.current[currentIndex.current], imagesRef.current[index]], { 
      zIndex: 1, 
      autoAlpha: 1 
    });
    gsap.set([sectionsRef.current[index], imagesRef.current[currentIndex.current]], { 
      zIndex: 2, 
      autoAlpha: 1 
    });

    tl
      .set(countRef.current, { textContent: (index + 1).toString() }, 0.32)
      .fromTo(
        outerWrappersRef.current[index],
        { xPercent: 100 * direction },
        { xPercent: 0 },
        0
      )
      .fromTo(
        innerWrappersRef.current[index],
        { xPercent: -100 * direction },
        { xPercent: 0 },
        0
      )
      .to(
        heading,
        {
          "--width": 800,
          xPercent: 30 * direction
        },
        0
      )
      .fromTo(
        nextHeading,
        {
          "--width": 800,
          xPercent: -30 * direction
        },
        {
          "--width": 200,
          xPercent: 0
        },
        0
      )
      .fromTo(
        imagesRef.current[index],
        {
          xPercent: 125 * direction,
          scaleX: 1.5,
          scaleY: 1.3
        },
        { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
        0
      )
      .fromTo(
        imagesRef.current[currentIndex.current],
        { xPercent: 0, scaleX: 1, scaleY: 1 },
        {
          xPercent: -125 * direction,
          scaleX: 1.5,
          scaleY: 1.3
        },
        0
      )
      .fromTo(
        slideImagesRef.current[index],
        { scale: 2 },
        { scale: 1 },
        0
      )
      .timeScale(0.8);

    currentIndex.current = index;
  };

  useEffect(() => {
    const containerEl = document.querySelector('.slider-container');
    if (!containerEl) return;

    // Initial setup
    gsap.set(outerWrappersRef.current, { xPercent: 100 });
    gsap.set(innerWrappersRef.current, { xPercent: -100 });
    gsap.set(outerWrappersRef.current[0], { xPercent: 0 });
    gsap.set(innerWrappersRef.current[0], { xPercent: 0 });

    let observer: any = null;

    // Create intersection observer to detect when slider is in view
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Slider is in view - enable Observer
            if (!observer) {
              observer = Observer.create({
                type: "wheel,touch,pointer",
                preventDefault: true,
                wheelSpeed: -1,
                onUp: () => {
                  if (animating.current) return;
                  gotoSection(currentIndex.current + 1, 1);
                },
                onDown: () => {
                  if (animating.current) return;
                  gotoSection(currentIndex.current - 1, -1);
                },
                tolerance: 10
              });
            }
          } else {
            // Slider is out of view - disable Observer
            if (observer) {
              observer.kill();
              observer = null;
            }
          }
        });
      },
      { threshold: 0.5 } // Activate when 50% of slider is visible
    );

    intersectionObserver.observe(containerEl);

    // Keyboard events
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard if slider is in view
      const rect = containerEl.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isInView) return;

      if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && !animating.current) {
        gotoSection(currentIndex.current - 1, -1);
      }
      if (
        (e.code === "ArrowDown" ||
         e.code === "ArrowRight" ||
         e.code === "Space" ||
         e.code === "Enter") &&
        !animating.current
      ) {
        gotoSection(currentIndex.current + 1, 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (observer) observer.kill();
      intersectionObserver.disconnect();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const addToRefs = <T,>(el: T | null, ref: React.MutableRefObject<T[]>) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <div className="slider-container relative h-screen w-full overflow-hidden bg-blue-600 text-white">
      {/* Slides */}
      {slides.map((slide, index) => (
        <section
          key={index}
          className="slide absolute bottom-0 left-0 h-full w-full"
          style={{ 
            visibility: index === 0 ? 'visible' : 'hidden',
            zIndex: index === 0 ? 1 : 0
          }}
          ref={el => addToRefs(el, sectionsRef)}
        >
          <div 
            className="slide__outer h-full w-full overflow-y-hidden"
            ref={el => addToRefs(el, outerWrappersRef)}
          >
            <div 
              className="slide__inner h-full w-full overflow-y-hidden"
              ref={el => addToRefs(el, innerWrappersRef)}
            >
              <div 
                className="slide__content absolute top-0 flex h-full w-full items-center justify-center"
                style={{ backgroundColor: slide.backgroundColor }}
              >
                <div className="slide__container relative mx-auto mb-[10vh] grid h-[90vh] w-screen max-w-[1400px] grid-cols-10 grid-rows-10 gap-0 px-4 md:mb-0 md:mt-[10vh] md:h-[80vh] md:px-12">
                  <h2 
                    className="slide__heading z-[999] col-[2/10] row-[2/3] self-end font-['Bandeins_Sans_&_Strange_Variable'] text-[clamp(5rem,15vw,15rem)] font-black leading-none text-[#f2f1fc] mix-blend-difference md:col-[1/10] md:row-[1/4]"
                    style={{ '--width': 200 } as React.CSSProperties}
                  >
                    {slide.heading}
                  </h2>
                  <figure className="slide__img-cont col-[1/8] row-[2/7] mt-16 md:col-[2/7] md:row-[3/8] md:mt-0">
                    <img 
                      className="slide__img h-full w-full object-cover"
                      src={slide.imageUrl}
                      alt=""
                      ref={el => addToRefs(el, slideImagesRef)}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Overlay */}
      <section className="overlay absolute bottom-0 left-0 right-0 top-0 z-10">
        <div className="overlay__content mx-auto mb-[10vh] grid h-[90vh] w-screen max-w-[1400px] grid-cols-10 grid-rows-10 gap-0 px-4 md:mb-0 md:mt-[10vh] md:h-[80vh] md:px-12">
          <p className="overlay__count col-[10/10] row-[3/4] m-0 border-b-4 border-white p-0 text-right text-[clamp(3rem,4vw,15rem)] md:col-[10/11]">
            0<span ref={countRef}>1</span>
          </p>
          <figure className="overlay__img-cont relative col-[3/11] row-[4/9] m-0 overflow-hidden md:col-[4/11] md:row-[5/10]">
            {overlayImages.map((image, index) => (
              <img
                key={index}
                className="image absolute h-full w-full object-cover object-center"
                src={image.src}
                alt={image.alt}
                ref={el => addToRefs(el, imagesRef)}
                style={{ 
                  zIndex: index === 0 ? 1 : 0,
                  opacity: index === 0 ? 1 : 0
                }}
              />
            ))}
          </figure>
        </div>
      </section>

      {/* Footer */}
      <div className="absolute bottom-0 z-[999] flex h-28 w-full items-center justify-between px-8 font-['Sora'] text-[clamp(1.2rem,2vw,1rem)]">
        <a 
          href="https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.observe()"
          className="text-white no-underline"
        >
          ScrollTrigger.observe()
        </a>
        <p>GSAP demo</p>
      </div>
    </div>
  );
};

export default Slider;