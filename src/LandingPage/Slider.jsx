import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import slider1 from '../../src/userAssets/slider1.png';
import slider2 from '../../src/userAssets/slider2.png';
import slider3 from '../../src/userAssets/slider3.png';
import slider4 from '../../src/userAssets/slider4.png';
import slider5 from '../../src/userAssets/slider5.png';

const data = [
  { id: 1, image: slider1 },
  { id: 2, image: slider2 },
  { id: 3, image: slider3 },
  { id: 4, image: slider4 },
  { id: 5, image: slider5 },
];

const Slider = () => {
  return (
    <div className="py-4 bg-gradient-to-r from-[#760FE1] to-[#C400E9] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        spaceBetween={30}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
      >
        {[...data, ...data].map((item, index) => (
          <SwiperSlide key={`${index}-${item.id}`} className="flex justify-center items-center">
            <img
              src={item.image}
              alt={`Slider ${item.id}`}
              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
