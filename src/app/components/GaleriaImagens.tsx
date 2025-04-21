"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface GaleriaImagensProps {
  imagens: string[];
}

const GaleriaImagens = ({ imagens }: GaleriaImagensProps) => {
  return (
    <div className="my-8 mb-5">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-lg overflow-hidden"
      >
        {imagens.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GaleriaImagens;
