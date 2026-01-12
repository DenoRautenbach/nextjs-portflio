import React from "react";
import Magnet from "./Magnet";
import Keyboard from "./Keyboard";

const Projectslayout = () => {
  return (
    <>
    <Keyboard />
    <div className="relative w-full min-h-screen py-24 px-4 md:px-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Projects Grid */}
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Capstone */}
        <div className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#00f0ff]/50 transition-colors duration-500">
          <div className="relative h-64 md:h-80 overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[#00f0ff]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex justify-center items-center">
              <Magnet padding={50} disabled={false} magnetStrength={20}>
                <a href="https://github.com/Simp4Hitagi/Capstone-Mangako" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black font-bold font-mono text-sm hover:bg-[#00f0ff] transition-colors duration-300 rounded">
                  View Project
                </a>
              </Magnet>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold font-mono tracking-tight group-hover:text-[#00f0ff] transition-colors duration-300 mb-2">
              Ecommerce
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-mono">
              A decentralized ecommerce platform with advanced product management and secure checkout.
            </p>
          </div>
        </div>

        {/* Python Projects */}
        <div className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#00f0ff]/50 transition-colors duration-500">
          <div className="relative h-64 md:h-80 overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[#00f0ff]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex justify-center items-center">
              <Magnet padding={50} disabled={false} magnetStrength={20}>
                <a href="https://github.com/Simp4Hitagi/Python-Projects" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black font-bold font-mono text-sm hover:bg-[#00f0ff] transition-colors duration-300 rounded">
                  View Project
                </a>
              </Magnet>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold font-mono tracking-tight group-hover:text-[#00f0ff] transition-colors duration-300 mb-2">
              Python Projects
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-mono">
              Collection of Python utilities and automation scripts for data processing and workflows.
            </p>
          </div>
        </div>

        {/* TripTronik */}
        <div className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#00f0ff]/50 transition-colors duration-500">
          <div className="relative h-64 md:h-80 overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[#00f0ff]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex justify-center items-center">
              <Magnet padding={50} disabled={false} magnetStrength={20}>
                <a href="https://dev-triptronik.pantheonsite.io/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black font-bold font-mono text-sm hover:bg-[#00f0ff] transition-colors duration-300 rounded">
                  View Project
                </a>
              </Magnet>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold font-mono tracking-tight group-hover:text-[#00f0ff] transition-colors duration-300 mb-2">
              TripTronik
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-mono">
              WordPress-powered travel agency website with booking integration and custom themes.
            </p>
          </div>
        </div>

      </article>
      </div>
    </div>
    </>
  );
};

export default Projectslayout;