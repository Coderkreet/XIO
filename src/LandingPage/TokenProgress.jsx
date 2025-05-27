import React from 'react';
import spiral from "../../src/userAssets/spiral.png";

const TokenProgress = () => {
  return (
    <div className="w-full font1 px-5 lg:px-16 py-12 bg-[#050017]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Countdown Timer */}
        <div className="text-center lg:text-left">
          <p className="text-lg md:text-xl text-gray-300 mb-6">ICO Will Start In..</p>
          <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
            {[
              { label: 'DAYS', value: '91' },
              { label: 'HOURS', value: '3' },
              { label: 'MINS', value: '2' },
              { label: 'SECS', value: '3' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-20 h-20 bg-white/10 rounded-full flex flex-col justify-center items-center"
              >
                <span className="text-2xl font-bold text-white">{item.value}</span>
                <span className="text-sm text-gray-400 mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Token Progress Bar */}
        <div className="w-full max-w-2xl bg-[#100025] p-6 rounded-lg shadow-lg">
          <div className="flex justify-between text-base text-white mb-2">
            <span>
              Raised - <strong className="text-purple-400">1,450 Tokens</strong>
            </span>
            <span>
              Target - <strong className="text-purple-400">150,000 Tokens</strong>
            </span>
          </div>

          <div className="relative w-full h-4 rounded-full bg-gradient-to-r from-[#A863E2] to-[#2D005F]">
            <div
              className="absolute top-0 left-0 h-4 bg-white rounded-full"
              style={{ width: '1%' }}
            ></div>
          </div>

          <div className="flex justify-between text-sm text-gray-400 mt-3">
            <span>| PRE SELL</span>
            <span>| SOFT CAP</span>
            <span>| BONUS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenProgress;
