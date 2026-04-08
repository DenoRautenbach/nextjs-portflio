'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import SkewText from './SkewText';

const navLinks = [
    { name: 'HOME', href: '#hero', sectionIndex: 0 },
    { name: 'PROJECTS', href: '#projects', sectionIndex: 1 },
    { name: 'ABOUT', href: '#about', sectionIndex: 2 },
    { name: 'TESTIMONIALS', href: '#testimonials', sectionIndex: 3 },
    { name: 'CONTACT', href: '#contact', sectionIndex: 4 },
];

interface SiteHeaderProps {
    onNavLinkClick?: (index: number) => void;
}

export default function SiteHeader({ onNavLinkClick }: SiteHeaderProps) {
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
                className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md py-4' : 'bg-transparent py-6 md:py-8'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2 font-mono text-sm tracking-widest text-white mix-blend-difference z-[110] relative">
                        {/* <Image src="/logo.svg" alt="DR Logo" width={20} height={20} className="object-contain" /> */}
                        <SkewText className="text-[30px] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 select-none">
                            DR
                        </SkewText>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (onNavLinkClick) {
                                        e.preventDefault();
                                        onNavLinkClick(link.sectionIndex);
                                    }
                                }}
                                className="font-mono text-xs font-bold text-white/70 hover:text-[#00f0ff] tracking-wider transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00f0ff] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Right Side: CTA & Mobile Burger */}
                    <div className="flex items-center gap-4 z-[110] relative">
                        <a 
                            href="https://drive.google.com/file/d/1n83D2cESFx-vWTbqv9AiRL_VVO85fibv/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex bg-white text-black px-5 py-2 font-bold font-mono text-[10px] hover:bg-[#00f0ff] transition-colors duration-300 items-center gap-2 group border border-transparent hover:border-[#00f0ff]/50"
                        >
                            VIEW RESUME
                            <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>

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
                            onClick={(e) => {
                                setIsMenuOpen(false);
                                if (onNavLinkClick && window.innerWidth >= 768) {
                                    e.preventDefault();
                                    onNavLinkClick(link.sectionIndex);
                                }
                            }}
                            className="group relative overflow-hidden"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <span className={`text-4xl font-black text-white group-hover:text-[#00f0ff] transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                {link.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
