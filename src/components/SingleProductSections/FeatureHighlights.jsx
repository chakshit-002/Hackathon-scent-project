import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "ri-leaf-line",
    label: "Curated Luxury Brands",
  },
  {
    icon: "ri-shield-check-line",
    label: "Exclusive Authorized Brand Distributor",
  },
  {
    icon: "ri-truck-line",
    label: "Free Delivery Across India",
  },
];

export default function FeatureHighlights() {
  const containerRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    // Fade in/out animation on scroll for the entire container
    gsap.fromTo(
      containerRef.current,
      { autoAlpha: 0, y: 50 },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 92%",
          end: "top 90%",
          scrub: 0.51, // <----- Enables smooth fade-in/out synced to scroll
          // markers:true,
        },
      }
    );


    // Hover animation on each feature box
    featureRefs.current.forEach((el) => {
      if (!el) return;

      const hoverIn = () => {
        gsap.to(el, {
          scale: 1.05,
          boxShadow:
            "0 15px 25px rgb(255 223 130 / 0.6), 0 10px 10px rgb(255 223 130 / 0.4)",
          ease: "power1.out",
          duration: 0.3,
        });
        gsap.to(el.querySelector("i"), {
          color: "#c48c13", // darker gold
          duration: 0.3,
        });
      };

      const hoverOut = () => {
        gsap.to(el, {
          scale: 1,
          boxShadow:
            "0 8px 15px rgb(255 223 130 / 0.3), 0 5px 5px rgb(255 223 130 / 0.2)",
          ease: "power1.in",
          duration: 0.3,
        });
        gsap.to(el.querySelector("i"), {
          color: "#d97706", // original gold
          duration: 0.3,
        });
      };

      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);

      // Cleanup event listeners on unmount
      return () => {
        el.removeEventListener("mouseenter", hoverIn);
        el.removeEventListener("mouseleave", hoverOut);
      };
    });
  }, []);

  return (
    <>
      {/* Import Remix Icon CSS CDN (if not imported globally) */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div
        ref={containerRef}
        className="w-full flex justify-center items-center py-8 bg-[#f8f7ec]"
      >
        <div className="flex flex-col md:flex-row justify-center items-center bg-white rounded-xl overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              ref={(el) => (featureRefs.current[index] = el)}
              className={`flex flex-col items-center justify-center px-8 py-6 w-full md:w-auto cursor-pointer transition-transform duration-300 ${index < features.length - 1 ? "md:border-r border-gray-200" : ""
                }`}
              style={{
                boxShadow:
                  "0 8px 15px rgb(255 223 130 / 0.3), 0 5px 5px rgb(255 223 130 / 0.2)",
                borderRadius: "1rem",
              }}
            >
              <i
                className={`${feature.icon} text-4xl text-yellow-600 mb-3 transition-colors duration-300`}
              />
              <span className="text-lg font-semibold text-gray-800 text-center">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
