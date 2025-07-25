
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ProductDetailsSections from '../components/SingleProductSections/ProductDetailsSections'
// import {MarqueeText} from '../components/aboutPageSections/MarqueeText'
import MarqueeText from '../components/SingleProductSections/MarqueeText'
import StarRating from '../components/SingleProductSections/StarRating'
import ReviewsSection from '../components/SingleProductSections/ReviewSection'
import DropdownAccordion from '../components/SingleProductSections/DropdownAccordion'
import CurvedLoop from '../blocks/CurvedLoop/CurvedLoop'
import FeatureHighlights from '../components/SingleProductSections/FeatureHighlights'
import PerfumeTipsSection from '../components/SingleProductSections/PerfumeTipsSection'
import SingleProductCard from "../components/SingleProductCard";
import ProductsCarousel from "../components/ProductsCarousel";
import BackButton from "../components/BackButton";
const reviewData = [
  {
    name: "Sara Kapoor",
    rating: 5,
    review: "Absolutely love this fragrance! Lasts all day and feels luxurious.",
    date: "24 July 2025",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ravi Singh",
    rating: 4,
    review: "Fresh and long-lasting, but a bit too sweet for my taste.",
    date: "22 July 2025",
  },
  {
    name: "Ravi Singh",
    rating: 4,
    review: "Fresh and long-lasting, but a bit too sweet for my taste.",
    date: "22 July 2025",
  },

];

const SingleProduct = () => {

  const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    gsap.fromTo(
      headingRef.current,
      { autoAlpha: 0, y: 50 },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 60%",       // end earlier so fade out starts nicely
          toggleActions: "play none none reset",
          scrub: 0.51,      // Uncomment if you want smooth scrub based on scroll position
          // markers: true,
        },
      }
    );
  }, []);



  return (
    <div className="bg-[#f8f7ec]">

      <MarqueeText />

      <div className='flex justify-center'>
        <ProductDetailsSections />
      </div>


      <div className='bg-[#f8f7ec] font-[cinzel] tracking-wide sm:px-5 mt-10 sm:mt-15 md:mt-18 xl:mt-25 2xl:mt-34'>
        <h2 ref={headingRef} className='text-center text-[#2f2f2f]  text-3xl font-semibold min-[333px]:text-4xl min-[450px]:text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl'>How To Apply ?</h2>
        <PerfumeTipsSection />
      </div>
 

    <div className="mt-10 sm:mt-15 md:mt-18 xl:mt-25 2xl:mt-34" > <FeatureHighlights /></div>
      <div className='relative  mt-10 sm:mt-15 md:mt-18 xl:mt-25 2xl:mt-34'>
        <CurvedLoop
          marqueeText="David ✦ Beckham ✦ Signature ✦ Scents ✦ David ✦ Beckham ✦ Signature ✦ Scents ✦"
          speed={3}
          curveAmount={150}
          direction="right"
          interactive={true}
          className="custom-text-style"
          cardClass="h-[200px] bg-red-400"
        />
        
      </div>

      <div className='font-[cinzel] tracking-wide sm:px-5 flex flex-col items-center  mt-10 sm:mt-15 md:mt-18 xl:mt-25 2xl:mt-34'>
        <h2 ref={headingRef} className='text-center text-[#2f2f2f] text-3xl font-semibold min-[333px]:text-4xl min-[450px]:text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl'>Related Products</h2>
        <ProductsCarousel />
      </div>

      <div className='flex justify-center mt-5 min-[400px]:mt-8 sm:mt-13 md:mt-17'>
        <div className='w-fit font-[cinzel]  px-2 sm:px-10 lg:flex lg:justify-center lg:gap-[6vw] xl:gap-[100px] 2xl:gap-[120px]'>
          <h1 className='text-gray-800 font-semibold text-3xl px-3 min-[333px]:text-4xl min-[400px]:text-5xl sm:mb-10 sm:text-6xl  2xl:text-[7xl]'>Frequently <span className='block'>Asked</span> <span className='block'>Questions</span></h1>
          <DropdownAccordion />
        </div>
      </div>



      <div className="flex justify-center  mt-10 sm:mt-15 md:mt-18 xl:mt-25 2xl:mt-34">
        <ReviewsSection reviews={reviewData} />
      </div>
      

    </div>
  )
}

export default SingleProduct
