'use client';

import React from 'react';
import GridBackground from './GridBackground';
import SkewText from './SkewText';
import Magnet from './Magnet';
import { projectsData } from '../data/projectsData';

const ProjectsSection = () => {
    return (
        <div className="relative w-full h-full overflow-hidden text-white selection:bg-[#00f0ff] selection:text-black">

            <GridBackground />

            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-50" />

            <main className="relative z-30 w-full min-h-screen flex flex-col justify-start md:justify-center items-center px-4 pt-32 md:pt-0">



                <div className="relative mix-blend-difference text-center mb-12">
                    <SkewText className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 select-none">
                        PROJECTS
                    </SkewText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full px-4 md:px-12">
                    {projectsData.map((project) => (
                        <a 
                            key={project.id} 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#00f0ff]/50 transition-colors duration-500 block cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden bg-black">
                                <div className="absolute inset-0 bg-[#00f0ff]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <Magnet padding={50} disabled={false} magnetStrength={20}>
                                        <div className="px-6 py-3 bg-white text-black font-bold font-mono text-sm group-hover:bg-[#00f0ff] transition-colors duration-300 rounded">
                                            View Project
                                        </div>
                                    </Magnet>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold font-mono tracking-tight group-hover:text-[#00f0ff] transition-colors duration-300 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed font-mono">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

            </main>

            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />

        </div>
    );
};

export default ProjectsSection;
