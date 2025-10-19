import React from "react";
import slide1 from "../assets/images/landingPage/1.jpg";
import slide2 from "../assets/images/landingPage/7.jpg";
import slide3 from "../assets/images/landingPage/4.jpg";
import slide4 from "../assets/images/landingPage/6.jpg";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

const LandingCarousel = () => {
  return (
    <div className="w-full h-full relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log()}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="mx-auto brightness-50" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto brightness-50" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto brightness-50" src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto brightness-50" src={slide4} alt="" />
        </SwiperSlide>
        <div className="absolute inset-0 flex items-center justify-center z-10 text-4xl sm:text-6xl font-extrabold text-white">
          "Moto Perusahaan"
        </div>
      </Swiper>
    </div>
  );
};

export default LandingCarousel;
