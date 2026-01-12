'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Github, ExternalLink, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    links: {
        demo: string;
        repo: string;
    };
}

const projects: Project[] = [
    {
        id: 1,
        title: "NEURAL NEXUS",
        description: "A decentralized AI computing network visualization dashboard. Features real-time node tracking, 3D data visualization, and quantum encryption protocols.",
        tags: ["Next.js", "Three.js", "WebGL", "Solidity"],
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
        links: { demo: "#", repo: "#" }
    },
    {
        id: 2,
        title: "CYBER SYNTH",
        description: "Browser-based modular synthesizer with WebAudio API. Includes 16-step sequencer, multiple oscillator types, and real-time waveform visualization.",
        tags: ["React", "WebAudio", "Canvas API", "Rust"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        links: { demo: "#", repo: "#" }
    },
    {
        id: 3,
        title: "VOID TERMINAL",
        description: "Advanced CLI environment for cloud infrastructure management. Supports custom plugins, macro recording, and collaborative sessions.",
        tags: ["TypeScript", "Node.js", "WebSocket", "Docker"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        links: { demo: "#", repo: "#" }
    },
    {
        id: 4,
        title: "AETHER MARKET",
        description: "Next-generation NFT marketplace focusing on generative art. Implements zero-gas bidding and fractional ownership smart contracts.",
        tags: ["Vue", "Ethers.js", "IPFS", "GraphQL"],
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
        links: { demo: "#", repo: "#" }
    }
];

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Cards Animation
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1, // Stagger effect
                    ease: "power3.out"
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen bg-[#050505] text-white py-24 px-4 md:px-12 overflow-hidden">

            {/* Background Grid Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent" />
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent" />
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-20 flex flex-col items-start">
                    <div className="flex items-center gap-2 text-[#00f0ff] font-mono text-sm tracking-widest mb-4">
                        <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse" />
                        02. ARCHIVES
                    </div>
                    <h2 ref={titleRef} className="text-5xl md:text-7xl font-black tracking-tighter mix-blend-difference">
                        SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">WORKS</span>
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={el => { cardsRef.current[index] = el }}
                            className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#00f0ff]/50 transition-colors duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 md:h-80 overflow-hidden">
                                <div className="absolute inset-0 bg-[#00f0ff]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                                />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                                    <a href={project.links.repo} className="p-3 bg-white text-black rounded-full hover:bg-[#00f0ff] transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.links.demo} className="p-3 bg-white text-black rounded-full hover:bg-[#00f0ff] transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold font-mono tracking-tight group-hover:text-[#00f0ff] transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="text-white/40 group-hover:text-[#00f0ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>

                                <p className="text-white/60 text-sm leading-relaxed mb-6 font-mono">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-mono border border-white/10 rounded-full text-white/40 group-hover:border-[#00f0ff]/30 group-hover:text-[#00f0ff] transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
