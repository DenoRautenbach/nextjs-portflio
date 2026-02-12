'use client';

import React from 'react';
import GridBackground from './GridBackground';
import SkewText from './SkewText';
import Magnet from './Magnet';
import { Code2, Cpu, Globe } from 'lucide-react';

export default function AboutSection() {
    return (
        <div className="relative w-full h-full overflow-hidden text-white selection:bg-[#00f0ff] selection:text-black">

            <GridBackground />

            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-50" />

            <main className="relative z-30 w-full min-h-screen flex flex-col justify-start md:justify-center items-center px-4 pt-32 md:pt-0">



                <div className="relative mix-blend-difference text-center mb-12">
                    <SkewText className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 select-none">
                        PROFILE
                    </SkewText>
                </div>

                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-12">
                    {/* Bio Column */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="group relative bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:border-[#00f0ff]/50 transition-colors duration-500">
                            <h3 className="text-xl font-bold font-mono tracking-tight text-[#00f0ff] mb-4 flex items-center gap-2">
                                <Cpu size={20} />
                                DIGITAL ARCHITECT
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed font-mono">
                                Obsessed with creating digital experiences that defy gravity. I specialize in merging high-performance code with cutting-edge visual design.
                            </p>
                        </div>

                        <div className="group relative bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:border-[#00f0ff]/50 transition-colors duration-500">
                            <h3 className="text-xl font-bold font-mono tracking-tight text-[#00f0ff] mb-4 flex items-center gap-2">
                                <Globe size={20} />
                                GLOBAL REACH
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed font-mono">
                                Based in the cloud, working with visionary clients worldwide to build the next generation of the web.
                            </p>
                        </div>
                    </div>

                    {/* Stats/Skills Column */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="group relative bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:border-[#00f0ff]/50 transition-colors duration-500">
                            <h3 className="text-xl font-bold font-mono tracking-tight text-[#00f0ff] mb-4 flex items-center gap-2">
                                <Code2 size={20} />
                                CORE STACK
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Next.js', 'TypeScript', 'WebGL', 'Three.js', 'Node.js'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-xs font-mono border border-white/10 rounded-full text-white/40 group-hover:border-[#00f0ff]/30 group-hover:text-[#00f0ff] transition-all duration-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mt-8">
                            <Magnet padding={50} disabled={false} magnetStrength={20}>
                                <button className="px-8 py-4 bg-white text-black font-bold font-mono text-sm hover:bg-[#00f0ff] transition-colors duration-300 rounded uppercase tracking-wider">
                                    Download Resume
                                </button>
                            </Magnet>
                        </div>
                    </div>
                </div>

            </main>

            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />

        </div>
    );
}
