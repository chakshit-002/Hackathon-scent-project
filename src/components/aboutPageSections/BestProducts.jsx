import React, { useState } from 'react';
import {  Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../productsSection/ProductCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function BestProducts({ products }) {
  // Take only first 7 products
  const bestProducts = products.slice(0, 7);

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        modules={[ Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={7}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
        //   type: 'fraction',
        }}
        navigation={true}
        loop = {true}
        
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: false,
          },
        }}
      >
        {bestProducts.map((product, index) => (
          <SwiperSlide key={product.id || index}  >
            <ProductCard productDet={product} index = {index || product.name} cardClass=' 2xl:h-[800px]' />

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}



