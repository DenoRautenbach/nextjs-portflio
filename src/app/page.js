'use client'
import React from 'react';
import PillNav from './components/Header';
import logo from './assets/logo.png';
import FooterSection from './components/Footer'
import SinglePageSections from './components/SinglePageSections';
// import ReactLogoAnimation from './components/ReactLogo'
import LinksLayout from './components/Links';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-black ">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '#about' },
            { label: 'Testimonials', href: '#testimonials' },
            { label: 'Contact', href: '#contact' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      <main className="relative">
        {/* <LinksLayout /> */}
        <SinglePageSections />
        {/* <ReactLogoAnimation /> */}
      </main>
        <FooterSection />
    </div>
  );
}
