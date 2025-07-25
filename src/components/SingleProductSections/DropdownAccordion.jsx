
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "How do I choose the right perfume for me?",
    content:
      "Try testers in-store first if possible, or consult scent descriptions and notes online. Different perfumes react uniquely with individual body chemistry, so it is useful to test before purchase or seek expert advice if buying online.",
  },
  {
    title: "What do perfume notes mean?",
    content:
      "Perfumes are composed of top, middle, and base notes that unfold over time. Top notes are first impressions, quickly evaporating; middle notes form the main body; base notes last the longest and give depth.",
  },
  {
    title: "How long does perfume typically last on the skin",
    content:
      "Duration depends on concentration (e.g., Eau de Parfum vs. Eau de Toilette) and skin type. Generally, Eau de Parfum lasts longer due to higher oil content. Applying on pulse points can enhance longevity.",
  },
  {
    title: "How will I track my perfume order?",
    content:
      "A confirmation email is sent after your purchase, and a shipment tracking number will be provided once your package ships. You can use this to follow the delivery status online.",
  },
  {
    title: "Can I get delivery on a specific day?",
    content:
      "Some stores offer delivery on a specified date for prepaid orders, where available. This may depend on your delivery location and courier services; check at checkout or contact support to confirm.",
  },
];

export default function DropdownAccordion() {
  const [openIdx, setOpenIdx] = useState(null);
  const refs = useRef([]);
  const headerRefs = useRef([]);

  useEffect(() => {
    // Scroll animation - fade and slide up on entering viewport
    refs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el.parentElement, // the entire section container div
        { autoAlpha: 0, y: 50 },
        {
          duration: 0.8,
          y: 0,
          autoAlpha: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const toggleSection = (idx) => {
    if (openIdx === idx) {
      // Close the section
      gsap.to(refs.current[idx], { height: 0, duration: 0.4, ease: "power2.inOut" });
      setOpenIdx(null);
    } else {
      // Close any open
      if (openIdx !== null) {
        gsap.to(refs.current[openIdx], { height: 0, duration: 0.4, ease: "power2.inOut" });
      }
      // Open new
      gsap.set(refs.current[idx], { height: "auto" });
      const height = refs.current[idx].scrollHeight;
      gsap.fromTo(
        refs.current[idx],
        { height: 0 },
        { height, duration: 0.4, ease: "power2.inOut" }
      );
      setOpenIdx(idx);
    }
  };

  // Mouse enter & leave animations for buttons
  const handleMouseEnter = (idx) => {
    gsap.to(headerRefs.current[idx], {
      scale: 1.05,
      color: "#a0522d", // a warm brown highlight color
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (idx) => {
    gsap.to(headerRefs.current[idx], {
      scale: 1,
      color: "#000000",
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <div className="lg:w-[500px] xl:w-[550px] 2xl:w-[630px] mx-auto bg-white p-4 rounded-lg shadow-md">
      {sections.map((sec, idx) => (
        <div key={sec.title} className="border-b border-beige-200 opacity-0" /* initially hidden for animation */>
          <button
            className="w-full flex text-left justify-between items-center py-5 focus:outline-none"
            onClick={() => toggleSection(idx)}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            ref={(el) => (headerRefs.current[idx] = el)}
          >
            <span className="font-serif text-lg tracking-wide">{sec.title}</span>
            <span
              className="text-2xl transition-transform duration-300 ease-in-out"
              style={{ transform: openIdx === idx ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          <div
            ref={(el) => (refs.current[idx] = el)}
            className="overflow-hidden h-0 transition-all duration-500 bg-white text-base text-gray-700 px-2"
          >
            <div className="py-4">{sec.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
