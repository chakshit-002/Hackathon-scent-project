import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    id: 1,
    title: "Creative Campaign",
    desc: "Brand storytelling with modern aesthetics.",
    img: "https://images.unsplash.com/photo-1682687981922-7b55dbb30892?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
  },
  {
    id: 2,
    title: "Bold Vision",
    desc: "Design that resonates with your audience.",
    img: "https://images.unsplash.com/photo-1752350434950-50e8df9c268e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
  },
  {
    id: 3,
    title: "Art Direction",
    desc: "Clean visuals and minimal perfection.",
    img: "https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
  }
];

export default function Showcase() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, []);

  return (
    <section className="space-y-32 py-32 px-6 lg:px-24">
      {images.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`flex flex-col lg:flex-row items-center gap-10 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <div className="w-full lg:w-1/2">
            <img
              src={item.img}
              alt={item.title}
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-purple-400">
              {item.title}
            </h2>
            <p className="text-gray-300 text-lg max-w-md">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
