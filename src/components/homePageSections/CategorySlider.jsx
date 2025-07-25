

import React, { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import man8a from '../../assets/webpImagesPerfume/man8a.webp'
import man1 from '../../assets/webpImagesPerfume/man1.webp'
import man15 from '../../assets/webpImagesPerfume/man15.webp'
import man8 from '../../assets/webpImagesPerfume/man8.webp'
import man13 from '../../assets/webpImagesPerfume/man14.webp'
import man14 from '../../assets/webpImagesPerfume/man13.webp'
import david from '../../assets/webpImagesPerfume/david.webp'
import davidboy from '../../assets/webpImagesPerfume/davidboy.webp'
import beckham from '../../assets/webpImagesPerfume/beckham.webp'
const categories = [
  {
    category: "Category 1",
    name: "Male",
    img: man8,
    bg: man15
  },
  {
    category: "Category 2",
    name: "Woman",
    img: man1,
    bg: man8a
  },
  {
    category: "Category 3",
    name: "Unisex",
    img: man14,
    bg: man13
  },
  {
    category: "David Beckham",
    name: "Signature Scents",
    img: davidboy,
    bg: david
  },
];



export default function CategorySlider() {
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const [scrollBlocked, setScrollBlocked] = useState(false);
  const sectionRef = useRef();
  const observerRef = useRef();

  // Refs for animation
  const textRefs = useRef([]);
  const nameRefs = useRef([]);
  const imageRefs = useRef([]);
  const bgRefs = useRef([]);
  // To prevent immediate relock after unlock
  const skipNextLock = useRef(false);

  // Responsive
  const getIsDesktop = () => window.innerWidth > 1024;
  const [isDesktop, setIsDesktop] = useState(getIsDesktop());
  useEffect(() => {
    const handleResize = () => setIsDesktop(getIsDesktop());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fix-on-scroll (Intersection Observer)
  useEffect(() => {
    if (!sectionRef.current) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new window.IntersectionObserver(
      ([entry]) => {
        // Only lock if NOT skipping lock (after unlock)
        if (entry.isIntersecting && entry.intersectionRatio >= 0.98) {
          if (skipNextLock.current) {
            skipNextLock.current = false; // Reset flag
            return;
          }
          setLocked(true);
          document.body.style.overflow = "hidden";
        } else {
          setLocked(false);
          document.body.style.overflow = "";
        }
      },
      { threshold: [0, 0.98, 1] }
    );
    observerRef.current.observe(sectionRef.current);
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      document.body.style.overflow = "";
    };
  }, []);

  // GSAP animations (unchanged, as before)
  useEffect(() => {
    categories.forEach((cat, i) => {
      if (isDesktop) {
        if (textRefs.current[i])
          gsap.to(textRefs.current[i], {
            y: i === active ? 0 : i < active ? -40 : 40,
            opacity: i === active ? 1 : 0,
            pointerEvents: i === active ? "auto" : "none",
            duration: 0.6,
            ease: "power3.out",
          });
        if (nameRefs.current[i])
          gsap.to(nameRefs.current[i], {
            y: i === active ? 0 : i < active ? -40 : 40,
            opacity: i === active ? 1 : 0,
            pointerEvents: i === active ? "auto" : "none",
            duration: 0.6,
            ease: "power3.out",
          });
      }
      if (imageRefs.current[i])
        gsap.to(imageRefs.current[i], {
          scale: i === active ? 1 : 1.05,
          opacity: i === active ? 1 : 0,
          zIndex: i === active ? 10 : 0,
          duration: 0.7,
          ease: "power3.inOut",
        });
      if (bgRefs.current[i])
        gsap.to(bgRefs.current[i], {
          scale: i === active ? 1 : 1.08,
          opacity: i === active ? 1 : 0,
          duration: 0.8,
          ease: "power2.inOut",
        });
    });
  }, [active, isDesktop]);

  // Navigation
  // Navigation with Looping
  const next = useCallback(() => {
    if (!locked) return;
    setActive((a) => (a + 1) % categories.length);
  }, [locked]);

  const prev = useCallback(() => {
    if (!locked) return;
    setActive((a) => (a - 1 + categories.length) % categories.length);
  }, [locked]);


  // --- Improved unlock logic ---
  const unlockAndScrollAway = useCallback((direction = "down") => {
    // Prevent IntersectionObserver from immediately relocking (skip flag)
    skipNextLock.current = true;
    setLocked(false);
    document.body.style.overflow = "";

    // Scroll out of the lock zone so observer doesn't fire a re-lock
    setTimeout(() => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const scrollBy =
          direction === "up"
            ? rect.top - 80 // scroll so section top is above viewport
            : rect.bottom - window.innerHeight + 80; // scroll so section bottom is below viewport
        window.scrollBy({ top: scrollBy, behavior: "smooth" });
      }
    }, 40);
  }, []);

  // Scroll/Key/Touch Navigation & unlock logic
  useEffect(() => {
    if (!locked) return;

    const handleWheel = (e) => {
      if (!locked) return;
      if (Math.abs(e.deltaY) < 10 || scrollBlocked) return;
      setScrollBlocked(true);

      // At end? Unlock, else next slide
      if (e.deltaY > 0 && active < categories.length - 1) {
        setActive((a) => Math.min(a + 1, categories.length - 1));
      } else if (e.deltaY < 0 && active > 0) {
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.deltaY > 0 && active >= categories.length - 1) {
        unlockAndScrollAway("down");
      } else if (e.deltaY < 0 && active <= 0) {
        unlockAndScrollAway("up");
      }
      setTimeout(() => setScrollBlocked(false), 450);
      e.preventDefault();
    };

    const handleKey = (e) => {
      if (!locked) return;
      if (
        ((e.key === "ArrowDown" || e.key === "PageDown") && active < categories.length - 1)
      ) {
        setScrollBlocked(true);
        setActive((a) => Math.min(a + 1, categories.length - 1));
        setTimeout(() => setScrollBlocked(false), 450);
        e.preventDefault();
      } else if (
        ((e.key === "ArrowUp" || e.key === "PageUp") && active > 0)
      ) {
        setScrollBlocked(true);
        setActive((a) => Math.max(a - 1, 0));
        setTimeout(() => setScrollBlocked(false), 450);
        e.preventDefault();
      } else if (
        (e.key === "ArrowDown" || e.key === "PageDown") && active >= categories.length - 1
      ) {
        unlockAndScrollAway("down");
        e.preventDefault();
      } else if (
        (e.key === "ArrowUp" || e.key === "PageUp") && active <= 0
      ) {
        unlockAndScrollAway("up");
        e.preventDefault();
      }
    };

    // Touch
    let touchStart = null, touchEnd = null;
    function handleTouchStart(e) { touchStart = e.changedTouches[0].clientY; }
    function handleTouchEnd(e) {
      touchEnd = e.changedTouches[0].clientY;
      const diff = touchStart - touchEnd;
      if (Math.abs(diff) > 40) {
        if (diff > 0 && active < categories.length - 1)
          setActive((a) => Math.min(a + 1, categories.length - 1));
        else if (diff < 0 && active > 0)
          setActive((a) => Math.max(a - 1, 0));
        else if (diff > 0 && active >= categories.length - 1)
          unlockAndScrollAway("down");
        else if (diff < 0 && active <= 0)
          unlockAndScrollAway("up");
      }
      touchStart = null; touchEnd = null;
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [locked, scrollBlocked, active, unlockAndScrollAway]);

  // --------- UI (Same as your code, omitted for brevity) ---------
  function MobileStack() {
    return (
      <div className="flex flex-col items-center justify-center w-full pt-16 pb-16 relative" style={{ minHeight: "100vh" }}>
        <div className="w-full flex items-center justify-center" style={{ marginBottom: 30 }}>
          <div style={{
            color: "#fff", background: "rgba(0,0,0,0.48)", padding: "7px 18px", borderRadius: "12px", fontWeight: "600", fontSize: "1.13rem", letterSpacing: ".11em", boxShadow: "0 2px 8px rgba(0,0,0,0.10)", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: "80vw", textAlign: "center",
          }}>{categories[active].category}</div>
        </div>
        <div className="flex flex-row items-end justify-center gap-3 mb-3">
          {categories.map((c, idx) => (
            <div
              key={idx}
              className={`categ-index text-xl font-mono px-2 py-1 rounded-lg transition ${idx === active ? "text-yellow-400 bg-gray-900/80 scale-110" : "text-gray-500"}`}
              style={{ fontWeight: 700, minWidth: 35, textAlign: 'center' }}
            >{("0" + (idx + 1)).slice(-2)}</div>
          ))}
        </div>
        <div className="w-[75vw] max-w-[330px] aspect-square my-2 shadow-xl rounded-3xl overflow-hidden flex items-center justify-center relative" style={{ margin: "20px 0 15px 0" }}>
          {categories.map((cat, i) => (
            <img
              key={i}
              ref={el => (imageRefs.current[i] = el)}
              src={cat.img}
              alt=""
              className="absolute w-full h-full object-cover rounded-3xl transition-all duration-500"
              style={{
                opacity: i === active ? 1 : 0,
                zIndex: i === active ? 10 : 0,
                scale: i === active ? 1 : 1.05,
              }}
              draggable={false}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center" style={{ margin: "28px 0 26px 0" }}>
          <div style={{
            color: "#fff", background: "rgba(0,0,0,0.48)", padding: "8px 22px", borderRadius: "12px", fontWeight: "700", fontSize: "1.18rem", boxShadow: "0 4px 16px rgba(0,0,0,0.13)", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: "75vw", textAlign: "center"
          }}>
            {categories[active].name}
          </div>
        </div>
      </div>
    );
  }

  function DesktopFlex() {
    return (
      <div className="w-full h-full flex items-center justify-center" style={{ minHeight: "100vh" }}>
        <div className="details w-full max-w-6xl mx-auto flex flex-row items-center justify-between lg:px-10 gap-10" style={{ alignItems: "center", minHeight: "60vh", width: "100%" }}>
          <div className="categ-left flex-col space-y-7 flex-1 min-w-[160px] items-start justify-center hidden lg:flex" style={{ maxWidth: 240 }}>
            {categories.map((c, i) => (
              <div
                ref={el => (textRefs.current[i] = el)}
                key={i}
                className="categ-text font-semibold uppercase tracking-wider lg:text-2xl transition-all duration-300"
                style={{
                  opacity: i === active ? 1 : 0,
                  color: i === active ? "#ffffff" : "#888888",
                  pointerEvents: i === active ? "auto" : "none",
                  whiteSpace: "nowrap",
                  overflow: "visible",
                  textOverflow: "unset",
                  width: "100%",
                  fontSize: "1.5rem",
                }}
              >{c.category}</div>
            ))}
          </div>
          <div className="categ-indexing flex flex-col items-center space-y-7 min-w-[55px]">
            {categories.map((_, i) => (
              <div
                key={i}
                className={`categ-index text-lg lg:text-2xl font-mono transition-all duration-300 ${i === active ? "text-yellow-400 scale-110" : "text-gray-500"}`}
                style={{ fontSize: '1.4rem' }}
              >{("0" + (i + 1)).slice(-2)}</div>
            ))}
          </div>
          <div className="categ-center-images relative w-[320px] md:w-[370px] xl:w-[420px] aspect-square shadow-2xl rounded-3xl overflow-hidden flex items-center justify-center">
            {categories.map((cat, i) => (
              <img
                ref={el => (imageRefs.current[i] = el)}
                src={cat.img}
                alt=""
                key={i}
                className="categ-center-image absolute w-full h-full object-cover rounded-3xl transition-all duration-500"
                style={{
                  opacity: i === active ? 1 : 0,
                  zIndex: i === active ? 10 : 0,
                  scale: i === active ? 1 : 1.05,
                }}
                draggable={false}
              />
            ))}
          </div>
          <div className="categ-indexing flex flex-col items-center space-y-7 min-w-[55px]">
            {categories.map((_, i) => (
              <div
                key={i}
                className={`categ-index text-lg lg:text-2xl font-mono transition-all duration-300 ${i === active ? "text-yellow-400 scale-110" : "text-gray-500"}`}
                style={{ fontSize: '1.4rem' }}
              >{("0" + (i + 1)).slice(-2)}</div>
            ))}
          </div>
          <div className="categ-right flex-col space-y-7 flex-1 min-w-[160px] items-end justify-center hidden lg:flex" style={{ maxWidth: 240 }}>
            {categories.map((cat, i) => (
              <div
                ref={el => (nameRefs.current[i] = el)}
                key={i}
                className="categ-name font-bold lg:text-2xl tracking-wide transition-all duration-300"
                style={{
                  opacity: i === active ? 1 : 0,
                  color: i === active ? "#fff" : "#888888",
                  pointerEvents: i === active ? "auto" : "none",
                  whiteSpace: "nowrap",
                  overflow: "visible",
                  textOverflow: "unset",
                  width: "100%",
                  fontSize: "1.5rem",
                  textAlign: "right",
                }}
              >{cat.name}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- Component Render ---
  return (
    <section
      ref={sectionRef}
      style={
        locked
          ? {
            position: "fixed",
            inset: 0,
            zIndex: 50,
            width: "100vw",
            height: "100vh",
          }
          : { position: "relative", minHeight: "100vh" }
      }
      className="parent flex items-center justify-center bg-black select-none touch-none font-[cinzel]"
    >
      {/* ... BG and content unchanged ... */}
      <div className="bgSlidePart w-full h-full absolute inset-0 pointer-events-none -z-10">
        {categories.map((cat, i) => (
          <img
            key={i}
            src={cat.bg}
            ref={el => (bgRefs.current[i] = el)}
            alt=""
            className="absolute w-full h-full object-cover"
            style={{ opacity: i === active ? 1 : 0, transition: "opacity 0.6s" }}
            draggable={false}
          />
        ))}
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full">
          <div className="block lg:hidden w-full h-full">
            <MobileStack />
          </div>
          <div className="hidden lg:block w-full h-full">
            <DesktopFlex />
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        <button
          onClick={prev}
          className={`py-2 px-5 bg-gray-800 text-white rounded-xl hover:bg-gray-700 text-base lg:text-lg active:scale-90 transition bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400`}
          disabled={!locked}
        >Prev</button>

        <button
          onClick={next}
          className={`py-2 px-5 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-black rounded-xl hover:bg-yellow-400 text-base lg:text-lg active:scale-90 transition`}
          disabled={!locked}
        >Next</button>

      </div>
    </section>
  );
}
