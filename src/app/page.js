'use client'
import React from 'react';
import Navbar from './components/Navbar';
import FooterSection from './components/Footer'
import SinglePageSections from './components/SinglePageSections';
// import ReactLogoAnimation from './components/ReactLogo'
import LinksLayout from './components/Links';
import HomeLayoutSection from './components/HomeLayoutSection';
import Projectslayout from './components/ProjectsLayout';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-black">
      <main className="relative">
        {/* <Navbar /> */}
        {/* <LinksLayout /> */}
        <HomeLayoutSection />
        {/* <SinglePageSections /> */}
        {/* <ReactLogoAnimation /> */}
            {/* <Projectslayout /> */}
            {/* <Slider />
            <AboutLayoutSection />
            <TestimonialsLayout /> */}
      </main>
        {/* <FooterSection /> */}
    </div>
  );
}
