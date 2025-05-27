import { useState } from "react";
// import coin5 from "../../src/userAssets/coin5.png";
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
    <div className="w-full max-w-3xl shadow-lg text-white">
      {/* Header */}
      {/* <img src={coin5} alt="" />
      <div className="flex items-center mb-3">
        <h2 className="text-purple-300 text-sm font-bold">Live Price</h2>
        <div className="ml-2 h-3 w-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 animate-pulse"></div>
      </div> */}

      {/* Current Price */}
      <div className="grid grid-cols-3  gap-y-1 mb-4">
        <div className="col-span-1">
          
          <div className="text-gray-400 text-xs">Current Price</div>
          <div className="text-white text-sm font-bold">
            {formatNumber(currentPrice)}
          </div>
        </div>
      </div>

      {/* Two Bars Side by Side */}
      <div className="flex px-40 flex-row gap-2 relative -top-5 right-9  ">
        {/* Left Bar */}
        <div className="flex-1 relative ">
          <div className="h-[4px] w-full bg-gradient-to-r from-purple-600 to-purple-500 rounded "></div>
          <div className="flex justify-between mt-2">
            <div className="text-[10px] text-white  relative bottom-12  text-left">
              <span>11,0822.3</span>
              <p>Daily Low</p>
            </div>
            <div className="text-sm text-white text-center">
                 <span className="relative bottom-5 left-10">|</span>
              <span>12,000.0</span>
             
            </div>
            <div className="text-[10px] text-white text-right relative bottom-12">
              <span>12,248.15</span>
              <p>Daily High</p>
            </div>
          </div>
          
          <img src={bitcoin} alt="" className="relative h-10 bottom-14 left-52 z-10" />
          
        </div>
          
        {/* Right Bar */}
        <div className="flex-1 relative ">
          <div className="h-[4px] w-full bg-gradient-to-r from-purple-600 to-purple-500 rounded"></div>
          <div className="flex justify-between mt-2">
            <div className="text-[10px] text-white text-left relative bottom-12 border-l px-3">
              <span>10,440.64</span>
              <span>52 Week Low</span>
            </div>
            <div className="text-sm text-white text-center relative bottom-5">    
              <span>|</span>     
              <span> 12,166.60</span>
            </div>
            <div className="text-[10px] text-white text-right  relative bottom-12">
              <span>15,265.42</span>
              <span>52 Week High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
