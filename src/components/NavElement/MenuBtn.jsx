

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import PopOverMenu from './PopOverMenu';

const MenuBtn = () => {
  const buttonRef = useRef(null);
  const layerRefs = useRef([]);
  const lastScrollY = useRef(window.scrollY);
  // practice 
  const popRef = useRef(null)

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false); // <-- This controls PopOverMenu and icon

  // Resize window listener
  const handleResize = () => setIsMobile(window.innerWidth <= 768);

  // Scroll hide/show animation
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current) {
      gsap.to([buttonRef.current, popRef.current], { y: -150, opacity: 0, duration: 0.3, ease: "expo.inOut" });
      setMenuOpen(false);
    } else {
      gsap.to([buttonRef.current, popRef.current], { y: 0, opacity: 1, duration: 0.3, ease: "expo.inOut" });
    }

    lastScrollY.current = currentScrollY;
  };

  // Initial hover layer position
  useEffect(() => {
    gsap.set(layerRefs.current, { x: "-100%" });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hover animations
  const handleMouseEnter = () => {
    gsap.to(layerRefs.current, {
      x: "0%",
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    });
  };

  const handleMouseLeave = () => {
    const reversed = [...layerRefs.current].reverse();
    gsap.to(reversed, {
      x: "-100%",
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.inOut"
    });
  };

  // Toggle menu open/close
  const handleMouseClick = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div >
      {/* Conditional PopOverMenu rendering */}
      {/* <div className='relative z-50' >
          <PopOverMenu  />
        </div> */}
      {menuOpen && (
        <div className=' fixed max-sm:-top-10 rigth-0 max-[1024px]:w-[100%] lg:top-4 lg:right-4 z-50 ' ref={popRef} >
          <PopOverMenu />
        </div>
      )}

      <div
        ref={buttonRef}
        onClick={handleMouseClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`group overflow-hidden cursor-pointer fixed z-[999] flex items-center justify-center gap-2 transition-all duration-300
          ${isMobile ?
            'w-[60px] h-[60px] rounded-full top-[40px] right-[35px] bg-black text-white' :
            'h-[80px] px-6 rounded-3xl top-[50px] right-[50px] bg-black text-white lg:h-[90px] '
          }`}
      >
        {/* Animated background layers */}
        <div className="absolute inset-0 pointer-events-none">
          {["bg-pink-500", "bg-yellow-300", "bg-green-400"].map((color, index) => (
            <div
              key={index}
              ref={el => layerRefs.current[index] = el}
              className={`absolute inset-0 ${color}`}
              style={{ transform: "translateX(-100%)", zIndex: index }}
            />
          ))}
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex items-center gap-2">
          {/* Toggle Icon */}
          <i className={`text-xl lg:text-3xl ${menuOpen ? 'ri-close-fill' : 'ri-menu-2-fill'}`}></i>

          {/* Only for non-mobile screens show "Menu" text */}
          {!isMobile && (
            <span className="tracking-wide text-md lg:text-2xl">
              {menuOpen ? "Close" : "Menu"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBtn;





