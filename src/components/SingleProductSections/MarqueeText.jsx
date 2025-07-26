
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function MarqueeText() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const width = marquee.scrollWidth / 4;

    gsap.set(marquee, { x: 0 });
    const anim = gsap.to(marquee, {
      x: -width,
      duration: 10,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -width),
      },
    });

    return () => anim.kill();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-pink-50 py-2">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap select-none"
        style={{ willChange: "transform" }}
      >
        {["David ✦", "Beckham ✦", "Signature ✦", "Scents ✦", " David ✦", "Beckham ✦", "Signature ✦", "Scents ✦"]
          .concat(["David ✦", "Beckham ✦", "Signature ✦", "Scents ✦", " David ✦", "Beckham ✦", "Signature ✦", "Scents ✦"])
          .map((item, i) => (
            <span key={i} className="mx-6 text-lg font-semibold text-pink-800">
              {item}
            </span>
          ))}
      </div>
    </div>
  );
}

