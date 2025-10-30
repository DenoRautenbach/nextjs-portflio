
"use client"
import CardSwap, { Card } from './AboutLayout'
import Image from "next/image";
import art from "../assets/About/art.webp";
import deno from "../assets/About/rugby4.png";

const AboutLayoutSection = () => {
    return (
            <section className="flex justify-center items-center min-h-screen px-6 overflow-hidden" id="about">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl w-full">
                    {/* Left column - text */}
                    <div className="text-white flex flex-col justify-center space-y-4 lg:space-y-6">
                        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                            Deno Rautenbach
                        </h1>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300">
                            Developer
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec nec eros eget nisl fringilla commodo.
                        </p>
                    </div>
                    
                    {/* Right column - cards */}
                    <div className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center lg:justify-end">
                        <div className="w-full h-full flex items-center justify-center scale-[0.6] sm:scale-75 lg:scale-90 xl:scale-100 origin-center lg:origin-right mr-52 lg:mr-16">
                            <CardSwap
                                width={400}
                                height={500}
                                cardDistance={80}
                                verticalDistance={80}
                                delay={2000}
                                pauseOnHover={true}
                            >
                                <Card customClass="p-6">
                                    <h3 className="text-white text-xl font-bold mb-2">Card 1</h3>
                                    <p className="text-gray-400 mb-4">Your content here</p>
                                    <Image
                                        className="w-full rounded-lg transition-all duration-300 hover:scale-95"
                                        src={art}
                                        alt="art"
                                    />
                                </Card>

                                <Card customClass="p-6">
                                    <h3 className="text-white text-xl font-bold mb-2">Card 2</h3>
                                    <p className="text-gray-400 mb-4">Your content here</p>
                                    <Image
                                        className="w-full rounded-lg transition-all duration-300 hover:scale-95"
                                        src={art}
                                        alt="art"
                                    />
                                </Card>

                                <Card customClass="p-6">
                                    <h3 className="text-white text-xl font-bold mb-2">Card 3</h3>
                                    <p className="text-gray-400 mb-4">Your content here</p>
                                    <Image
                                        className="w-full rounded-lg transition-all duration-300 hover:scale-95"
                                        src={art}
                                        alt="art"
                                    />
                                </Card>
                            </CardSwap>
                        </div>
                    </div>
                </div>
            </section>      
    )
};

export default AboutLayoutSection;