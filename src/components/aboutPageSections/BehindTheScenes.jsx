
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BTSVideo from '../../assets/videos/behindTheScenes.webm';

gsap.registerPlugin(ScrollTrigger);

const BehindTheScenes = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 20 }, // start hidden and moved down a bit
      {
        autoAlpha: 1,
        y: 0,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',   // when top of text hits 80% of viewport height
          end: 'bottom 20%',  // till bottom of text hits 20% of viewport
          toggleActions: 'play reverse play reverse', // fade in/out on enter/leave scroll
          // markers: true,   // uncomment for debugging scroll triggers
        },
      }
    );

    // Clean up on unmount
    return () => {
      ScrollTrigger.getById(el)?.kill();
    };
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Video element with autoplay, muted, loop, and playsInline attributes */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={BTSVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with semi-transparent background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
        <h2
          ref={textRef}
          className="text-white text-2xl md:text-4xl font-bold font-[cinzel]"
        >
          BEHIND THE SCENES
        </h2>
      </div>
    </section>
  );
};

export default BehindTheScenes;
