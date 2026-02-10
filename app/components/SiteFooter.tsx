'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SiteFooter() {
    return (
        <footer className="fixed bottom-0 left-0 w-full z-[100] pointer-events-none p-8 md:p-12">

            {/* Bottom Left - System Status */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 pointer-events-auto hidden md:block">
                <div className="flex flex-col gap-2 font-mono text-[10px] text-white/60">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                        SYSTEM OPERATIONAL
                    </div>
                    <div>34.0522° N, 118.2437° W</div>
                </div>
            </div>

            {/* Bottom Right - CTA */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 pointer-events-auto">
                <button className="bg-white text-black px-6 py-3 font-bold font-mono text-xs hover:bg-[#00f0ff] transition-colors duration-300 flex items-center gap-2 group">
                    START PROJECT
                    <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

        </footer>
    );
}
