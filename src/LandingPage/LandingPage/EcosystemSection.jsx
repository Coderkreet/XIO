import React from 'react';
import {
  FaNetworkWired,
  FaExchangeAlt,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaCogs,
} from 'react-icons/fa';

const ecosystemData = [
  {
    icon: <FaNetworkWired size={28} />,
    title: 'Reshaping Diverse Industries through Web3 Evolution',
    number: '01',
  },
  {
    icon: <FaExchangeAlt size={28} />,
    title: 'Listed on Top CEX & DEX',
    number: '02',
  },
  {
    icon: <FaUsers size={28} />,
    title: 'Fastest Growing World Wide Community',
    number: '03',
  },
  {
    icon: <FaChartLine size={28} />,
    title: 'Backed by Industries Top Leaders',
    number: '04',
  },
  {
    icon: <FaHandshake size={28} />,
    title: 'Unparalleled Growth with Trusted Investors',
    number: '05',
  },
  {
    icon: <FaCogs size={28} />,
    title: 'Driven by Expert Tech Crew',
    number: '06',
  },
];

const EcosystemSection = () => {
  return (
    <section className="font2 py-16 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ecosystem</h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          The ecosystem of Mr Mint revolves around creating a seamless and efficient marketplace for digital assets,
          particularly focusing on non-fungible tokens (NFTs). Here's a breakdown of its components:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">
          {ecosystemData.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#14171F] via-[#222630] to-[#000000] relative rounded-xl p-6 shadow-xl text-center flex items-center justify-center flex-col hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-b from-[#790EE1] to-[#DE1890] absolute -top-6 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full text-white shadow-md">
                {item.icon}
              </div>
              <p className="text-sm sm:text-base font-medium text-gray-100 mt-10 mb-4 leading-snug">
                {item.title}
              </p>
              <div className="text-2xl font-bold text-[#DE1890]">{item.number}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
