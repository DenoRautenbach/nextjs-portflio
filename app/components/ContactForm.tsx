'use client';

import { Send, Terminal } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import React, { useEffect } from 'react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xbdpbdwn");

    useEffect(() => {
        if (state.submitting) console.log("FORMSPREE_STATUS: Submitting data packet...");
        if (state.succeeded) console.log("FORMSPREE_STATUS: Transmission successful!");
        if (state.errors) {
            console.error("FORMSPREE_ERROR: Data corruption detected:", state.errors);
        }
    }, [state]);

    const handleDebugSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget);
        console.log("FORMSPREE_DEBUG: Preparing packet:", Object.fromEntries(formData.entries()));
        handleSubmit(e);
    };

    if (state.succeeded) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
                <div className="w-16 h-16 bg-[#00f0ff]/20 rounded-full flex items-center justify-center mb-6">
                    <Send className="text-[#00f0ff]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">TRANSMISSION_COMPLETE</h3>
                <p className="text-white/60 font-mono text-sm max-w-sm">
                    Connection established. Data packet received. I will get back to you shortly.
                </p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="mt-8 text-[#00f0ff] font-mono text-xs hover:underline"
                >
                    SEND_ANOTHER_MESSAGE
                </button>
            </div>
        );
    }

    return (
        <>
        <div className="flex flex-col items-end w-full px-4 md:px-12">
            <div className="flex items-center gap-2 text-[#00f0ff] font-mono text-sm tracking-widest mb-4">
              <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse" />
              02. CONTACT
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-normal mix-blend-difference text-white">
              GET IN TOUCH
            </h2>
          </div>
        <div className="w-full max-w-2xl ml-auto relative z-10 flex flex-col items-end px-4 md:px-12">
            <div className="backdrop-blur-sm bg-black/40 border border-white/10 p-8 rounded-lg relative overflow-hidden group">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff]" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00f0ff]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00f0ff]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00f0ff]" />

                <div className="flex items-center gap-2 mb-8 font-mono text-xs text-[#00f0ff/70]">
                    <Terminal size={14} className="text-[#00f0ff]" />
                    <span>ESTABLISH_CONNECTION</span>
                </div>

                <form 
                    action="https://formspree.io/f/xbdpbdwn"
                    method="POST"
                    onSubmit={handleDebugSubmit} 
                    className="space-y-6 w-100"
                >
                    <div className="space-y-2">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full bg-white/5 border-b border-white/10 px-0 py-2 text-white font-sans focus:outline-none focus:border-[#00f0ff] focus:bg-white/10 transition-all placeholder:text-white/20"
                            placeholder="ENTER_NAME"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 font-mono text-[10px]" />
                    </div>

                    <div className="space-y-2">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full bg-white/5 border-b border-white/10 px-0 py-2 text-white font-sans focus:outline-none focus:border-[#00f0ff] focus:bg-white/10 transition-all placeholder:text-white/20"
                            placeholder="ENTER_EMAIL"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 font-mono text-[10px]" />
                    </div>

                    <div className="space-y-2">
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="w-full bg-white/5 border-b border-white/10 px-0 py-2 text-white font-sans focus:outline-none focus:border-[#00f0ff] focus:bg-white/10 transition-all placeholder:text-white/20 resize-none"
                            placeholder="ENTER_MESSAGE_DATA..."
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 font-mono text-[10px]" />
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-white text-black font-bold font-mono text-xs py-4 hover:bg-[#00f0ff] disabled:bg-white/50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {state.submitting ? 'TRANSMITTING...' : 'INITIATE_TRANSMISSION'}
                            {!state.submitting && <Send size={14} className="group-hover/btn:translate-x-1 transition-transform" />}
                        </span>
                        {state.submitting && (
                            <div className="absolute inset-0 bg-[#00f0ff]/20 animate-pulse" />
                        )}
                    </button>
                </form>

                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_0%,rgba(0,240,255,0.05)_50%,transparent_100%)] bg-[length:100%_4px]" />
            </div>
        </div>
        </>
    );
}
