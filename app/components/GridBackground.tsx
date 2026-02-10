'use client';

import React, { useEffect, useRef } from 'react';

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

export default GridBackground;
