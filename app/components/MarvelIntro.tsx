"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';

// Configuration
const DURATION_FLIP = 2500;
const DURATION_MASK = 1500;
const DURATION_TOTAL = DURATION_FLIP + DURATION_MASK;

// Cyberpunk / Aqua Blue Monochromatic Palette
const colors = [
  '#00f0ff', // Primary Neon Cyan
  '#00bcd4', // Medium Cyan
  '#80deea', // Light Cyan
  '#006064', // Dark Teal
  '#18ffff', // Accent Cyan
  '#0097a7', // Muted Cyan
  '#e0f7fa', // Pale Cyan
];

// --- Drawing Helpers (Moved outside component to avoid recreation/lint issues) ---

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const drawCodeScreen = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  // Very dark teal/black background for code editor
  ctx.fillStyle = '#000a0c'; 
  ctx.fillRect(0, 0, width, height);

  const fontSize = Math.max(10, width / 60);
  const lineHeight = fontSize * 1.5;
  const columns = 2;
  
  ctx.font = `bold ${fontSize}px "Courier New", monospace`;

  for (let c = 0; c < columns; c++) {
    const xOffset = c * (width / 2) + 20;
    for (let y = 0; y < height; y += lineHeight) {
      if (Math.random() > 0.8) continue;

      const indent = Math.floor(Math.random() * 4) * 20;
      let currentX = xOffset + indent;
      const tokens = Math.floor(Math.random() * 5) + 1;

      for (let t = 0; t < tokens; t++) {
        const tokenWidth = Math.random() * 80 + 20;
        ctx.fillStyle = randomColor();
        
        if (Math.random() > 0.3) {
          ctx.fillRect(currentX, y + (lineHeight/4), tokenWidth, fontSize/2);
        } else {
          const symbols = ['{ }', '();', '</>', 'if', 'return', 'import', '=>', '0101'];
          const sym = symbols[Math.floor(Math.random() * symbols.length)];
          ctx.fillText(sym, currentX, y + fontSize);
        }
        currentX += tokenWidth + 10;
      }
    }
  }
};

const drawBinaryScreen = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  // Deep black-blue background
  ctx.fillStyle = '#000205';
  ctx.fillRect(0, 0, width, height);
  ctx.font = '16px monospace';
  // Primary Cyan for matrix rain
  ctx.fillStyle = '#00f0ff'; 
  for(let i=0; i<100; i++) {
    ctx.fillText(Math.random() > 0.5 ? '1' : '0', Math.random() * width, Math.random() * height);
  }
};

const drawBlockScreen = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  // Dark tech background
  ctx.fillStyle = '#001015'; 
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = randomColor();
  ctx.lineWidth = 2;
  for(let i=0; i<20; i++) {
    ctx.strokeRect(Math.random() * width, Math.random() * height, Math.random() * 300, Math.random() * 300);
  }
};

const drawGlitch = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const slices = Math.floor(Math.random() * 5) + 2; 
  for (let i = 0; i < slices; i++) {
    const sliceH = Math.random() * 20 + 5;
    const sliceY = Math.random() * height;
    const offset = (Math.random() - 0.5) * 40; 
    
    // Draw slice offset (tearing)
    ctx.drawImage(ctx.canvas, 0, sliceY, width, sliceH, offset, sliceY, width, sliceH);

    // Add colored artifacts (Cyan/Magenta)
    if (Math.random() > 0.7) {
       ctx.fillStyle = Math.random() > 0.5 ? '#00f0ff' : '#ff00ff';
       ctx.globalAlpha = 0.8;
       ctx.fillRect(Math.random() * width, sliceY, Math.random() * 100 + 20, sliceH);
       ctx.globalAlpha = 1.0;
    }
  }
};

interface MarvelIntroProps {
    onRevealChange?: (isRevealed: boolean) => void;
}

/**
 * MarvelIntro Component
 */
