

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import timelineImage from '../../assets/webpImagesPerfume/timelinePhoto.webp'
gsap.registerPlugin(ScrollTrigger);

// Sample timeline data
const timelineData = [
  { step: 'Craftsmanship', content: 'Masterful blend of tradition and innovation in every creation' },
  { step: 'Detail', content: 'Perfection found in the careful selection of every ingredient' },
  { step: 'Inspiration', content: 'Drawing from personal heritage, royal aesthetics, and nature' },
  { step: 'Empowerment', content: 'Helping people express individuality and feel extraordinary' },
  { step: 'Elegance', content: 'Timeless, refined style in both scent and design' },

];

const TimelineJourney = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (sectionRefs.current.length === 0) return;

    sectionRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: i % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.3,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            // markers:true,
          }
        }
      );
    });
  }, []);

  return (
    <div className="relative bg-cover bg-center text-white py-16 px-4 bg-amber-500/20"  style={{ backgroundImage: `url(${timelineImage})` }}>
        {/* overlay */}
       <div className="absolute inset-0 bg-black/30 " />
      {/* Timeline vertical line */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-[#f8f7ec] opacity-30 -translate-x-1/2 z-0" />

      <h2 className="relative z-10 text-4xl font-bold text-center mb-16 text-white ">Process</h2>

      <div className="max-w-5xl mx-auto flex flex-col space-y-16 relative z-10">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:justify-between gap-6 relative ${
                isLeft ? 'md:flex-row-reverse' : ''
              }`}
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              {/* Content Block */}
              <div
                className={`w-full md:w-5/12 text-center bg-[#f8f7ec] text-gray-900 p-6 rounded-lg shadow-lg ${
                  isLeft ? 'md:text-left' : 'md:text-right'
                }`}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              {/* Dot and line connector */}
              <div className="relative flex items-center justify-center">
                <div className="w-6 h-6 bg-[#5ac6f4] rounded-full border-4 border-white shadow-md z-10"></div>
              </div>

              {/* Year */}
              <div className="text-xl  font-semibold text-white md:w-5/12 text-center md:text-left">
                {item.step}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineJourney;
