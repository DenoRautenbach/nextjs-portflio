import React from "react";
import Magnet from "./Magnet";
import Keyboard from "./Keyboard";

const Projectslayout = () => {
  return (
    <>
    <Keyboard />
    <div className="projects-horizontal-container justify-center mt-56 items-center w-screen h-screen overflow-hidden">
      <article className="comic lg:p-24 p-4 w-full h-full">
        {/* Capstone */}
        <div className="panel transition ease-in-out duration-300 hover:-translate-x-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="key transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <a href="https://github.com/Simp4Hitagi/Capstone-Mangako" target="_blank" rel="noopener noreferrer" className="key-button">
                Ecommerce
              </a>
            </Magnet>
          </div>
        </div>

        {/* Calculator */}
        <div className="panel transition ease-in-out duration-300 hover:-translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="key transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <a href="https://github.com/Simp4Hitagi/My_Calculator" target="_blank" rel="noopener noreferrer" className="key-button">
                Calculator
              </a>
            </Magnet>
          </div>
        </div>

        {/* Vue Portfolio */}
        <div className="panel transition ease-in-out duration-300 hover:scale-x-110 hover:-translate-y-10 rounded-lg border-2 border-white">
          <div className="key transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <a href="https://github.com/Simp4Hitagi/vue-portfolio" target="_blank" rel="noopener noreferrer" className="key-button">
                Portfolio 2.0
              </a>
            </Magnet>
          </div>
        </div>

        {/* Python Projects */}
        <div className="panel transition ease-in-out duration-300 hover:-translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="key transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <a href="https://github.com/Simp4Hitagi/Python-Projects" target="_blank" rel="noopener noreferrer" className="key-button">
                Projects
              </a>
            </Magnet>
          </div>
        </div>

        {/* WordPress Portfolio */}
        <div className="panel transition ease-in-out duration-300 hover:-translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="key transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <a href="https://dev-deno-portfolio.pantheonsite.io/" target="_blank" rel="noopener noreferrer" className="key-button">
                Portfolio 3.0
              </a>
            </Magnet>
          </div>
        </div>

        {/* TripTronik */}
        <div className="panel transition ease-in-out duration-300 hover:scale-x-90 hover:scale-y-90 rounded-lg border-2 border-white">
          <div className="key transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <a href="https://dev-triptronik.pantheonsite.io/" target="_blank" rel="noopener noreferrer" className="key-button">
                WordPress
              </a>
            </Magnet>
          </div>
        </div>

        {/* Rest API */}
        <div className="panel transition ease-in-out duration-300 hover:translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="key transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <a href="https://databalk-test-2.vercel.app/" target="_blank" rel="noopener noreferrer" className="key-button">
                Rest API
              </a>
            </Magnet>
          </div>
        </div>

        {/* News API */}
        <div className="panel transition ease-in-out duration-300 hover:translate-x-10 hover:scale-100 rounded-lg border-2 border-white">
          <div className="key transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full flex justify-center items-center pt-48">
            <Magnet padding={50} disabled={false} magnetStrength={20}>
              <a href="https://github.com/Simp4Hitagi/BNRY-Test" target="_blank" rel="noopener noreferrer" className="key-button">
                News API
              </a>
            </Magnet>
          </div>
        </div>
      </article>

      <style jsx>{`
        .key {
          background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .key:hover {
          background: linear-gradient(145deg, #4a4a4a, #3a3a3a);
          box-shadow: 
            0 6px 12px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .key:active {
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .key-button {
          color: #e0e0e0;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          padding: 12px 24px;
          background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          display: inline-block;
        }

        .key-button:hover {
          background: linear-gradient(145deg, #4a4a4a, #3a3a3a);
          transform: translateY(-2px);
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .key-button:active {
          transform: translateY(0);
          box-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.3),
            inset 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .key-button {
            font-size: 0.9rem;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default Projectslayout;