const MarvelIntro: React.FC<MarvelIntroProps> = ({ onRevealChange }) => {
  // Refs for DOM elements
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement>(null);
  
  // State for the final reveal animation (managed via CSS)
  const [isRevealed, setIsRevealed] = useState(false);

  // Refs for Animation Logic (Mutable, no re-renders)
  const animationRef = useRef<{
    reqId: number | null;
    startTime: number | null;
    frame: number;
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D | null;
    maskCtx: CanvasRenderingContext2D | null;
    phase: 'idle' | 'flip' | 'mask' | 'reveal';
    hasTriggeredReveal: boolean;
    cleanFrame: ImageData | null;
  }>({
    reqId: null,
    startTime: null,
    frame: 0,
    width: 0,
    height: 0,
    ctx: null,
    maskCtx: null,
    phase: 'idle', 
    hasTriggeredReveal: false,
    cleanFrame: null
  });

  // --- Main Animation Loop ---
  const loop = useCallback(function animate(timestamp: number) {
    const state = animationRef.current;
    
    if (state.phase === 'idle') return;

    if (!state.startTime) state.startTime = timestamp;
    
    const elapsed = timestamp - state.startTime;
    state.frame++;

    if (elapsed < DURATION_FLIP) {
        state.phase = 'flip';
    } else if (elapsed < DURATION_TOTAL) {
        state.phase = 'mask';
    } else {
        state.phase = 'reveal';
    }

    const { width, height, ctx, maskCtx, phase } = state;
    if (!ctx || !maskCtx) return;

    const shouldDraw = state.frame % 5 === 0;

    if (phase === 'reveal') {
        if (!state.hasTriggeredReveal) {
            setIsRevealed(true);
            if (onRevealChange) onRevealChange(true);
            state.hasTriggeredReveal = true;
            // Capture the clean state of the canvas before any glitches
            state.cleanFrame = ctx.getImageData(0, 0, width, height);
        }

        // Restore clean frame to prevent glitch accumulation (makes effect "faster"/transient)
        if (state.cleanFrame) {
            ctx.putImageData(state.cleanFrame, 0, 0);
        }

        // Continue glitch effect occasionally during reveal (Reduced frequency)
        if (Math.random() > 0.95) {
            drawGlitch(ctx, width, height);
        }
        state.reqId = requestAnimationFrame(animate);
        return; 
    }

    // Reset cleanFrame if we go back to other phases (e.g. replay)
    if (state.cleanFrame) {
        state.cleanFrame = null;
    }

    if (phase === 'flip' && shouldDraw) {
      const seed = Math.random();
      if(seed < 0.6) drawCodeScreen(ctx, width, height);
      else if(seed < 0.8) drawBinaryScreen(ctx, width, height);
      else drawBlockScreen(ctx, width, height);

      ctx.fillStyle = 'rgba(0, 240, 255, 0.05)';
      ctx.fillRect(0,0,width,height);

    } else if (phase === 'mask') {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      if (shouldDraw) {
        const seed = Math.random();
        if(seed < 0.6) drawCodeScreen(maskCtx, width, height);
        else if(seed < 0.8) drawBinaryScreen(maskCtx, width, height);
        else drawBlockScreen(maskCtx, width, height);
      }

      maskCtx.globalCompositeOperation = 'destination-in';
      maskCtx.fillStyle = '#000';
      maskCtx.font = `bold 15vw Impact, sans-serif`;
      maskCtx.textAlign = 'left';
      maskCtx.textBaseline = 'middle';
      maskCtx.fillText('LOADING...', width * 0.05, height / 2);
      maskCtx.globalCompositeOperation = 'source-over';
      
      ctx.drawImage(maskCanvasRef.current!, 0, 0);

      // Apply glitch effect on top of the masked text/content (Reduced frequency)
      if (Math.random() > 0.8) {
          drawGlitch(ctx, width, height);
      }
    }

    state.reqId = requestAnimationFrame(animate);
  }, [onRevealChange]);

  useEffect(() => {
    if (canvasRef.current && maskCanvasRef.current) {
        animationRef.current.ctx = canvasRef.current.getContext('2d');
        animationRef.current.maskCtx = maskCanvasRef.current.getContext('2d');
    }

    const handleResize = () => {
        if (!containerRef.current || !canvasRef.current || !maskCanvasRef.current) return;
        const { clientWidth, clientHeight } = containerRef.current;
        
        animationRef.current.width = clientWidth;
        animationRef.current.height = clientHeight;

        canvasRef.current.width = clientWidth;
        canvasRef.current.height = clientHeight;
        maskCanvasRef.current.width = clientWidth;
        maskCanvasRef.current.height = clientHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    const currentAnimationRef = animationRef.current; // Capture ref for cleanup

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                   if (currentAnimationRef.phase === 'idle') {
                       currentAnimationRef.startTime = null; 
                       currentAnimationRef.phase = 'flip';
                       currentAnimationRef.hasTriggeredReveal = false;
                       setIsRevealed(false);
                       if (onRevealChange) onRevealChange(false);
                       
                       if (!currentAnimationRef.reqId) {
                           currentAnimationRef.reqId = requestAnimationFrame(loop);
                       }
                   }
                } else {
                    if (currentAnimationRef.reqId) {
                        cancelAnimationFrame(currentAnimationRef.reqId);
                        currentAnimationRef.reqId = null;
                    }
                    currentAnimationRef.phase = 'idle';
                    currentAnimationRef.hasTriggeredReveal = false;
                    setIsRevealed(false);
                    if (onRevealChange) onRevealChange(false);
                }
            });
        },
        { threshold: 0.4 } 
    );

    if (containerRef.current) {
        observer.observe(containerRef.current);
    }

    return () => {
        window.removeEventListener('resize', handleResize);
        if (currentAnimationRef.reqId) cancelAnimationFrame(currentAnimationRef.reqId);
        observer.disconnect();
    };
  }, [loop, onRevealChange]); 

  const handleReplay = () => {
      setIsRevealed(false);
      animationRef.current.startTime = null;
      animationRef.current.hasTriggeredReveal = false;
      animationRef.current.phase = 'flip';
      
      if (!animationRef.current.reqId) {
          animationRef.current.reqId = requestAnimationFrame(loop);
      }
  };

  return (
    <div 
        ref={containerRef} 
        className="relative w-full h-full bg-black flex justify-center items-center overflow-hidden font-sans select-none"
    >
        <canvas 
            ref={canvasRef} 
            className="absolute top-0 left-0 z-10 block"
        />
        
        <canvas 
            ref={maskCanvasRef} 
            className="hidden" 
        />

        <div 
            className={`absolute z-20 flex flex-col items-start pointer-events-none transition-opacity duration-100 ease-in-out ${
                isRevealed ? 'opacity-100' : 'opacity-0'
            } translate-y-4 left-[5%]`}
        >
            <div 
                className="bg-[#00f0ff] text-black px-4 text-[16vw] leading-none tracking-tighter shadow-[0_0_30px_rgba(0,240,255,0.6)] font-black"
                style={{ fontFamily: 'Impact, sans-serif' }}
            >
                LETS BUILD
            </div>
            <div 
                className={`text-[#00f0ff] font-bold tracking-[0.4em] mt-4 text-[2vw] uppercase transition-all duration-700 delay-100 ease-out ${
                    isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                }`}
                style={{ textShadow: '0 0 10px rgba(0,240,255,0.5)' }}
            >
                Shaping the Future, together
            </div>
        </div>
    </div>
  );
};

export default MarvelIntro;
