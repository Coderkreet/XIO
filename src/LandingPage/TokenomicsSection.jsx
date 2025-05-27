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
      <table className="w-full text-base text-left text-gray-300">
        <thead className="uppercase bg-gradient-to-r from-purple-600 to-blue-500 text-white text-base">
          <tr>
            <th className="px-6 py-4">Details</th>
            <th className="px-6 py-4">% (Ptc.)</th>
            <th className="px-6 py-4">Token Qty</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800/50 text-lg">
          {tokenData.map((item, idx) => (
            <tr key={idx} className="border-b border-gray-700">
              <td className="px-6 py-3">{item.name}</td>
              <td className="px-6 py-3">{item.value}%</td>
              <td className="px-6 py-3">{item.tokens}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderMarket = () => (
    <div className="text-center text-xl text-gray-300 mt-6">
      <p className="mb-2">Today's Market:</p>
      <p className="text-5xl font-extrabold text-white">$0.0345</p>
      <p className="text-lg text-green-400 mt-2">+5.26% (24h)</p>
    </div>
  );

  const renderTracker = () => (
    <div className="text-center text-xl text-gray-300 mt-6">
      <p className="mb-2">Token Tracker:</p>
      <p className="text-lg">Holders: <span className="text-white font-bold">13,254</span></p>
      <p className="text-lg">Transactions: <span className="text-white font-bold">145,623</span></p>
    </div>
  );

  return (
    <section className="bg-[#050d1b] text-white py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-4">Tokenomics</h2>
        <div className="flex justify-center flex-wrap gap-4 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border px-5 py-2 rounded-lg text-lg transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white"
                  : "border-gray-500 text-gray-300 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Our token distribution ensures a robust ecosystem with allocations for private/public sales,
          marketing, staking, and R&D to promote sustainable growth and community strength.
        </p>
      </div>

      {activeTab === "Token" && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-xl p-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tokenData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                >
                  {tokenData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-base">
              {tokenData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          {renderTable()}
        </div>
      )}

      {activeTab === "Market" && renderMarket()}
      {activeTab === "Tracker" && renderTracker()}
    </section>
  );
}
