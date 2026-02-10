'use client';

import React, { useState, useEffect } from 'react';
import { Hexagon, Menu, X, ArrowUpRight } from 'lucide-react';
import SkewText from './SkewText';

const navLinks = [
    { name: 'HOME', href: '#hero', sectionIndex: 0 },
    { name: 'ABOUT', href: '#about', sectionIndex: 1 },
    { name: 'PROJECTS', href: '#projects', sectionIndex: 2 },
    { name: 'CONTACT', href: '#contact', sectionIndex: 3 },
    { name: 'TESTIMONIALS', href: '#testimonials', sectionIndex: 4 },
];

export default function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for header background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md py-4' : 'bg-transparent py-6 md:py-8'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2 font-mono text-sm tracking-widest text-white mix-blend-difference z-[110] relative">
                        <Hexagon size={16} className="text-[#00f0ff]" />
                        <span className="font-bold">AETHER</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-mono text-xs font-bold text-white/70 hover:text-[#00f0ff] tracking-wider transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00f0ff] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Right Side: CTA & Mobile Burger */}
                    <div className="flex items-center gap-4 z-[110] relative">
                        <button className="hidden md:flex bg-white text-black px-5 py-2 font-bold font-mono text-[10px] hover:bg-[#00f0ff] transition-colors duration-300 items-center gap-2 group border border-transparent hover:border-[#00f0ff]/50">
                            START PROJECT
                            <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-white hover:text-[#00f0ff] transition-colors p-2"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center items-center md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col gap-6 text-center">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="group relative overflow-hidden"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <SkewText
                                className={`text-4xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00f0ff] transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            >
                                {link.name}
                            </SkewText>
                        </a>
                    ))}
                </div>

                <div className={`absolute bottom-12 flex flex-col items-center gap-4 transition-all duration-500 delay-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="w-12 h-1 bg-[#00f0ff] rounded-full" />
                    <p className="font-mono text-xs text-white/50">AETHER GRID v3.0</p>
                </div>
            </div>
        </>
    );
}
