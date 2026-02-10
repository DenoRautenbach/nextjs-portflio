'use client';

import React, { useState, useEffect, useRef } from 'react';

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

export default SkewText;
