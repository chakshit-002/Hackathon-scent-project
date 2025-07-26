// import React from 'react'
import React, { useLayoutEffect, useRef } from 'react'

// import DBFAbout from '../assets/videos/DBFAbout.mp4'

import VideoMarquee from '../components/aboutPageSections/VideoMarquee';
import AboutDavid from '../components/aboutPageSections/AboutDavid';
import TestimonialsSection from '../components/aboutPageSections/TestimonialSection';
import BestProducts from '../components/aboutPageSections/BestProducts';
import { BestProductsDets, MenPerfumes } from '../components/Data/productsDetailsHere';
import BehindTheScenes from '../components/aboutPageSections/BehindTheScenes';
import NewsletterSection from '../components/aboutPageSections/NewsletterSection';
import ProductsCarousel from '../components/ProductsCarousel';
import SplashCursor from '../blocks/SplashCursor/SplashCursor'

const About = () => {
  const hasScrolledToTop = useRef(false);

  // ✅ Scroll to top once on mount without triggering GSAP issues
  useLayoutEffect(() => {
    if (location.pathname === "/about" && !hasScrolledToTop.current) {
      window.scrollTo({ top: 0, behavior: "instant" });
      hasScrolledToTop.current = true;
    }
  }, [location.pathname]);


  return (
    <div className='min-h-[100vh] bg-[#f8f7ec] mx-auto flex flex-col items-center  '>
      <SplashCursor />
      <VideoMarquee />
      <div className='w-full flex flex-col   gap-19  sm:gap-26 md:gap-30  lg:gap-38  xl:gap-48'>
        <AboutDavid />
        <div className='flex flex-col items-center overflow-hidden gap-5 md:gap-9'>
          <h3 className='text-center max-[333px]:text-[30px] text-[38px] sm:text-[45px] md:text-[60px] lg:text-[79px] xl:text-[100px] font-[cinzel]'>Testimonials</h3>
          <TestimonialsSection />
        </div>
        <BehindTheScenes />
        <NewsletterSection />
      </div>
      <div className='font-[cinzel] tracking-wide sm:px-5 flex flex-col items-center  mt-10 sm:mt-15 md:mt-18 xl:mt-25 2xl:mt-34'>
        <h2 className='text-center text-[#2f2f2f] text-3xl font-semibold min-[333px]:text-4xl min-[450px]:text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl'>Best Products</h2>
        <ProductsCarousel />
      </div>
    </div>

  )
}

export default About