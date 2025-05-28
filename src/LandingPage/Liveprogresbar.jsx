import { useState } from "react";
import bitcoin from "../../src/userAssets/bitcoin.png";

export default function LivePriceBar() {
  const [currentPrice, setCurrentPrice] = useState(12051.48);

  const formatNumber = (num) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="w-full sm:w-1/2 mx-auto px-2 py-4 shadow-lg text-white rounded-md ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-purple-300 text-base font-semibold">Live Price</h2>
        <div className="h-3 w-3 rounded-full bg-purple-500 shadow-purple-500/50 animate-pulse shadow"></div>
      </div>

      {/* Current Price */}
      <div className="mb-6">
        <div className="text-gray-400 text-xs">Current Price</div>
        <div className="text-white text-xl font-bold">{formatNumber(currentPrice)}</div>
      </div>

      {/* Price Range Bars */}
      <div className="flex flex-col lg:flex-row gap-2">
        {/* Daily Range Bar */}
        <div className="relative flex-1">
          <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-500 rounded"></div>
          <div className="flex justify-between text-white text-[11px] mt-2">
            <div className="text-left">
              <div>11,0822.3</div>
              <p className="text-gray-400 text-[10px]">Daily Low</p>
            </div>
            <div className="relative -top-2 text-center">
              <div>|</div>
              <div>12,000.0</div>
            </div>
            <div className="text-right">
              <div>12,248.15</div>
              <p className="text-gray-400 text-[10px]">Daily High</p>
            </div>
          </div>

          <img
            src={bitcoin}
            alt="bitcoin"
            className="absolute w-6 h-6 -top-4 left-1/2 transform -translate-x-1/2 z-10"
          />
        </div>

        {/* Weekly Range Bar */}
        <div className="relative flex-1">
          <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-500 rounded"></div>
          <div className="flex justify-between text-white text-[11px] mt-2">
            <div className="text-left">
              <div>10,440.64</div>
              <p className="text-gray-400 text-[10px]">52 Week Low</p>
            </div>
            <div className="relative -top-2 text-center">
              <div>|</div>
              <div>12,166.60</div>
            </div>
            <div className="text-right">
              <div>15,265.42</div>
              <p className="text-gray-400 text-[10px]">52 Week High</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
