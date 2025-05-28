// src/components/LogoSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logos = [
  '/logos/red.png',
  '/logos/techradar.png',
  '/logos/pitchfork.png',
  '/logos/forbes.png',
  '/logos/rollingstone.png',
  '/logos/wired.png',
  '/logos/gizmodo.png',
  '/logos/ibt.png',
  '/logos/digitalspy.png',
  '/logos/ft.png',
  '/logos/stuff.png',
  '/logos/digitaltrends.png',
  '/logos/trustedreviews.png',
  '/logos/broadsheet.png',
  '/logos/techjunkie.png',
  '/logos/tomsguide.png',
  '/logos/engadget.png',
  '/logos/wsj.png',
  '/logos/gq.png',
  '/logos/popsci.png',
  '/logos/unboxtherapy.png',
  '/logos/tnw.png',
];

const Slider = ({ reverse = false }) => (
  <div className="bg-[#0B0620] py-10 px-4">
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      speed={3000}
      loop={true}
      slidesPerView={6}
      spaceBetween={30}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 30 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 6, spaceBetween: 50 },
      }}
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <img
            src='https://xiocoin.vercel.app/assets/f6-CGM0satc.png'
            alt={`logo-${index}`}
            className="h-20 w-100 grayscale hover:grayscale-0 transition duration-300"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const LogoSlider = () => {
  return (
    <>
      <Slider reverse={false} />
      <Slider reverse={true} />
      <Slider reverse={false} />
      <Slider reverse={true} />
    </>
  );
};

export default LogoSlider;
