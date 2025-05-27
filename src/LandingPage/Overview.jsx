import React from "react";
import awardImage from '../../src/userAssets/images/overview.webp';
import { FaNetworkWired, FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";

const Overview = () => {
  return (
    <section className="w-full bg-[#0B0C2A] text-white py-16 px-4 sm:px-8 md:px-12 font-sans">
      <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-[#0B0C2A] to-[#151530] p-6 sm:p-10 md:p-16 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Text Content */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Overview
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed text-3xl sm:text-2xl max-w-xl">
            Mr Mint believes in instrumenting and prospecting the world of Web 3.0
            so that we can prosper in this Digital Universe. In this Web 3.0 era,
            Mr Mint is leading the charge, guiding the people towards a
            decentralized future where possibilities are truly limitless.
          </p>

          <div className="space-y-6 text-2xl">
            {/* Feature List */}
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border border-pink-500">
                <FaNetworkWired className="text-pink-500 text-2xl" />
              </div>
              <p className="text-white text-3xl  font-medium">
                Empowering you in Web 3.0 World
              </p>
            </div>

           <div className="flex items-center gap-6">
  <div className="w-20 h-20 flex items-center justify-center rounded-full border border-blue-400">
    <FaUsers className="text-blue-400 text-4xl" />
  </div>
  <p className="text-white text-2xl sm:text-3xl font-medium leading-snug">
    Opportunities to Explore, Engage & Earn More
  </p>
</div>


            <div className="flex items-start gap-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border border-cyan-400">
                <FaShieldAlt className="text-cyan-400 text-3xl" />
              </div>
              <p className="text-white text-3xl font-medium">
                Reliable & Secure
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border border-purple-400">
                <FaChartLine className="text-purple-400 text-4xl" />
              </div>
              <p className="text-white text-3xl font-medium">
                Ensuring Sustainable Growth
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={awardImage}
            alt="Award"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
