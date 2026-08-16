"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Github, ExternalLink, Mail, ArrowUpRight, Star, Quote, Code2, MonitorPlay } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Loader from './components/Loader';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { id: 1, title: "Ecommerce", description: "Decentralized platform redefining digital commerce.", tech: ["Vue.js", "Node.js", "MySQL"], color: "bg-[var(--brutal-white)] text-[var(--brutal-black)]", icon: <Code2 size={32} />, link: "https://github.com/DenoRautenbach/Capstone-Mangako" },
  { id: 2, title: "Python Projects", description: "Python projects I have worked on.", tech: ["Python", "Pandas", "Bash"], color: "bg-[var(--accent-red)] text-[var(--brutal-white)]", icon: <MonitorPlay size={32} />, link: "https://github.com/DenoRautenbach/Python-Projects" },
  { id: 3, title: "Github Explorer", description: "Search and explore public GitHub users seamlessly.", tech: ["React", "API", "Tailwind"], color: "bg-[var(--brutal-black)] text-[var(--brutal-white)]", icon: <ExternalLink size={32} />, link: "https://github-explorer-zeta-virid.vercel.app/" },
  { id: 4, title: "Spending Tracker", description: "Customer spending insights dashboard.", tech: ["React", "Data", "Dashboard"], color: "bg-[#FF3E3E] text-white", icon: <ExternalLink size={32} />, link: "https://github.com/DenoRautenbach/Customer-Spending-Insights-Dashboard" }
];

const TESTIMONIALS = [
  { id: 1, name: "John-Bruce Noad", role: "Software Engineer", text: "A self-confident and determined individual. Once he sets his mind to something, it is near impossible to shift his course. Deno is not easily bothered by what others think or say about him, and is therefore easy to get along with. When it comes to his work, he is not afraid in the slightest to put his hard-working nature, and his amazing intellect on full display. I have enjoyed working alongside Deno, and can say with absolute confidence that he will be a great asset to any company that affords him the opportunity to present his value.", color: "bg-black text-white" },
  { id: 2, name: "Luntu Sogeyana", role: "Web Developer", text: "He's a reliable person who doesn't turn down a fellow coder's cry for help when they need it. His determination to never turn down a challenge, work ethic, and intellect makes him a great asset to have in a team and said team is bound to be successful in whichever task if he is involved in it.", color: "bg-white text-black" },
  { id: 3, name: "Joel Mukanya", role: "University Lecturer", text: "Deno is a very creative, go-getter, and well-behaved student. He does enjoy working with his classmates and works well on his project. He has gained knowledge of web development, including Bootstrap 5. I will be very delighted to see him get hired as a developer.", color: "bg-[#FF3E3E] text-white" }
];

