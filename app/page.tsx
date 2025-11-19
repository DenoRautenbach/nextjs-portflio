'use client'
import ComingSoonLayout from './components/ComingSoonLayout';
import HomeLayout from './components/HomeLayout';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        {/* <ComingSoonLayout /> */}
        <HomeLayout />
      </main>
    </div>
  );
}
