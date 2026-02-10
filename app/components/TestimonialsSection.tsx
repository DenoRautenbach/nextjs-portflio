'use client';

import React from 'react';
import GridBackground from './GridBackground';
import SkewText from './SkewText';
import { Quote, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialsSection() {
    return (
        <div className="relative w-full h-full overflow-hidden text-white selection:bg-[#00f0ff] selection:text-black">

            <GridBackground />

            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-50" />

            <main className="relative z-30 w-full h-full flex flex-col justify-center items-center px-4">

                <div className="absolute top-[15%] font-mono text-[#00f0ff] text-xs tracking-[0.3em] uppercase animate-pulse">
                    Client Intel
                </div>

                <div className="relative mix-blend-difference text-center mb-12">
                    <SkewText className="text-[10vw] md:text-[6vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 select-none">
                        TESTIMONIALS
                    </SkewText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full px-4 md:px-12">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="group relative bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm hover:border-[#00f0ff]/50 transition-colors duration-500 hover:-translate-y-2">

                            <div className="mb-6 text-[#00f0ff]">
                                <Quote size={32} className="opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <p className="text-white/80 text-sm leading-relaxed mb-8 flex-grow font-light font-mono">
                                "{testimonial.content}"
                            </p>

                            <div className="border-t border-white/10 pt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-white font-bold text-sm font-mono tracking-tight">{testimonial.name}</h4>
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={12} className="fill-[#00f0ff] text-[#00f0ff]" />
                                        ))}
                                    </div>
                                </div>
                                <div className="text-xs font-mono text-[#00f0ff]/80">
                                    {testimonial.role} @ {testimonial.company}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </main>

            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />

        </div>
    );
}
