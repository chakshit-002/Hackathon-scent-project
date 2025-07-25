import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import pqimg1 from '../../assets/webpImagesPerfume/productsSliderQuotes1.webp'
import pqimg2 from '../../assets/webpImagesPerfume/productsSliderQuotes2.webp'
import pqimg3 from '../../assets/webpImagesPerfume/productsSliderQuotes5.webp'
export default function ProductQuoteSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [
  
    {
      image: pqimg1,
      quote: 'Elegance is in the scent.',
    },
    {
      image: pqimg2,
      quote: 'Fragrance defines your aura.',
    },
      {
      image: pqimg3,
      quote: 'Perfume is the key to memories.',
    }
  ];

  return (
    <>
      {/* Main Swiper */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 max-w-[2000px]"
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]  xl:h-[600px]">
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
                style={{ opacity: index === 2 ? 0.29 : 1 }}

              />
              <div className="absolute inset-0  flex justify-center items-center ">
                <p className="text-white  text-center max-[333px]:text-[14px] text-lg sm:text-[30px] md:text-[40px] font-semibold px-4">
                  {slide.quote}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-[100px] mt-4 md:h-[140px] lg:h-[200px] max-w-[2000px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={`thumb-${index}`}
              className="w-full h-full object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
