
// HeroSection.jsx

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgVideo from '../../../assets/videos/DBFHero.webm';
import HeroText from "./HeroText";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const text = textRef.current;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "400vh top",
          scrub: 1, // <- smoother scrolling
          pin: true,
          anticipatePin: 1,
          // markers: true, // optional, remove in production
        },
      });

      tl.fromTo(video,
        {
          width: "100%",
          height: "125vh",
          yPercent: -15,
          xPercent: 10,
          rotate: -10,
          opacity: 0.55,
          scale: 0.2,
        },
        {
          width: "100%",
          height: "125vh",
          yPercent: 5,
          xPercent: 10,
          rotate: -8,
          opacity: 0.6,
          scale: 0.3,
          ease: "power1.inOut",
          duration: 2,
        }
      )
        .to(video, {
          yPercent: 15,
          xPercent: 5,
          rotate: -5,
          opacity: 1,
          scale: 0.4,
          ease: "power1.inOut",
          duration: 2,
        })
        .to(video, {
          yPercent: 25,
          xPercent: 5,
          rotate: -3,
          opacity: 1,
          scale: 0.55,
          ease: "power1.inOut",
          duration: 2,
        })
        .to(video, {
          yPercent: 35,
          xPercent: 0,
          rotate: 0,
          opacity: 1,
          scale: 0.75,
          ease: "power1.inOut",
          duration: 1.5,
        })
        .to(video, {
          yPercent: 48,
          xPercent: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
          ease: "power1.inOut",
          duration: 1.5,
        })
        .fromTo(text,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power1.out",
            duration: 1.5,
          },
          ">0.3"
        );
    }, sectionRef);


    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const heroSec = heroRef.current;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "-100vh",
          end: "200vh top",
          scrub: 1, // <- smoother scrolling

          // markers: true, // optional, remove in production
        },
      });

      tl.fromTo(heroSec,
        {
         y:0,
        },
        {
         y: -10,
          ease: "power1.inOut",
          duration: 2,
        }
      )
        .to(heroSec, {
          yPercent: 15,
          xPercent: 5,
          rotate: -5,
          opacity: 1,
          scale: 0.4,
          ease: "power1.inOut",
          duration: 2,
        })

    }, sectionRef);


    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-gray-950 overflow-hidden flex items-center justify-center font-[cinzel]"
      style={{ perspective: "1800px" }}
    >
      <section className='w-[100%] h-[100vh] absolute top-40' ref={heroRef}>
        <HeroText HerotextName = {"DAVID BECKHAM"} />
        <div className="">
          <HeroText HerotextName={"Signature"}/>
          <HeroText HerotextName={"SCENTS"}/>
        </div>
      </section>
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-screen z-10 pointer-events-none flex items-center justify-center">
        <video
          ref={videoRef}
          src={bgVideo}
          autoPlay
          muted
          loop
          className="object-cover md:contain rounded-xl shadow-xl"
          style={{
            willChange: "transform, width, height",
          }}
        />
      </div>

      {/* Overlay Text */}
      <div
        ref={textRef}
        className="absolute top-1/2 left-1/2 z-20 w-full px-4 sm:px-0 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to the David Beckham 
        </h1>
        <p className="mt-4 text-3xl sm:text-4xl text-white/80 max-w-xl mx-auto">
          {/* Scroll slowly to experience the animation 👇 */}
          Signature Scents
        </p>
      </div>
    </section>
  );
}
