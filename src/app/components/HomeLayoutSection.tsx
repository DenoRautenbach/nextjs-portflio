
"use client"
import Hyperspeed from "./HomeLayout";
import ShinyText from './ShinyText';
import Magnet from './Magnet'

const HomeLayoutSection = () => {
    return (
            <section className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
            {/* Hyperspeed background */}
            <div className="absolute inset-0 z-0">
                <Hyperspeed
                className="w-full h-full"
                effectOptions={{
                    distortion: "turbulentDistortion",
                    length: 400,
                    roadWidth: 10,
                    islandWidth: 2,
                    lanesPerRoad: 4,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 2,
                    carLightsFade: 0.4,
                    totalSideLightSticks: 20,
                    lightPairsPerRoadWay: 40,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.1,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [0.12, 0.5],
                    lightStickHeight: [1.3, 1.7],
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [400 * 0.03, 400 * 0.2],
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.8, 0.8],
                    carFloorSeparation: [0, 5],
                    colors: {
                    roadColor: 0x05060a,
                    islandColor: 0x0a0d14,
                    background: 0x000000,
                    shoulderLines: 0x3b82f6,
                    brokenLines: 0x60a5fa,
                    leftCars: [0x1e3a8a, 0x2563eb, 0x3b82f6],
                    rightCars: [0x38bdf8, 0x0ea5e9, 0x0369a1],
                    sticks: 0x93c5fd,
                    },
                }}
                />
            </div>
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white mb:-mt-[25rem] -mt-[5rem] ">
                <ShinyText
                // text="Code. Create. Innovate."
                text="Coming Soon"
                disabled={false}
                speed={3}
                className="custom-class lg:text-8xl md:text-6xl text-3xl font-bold"
                />
                <div className="flex lg:flex-row flex-col lg:gap-16 md:gap-8 gap-2 mt-10">
                <Magnet padding={50} disabled={false} magnetStrength={20}>
                    <button className="px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition">
                    <a href="https://drive.google.com/file/d/1n83D2cESFx-vWTbqv9AiRL_VVO85fibv/view?usp=sharing" target="_blank">
                        Resumé
                    </a>
                    </button>
                </Magnet>
                <Magnet padding={50} disabled={false} magnetStrength={20}>
                    <button className="px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition">
                    <a href="https://github.com/DenoRautenbach" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    </button>
                </Magnet>
                <Magnet padding={50} disabled={false} magnetStrength={20}>
                    <button className="px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition">
                    <a href="https://www.linkedin.com/in/deno-rautenbach-b1698018a" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    </button>
                </Magnet>
                </div>
            </div>
            {/* Fade effect */}
            <div className="absolute bottom-0 left-0 w-full h-[40rem] lg:bg-gradient-to-t bg-transparent from-black to-transparent z-30 pointer-events-none" />
            </section>    
    )
};

export default HomeLayoutSection;