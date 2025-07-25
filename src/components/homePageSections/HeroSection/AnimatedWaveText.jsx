

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedWaveText = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous content
    container.innerHTML = "";

    // Responsive horizontal padding (matches Tailwind px-4 => 16px)
    const responsivePadding = 16;

    // Split the text to max 2-word pairs
    const words = text.split(" ");
    const pair1 = words.slice(0, 2).join(" ");
    const pair2 = words.slice(2, 4).join(" ");
    const twoWordPair = [pair1, pair2];

    // Create span for each word pair
    twoWordPair.forEach((word, idx) => {
      const span = document.createElement("span");
      span.textContent = word + (idx !== twoWordPair.length - 1 ? " " : "");
      span.style.display = "inline-block";
      span.style.opacity = 0;
      span.style.position = "relative";
      span.style.whiteSpace = "nowrap";
      span.style.padding = "0 4px"; // Prevent hug
      container.appendChild(span);
    });

    const spans = container.querySelectorAll("span");

    // Core animation function
    const animate = () => {
      const containerWidth = container.offsetWidth;
      const half = Math.floor(spans.length / 2);

      // Reset initial state
      spans.forEach((span) => {
        gsap.set(span, { x: 0, y: 40, opacity: 0 });
      });

      // Entrance animation
      gsap.to(spans, {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        ease: "power2.out",
        duration: 0.6,
        onComplete: () => {
          // Wave-out animation
          gsap.delayedCall(0.6, () => {
            spans.forEach((span, i) => {
              const spanWidth = span.offsetWidth;
              const spanLeft = span.offsetLeft;

              let targetX = 0;

              if (i < half) {
                // Left half – move to left side with padding
                targetX = -spanLeft + responsivePadding;
              } else {
                // Right half – move to right side
                const targetRight = containerWidth - responsivePadding;
                targetX = targetRight - (spanLeft + spanWidth);
              }

              gsap.to(span, {
                x: targetX,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.06 * i,
              });
            });
          });
        },
      });
    };

    // First time animation
    animate();

    // Handle responsiveness using ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      gsap.killTweensOf("*");
      animate();
    });

    resizeObserver.observe(container);

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf("*");
      resizeObserver.disconnect();
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide select-none px-4"
      style={{
        height: "3.5em",
        overflow: "hidden",
        position: "relative",
        alignItems: "center",
        display: "flex",
      }}
    />
  );
};

export default AnimatedWaveText;
