"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentProgress = 0;
    
    // Blocky ticking mechanism
    const interval = setInterval(() => {
      // jump by random amounts to feel mechanical and deliberate
      const jump = Math.floor(Math.random() * 20) + 10;
      currentProgress += jump;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Wait a tiny bit at 100% then exit aggressively
        setTimeout(() => {
          if (loaderRef.current) {
            gsap.to(loaderRef.current, {
              // Diagonal slice out
              clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
              duration: 0.6,
              ease: "power4.inOut",
              onComplete: () => {
                onComplete();
              }
            });
          }
        }, 200);
      }
      
      setProgress(currentProgress);
    }, 100);
    
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[100] bg-black text-white flex items-center justify-center border-[8px] border-black"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", willChange: "clip-path" }}
    >
      {/* Background grid for brutalist feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMxMTExMTEiPjwscmVjdD48cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzIyMjIyMiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9zdmc+')] opacity-40 mix-blend-screen pointer-events-none" />
      
      <div className="font-syne font-black text-[25vw] leading-none tracking-tighter mix-blend-difference relative z-10">
        {progress}%
      </div>
    </div>
  );
}
