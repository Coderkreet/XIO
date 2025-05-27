import React from 'react';
import slider1 from '../../src/userAssets/slider1.png';
import slider2 from '../../src/userAssets/slider2.png';
import slider3 from '../../src/userAssets/slider3.png';
import slider4 from '../../src/userAssets/slider4.png';
import slider5 from '../../src/userAssets/slider5.png';

const Slider = () => {
  const data = [
    { id: 1, image: slider1 },
    { id: 2, image: slider2 },
    { id: 3, image: slider3 },
    { id: 4, image: slider4 },
    { id: 5, image: slider5 },
  ];

  return (
    <div className="py-4 bg-gradient-to-r from-[#760FE1] to-[#C400E9] overflow-hidden">
      <div className="w-full whitespace-nowrap">
        <div className="flex animate-slide gap-10 w-max">
          {[...data, ...data].map((item, index) => (
            <div
              key={`${index}-${item.id}`}
              className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
            >
              <img
                src={item.image}
                alt={`Slider ${item.id}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
