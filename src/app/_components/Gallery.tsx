"use client"; 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Gallery = ({photosRef}:any) => {
  const images = [
    "/images/pic-1.jpg", 
    "/images/pic-2.jpg", 
    "/images/pic-3.jpg", 
    "/images/pic-1.jpg", 
    "/images/pic-2.jpg", 
    "/images/pic-3.jpg", 
  ];

  return (
    <section className="gallery py-16 bg-gray-900 text-white text-center" ref={photosRef}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-fadeInUp">Gym Photos</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <Image
                src={image}
                alt={`Gym Photo ${index}`}
                width={1920}
                height={1080}
                className="rounded-lg hover:opacity-80 transition duration-300 object-cover w-full h-auto aspect-square	"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
