import React from "react";
import Coinstore from "../../src/userAssets/images/4.png";
import Pancakeswap from "../../src/userAssets/images/3.webp";
import MEXC from "../../src/userAssets/images/2.png";
import Coingecko from "../../src/userAssets/images/4.png";
import Coinmarketcap from "../../src/userAssets/images/4.png";

const ListedOnSection = () => {
  const listings = [
    { name: "Coinstore", img: Coinstore },
    { name: "Pancakeswap", img: Pancakeswap },
    { name: "MEXC", img: MEXC },
    { name: "Coingecko", img: Coingecko },
    { name: "Coinmarketcap", img: Coinmarketcap },
  ];

  return (
    <section className="w-full py-12 px-4 bg-gradient-to-r from-[#6e00ff] via-[#9b00cc] to-[#ff007a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          MRMINT Listed on
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 items-center justify-center">
          {listings.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="w-full h-24 sm:h-20 md:h-24 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm sm:text-base font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListedOnSection;
