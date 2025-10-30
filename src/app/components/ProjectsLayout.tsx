import React from "react";
import Magnet from "./Magnet";

const Projectslayout = () => {
  return (
    <div className="projects-horizontal-container justify-center mt-56 items-center w-screen h-screen bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <article className="comic lg:p-24 p-4 w-full h-full ">
        {/* Capstone */}
        <div className="panel transition ease-in-out duration-300 hover:-translate-x-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48 px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <button className="px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition">
                <a
                  href="https://github.com/Simp4Hitagi/Capstone-Mangako"
                  target="_blank"
                >
                  Ecommerce
                </a>
              </button>
            </Magnet>
          </div>
        </div>

        {/* Calculator */}
        <div className="panel transition ease-in-out duration-300 hover:-translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <button className="px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition">
                <a
                  href="https://github.com/Simp4Hitagi/My_Calculator"
                  target="_blank"
                >
                  Calculator
                </a>
              </button>
            </Magnet>
          </div>
        </div>

        {/* Vue Portfolio */}
        <div className="panel transition ease-in-out duration-300 hover:scale-x-110 hover:-translate-y-10 rounded-lg border-2 border-white">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <button className="px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition">
                <a
                  href="https://github.com/Simp4Hitagi/vue-portfolio"
                  target="_blank"
                >
                  Portfolio 2.0
                </a>
              </button>
            </Magnet>
          </div>
        </div>

        {/* Python Projects */}
        <div className="panel transition ease-in-out duration-300 hover:-translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <button className="px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition">
                <a
                  href="https://github.com/Simp4Hitagi/Python-Projects"
                  target="_blank"
                >
                  Projects
                </a>
              </button>
            </Magnet>
          </div>
        </div>

        {/* WordPress Portfolio */}
        <div className="panel transition ease-in-out duration-300 hover:-translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <button className="px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition">
                <a
                  href="https://dev-deno-portfolio.pantheonsite.io/"
                  target="_blank"
                >
                  Portfolio 3.0
                </a>
              </button>
            </Magnet>
          </div>
        </div>

        {/* TripTronik */}
        <div className="panel transition ease-in-out duration-300 hover:scale-x-90 hover:scale-y-90 rounded-lg border-2 border-white">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <button className="px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition">
                <a
                  href="https://dev-triptronik.pantheonsite.io/"
                  target="_blank"
                >
                  WordPress
                </a>
              </button>
            </Magnet>
          </div>
        </div>

        {/* Rest API */}
        <div className="panel transition ease-in-out duration-300 hover:translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <button className="px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition">
                <a
                  href="https://databalk-test-2.vercel.app/"
                  target="_blank"
                >
                  Rest API
                </a>
              </button>
            </Magnet>
          </div>
        </div>

        {/* News API */}
        <div className="panel transition ease-in-out duration-300 hover:translate-x-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <button className="px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition">
                <a
                  href="https://github.com/Simp4Hitagi/BNRY-Test"
                  target="_blank"
                >
                  News API
                </a>
              </button>
            </Magnet>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Projectslayout;