const BrutalButton = ({ children, className = "", variant = "primary", href, target, rel, ...props }: any) => {
  const variants: any = {
    primary: "bg-[#FF3E3E] text-white border-black",
    secondary: "bg-white text-black border-black",
    dark: "bg-black text-white border-white"
  };
  const classes = `border-[3px] px-6 py-3 font-bold uppercase tracking-widest text-sm sm:text-base transition-all duration-200 brutal-shadow brutal-shadow-hover flex items-center gap-2 justify-center ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

const BrutalBadge = ({ children, color = "bg-white text-black border-black" }: any) => (
  <span className={`${color} border-2 px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_#000]`}>
    {children}
  </span>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-[200] p-4 sm:p-6 pointer-events-none">
    <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
      <a href="/" aria-label="homepage" className="bg-white text-black border-[3px] border-black p-2 sm:p-3 brutal-shadow flex items-center gap-2">
        <div className="w-4 h-4 bg-[#FF3E3E] border-2 border-black rounded-full animate-pulse" />
        <span className="font-syne font-black text-lg sm:text-xl uppercase tracking-tighter leading-none">D<br />R</span>
      </a>
      <div className="hidden md:flex gap-4">
        {['Home', 'Projects', 'About', 'Testimonials', 'Contact'].map((item) => (
          <a key={item} href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} className="bg-white text-black border-[3px] border-black px-6 py-2 font-bold uppercase brutal-shadow brutal-shadow-hover hover:bg-[#FF3E3E] hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>
      <BrutalButton className="md:hidden" variant="primary">Menu</BrutalButton>
    </div>
  </nav>
);

export default function Home() {
  const [loading, setLoading] = useState(true);

  const heroTextRef1 = useRef<HTMLHeadingElement>(null);
  const heroTextRef2 = useRef<HTMLSpanElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<any[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);
  const stackContainerRef = useRef<HTMLDivElement>(null);
  const stackCard1Ref = useRef<HTMLDivElement>(null);
  const stackCard2Ref = useRef<HTMLDivElement>(null);
  const stackCard3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading) return;

    // 1. Hero Entrance
    const tl = gsap.timeline();
    tl.fromTo(heroTextRef1.current, { y: "100%" }, { y: "0%", duration: 1.2, ease: "expo.out" }, 0.2);
    tl.fromTo(heroTextRef2.current, { y: "100%", rotation: 0 }, { y: "0%", rotation: -2, duration: 1.2, ease: "expo.out" }, 0.4);

    // 2. Marquees
    const setupMarquee = (ref: any, direction: number) => {
      let xPercent = 0;
      let speed = 0.08 * direction;

      gsap.ticker.add(() => {
        const velocity = ScrollTrigger.getById("mainScroll")?.getVelocity() || 0;
        const currentSpeed = speed + (velocity * 0.0003 * direction);
        const skew = Math.min(Math.max(velocity * 0.015, -30), 30);

        xPercent += currentSpeed;
        if (xPercent <= -50) xPercent = 0;
        if (xPercent > 0) xPercent = -50;

        if (ref.current) {
          gsap.set(ref.current, { xPercent, skewX: skew });
        }
      });
    };
    setupMarquee(marquee1Ref, -1);
    setupMarquee(marquee2Ref, 1);

    ScrollTrigger.create({
      id: "mainScroll",
      trigger: rootRef.current,
      start: "top top",
      end: "bottom bottom",
    });

    // 3. Project Reveals
    projectsRef.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(el,
        {
          y: 250,
          scale: 0.7,
          rotation: index % 2 === 0 ? -15 : 15,
          filter: "grayscale(100%) contrast(300%) blur(15px)"
        },
        {
          y: 0,
          scale: 1,
          rotation: 0,
          filter: "grayscale(0%) contrast(100%) blur(0px)",
          duration: 1.5,
          ease: "elastic.out(1, 0.4)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // 4. Color Inversion
    ScrollTrigger.create({
      trigger: stackContainerRef.current,
      start: "top 50%",
      onEnter: () => document.documentElement.setAttribute('data-theme', 'dark'),
      onLeaveBack: () => document.documentElement.removeAttribute('data-theme'),
    });

    // 5. Testimonial Stacking Cards
    // Cards now use `sticky` positioning for perfect stacking without overlaps.
    [stackCard1Ref, stackCard2Ref, stackCard3Ref].forEach((cardRef, index) => {
      if (cardRef.current) {
        gsap.fromTo(cardRef.current,
          { y: 150, rotation: index % 2 === 0 ? -10 : 10, scale: 0.9, opacity: 0 },
          {
            y: 0, rotation: 0, scale: 1, opacity: 1,
            ease: "back.out(1.5)",
            duration: 0.8,
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [loading]);

  return (
    <div ref={rootRef} className="relative w-full min-h-screen selection:bg-[#FF3E3E] selection:text-white pb-20">
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <Navbar />

      <main className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-100"}>
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 relative flex flex-col justify-center items-center overflow-hidden">
          <div className="absolute top-40 left-10 w-32 h-32 bg-[var(--brutal-white)] border-[3px] border-[var(--brutal-black)] rounded-full mix-blend-difference blur-sm opacity-50 animate-pulse" />
          <div className="absolute bottom-40 right-10 w-48 h-48 bg-[#FF3E3E] border-[3px] border-[var(--brutal-black)] mix-blend-multiply blur-sm opacity-50" />

          <div className="max-w-9xl mx-auto w-full relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-end justify-between mb-12">
              <div className="flex-1">
                <BrutalBadge color="bg-[#FF3E3E] text-white border-black">Let's Collab</BrutalBadge>
                <div className="overflow-hidden mt-6 pb-2">
                  <h1 ref={heroTextRef1} className="font-syne font-black text-[15vw] md:text-[8vw] leading-[0.85] tracking-tighter uppercase text-[var(--text-color)] will-change-transform translate-y-[100%]">
                    D.R<br />
                  </h1>
                </div>
                <div className="overflow-hidden px-12 pt-12 pb-16 -mx-12 -mt-12 -mb-12">
                  <span ref={heroTextRef2} className="text-white text-shadow-brutal bg-[#FF3E3E] px-4 inline-block border-[4px] border-black font-syne font-black text-[15vw] md:text-[8vw] leading-[0.85] tracking-tighter uppercase will-change-transform translate-y-[100%]">
                    Developer
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-[var(--brutal-white)] text-[var(--brutal-black)] border-[3px] border-[var(--brutal-black)] p-6 brutal-shadow-lg relative">
                <div className="absolute -top-4 -right-4 bg-black text-white border-[3px] border-black p-2 transform rotate-12">
                  <Star className="fill-white" size={24} />
                </div>
                <p className="font-medium text-lg border-l-4 border-[#FF3E3E] pl-4">
                  I craft raw, unapologetic digital experiences. Next.js, React, and bold design.
                </p>
                <div className="mt-6 flex gap-4">
                  <BrutalButton className="w-full" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1n83D2cESFx-vWTbqv9AiRL_VVO85fibv/view?usp=sharing">Resume <ArrowUpRight size={18} /></BrutalButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full overflow-hidden border-y-[3px] border-[var(--brutal-black)] bg-[var(--brutal-black)] text-[var(--brutal-white)] py-4 sm:py-6 relative z-10 flex flex-nowrap">
          <div ref={marquee1Ref} className="inline-flex whitespace-nowrap items-center w-[200%] will-change-transform">
            {[...Array(10)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="font-syne font-black text-4xl sm:text-6xl uppercase px-4">FRONTEND DEVELOPER • REACT • NEXT.JS • VUE.JS • UI/UX DESIGN •</span>
                <Star className="fill-current mx-4" size={32} />
              </React.Fragment>
            ))}
          </div>
        </div>

        <section id="projects" className="py-24 relative bg-[var(--bg-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex justify-between items-end mb-20 border-b-[4px] border-[var(--text-color)] pb-6">
              <h2 className="font-syne font-black text-6xl md:text-8xl uppercase tracking-tighter text-[var(--text-color)]">Selected<br />Works</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {PROJECTS.map((project, index) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={el => { if (el) projectsRef.current[index] = el; }}
                  className={`group border-[4px] border-black ${project.color === 'bg-black text-white' && 'border-white'} ${project.color} p-8 transition-all duration-300 shadow-[12px_12px_0px_0px_var(--text-color)] flex flex-col will-change-transform min-w-0 hover:-translate-y-2`}
                >
                  <div className={`w-full h-56 border-[4px] border-inherit bg-white text-black mb-8 relative overflow-hidden flex items-center justify-center transition-all duration-500 grayscale group-hover:grayscale-0`}>
                    <div className="transform group-hover:scale-[1.5] group-hover:rotate-12 transition-transform duration-500 text-black">
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="font-syne font-black text-3xl sm:text-4xl mb-4 uppercase text-inherit break-words hyphens-auto">{project.title}</h3>
                  <p className="mb-8 flex-grow text-inherit font-bold opacity-90 text-lg break-words">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map(t => (
                      <BrutalBadge key={t} color="bg-transparent text-inherit border-inherit">{t}</BrutalBadge>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full overflow-hidden border-y-[3px] border-black bg-[#FF3E3E] text-white py-4 sm:py-6 relative z-10 flex flex-nowrap">
          <div ref={marquee2Ref} className="inline-flex whitespace-nowrap items-center w-[200%] will-change-transform">
            {[...Array(10)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="font-syne font-black text-4xl sm:text-6xl uppercase px-4">MODERN STACK • CREATIVE CODING • WEB3 •</span>
                <Star className="fill-current mx-4" size={32} />
              </React.Fragment>
            ))}
          </div>
        </div>

        <section id="about" className="py-32 relative bg-[var(--bg-color)] z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex justify-between items-end mb-20 border-b-[4px] border-[var(--text-color)] pb-6">
              <h2 className="font-syne font-black text-6xl md:text-8xl uppercase tracking-tighter text-[var(--text-color)]">About<br />Me</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="flex flex-col gap-16">
                <div>
                  <h3 className="font-syne font-black text-4xl mb-6 uppercase text-[var(--text-color)] border-l-8 border-[#FF3E3E] pl-6">Full Stack Expertise</h3>
                  <p className="text-2xl font-bold text-[var(--text-color)] opacity-90 leading-relaxed break-words">
                    I specialize in Full Stack Development. This includes Front-End as well as Backend.
                  </p>
                </div>
                <div>
                  <h3 className="font-syne font-black text-4xl mb-6 uppercase text-[var(--text-color)] border-l-8 border-[#FF3E3E] pl-6">Passion & Pursuit</h3>
                  <p className="text-2xl font-bold text-[var(--text-color)] opacity-90 leading-relaxed break-words">
                    In my free time you'll find me in front of a computer screen learning something new. Be it a Language, Programming language, Mathematics, Philosophy, Mythology or even Classical Literature. My favorite pass time is learning something new! Even so, I still enjoy sports and any outdoor activity just to be closer to nature.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-syne font-black text-4xl mb-8 uppercase text-[var(--text-color)] border-l-8 border-[#FF3E3E] pl-6">Core Stack</h3>
                <div className="flex flex-wrap gap-4">
                  {['React', 'Next.js', 'TypeScript', 'WebGL', 'Three.js', 'Node.js'].map(tech => (
                    <span key={tech} className="bg-[var(--bg-color)] text-[var(--text-color)] border-[4px] border-[var(--text-color)] px-6 py-4 font-black uppercase text-2xl shadow-[8px_8px_0px_0px_var(--text-color)] transform transition-transform hover:-translate-y-2 hover:-translate-x-2 hover:bg-[#FF3E3E] hover:text-white hover:border-[#000] hover:shadow-[16px_16px_0px_0px_var(--text-color)] break-words">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" ref={stackContainerRef} className="relative pt-32 pb-48 px-4 sm:px-6 bg-[var(--bg-color)] z-30">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="font-syne font-black text-6xl md:text-[4vw] uppercase tracking-tighter text-[var(--text-color)] mb-20 text-center drop-shadow-md">
              Testimonials
            </h2>

            <div className="relative flex flex-col gap-16 pb-32">
              <div ref={stackCard1Ref} className={`sticky top-[10vh] w-full border-[4px] border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_#FF3E3E] z-10 ${TESTIMONIALS[0].color} will-change-transform`}>
                <Quote className="mb-6 opacity-50" size={64} />
                <p className="text-2xl md:text-4xl font-medium mb-10 font-syne uppercase leading-tight break-words">"{TESTIMONIALS[0].text}"</p>
                <div>
                  <h4 className="font-black text-2xl md:text-3xl uppercase tracking-tight break-words">{TESTIMONIALS[0].name}</h4>
                  <p className="text-lg font-bold opacity-75 break-words">{TESTIMONIALS[0].role}</p>
                </div>
              </div>

              <div ref={stackCard2Ref} className={`sticky top-[15vh] w-full border-[4px] border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_#000] z-20 ${TESTIMONIALS[1].color} will-change-transform`}>
                <Quote className="mb-6 opacity-50" size={64} />
                <p className="text-2xl md:text-4xl font-medium mb-10 font-syne uppercase leading-tight break-words">"{TESTIMONIALS[1].text}"</p>
                <div>
                  <h4 className="font-black text-2xl md:text-3xl uppercase tracking-tight break-words">{TESTIMONIALS[1].name}</h4>
                  <p className="text-lg font-bold opacity-75 break-words">{TESTIMONIALS[1].role}</p>
                </div>
              </div>

              <div ref={stackCard3Ref} className={`sticky top-[20vh] w-full border-[4px] border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_#000] z-30 ${TESTIMONIALS[2].color} will-change-transform`}>
                <Quote className="mb-6 opacity-50" size={64} />
                <p className="text-2xl md:text-4xl font-medium mb-10 font-syne uppercase leading-tight break-words">"{TESTIMONIALS[2].text}"</p>
                <div>
                  <h4 className="font-black text-2xl md:text-3xl uppercase tracking-tight break-words">{TESTIMONIALS[2].name}</h4>
                  <p className="text-lg font-bold opacity-75 break-words">{TESTIMONIALS[2].role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 bg-[var(--bg-color)] border-t-[4px] border-[var(--text-color)] relative z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-0 flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="font-syne font-black text-7xl md:text-9xl uppercase tracking-tighter mb-8 leading-none text-[var(--text-color)] break-words">
                Let's<br />Talk<br />
              </h2>
              <div className="flex gap-6 mt-12">
                <BrutalButton href="https://github.com/DenoRautenbach/" target="_blank" rel="noopener noreferrer" variant="dark" className="w-20 h-20 !p-0 rounded-full flex items-center justify-center hover:bg-[#FF3E3E] hover:scale-110 transition-transform">
                  <Github size={32} />
                </BrutalButton>
                <BrutalButton href="mailto:denorauten@gmail.com" variant="dark" className="w-20 h-20 !p-0 rounded-full flex items-center justify-center hover:bg-[#FF3E3E] hover:scale-110 transition-transform">
                  <Mail size={32} />
                </BrutalButton>
              </div>
            </div>
            <div className="flex-1">
              <form action="https://formspree.io/f/xbdpbdwn" method="POST" className="bg-white text-black border-[4px] border-black p-10 brutal-shadow-lg flex flex-col gap-8 min-w-0">
                <div className="flex flex-col gap-3">
                  <label className="font-bold uppercase text-sm">Name</label>
                  <input type="text" name="name" className="border-[3px] border-black p-5 bg-transparent focus:outline-none focus:border-[#FF3E3E] focus:translate-x-2 transition-all" placeholder="Name" required />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-bold uppercase text-sm">Email</label>
                  <input type="email" name="email" className="border-[3px] border-black p-5 bg-transparent focus:outline-none focus:border-[#FF3E3E] focus:translate-x-2 transition-all" placeholder="Email" required />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-bold uppercase text-sm">Message</label>
                  <textarea name="message" rows={5} className="border-[3px] border-black p-5 bg-transparent focus:outline-none focus:border-[#FF3E3E] focus:translate-x-2 transition-all resize-none" placeholder="Message" required></textarea>
                </div>
                <BrutalButton type="submit" variant="primary" className="w-full mt-6 py-6 text-xl sm:text-2xl group hover:scale-105">
                  Send <ArrowRight className="group-hover:translate-x-4 transition-transform" size={32} />
                </BrutalButton>
              </form>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-black text-white border-t-[4px] border-white py-12 px-4 sm:px-6 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-syne font-black text-4xl uppercase">D.R &copy; {new Date().getFullYear()}</div>
        </div>
      </footer>
    </div>
  );
}
