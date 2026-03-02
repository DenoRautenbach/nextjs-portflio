'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';
import GridBackground from './GridBackground';
import SkewText from './SkewText';

/**
 * COMPONENTS
 */

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const duration = 2000;
        const interval = 20;
        const steps = duration / interval;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = Math.min(100, Math.floor((currentStep / steps) * 100));
            setCount(progress);

            if (currentStep >= steps) {
                clearInterval(timer);
                setTimeout(onComplete, 500);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-50 bg-black flex flex-col justify-between p-8 md:p-12 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${count === 100 ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="flex justify-between items-start text-white/50 font-mono text-xs">
                <span>INITIALIZING...</span>
            </div>

            <div className="relative">
                <div className="text-[15vw] md:text-[20vw] font-black text-white leading-none tracking-tighter">
                    {count}%
                </div>
                <div className="h-[2px] w-full bg-white/20 mt-4 overflow-hidden">
                    <div
                        className="h-full bg-white transition-all duration-100 ease-out"
                        style={{ width: `${count}%` }}
                    />
                </div>
            </div>

            <div className="flex justify-between items-end text-white/50 font-mono text-xs uppercase">
                <span className="w-32">Loading Assets</span>
                <span>(c) 2024</span>
            </div>
        </div>
    );
};

export default function Hero() {
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <div className="relative w-full h-screen bg-[#050505] overflow-hidden text-white selection:bg-[#00f0ff] selection:text-black">

            {loading && <Preloader onComplete={() => setLoading(false)} />}

            <GridBackground />

            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-50" />

            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-50" />


            <main className={`relative z-30 w-screen h-full flex flex-col justify-center items-center px-4 transition-all duration-1000 delay-700 ${loading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>

                <div className="absolute top-[20%] font-mono text-[#00f0ff] text-xs tracking-[0.3em] uppercase animate-pulse">
                    Let's Get Coding
                </div>

                <div className="relative mix-blend-difference text-center">
                    <SkewText className="text-[14vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 select-none">
                        DENO
                    </SkewText>
                    <SkewText className="text-[14vw] leading-[0.8] font-black tracking-tighter text-white select-none relative">
                        RAUTENBACH
                        <span className="absolute -top-4 -right-8 w-8 h-8 text-[#00f0ff]">
                            <Plus size={32} strokeWidth={4} />
                        </span>
                    </SkewText>
                </div>

                <div className="mt-12 max-w-md text-center">
                    <p className="text-white/60 font-mono text-sm leading-relaxed backdrop-blur-sm p-4 border border-white/5 rounded-lg">
                        Building digital experiences on the web.
                        <br />
                        Let's make something amazing together.
                    </p>
                </div>

            </main>

            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />

        </div>
    );
}
