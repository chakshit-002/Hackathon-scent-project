import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import hta1 from '../../assets/webpImagesPerfume/howToApply1.webp'
import hta2 from '../../assets/webpImagesPerfume/howToApply2.webp'
import hta3 from '../../assets/webpImagesPerfume/howToApply3.webp'

const perfumeTips = [
  {
    img: hta1,
    icon: "ri-user-location-line",
    title: "Do apply directly to skin",
    desc:
      "Perfume is designed to interact with your body chemistry, so make sure you spritz it directly onto your skin and not into the air.",
  },
  {
    img: hta2,
    icon: "ri-heart-pulse-line",
    title: "Do focus on pulse points",
    desc:
      "Pulse points like the wrists and neck are the warmest parts of your body. As heat helps to emit the scent, spritzing here maximizes the fragrance’s intensity.",
  },
  {
    img: hta3,
    icon: "ri-hand-line",
    title: "Don't rub into the skin",
    desc:
      "Avoid spritzing then rubbing your wrists together. Instead, let the fragrance dry down naturally to allow the different scent layers to evolve.",
  },
  {
    img:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    icon: "ri-drop-line",
    title: "Hydrate your skin",
    desc:
      "Hydrate your skin to ensure a long-lasting scent. Wait for your moisturizer to absorb before applying your fragrance.",
  },
];

// Make sure Remix Icon CSS is loaded globally:
// <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet" />

export default function PerfumeTipsSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const fromX = index < 2 ? -100 : 100; // first row from left, second row from right

      gsap.fromTo(
        card,
        { autoAlpha: 0, x: fromX },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15,
        }
      );
    });
  }, []);

  // Hover animation handlers to keep smooth behavior without lag
  // These use GSAP quickSetter for performance if desired,
  // but here we use simple to() with killTweensOnRevert for simplicity.

  const handleMouseEnter = (index) => {
    if (!cardRefs.current[index]) return;
    gsap.to(cardRefs.current[index], {
      scale: 1.05,
      boxShadow:
        "0 15px 25px rgba(249, 168, 37, 0.4), 0 10px 10px rgba(249, 168, 37, 0.3)",
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (!cardRefs.current[index]) return;
    gsap.to(cardRefs.current[index], {
      scale: 1,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power1.in",
    });
  };

  return (
    <section className="w-full bg-[#f8f7ec]py-8 px-4 overflow-hidden mt-5 min-[400px]:mt-8 sm:mt-13 md:mt-17">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {perfumeTips.map((tip, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            className="
              flex flex-col bg-white rounded-lg overflow-hidden shadow-md
              w-full max-w-[540px]  // max approx half viewport width on most screens
              sm:basis-[calc(50%-1.5rem)]  // 2 cards side by side on small and up
              cursor-pointer
              transition-shadow
            "
            style={{
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              willChange: "transform, box-shadow",
              transformOrigin: "center center",
            }}
          >
            <div className="relative h-52 md:h-48 w-full">
              <img
                src={tip.img}
                alt={tip.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 bg-black/70 p-2 text-white px-4 rounded-full">
                {/* <i className={`${tip.icon} text-white text-xl`} /> */}{i+1}
              </div>
            </div>
            <div className="flex flex-col p-5 h-full">
              <span className="bg-black text-white px-2 py-1 font-semibold rounded w-max mt-[-1.5rem] mb-2 relative z-10 shadow-lg">
                {tip.title}
              </span>
              <p className="mt-1 text-gray-700 text-sm">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
