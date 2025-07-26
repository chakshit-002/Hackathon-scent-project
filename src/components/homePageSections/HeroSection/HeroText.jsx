
import React, { useRef } from "react";
import { gsap } from "gsap";



// Direction and motion definitions per your requirements (repeat after every 4)
const negativeValue = "-100%";
const  positiveValue = "100%";
const directionMap = [
  { out: { x: `${negativeValue}`, y: "0%" }, in: { x: `${positiveValue}`, y: "0%" } },    // V: left, enter right
  { out: { x: "0%", y:  `${positiveValue}`}, in: { x: "0%", y: `${negativeValue}` } },    // É: down, enter top
  { out: { x:  `${positiveValue}`, y: "0%" }, in: { x: `${negativeValue}`, y: "0%" } },    // R: right, enter left
  { out: { x: "0%", y: `${negativeValue}` }, in: { x: "0%", y:  `${positiveValue}` } },    // I: up, enter down
];

function getDirection(i) {
  return directionMap[i % directionMap.length];
}

const Letter = ({ char, dir }) => {
  const letterRef = useRef(null);

  // Prevent re-animation if already animating
  const animating = useRef(false);

  const animateLetter = () => {
    if (animating.current) return;
    animating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        animating.current = false;
      }
    });

    tl.to(letterRef.current, {
      ...dir.out,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(letterRef.current, {
          ...dir.in,
        });
      }
    })
    .to(letterRef.current, {
      x: "0%",
      y: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut"
    });
  };
  const brAdd = ()=>{
    if(key==6){
      <br className="lg:hidden"/>
    }
  }

  
  return (
  <span className="overflow-hidden min-w-1 ">
      <span
      ref={letterRef}
      className="relative inline-block overflow-hidden w-fit text-center select-none text-[7.2vw] min-[370px]:text-[8vw]  
                  min-[470px]:text-[9vw] sm:text-[50px] md:text-[65px] lg:text-[85px] xl:text-[110px] 2xl:text-[min(8.5vw,180px)] "
      // style={{ minWidth: "25px" }}
      onMouseEnter={animateLetter}
    >
      {char}
    </span>
    {/* {brAdd} */}
  </span>
  );
};

const HeroText = ({HerotextName}) => {
  const text = HerotextName;
  return (
    <div className=" flex items-center justify-center px-3">
      <div className="text-white font-extrabold text-5xl flex gap-1 overflow-hidden sm:gap-2">
        {Array.from(text).map((char, i) =>
          char === " " ? (
            <span key={i} className="mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-5" />
          ) : (
            <Letter key={i} char={char} dir={getDirection(i)} />
            
          )
        )}
      </div>

      
    </div>
  );
};

export default HeroText;




