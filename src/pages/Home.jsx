
// import HeroText from '../components/homePageSections/HeroSection/HeroText'
// import AnimatedWaveText from '../components/homePageSections/HeroSection/AnimatedWaveText'

// import Showcase from '../components/homePageSections/HeroSection/ShowCase'
import CategorySlider from '../components/homePageSections/CategorySlider'
import React, { useLayoutEffect, useRef } from "react";
// import React from "react";
import AboutPerfumes from '../components/homePageSections/AboutPerfumes'
import HeroVideo from '../components/homePageSections/HeroSection/HeroVideo'
import Section3 from '../components/homePageSections/Section3'
import Testimonials from '../components/homePageSections/Testimonials'
// import ProductTab from '../components/productsSection/ProductTab'
// import HoverBtn from '../components/HoverBtn'
import { HyperText } from '../components/aboutPageSections/HyperText';
import PixelImage from '../components/aboutPageSections/PixelImage';
import daviBeck from '../assets/webpImagesPerfume/davidBeckham2.webp'
import SplashCursor from '../blocks/SplashCursor/SplashCursor'
const Home = () => {

    const hasScrolledToTop = useRef(false);

    // ✅ Scroll to top once on mount without triggering GSAP issues
    useLayoutEffect(() => {
        if (location.pathname === "/" && !hasScrolledToTop.current) {
            window.scrollTo({ top: 0, behavior: "instant" });
            hasScrolledToTop.current = true;
        }
    }, [location.pathname]);
    // overflow-hidden diya hai
    return (
        <div className='relative text-[#dcd8f6] w-[100%] min-h-[100vh] overflow-hidden'>

             <SplashCursor/>
            <HeroVideo />


            <Section3 />
            <div className='relative font-[cinzel]'>
                <h2 className='text-center absolute top-30 left-1/2 transform -translate-x-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>What Our Customers Says</h2>
                <Testimonials />
            </div>



            <div className='h-[100vh] overflow-hidden font-[cinzel]'>
                
                <CategorySlider />
            </div>



            <section className='w-[100%]  bg-[#181817] pb-20 min-[400px]:pb-27  py-10 lg:pb-33 xl:pb-39 sm:py-29 lg:py-35'>
                <div className='flex flex-col gap-6 items-center sm:gap-8 lg:gap-15'>
                    <div className='text-center  font-[cinzel] font-[500] max-[320px]:text-[25px] text-[29px] min-[400px]:text-[35px] sm:text-[45px] md:text-[55px] lg:text-[75px] xl:text-[100px] md:tracking-wider'>
                        <HyperText className="text-[#edd4f8] " duration={1500} animateOnHover>DAVID BECKHAM</HyperText>
                    </div>
                    <div className='flex flex-col items-center md:justify-between gap-5 sm:gap-8 md:flex-row lg:gap-12 xl:gap-16'>
                        <PixelImage src={daviBeck} cardClass=" max-[400px]:w-[260px] max-[400px]:h-[260px] w-72 h-72  md:w-55 md:h-55 lg:w-80 lg:h-80 xl:h-100 xl:w-100" />
                        <p className='w-fit px-10  text-center md:w-[450px] lg:w-[500px] lg:text-[18px] xl:w-[680px] xl:text-[22px]'>
                            ~ My passion for fragrance began as a personal search for scents that resonated with my own identity—scents that evoke memories, inspire new chapters, and allow everyone to express their spirit. Each creation is not just a product, but a story and a feeling I want to share with the world.
                        </p>

                    </div>
                </div>
            </section>

            <section className='w-[100%] h-[100%]'>
                <AboutPerfumes />
            </section>


        </div>
    )
}

export default Home


// <h1 className='text-[15rem] text-center  font-bold'>
// VÉRITTÉ ROYAL
// </h1>