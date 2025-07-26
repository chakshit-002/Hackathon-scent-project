

// ProductsCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import SingleProductCard from "./SingleProductCard";
import { BestProductsDets } from './Data/productsDetailsHere'
gsap.registerPlugin(Draggable);

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
};

const ProductsCarousel = () => {
  const carouselRef = useRef(null);
  const draggableRef = useRef(null);

  // Cards visible at a time depending on screen size
  const [cardsToShow, setCardsToShow] = useState(1);

  // Listen for window resize
  useEffect(() => {
    const updateCardsToShow = () => {
      const w = window.innerWidth;
      if (w >= breakpoints.lg) setCardsToShow(4);
      else if (w >= breakpoints.md) setCardsToShow(3);
      else if (w >= breakpoints.sm) setCardsToShow(2);
      else setCardsToShow(1);
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Card width by breakpoints
  const getCardWidth = () => {
    if (cardsToShow === 1) return 270;
    if (cardsToShow === 2) return 320;
    if (cardsToShow === 3) return 310;
    return 340;
  };

  // List of cards (replace these with your real product data)
  const originalCards = [...BestProductsDets];

  // Cloning slides for loop
  // const prepend = originalCards.slice(-cardsToShow);
  // const append = originalCards.slice(0, cardsToShow);
  // const cards = [...prepend, ...originalCards, ...append];
  const prepend = originalCards.slice(-cardsToShow);
  const append = originalCards.slice(0, cardsToShow);
  const cards = [...prepend, ...originalCards, ...append];


  // Main GSAP/Draggable setup
  useEffect(() => {
    const cardWidth = getCardWidth();
    const total = originalCards.length;
    const initialX = -cardWidth * cardsToShow;
    if (!carouselRef.current) return;

    if (draggableRef.current) {
      draggableRef.current.kill();
      draggableRef.current = null;
    }

    gsap.set(carouselRef.current, { x: initialX });

    function jumpIfNeeded(draggableInstance) {
      let x = draggableInstance.x;
      // Dragged too far left (to clones after original)
      if (x < -cardWidth * (total + cardsToShow)) {
        const newX = x + total * cardWidth;
        gsap.set(carouselRef.current, { x: newX });
        draggableInstance.update();
      }
      // Dragged too far right (to prepended clones)
      else if (x > -cardWidth * cardsToShow) {
        const newX = x - total * cardWidth;
        gsap.set(carouselRef.current, { x: newX });
        draggableInstance.update();
      }
    }

    draggableRef.current = Draggable.create(carouselRef.current, {
      type: "x",
      edgeResistance: 0.85,
      inertia: true,
      bounds: { minX: -cardWidth * (total + cardsToShow), maxX: 0 },
      snap: value => Math.round(value / cardWidth) * cardWidth,
      onDragEnd: function () { jumpIfNeeded(this); },
      onThrowComplete: function () { jumpIfNeeded(this); },
    })[0];

    return () => {
      if (draggableRef.current) {
        draggableRef.current.kill();
        draggableRef.current = null;
      }
    };
  }, [cardsToShow]);

  const cardStyle = {
    flex: `0 0 ${getCardWidth()}px`,
    maxWidth: getCardWidth(),
    cursor: "grab",
    userSelect: "none",
  };

  return (
    <div className="max-w-[1200px] overflow-hidden p-4 select-none mx-auto mt-5 min-[400px]:mt-8 sm:mt-13 md:mt-17">
      <div
        ref={carouselRef}
        className="flex space-x-4"
        style={{
          willChange: "transform",
          touchAction: "pan-y",
        }}
      >
        
      
        {cards.map((product, idx) => (
          <div
            key={`${product.id}-${idx}`}
            style={cardStyle}
            className="bg-white rounded-md border shadow-sm hover:shadow-xl hover:scale-105 transform transition-transform duration-300"
          >
            <SingleProductCard productDet={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCarousel;
