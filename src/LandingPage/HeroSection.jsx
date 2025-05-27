import React from "react";
import icon from "../userAssets/icon.svg";
import updatecoin from "../userAssets/xioimg.png";
import bg1 from "../userAssets/coinbg1.png";
import bg2 from "../userAssets/coinbg2.png";
import bg3 from "../userAssets/coinbg3.png";
import coin1 from "../userAssets/coin1.png";
import Liveprogresbar from "./Liveprogresbar";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Page-specific CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          @keyframes slideRightToLeft {
            0% { transform: translateX(100vw); }
            100% { transform: translateX(-100vw); }
          }

          .animate-rightToLeft {
            animation: slideRightToLeft 30s linear infinite;
          }

          .animate-rightToLeft-delay-1 {
            animation: slideRightToLeft 35s linear infinite;
            animation-delay: 5s;
          }

          .animate-rightToLeft-delay-2 {
            animation: slideRightToLeft 40s linear infinite;
            animation-delay: 10s;
          }

          .animate-float {
            animation: float 5s ease-in-out infinite;
          }

          .animate-rotateSlow {
            animation: float 8s linear infinite;
          }
        `}
      </style>

      {/* Floating Coins - Full Width Right to Left */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mt-28">
        <img
          src={bg1}
          alt="coin1"
          className="absolute w-60 sm:w-52 md:w-64 top-10 animate-rightToLeft"
        />
        <img
          src={bg2}
          alt="coin2"
          className="absolute w-56 sm:w-48 md:w-60 top-40 animate-rightToLeft-delay-1"
        />
        <img
          src={bg3}
          alt="coin3"
          className="absolute w-52 sm:w-44 md:w-56 bottom-10 animate-rightToLeft-delay-2"
        />
      </div>

      {/* Hero Content */}
      <div className="relative bg-cover bg-center py-5 md:h-screen bg-no-repeat overflow-hidden z-10">
        {/* Rotating Background Coin */}
        <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none">
          <img
            src={updatecoin}
            alt="Coin"
            className="hidden md:block max-w-[60rem] animate-rotateSlow"
            style={{ transform: "translate(20%, 20%)" }}
          />
        </div>

        {/* Main Section */}
        <section className="font1 px-4 sm:px-7 h-full flex items-center">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-10 relative z-20">
            <div className="text-center lg:text-left flex flex-col gap-3 md:gap-5 w-full">
              {/* Progress Bar */}
              <div className="relative bottom-10">
                <Liveprogresbar />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight z-0 relative">
                Your Digital{" "}
                <span className="bg-gradient-to-r from-[#5E2FF4] to-[#F907FC] bg-clip-text text-transparent">
                  Sandbox in the
                </span>{" "}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#5E2FF4] to-[#F907FC] bg-clip-text text-transparent">
                  Web 3.0{" "}
                  <span className="text-text_color">Cosmos</span>
                  <img
                    src={coin1}
                    alt="floating-coin"
                    className="inline-block animate-float w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
                  />
                </span>
              </h1>

              {/* Sub-content */}
              <div className="flex flex-col items-center justify-center w-full gap-5 px-4 sm:px-10 md:px-16 lg:px-20 mt-20 font-semibold">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font2 bg-gradient-to-r from-[#CC89FC] to-[#7750F6] bg-clip-text text-transparent text-center">
                  Explore, Create, and Transact!
                </p>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl text-center">
                  Mr Mint leverages Web3 technology, ushering in a new era of interaction.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  <button
                    className="px-6 sm:px-8 md:px-10 py-2 text-2xl sm:text-3xl border border-white/40 font2 font-semibold rounded-md"
                    style={{
                      backgroundImage: "linear-gradient(to right, #5E2FF4, #F907FC)",
                    }}
                  >
                    Litepaper
                  </button>
                  <button
                    className="px-6 sm:px-8 md:px-10 py-2 text-2xl sm:text-3xl border border-white/40 font2 font-semibold rounded-md"
                    style={{
                      backgroundImage: "linear-gradient(to right, #5E2FF4, #F907FC)",
                    }}
                  >
                    Whitepaper
                  </button>
                </div>

                {/* Audit Info */}
                <p className="mt-4 text-sm sm:text-base lg:text-xl text-text_color/80 flex items-center justify-center gap-2">
                  Smart Contract Audit By
                  <img src={icon} className="h-4 sm:h-5 md:h-6 lg:h-7" alt="Audit Icon" />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
