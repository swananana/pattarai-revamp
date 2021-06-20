import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

import "../App.css";

// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Mousewheel,
  Autoplay,
  Scrollbar,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Mousewheel, Scrollbar]);

export default function Event() {
  return (
    <body className="vh-100">
      <div className="vh-100">
        <Swiper
          scrollbar={{
            hide: false,
          }}
          direction={"vertical"}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide className="bg-dark">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-primary">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-danger">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-warning">Slide 5</SwiperSlide>
          <SwiperSlide className="bg-secondary">Slide 6</SwiperSlide>
          <SwiperSlide className="bg-success">Slide 7</SwiperSlide>
          <SwiperSlide className="bg-dark">Slide 8</SwiperSlide>
          <SwiperSlide className="bg-secondary">Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </body>
  );
}
