import React, { useLayoutEffect, useRef } from 'react'
// import React from 'react'
import ProductTab from '../components/productsSection/ProductTab'
import ProductQuoteSlider from '../components/productsSection/ProductQuoteSlider'
import HeroVideoSection from '../components/productsSection/heroVideoSection';

const Products = () => {

      const hasScrolledToTop = useRef(false);
  
      // ✅ Scroll to top once on mount without triggering GSAP issues
      useLayoutEffect(() => {
          if (location.pathname === "/products" && !hasScrolledToTop.current) {
              window.scrollTo({ top: 0, behavior: "instant" });
              hasScrolledToTop.current = true;
          }
      }, [location.pathname]);


  return (
    <div className='text-[#dcd8f6] w-[100%] min-h-[100vh]'>

        <div>
            <HeroVideoSection/>
        </div>
            <ProductTab />
 

        <ProductQuoteSlider/>
    </div>
  )
}

export default Products