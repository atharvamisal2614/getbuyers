"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Ensure navigation styles are imported
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules'; // Import Navigation module

const HomeCarousel = () => {
  const slides = [
    { image: '/images/dummy.png' },
    { image: '/images/dummy.png' },
    { image: '/images/dummy.png' },
    { image: '/images/dummy.png' },
  ];

  return (
    <div className="w-full h-[32.375%] bg-green-100">
      <Swiper
        modules={[Autoplay, Navigation]} // Add Navigation here
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        navigation // Enable navigation
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
