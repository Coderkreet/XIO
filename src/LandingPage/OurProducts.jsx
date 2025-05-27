import React from 'react';
import { GoArrowDownRight } from 'react-icons/go';
import img1 from '../../src/userAssets/img1.png';
import img2 from '../../src/userAssets/img2.png';
import img3 from '../../src/userAssets/img3.png';
import img4 from '../../src/userAssets/img4.png';

const products = [
  {
    title: 'Demo',
    image: img1,
    label: 'Explore Now',
    shadow: 'shadow-[0px_0px_50px_#1B4391]',
  },
  {
    title: 'OPENTRI',
    image: img2,
    label: 'Explore Now',
    shadow: 'shadow-[0px_0px_50px_#0F2B79]',
  },
  {
    title: 'VIBRANT',
    image: img3,
    label: 'Explore Now',
    shadow: 'shadow-[0px_0px_50px_#431025]',
  },
  {
    title: 'LAUNCHR',
    image: img4,
    label: 'Explore Now',
    shadow: 'shadow-[0px_0px_50px_#7485EC]',
  },
];

const OurProducts = () => {
  return (
    <section className="px-4 md:px-10 py-16 font1">
      <div className="bg-black/40 rounded-2xl p-6 sm:p-10 md:p-14 flex flex-col gap-16">
        
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-3 text-white">
            Our Products
            <GoArrowDownRight className="text-3xl text-[#9747FF]" />
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed">
            At Mr Mint, we pride ourselves on crafting the finest quality products that enhance your everyday experiences.
            From refreshing mints to tantalizing gums, we've got something to satisfy every taste bud and freshen every breath.
            Here's a glimpse of our exquisite product line:
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-12">
            {products.map((product, index) => (
              <div
                key={index}
                className={`relative w-full h-[24rem] ${product.shadow} bg-[#1B1B3A] rounded-2xl overflow-hidden group transition-all hover:scale-[1.02] duration-300 ${index % 2 === 1 ? "sm:mt-8" : ""}`}
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex items-center justify-between p-4 bg-black/30 backdrop-blur-sm rounded-b-2xl">
                    <div>
                      <p className="text-base font-semibold text-white">{product.title}</p>
                      <button className="mt-2 px-4 py-1.5 text-sm text-white border border-white/30 rounded-full font-medium hover:bg-red
                       hover:text-black transition">
                        {product.label}
                      </button>
                    </div>
                    <button className="bg-[#9090e8] w-10 h-8 flex items-center justify-center rounded-xl">
                      <GoArrowDownRight className="text-[#0D0D2B]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex items-center justify-center">
          <button className="bg-[#5E2FF4] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#5f39e7] transition-all duration-300">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
