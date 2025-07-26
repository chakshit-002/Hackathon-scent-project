

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ProductCard from './ProductCard';
import {
  MenPerfumes,
  WomanPerfumes,
  UnisexProducts,
} from '../Data/productsDetailsHere';

// Data for tabs
const tabData = [
  {
    id: 1,
    label: 'Men',
    products: MenPerfumes,
  },
  {
    id: 2,
    label: 'Women',
    products: WomanPerfumes,
  },
  {
    id: 3,
    label: 'Unisex',
    products: UnisexProducts,
  },
];

export default function ProductTab() {
  const [activeTab, setActiveTab] = useState(1);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col items-center w-full px-4 py-10 bg-gray-100 min-h-screen pb-20">
      {/* Perspective wrapper for 3D effect */}
      <div className="perspectiveWrapper drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-xl w-full max-w-[1200px] mx-auto">
        {/* Tab Buttons Container */}
        <div className="tabs-container max-[333px]:px-2 px-3 py-3 flex gap-4 justify-center mb-8 border border-red-400 skew-container min-[501px]:px-10 min-[501px]:py-4 shadow-[4px_3px_21px_3px_#000000] lg:px-14 lg:py-8 bg-white lg:shadow-[8px_7px_31px_8px_#000000] overflow-hidden">
          {tabData.map((tab) => (
            <TabButton
              key={tab.id}
              label={tab.label}
              isActive={tab.id === activeTab}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div
        ref={contentRef}
        className="mt-5 sm:mt-8 md:mt-10 lg:mt-14 bg-white rounded-xl shadow-lg w-full max-w-[1600px] mx-auto p-6 flex flex-col items-center pb-20"
      >
        <h3 className="text-[#c193cf] text-[25px] font-semibold mt-2 mb-8 min-[400px]:text-[35px] sm:mt-8 sm:mb-13 sm:text-[39px] md:text-[45px] lg:text-[60px] lg:mt-13 lg:mb-16 text-center">
          {tabData.find((t) => t.id === activeTab).label} Products
        </h3>

        <div className="text-gray-700 flex flex-col gap-6 min-[480px]:gap-8 items-center justify-center md:flex-row md:flex-wrap">
          {tabData
            .find((t) => t.id === activeTab)
            .products.map((product, i) => (
              <ProductCard
                key={product.id}
                productDet={product}
                index={activeTab - 1}
              />

            ))}
        </div>
      </div>
    </div>
  );
}

// Tab Button Component with 3D shadow and hover effect, plus responsive skew removal below 501px
function TabButton({ label, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        max-[333px]:text-[15px] relative z-10 overflow-hidden skew-button-base
        py-1 px-3 rounded-xl text-[18px] min-[470px]:px-4 min-[470px]:py-2
        md:px-6 md:py-3 md:rounded-full md:text-lg lg:text-[2rem] lg:px-9
        font-medium transition-all duration-300 ease cursor-pointer

        bg-white
        ${isActive
          ? 'font-semibold text-red-400 shadow-[0_5px_15px_rgba(255,77,77,0.7),0_10px_20px_rgba(255,77,77,0.4)]'
          : 'text-gray-700 shadow-[0_3px_8px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_20px_rgba(255,107,107,0.6)] hover:text-red-400'
        }
        hover:brightness-105
        ${hovered ? 'scale-105' : 'scale-100'}
      `}
    >
      {label}
    </button>
  );
}




