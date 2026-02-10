'use client';

import React, { useState } from 'react';
import { Send, Terminal } from 'lucide-react';
import GridBackground from './GridBackground';
import SkewText from './SkewText';

export default function ContactSection() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate sending
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <div className="relative w-full h-full overflow-hidden text-white selection:bg-[#00f0ff] selection:text-black">

            <GridBackground />

            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-50" />

            <main className="relative z-30 w-full h-full flex flex-col justify-center items-center px-4">

                <div className="absolute top-[15%] font-mono text-[#00f0ff] text-xs tracking-[0.3em] uppercase animate-pulse">
                    Communication Link
                </div>

                <div className="relative mix-blend-difference text-center mb-12">
                    <SkewText className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 select-none">
                        CONTACT
                    </SkewText>
                </div>

                <div className="w-full max-w-2xl relative z-10 flex flex-col items-center px-4 md:px-12">
                    <div className="backdrop-blur-sm bg-black/40 border border-white/10 p-8 rounded-lg relative overflow-hidden group w-full">
                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff]" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00f0ff]" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00f0ff]" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00f0ff]" />

                        <div className="flex items-center gap-2 mb-8 font-mono text-xs text-[#00f0ff]/70">
                            <Terminal size={14} className="text-[#00f0ff]" />
                            <span>ESTABLISH_CONNECTION</span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 w-full">
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-white/5 border-b border-white/10 px-0 py-2 text-white font-sans focus:outline-none focus:border-[#00f0ff] focus:bg-white/10 transition-all placeholder:text-white/20"
                                    placeholder="ENTER_NAME"
                                />
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-white/5 border-b border-white/10 px-0 py-2 text-white font-sans focus:outline-none focus:border-[#00f0ff] focus:bg-white/10 transition-all placeholder:text-white/20"
                                    placeholder="ENTER_EMAIL"
                                />
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-white/5 border-b border-white/10 px-0 py-2 text-white font-sans focus:outline-none focus:border-[#00f0ff] focus:bg-white/10 transition-all placeholder:text-white/20 resize-none"
                                    placeholder="ENTER_MESSAGE_DATA..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-bold font-mono text-xs py-4 hover:bg-[#00f0ff] disabled:bg-white/50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {isSubmitting ? 'TRANSMITTING...' : isSent ? 'TRANSMISSION_COMPLETE' : 'INITIATE_TRANSMISSION'}
                                    {!isSubmitting && !isSent && <Send size={14} className="group-hover/btn:translate-x-1 transition-transform" />}
                                </span>
                                {isSubmitting && (
                                    <div className="absolute inset-0 bg-[#00f0ff]/20 animate-pulse" />
                                )}
                            </button>
                        </form>

                        {/* Scanline effect */}
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_0%,rgba(0,240,255,0.05)_50%,transparent_100%)] bg-[length:100%_4px]" />
                    </div>
                </div>

            </main>

            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />

        </div>
    );
}
