'use client'
import ComingSoonLayout from './components/ComingSoonLayout';
import HomeLayout from './components/HomeLayout';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        {/* <ComingSoonLayout /> */}
        <HomeLayout />
        {/* <Hero />
        <Projects /> */}
      </main>
    </div>
  );
}
