import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import productImg from "../assets/Earbuds.png";
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay,Pagination} from "swiper/modules";

const Heroslider = () => {
  return (
    <div>
        <Swiper
  modules={[Autoplay,Pagination]}
  loop={true}
      pagination={{ clickable: true }}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  spaceBetween={50}
  slidesPerView={1}
>
  <SwiperSlide>
    <div className="flex items-center justify-center w-full">
      <img src={productImg} alt="img" />
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="flex items-center justify-center w-full">
      <img src={productImg} alt="img" />
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="flex items-center justify-center w-full">
      <img src={productImg} alt="img" />
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="flex items-center justify-center w-full">
      <img src={productImg} alt="img" />
    </div>
  </SwiperSlide>
</Swiper>
    </div>
  )
}

export default Heroslider