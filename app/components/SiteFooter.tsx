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
                        SOMEWHERE IN A DARK ROOM
                    </div>
                    <div>34.0522° N, 118.2437° W</div>
                </div>
            </div>


        </footer>
    );
}
