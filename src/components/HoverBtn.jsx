
import React from "react";

const svgss = [
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      fill="none"
      className="app-gr-img"
    >
      <circle
        cx="10"
        cy="10"
        r="10"
        fill="url(#paint0_radial_820_315)"
      ></circle>
      <defs>
        <radialGradient
          id="paint0_radial_820_315"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="objectBoundingBox"
          spreadMethod="pad"
          gradientTransform="translate(0.25 0.95) rotate(-54.2933) scale(0.985 0.728)"
        >
          <stop stop-color="#FF9A2B"></stop>
          <stop offset="0.615993" stop-color="#FFDFCF"></stop>
          <stop offset="1" stop-color="#FFAD37"></stop>
        </radialGradient>
      </defs>
    </svg>
  ),
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 21 21"
      fill="none"
      className="app-gr-img"
    >
      <circle
        cx="10"
        cy="10"
        r="10"
        fill="url(#paint0_radial_820_329)"
      ></circle>
      <circle
        cx="10"
        cy="10"
        r="10"
        fill="url(#paint1_radial_820_329)"
      ></circle>
      <defs>
        <radialGradient
          id="paint0_radial_820_329"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.3359 3.5) rotate(132.797) scale(18.3984)"
        >
          <stop stop-color="#FF97E7"></stop>
          <stop offset="1" stop-color="#FF66B9"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_820_329"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.33594 17) rotate(-47.7263) scale(22.2991)"
        >
          <stop stop-color="#FF8FE1"></stop>
          <stop offset="0.45" stop-color="#FFDDFE"></stop>
          <stop offset="1" stop-color="#FF9DE5"></stop>
        </radialGradient>
      </defs>
    </svg>
  ),
  () => (<svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 21 21"
    fill="none"
    className="app-gr-img"
  >
    <circle
      cx="10"
      cy="10"
      r="10"
      fill="url(#paint0_radial_820_342)"
    ></circle>
    <circle
      cx="10"
      cy="10"
      r="10"
      fill="url(#paint1_radial_820_342)"
    ></circle>
    <defs>
      <radialGradient
        id="paint0_radial_820_342"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.1641 4) rotate(132.879) scale(19.105)"
      >
        <stop stop-color="#FF783F"></stop>
        <stop offset="1" stop-color="#FF3232"></stop>
      </radialGradient>
      <radialGradient
        id="paint1_radial_820_342"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(5.16406 18.5) rotate(-52.0013) scale(20.3039)"
      >
        <stop offset="0.106621" stop-color="#FF3124"></stop>
        <stop offset="0.6147" stop-color="#FF8A35"></stop>
        <stop offset="0.922649" stop-color="#FF3124"></stop>
      </radialGradient>
    </defs>
  </svg>)
]
function SvgDisplay({ index }) {
  const SvgComponent = svgss[index] || (() => null);
  return <SvgComponent />;
}
export default function HoverBtn({ cardClass = "", buttonName, index, onClick }) {
  return (
    <div
      onClick={onClick}
      typeof=""
      className={`card-heading group flex flex-row-reverse justify-end gap-4 border border-[#94928e] rounded-[30px] px-4 py-[10px] md:px-4 md:py-[15px] 
        items-center relative overflow-hidden transition-all duration-500 cursor-pointer ${cardClass}`}
    >
      {/* Text */}
      <h3
        className={`
          text-[1.1rem] 
          lg:text-[clamp(0.9rem,1.3vw,1.3rem)] 
          relative z-10 
          transition-all ease-in-out duration-[550ms] 
          group-hover:-translate-x-5
        `}
      >
        {buttonName}
      </h3>

      {/* Gradient Circle */}
      <div
        className={`
          w-[20px] h-[20px] 
          md:w-[22px] md:h-[22px] 
          rounded-full mt-[3px] md:mt-0 lg:mt-0 
          overflow-hidden transition-transform duration-[800ms] ease-in-out
          group-hover:scale-[40] group-hover:translate-x-[0.35rem]
          lg:w-[30px] lg:h-[30px]
        `}
      >
        
        <SvgDisplay index={index} />

      </div>
    </div>
  );
}
