import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import DBFAbout from '../../assets/videos/DBFAbout.mp4'
function TopVideoSection() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let ctx = gsap.context(() => {
      // Get video width dynamically for full responsiveness
      const animate = () => {
        if (marquee) {
          const video = marquee.querySelector("video");
          const videoWidth = video.offsetWidth || 640; // fallback if not loaded

          gsap.fromTo(
            marquee,
            { x: "100vw" },
            {
              x: `-${videoWidth}px`,
              duration: 15,
              ease: "linear",
              repeat: -1,
              delay: 0,
            }
          );
        }
      };
      animate();
      window.addEventListener("resize", animate);
      return () => window.removeEventListener("resize", animate);
    }, marquee);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[40vw] max-h-[400px] min-h-[180px]">
      <div
        ref={marqueeRef}
        className="absolute top-1/2 left-0 -translate-y-1/2"
        style={{ willChange: "transform" }}
      >
        <video
          src={DBFAbout}
          autoPlay
          loop
          muted
          playsInline
          className="w-[70vw] max-w-[700px] min-w-[260px] rounded-lg shadow-xl"
        />
         <video
          src={DBFAbout}
          autoPlay
          loop
          muted
          playsInline
          className="w-[70vw] max-w-[700px] min-w-[260px] rounded-lg shadow-xl"
        />
         <video
          src={DBFAbout}
          autoPlay
          loop
          muted
          playsInline
          className="w-[70vw] max-w-[700px] min-w-[260px] rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}

export default TopVideoSection;
