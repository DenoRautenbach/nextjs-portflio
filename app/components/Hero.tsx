'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Plus, Hexagon } from 'lucide-react';

/**
 * SHADERS & WEBGL
 */

const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;
    
    vec2 mouse = u_mouse / u_resolution.xy;
    mouse.x *= u_resolution.x / u_resolution.y;
    
    float dist = distance(st, mouse);
    
    // WARP EFFECT
    vec2 dir = st - mouse;
    float force = 0.15 * smoothstep(0.6, 0.0, dist);
    vec2 distortedSt = st - dir * force;
    
    // MOVEMENT
    float speed = 0.1;
    distortedSt.y -= u_time * speed;
    distortedSt.x -= u_time * (speed * 0.2); 
    
    // GRID
    float gridSize = 20.0;
    vec2 grid = fract(distortedSt * gridSize);
    
    float thickness = 0.05;
    float xLine = smoothstep(1.0 - thickness, 1.0, grid.x) + smoothstep(0.0, thickness, grid.x);
    float yLine = smoothstep(1.0 - thickness, 1.0, grid.y) + smoothstep(0.0, thickness, grid.y);
    float lines = clamp(xLine + yLine, 0.0, 1.0);
    
    vec3 bg = vec3(0.02, 0.02, 0.03); 
    vec3 gridColor = vec3(0.3, 0.3, 0.35); 
    vec3 accent = vec3(0.0, 0.9, 1.0); 
    
    vec3 finalColor = mix(bg, gridColor, lines * 0.5);
    
    float glow = 1.0 - smoothstep(0.0, 0.4, dist);
    finalColor += accent * lines * glow * 0.8;
    
    float vignette = 1.0 - smoothstep(0.5, 1.5, length(st - 0.5));
    finalColor *= vignette;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

/**
 * COMPONENTS
 */

const GridBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl');
        if (!gl) return;

        // Create Shaders
        const createShader = (gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null => {
            const shader = gl.createShader(type);
            if (!shader) return null;

            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        if (!program) return;

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
        const timeLocation = gl.getUniformLocation(program, 'u_time');
        const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

        const resize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
                if (resolutionLocation) {
                    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                }
            }
        };
        window.addEventListener('resize', resize);
        resize();

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: window.innerHeight - e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        let startTime = Date.now();
        const render = () => {
            const time = (Date.now() - startTime) * 0.001;
            if (timeLocation) gl.uniform1f(timeLocation, time);
            if (mouseLocation) gl.uniform2f(mouseLocation, mouseRef.current.x, mouseRef.current.y);
            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animationFrameRef.current = requestAnimationFrame(render);
        };
        render();

        // CLEANUP
        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />;
};

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const duration = 2000;
        const interval = 20;
        const steps = duration / interval;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = Math.min(100, Math.floor((currentStep / steps) * 100));
            setCount(progress);

            if (currentStep >= steps) {
                clearInterval(timer);
                setTimeout(onComplete, 500);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-50 bg-black flex flex-col justify-between p-8 md:p-12 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${count === 100 ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="flex justify-between items-start text-white/50 font-mono text-xs">
                <span>AETHER GRID v3.0</span>
                <span>INITIALIZING...</span>
            </div>

            <div className="relative">
                <div className="text-[15vw] md:text-[20vw] font-black text-white leading-none tracking-tighter">
                    {count}%
                </div>
                <div className="h-[2px] w-full bg-white/20 mt-4 overflow-hidden">
                    <div
                        className="h-full bg-white transition-all duration-100 ease-out"
                        style={{ width: `${count}%` }}
                    />
                </div>
            </div>

            <div className="flex justify-between items-end text-white/50 font-mono text-xs uppercase">
                <span className="w-32">Loading Assets</span>
                <span>(c) 2024</span>
            </div>
        </div>
    );
};

interface SkewTextProps {
    children: React.ReactNode;
    className?: string;
}

const SkewText: React.FC<SkewTextProps> = ({ children, className }) => {
    const [skew, setSkew] = useState<number>(0);
    const previousMouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const velocity = e.clientX - previousMouse.current.x;
            previousMouse.current = { x: e.clientX, y: e.clientY };

            const targetSkew = velocity * 0.1;
            setSkew(prev => prev + (targetSkew - prev) * 0.1);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className={className}
            style={{
                transform: `skewX(${Math.max(Math.min(skew, 20), -20)}deg)`,
                transition: 'transform 0.1s ease-out'
            }}
        >
            {children}
        </div>
    );
};

export default function Hero() {
    const [loading, setLoading] = useState<boolean>(true);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <div className="relative w-full h-screen bg-[#050505] overflow-hidden text-white selection:bg-[#00f0ff] selection:text-black">

            {loading && <Preloader onComplete={() => setLoading(false)} />}

            <GridBackground />

            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-50" />

            <nav className={`fixed inset-0 z-40 p-6 md:p-12 pointer-events-none transition-opacity duration-1000 delay-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <div className="absolute top-8 left-8 md:top-12 md:left-12 pointer-events-auto">
                    <div className="flex items-center gap-2 font-mono text-sm tracking-widest">
                        <Hexagon size={16} className="text-[#00f0ff]" />
                        <span className="font-bold">AETHER</span>
                    </div>
                </div>

                <div className="absolute top-8 right-8 md:top-12 md:right-12 pointer-events-auto">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="group flex flex-col items-end gap-1"
                    >
                        <div className={`h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-[3px]' : 'w-8'}`} />
                        <div className={`h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[3px]' : 'w-4 group-hover:w-8'}`} />
                    </button>
                </div>

                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 pointer-events-auto hidden md:block">
                    <div className="flex flex-col gap-2 font-mono text-[10px] text-white/60">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                            SYSTEM OPERATIONAL
                        </div>
                        <div>34.0522° N, 118.2437° W</div>
                    </div>
                </div>

                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 pointer-events-auto">
                    <button className="bg-white text-black px-6 py-3 font-bold font-mono text-xs hover:bg-[#00f0ff] transition-colors duration-300 flex items-center gap-2 group">
                        START PROJECT
                        <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </nav>

            <main className={`relative z-30 w-screen h-full flex flex-col justify-center items-center px-4 transition-all duration-1000 delay-700 ${loading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>

                <div className="absolute top-[20%] font-mono text-[#00f0ff] text-xs tracking-[0.3em] uppercase animate-pulse">
                    Digital Reality Engine
                </div>

                <div className="relative mix-blend-difference text-center">
                    <SkewText className="text-[14vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 select-none">
                        DENO
                    </SkewText>
                    <SkewText className="text-[14vw] leading-[0.8] font-black tracking-tighter text-white select-none relative">
                        RAUTENBACH
                        <span className="absolute -top-4 -right-8 w-8 h-8 text-[#00f0ff]">
                            <Plus size={32} strokeWidth={4} />
                        </span>
                    </SkewText>
                </div>

                <div className="mt-12 max-w-md text-center">
                    <p className="text-white/60 font-mono text-sm leading-relaxed backdrop-blur-sm p-4 border border-white/5 rounded-lg">
                        Building digital cathedrals in the cloud.
                        <br />
                        Experiences that defy gravity and logic.
                    </p>
                </div>

            </main>

            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />

        </div>
    );
}