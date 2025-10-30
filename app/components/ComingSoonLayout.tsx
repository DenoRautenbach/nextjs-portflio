'use client';
import { useState, useEffect } from 'react';
import LightRays from './LightRays';
import TextPressure from './TextPressure';
import Magnet from './Magnet';

export default function ComingSoonLayout() {
  const [fontSize, setFontSize] = useState(300);
  const [screenSize, setScreenSize] = useState<'small' | 'medium' | 'large' | 'xlarge'>('xlarge');

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setFontSize(60);
        setScreenSize('small');
      } else if (width < 768) {
        setFontSize(100);
        setScreenSize('medium');
      } else if (width < 1024) {
        setFontSize(180);
        setScreenSize('large');
      } else {
        setFontSize(300);
        setScreenSize('xlarge');
      }
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-black overflow-hidden">
      {/* Background Light Rays */}
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* Tint Overlay for medium to small screens */}
      {(screenSize === 'small' || screenSize === 'medium') && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-0 pointer-events-none" />
      )}

      {/* Centered Text Overlay */}
      <div className="absolute z-10 flex items-center justify-center w-full px-4 sm:px-8 md:px-12">
        <div className="w-full max-w-7xl text-center">
          {screenSize === 'small' || screenSize === 'medium' ? (
            <h1
              className="font-bold text-white text-5xl sm:text-6xl md:text-7xl"
              style={{
                textShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
                filter: 'brightness(1.2)',
              }}
            >
              Coming Soon
            </h1>
          ) : (
            <TextPressure
              text="Coming Soon"
              flex
              alpha
              stroke
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={fontSize}
            />
          )}
        </div>
      </div>

      {/* Magnetic Buttons Section */}
      <div className="absolute md:bottom-50 bottom-70 z-20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4">
        {[
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/deno-rautenbach-b1698018a',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/DenoRautenbach',
          },
          {
            label: 'Resumé',
            href: 'https://drive.google.com/file/d/1n83D2cESFx-vWTbqv9AiRL_VVO85fibv/view?usp=sharing',
          },
        ].map(({ label, href }) => (
          <Magnet key={label} padding={60} magnetStrength={10}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm sm:text-base text-white transition-all hover:bg-white/10 backdrop-blur-sm"
            >
              <span>{label}</span>
            </a>
          </Magnet>
        ))}
      </div>
    </div>
  );
}
