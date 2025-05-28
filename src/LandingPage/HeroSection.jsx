







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
      {/* Floating Coins Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={bg1}
          alt="coin1"
          className="coin-float coin1 w-25 h-auto absolute"
        />
        <img
          src={bg2}
          alt="coin2"
          className="coin-float coin2 w-35 h-auto absolute"
        />
        <img
          src={bg3}
          alt="coin3"
          className="coin-float coin3 w-40 h-auto absolute"
        />
      </div>

      <div className="relative bg-cover bg-center py-5  lg:h-screen bg-no-repeat overflow-hidden z-10">
        {/* Large Background Coin */}
        <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none">
          <img
            src={updatecoin}
            alt="Coin"
            className=" hidden lg:block  w-11/12 max-w-none md:max-w-7xl lg:max-w-none"
            style={{
              transform: "translate(20%, 20%)",
              maxWidth: "60rem",
              height: "auto",
            }}
          />
        </div>

        {/* Main Content Section */}
        <section className="font1 px-4 sm:px-7 h-full flex items-center">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-10 relative z-20">
            <div className="lg:text-left flex flex-col gap-3 md:gap-5 w-full">
              {/* Progress Bar */}
              <div className="relative bottom-10">
                <Liveprogresbar />
              </div>
              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-6xl lg:bottom-20 relative font-bold z-0 mt-5">
                Your Digital{" "}
                <span className="bg-gradient-to-r from-[#5E2FF4] to-[#F907FC] bg-clip-text text-transparent">
                  Sandbox in the
                </span>{" "}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#5E2FF4] to-[#F907FC] bg-clip-text text-transparent">
                  Web 3.0 <span className="text-text_color">Cosmos</span>{" "}
                  {/* <img src={coin1} alt="" className="h-20 " /> */}
                </span>
              </h1>

              {/* Sub-content */}
              <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start w-full gap-3 md:gap-2 px-4 sm:px-10 md:px-16 lg:px-20 relative lg:bottom-20 font-semibol lg:mt-14">
                <p className="text-base sm:text-lg md:text-xl lg:text-3xl px-4 sm:px-10 md:px-20 lg:px-20 font2 bg-gradient-to-r from-[#CC89FC] to-[#7750F6] bg-clip-text text-transparent text-center lg:text-left relative lg:bottom-14 ">
                  Explore, Create, and Transact!
                </p>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg px-4 sm:px-8 md:px-10 lg:px-10 text-center lg:text-left relative lg:bottom-12">
                  Xiocoin leverages Web3 technology, ushering in a new era of interaction.
                </p>

                <div className="w-full sm:w-auto px-4 sm:px-8 md:px-16 lg:px-20 relative lg:bottom-8">
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 ">
                    <button
                      className="px-6 sm:px-8 md:px-10 py-2 border border-white/40 font2 font-semibold rounded-md"
                      style={{
                        backgroundImage: "linear-gradient(to right, #5E2FF4, #F907FC)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      Litepaper
                    </button>
                    <button
                      className="px-6 sm:px-8 md:px-10 py-2 border border-white/40 font2 font-semibold rounded-md"
                      style={{
                        backgroundImage: "linear-gradient(to right, #5E2FF4, #F907FC)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      Whitepaper
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm lg:text-2xl text-text_color/80 flex items-center justify-center lg:justify-start gap-2 px-4 sm:px-8 lg:px-20">
                    Smart Contract Audit By
                    <img src={icon} className="h-4 sm:h-5 md:h-6 lg:h-7" alt="Audit Icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
