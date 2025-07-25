
import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_GRIDS = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
};

const MIN_GRID = 1;
const MAX_GRID = 16;

function PixelImage({
  src,
  cardClass="",
  grid = "6x4",
  customGrid = null,
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
}) {
  const containerRef = useRef(null);

  const [showColor, setShowColor] = useState(false);

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (grid) => {
      if (!grid) return false;
      const { rows, cols } = grid;
      return (
        Number.isInteger(rows) &&
        Number.isInteger(cols) &&
        rows >= MIN_GRID &&
        cols >= MIN_GRID &&
        rows <= MAX_GRID &&
        cols <= MAX_GRID
      );
    };
    return isValidGrid(customGrid) ? customGrid : DEFAULT_GRIDS[grid];
  }, [customGrid, grid]);

  const pieces = useMemo(() => {
    return Array.from({ length: rows * cols }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;

      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`;

      const delay = Math.random() * maxAnimationDelay;

      return { clipPath, delay };
    });
  }, [rows, cols, maxAnimationDelay]);

  useEffect(() => {
    const context = gsap.context(() => {
      const fades = gsap.utils.toArray(".pixel-piece");

      fades.forEach((el, index) => {
        const delay = pieces[index].delay / 1000;

        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            delay,
            duration: pixelFadeInDuration / 1000,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none reset", // re-animates every scroll
              onEnter: () => setShowColor(true),
              onLeaveBack: () => setShowColor(false), // turn grayscale again
              // markers:true,
            },
          }
        );
      });
    }, containerRef);

    return () => context.revert();
  }, [pixelFadeInDuration, pieces]);

  return (
    <div
      ref={containerRef}
         //   md:w-96 md:h-96
      className={`relative select-none ${cardClass}`}
      style={{
        position: "relative",
        // width: "18rem",
        // height: "18rem",
      }}
    >
      {pieces.map((piece, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 pixel-piece",
            // initial class
            "opacity-0"
          )}
          style={{
            clipPath: piece.clipPath,
          }}
        >
          <img
            src={src}
            alt={`Pixel ${index + 1}`}
            draggable={false}
            className="w-full h-full object-cover rounded-[2.5rem]"
            style={{
              filter: grayscaleAnimation
                ? showColor
                  ? "grayscale(0%)"
                  : "grayscale(100%)"
                : "none",
              transition: grayscaleAnimation
                ? `filter ${pixelFadeInDuration}ms ease`
                : "none",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "2.5rem",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default PixelImage;
