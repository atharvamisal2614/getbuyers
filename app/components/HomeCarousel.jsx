"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules'; 

const HomeCarousel = () => {
  const slides = [
    { image: '/images/dummy.png' },
    { image: '/images/dummy.png' },
    { image: '/images/dummy.png' },
    { image: '/images/dummy.png' },
  ];
  return (
    <div className="w-full h-[32.375%] bg-cyan-50">
      <Swiper
        modules={[Autoplay, Navigation]} 
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        navigation 
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[55vh] md:h-[100vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
