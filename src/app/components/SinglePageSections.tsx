
import Projectslayout from "./ProjectsLayout"
import SkillsLayout from "./SkillsLayout";
import AboutLayout from "./AboutLayout";
import TimelineLayout from "./TimeLine"
import ContactLayout from "./Contact"
import TestimonialsLayout from "./Testimonials"
import React from "react";
import Galaxy from "./HomeLayout";
import Hyperspeed from "./HomeLayout";

const SinglePageSetions = () => {
    return (
        <div className="container relative lg:grid lg:grid-rows-6 sm:grid sm:grid-cols-0 sm:grid-rows-6">
            {/* Home */}
            <div className="relative w-full h-screen">
            <Hyperspeed
                effectOptions={{
                onSpeedUp: () => {},
                onSlowDown: () => {},
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
                    roadColor: 0x080808,
                    islandColor: 0x0a0a0a,
                    background: 0x000000,
                    shoulderLines: 0xffffff,
                    brokenLines: 0xffffff,
                    leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                    rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                    sticks: 0x03b3c3,
                },
                }}
            />

            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center z-10 text-center">
                <h1 className="text-white text-6xl md:text-8xl font-bold drop-shadow-lg px-4">
                Hi, I&apos;m Deno Rautenbach
                </h1>
            </div>
            </div>
            {/* Projects */}
            <div id="projects" className="relative items-center justify-center text-white">
                <div className="absolute backdrop-blur-md top-36 left-0 h-full w-full blur-md"/>
                <Projectslayout />
            </div>
            {/* Skills  */}
            {/* Include resume with timeline */}
            <div id="skills" className="sticky lg:top-0 h-full w-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-black-500 backdrop-blur-lg text-white pt-8">
             <TimelineLayout />
             <SkillsLayout />
            </div>
            {/* About */}
            <div id="about" className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-black text-white">
            <AboutLayout />
            </div>
            {/* Testimonials */}
            <div id="testimonials" className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-black text-white">
            <TestimonialsLayout />
            </div>
            <div id="contact" className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-white backdrop-blur-lg text-black">
            <ContactLayout />
            </div>
        </div>        
    )
};

export default SinglePageSetions;