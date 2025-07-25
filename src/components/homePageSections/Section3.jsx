import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import man11 from '../../assets/webpImagesPerfume/man11.webp'
import man15 from '../../assets/webpImagesPerfume/man15.webp'
// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   const elements = textRef.current.children;

  //   // GSAP animation
  //   const anim = gsap.fromTo(
  //     elements,
  //     { y: 50, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.15,
  //       duration: 1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: textRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none reset",
  //         scrub: 1, // make scroll scrub-enabled
  //       },
  //     }
  //   );

  //   // Refresh ScrollTrigger after window load
  //   const handleLoad = () => {
  //     // ScrollTrigger.refresh();
  //   };

  //   window.addEventListener("load", handleLoad);

  //   // Cleanup
  //   return () => {
  //     // if (anim.scrollTrigger) anim.scrollTrigger.kill();
  //     // anim.kill();
  //     window.removeEventListener("load", handleLoad);
  //     // ScrollTrigger.refresh();
  //   };
  // }, []);
  
  useEffect(()=>{
    const elems = sectionRef.current.querySelectorAll('.fade-in')
    elems.forEach((el)=>{
      gsap.fromTo(
        el,
        {filter:"blur(8px)",opacity:0,y:50},
        {
          filter:"blur(0px)",
          opacity:1,
          y:0,
          duration:0.8,
          ease:"power3.out",
          scrollTrigger:{
            trigger:el,
            start:"top 85%",
            toggleActions:"play none none reverse",
          }
        }
      )
    })
  },[])

  return (
    <section className="bg-[#f9f8ed] min-h-screen flex items-center justify-center px-4">
      <div
        className="max-w-4xl text-center text-black text-3xl md:text-5xl font-medium leading-tight space-y-4"
        ref={sectionRef}
      >
        <p className="fade-in">
          Discover fragrances that <span className="font-semibold"> speak </span>
        </p>
        <p className="fade-in"> without words—</p>

        <div className="relative inline-block fade-in">
          <p>
            <span className="">crafted </span>
            <span className="inline-block mx-3 relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden align-middle">
              <img
                src={man11}
                alt="Team"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="underline decoration-[2px] underline-offset-4">to evoke</span>
          </p>
        </div>

        <p className="fade-in" >memories, moods, spirit</p>

        <div className="relative inline-block fade-in">
          <p>
            <span className="underline decoration-[2px] underline-offset-4"> and</span>
            <span className="inline-block mx-3 relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden align-middle">
              <img
                src={man15}
                alt="Addisplay"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="">moments.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
// We craft captivating scent experiences that ignite emotion, tell immersive stories, and connect fragrance with identity across digital, physical, and cultural spaces—where aroma meets meaning and memory.