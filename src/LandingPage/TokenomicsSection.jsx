import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const tabs = ["Token", "Market", "Tracker"];

const tokenData = [
  { name: "Private Sale", value: 5, tokens: "50,000,000", color: "#63E6BE" },
  { name: "Pre-sale", value: 15, tokens: "150,000,000", color: "#EC4899" },
  { name: "Public Sale", value: 20, tokens: "200,000,000", color: "#A855F7" },
  { name: "Marketing", value: 10, tokens: "100,000,000", color: "#3B82F6" },
  { name: "Referral", value: 2, tokens: "20,000,000", color: "#FACC15" },
  { name: "R & D", value: 1, tokens: "10,000,000", color: "#67E8F9" },
  { name: "Airdrop", value: 1, tokens: "10,000,000", color: "#C084FC" },
  { name: "Liquidity Staking", value: 12, tokens: "120,000,000", color: "#60A5FA" },
  { name: "Ecosystem", value: 7, tokens: "70,000,000", color: "#38BDF8" },
  { name: "Reserve", value: 4, tokens: "40,000,000", color: "#818CF8" },
  { name: "Team", value: 18, tokens: "180,000,000", color: "#4ADE80" },
  { name: "Charity", value: 1, tokens: "10,000,000", color: "#F472B6" },
  { name: "Advisory", value: 4, tokens: "40,000,000", color: "#FB923C" },
];

export default function TokenomicsTabs() {
  const [activeTab, setActiveTab] = useState("Token");

  const renderTable = () => (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left text-gray-300 min-w-[600px] sm:min-w-full">
        <thead className="uppercase bg-gradient-to-r from-purple-600 to-blue-500 text-white">
          <tr>
            <th className="px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
              Details
            </th>
            <th className="px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
              % (Ptc.)
            </th>
            <th className="px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
              Token Qty
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800/50">
          {tokenData.map((item, idx) => (
            <tr key={idx} className="border-b border-gray-700 hover:bg-gray-700/30 transition-colors duration-200">
              <td className="px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">
                {item.name}
              </td>
              <td className="px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-cyan-400">
                {item.value}%
              </td>
              <td className="px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-green-400">
                {item.tokens}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderMarket = () => (
    <div className="text-center mt-8 sm:mt-10 md:mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-sm border border-gray-700/50">
      <p className="mb-4 sm:mb-5 md:mb-6 text-xl sm:text-2xl md:text-3xl font-bold text-gray-300">
        Today's Market Price:
      </p>
      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-3 sm:mb-4">
        $0.0345
      </p>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-400 font-semibold">
        +5.26% (24h)
      </p>
      <div className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12">
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">Market Cap</p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">$12.5M</p>
        </div>
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">Volume 24h</p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">$2.1M</p>
        </div>
      </div>
    </div>
  );

  const renderTracker = () => (
    <div className="text-center mt-8 sm:mt-10 md:mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-sm border border-gray-700/50">
      <p className="mb-6 sm:mb-7 md:mb-8 text-xl sm:text-2xl md:text-3xl font-bold text-gray-300">
        Token Tracker Statistics:
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-blue-500/30">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-3 sm:mb-4">
            Total Holders
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">13,254</p>
          <p className="text-base sm:text-lg md:text-xl text-green-400 mt-2">+12.3% this week</p>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-purple-500/30">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-300 mb-3 sm:mb-4">
            Total Transactions
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">145,623</p>
          <p className="text-base sm:text-lg md:text-xl text-green-400 mt-2">+8.7% this week</p>
        </div>
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <div className="text-center p-4 rounded-lg bg-gray-800/30">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-cyan-400">
            Circulating Supply
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold mt-1">
            750,000,000
          </p>
        </div>
        <div className="text-center p-4 rounded-lg bg-gray-800/30">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-pink-400">
            Total Supply
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold mt-1">
            1,000,000,000
          </p>
        </div>
        <div className="text-center p-4 rounded-lg bg-gray-800/30 sm:col-span-2 lg:col-span-1">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-400">
            Burned Tokens
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold mt-1">
            25,000,000
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#050d1b] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="mb-4 sm:mb-5 md:mb-6">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wider uppercase">
              Token Distribution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:mb-7 md:mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
            Tokenomics
          </h2>
          
          {/* Tab Buttons */}
          <div className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-7 md:mt-8 mb-8 sm:mb-10 md:mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white border-transparent shadow-lg shadow-cyan-500/25"
                    : "border-gray-500 text-gray-300 hover:bg-white/10 hover:border-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Description */}
          <p className="mt-6 sm:mt-7 md:mt-8 text-gray-400 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed px-4 sm:px-0">
            Our comprehensive token distribution strategy ensures a robust and sustainable ecosystem with strategic allocations for private/public sales, marketing initiatives, staking rewards, and R&D investments to promote long-term growth and community engagement.
          </p>
        </div>

        {/* Token Tab Content */}
        {activeTab === "Token" && (
          <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
            {/* Pie Chart Section */}
            <div className="bg-gradient-to-br from-gray-800/70 via-gray-700/70 to-gray-900/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-gray-600/50">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-7 md:mb-8 text-white">
                Token Distribution Chart
              </h3>
              <ResponsiveContainer width="100%" height={300} className="sm:h-[350px] md:h-[400px]">
                <PieChart>
                  <Pie
                    data={tokenData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    maxRadius={150}
                    strokeWidth={2}
                    stroke="#1f2937"
                  >
                    {tokenData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '14px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Legend */}
              <div className="mt-6 sm:mt-7 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg">
                {tokenData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                    <span
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full border-2 border-gray-600 flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className="font-medium text-white truncate">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Table Section */}
            <div className="bg-gradient-to-br from-gray-800/70 via-gray-700/70 to-gray-900/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-gray-600/50">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-7 md:mb-8 text-white">
                Detailed Breakdown
              </h3>
              {renderTable()}
            </div>
          </div>
        )}

        {/* Market Tab Content */}
        {activeTab === "Market" && renderMarket()}

        {/* Tracker Tab Content */}
        {activeTab === "Tracker" && renderTracker()}
      </div>
    </section>
  );
}