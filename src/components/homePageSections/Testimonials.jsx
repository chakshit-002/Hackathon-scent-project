import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import vid1 from '../../assets/videos/vid1.webm'
import vid2 from '../../assets/videos/vid2.webm'
import vid3 from '../../assets/videos/vid3.webm'
import vid4 from '../../assets/videos/vid4.webm'

// ✅ Array of testimonials with image, name and text
const testimonials = [
  {
    // image: "https://swiperjs.com/demos/images/nature-1.jpg",
    video: vid1,
    name: "Amita Sharma",
    text: "“Amazing service and stunning results. Highly recommended!”",
  },
  {
    // image: "https://swiperjs.com/demos/images/nature-2.jpg",
    video: vid2,
    name: "Priya Mehra",
    text: "“Their creativity made our campaign a huge success.”",
  },
  {
    // image: "https://swiperjs.com/demos/images/nature-3.jpg",
    video: vid3,
    name: "Rahul Verma",
    text: "“Professional, innovative, and easy to work with.”",
  },
  {
    // image: "https://swiperjs.com/demos/images/nature-4.jpg",
    video: vid4,
    name: "Sneha Rizvi",
    text: "“Helped us reach a wider audience with creative strategies.”",
  },
   {
    // image: "https://swiperjs.com/demos/images/nature-4.jpg",
    video: vid3,
    name: "chakshi Rizvi",
    text: "“Helped us reach a wider audience with creative strategies.”",
  },
 
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-[#edd4f8]/10 text-white flex items-center justify-center px-4">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-8xl py-12"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              {/* Image */}
              <video
                src={item.video}
                autoPlay
                muted
                loop
                className="w-full h-100 md:h-[100%]  object-cover rounded-xl"
              />
              {/* Overlay Text on Image (Optional: move this below image if you want) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent px-4 py-3">
                <p className="text-sm md:text-base italic">“{item.text}”</p>
                <p className="mt-1 font-semibold">{item.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
