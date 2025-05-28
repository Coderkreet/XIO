import React, { useEffect, useState } from 'react';
import { GoArrowDownRight } from 'react-icons/go';
import imgFallback from '../../src/userAssets/img1.png'; // fallback image
import { getProduct } from '../api/landingpage-api';

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProduct();
        if (Array.isArray(response?.data)) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="px-4 md:px-10 py-16 font1">
      <div className="bg-black/40 rounded-2xl p-6 sm:p-10 md:p-14 flex flex-col gap-16">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-3 text-white">
            Our Products <GoArrowDownRight className="text-3xl text-[#9747FF]" />
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed">
          we pride ourselves on crafting high-quality products to elevate your experience. Here's a glimpse of our exclusive offerings.
          </p>
        </div>

        {/* Products Grid */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-12">
            {products.map((product, index) => (
              <div
                key={product._id}
                className={`relative w-full h-[24rem] bg-[#1B1B3A] rounded-2xl overflow-hidden group transition-all hover:scale-[1.02] duration-300 ${index % 2 === 1 ? "sm:mt-8" : ""}`}
                style={{
                  backgroundImage: `url(${product.image || imgFallback})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex items-center justify-between p-4 bg-black/40 backdrop-blur-sm rounded-b-2xl">
                    <div>
                      <p className="text-base font-semibold text-white">{product.text}</p>
                      <a
                        href={product.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block px-4 py-1.5 text-sm text-white border border-white/30 rounded-full font-medium hover:bg-white hover:text-black transition"
                      >
                        Explore Now
                      </a>
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
