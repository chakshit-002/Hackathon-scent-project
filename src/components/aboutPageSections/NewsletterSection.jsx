


import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import Newsletterimg1 from '../../assets/webpImagesPerfume/Newsletterimg1.webp'
import bgNewsletter from '../../assets/webpImagesPerfume/bgNewsletter.webp'
const NewsletterSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [headingRef.current, inputRef.current, buttonRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.18,
        delay: 0.35,
      }
    );
  }, []);

  const onSubmit = (data) => {
    alert("Thank you for joining!");
    reset();
  };

  return (
  
    <section
      ref={containerRef}
      className="relative font-[cinzel] py-12 sm:py-16 px-4 sm:px-6 md:px-20 rounded-3xl shadow-lg flex items-center justify-center my-10 sm:my-12 mx-auto w-full max-w-[90%] sm:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl overflow-hidden"
      style={{
        backgroundImage: `url(${bgNewsletter})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/60 pointer-events-none rounded-3xl" />

      {/* Decorative perfume image (hidden on small screens) */}
      <div className="absolute top-4 left-0 pointer-events-none hidden md:block z-1">
        <img src={Newsletterimg1} alt="Decorative Perfume" className="w-20 h-20 object-contain" />
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="z-10 w-full flex flex-col items-center gap-5 sm:gap-6"
        noValidate
      >
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8f7ec] text-center leading-tight drop-shadow-lg"
        >
          Unlock Elegant Scents — Join Our Newsletter
        </h2>

        <p className="text-[#f8f7ec] text-center text-base sm:text-lg max-w-md drop-shadow-sm">
          Be first to discover new releases and exclusive perfume offers. A little floral magic in your inbox.
        </p>

        {/* m....... */}
        <div className="w-full max-w-md flex flex-col gap-3 sm:gap-0 sm:hidden">
          {/* Input Field */}
          <input
            ref={inputRef}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                message: "Enter a valid email address",
              },
            })}
            type="email"
            autoComplete="email"
            aria-label="Email Address"
            placeholder="Enter your email"
            className="w-full px-5 py-3 text-base text-gray-800 placeholder-gray-500 bg-white rounded-full outline-none focus:ring-2 focus:ring-[#db9b71]"
          />

          {/* Mobile Button */}
          <button
            type="submit"
            className="block sm:hidden w-full px-5 py-3 bg-[#222] hover:bg-[#444] text-white text-base font-medium rounded-full transition"
          >
            Subscribe
          </button>


        </div>
        <div className=" items-center w-full max-w-md rounded-full shadow bg-white hidden sm:flex">
          <input
            ref={inputRef}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                message: "Enter a valid email address",
              },
            })}
            aria-label="Email Address"
            type="email"
            autoComplete="email"
            className="flex-1 bg-transparent rounded-full px-6 py-4 outline-none text-gray-800 placeholder-gray-500 border-0 shadow-none focus:ring-0"
            placeholder="Enter your email"
          />
          <button
            ref={buttonRef}
            type="submit"
            className="rounded-full bg-[#222] hover:bg-[#444] px-8 py-4 text-white font-medium text-base shadow transition focus:outline-none"
          >
            Subscribe
          </button>
        </div>
        {errors.email && (
          <span className="text-sm text-[#f8f7ec] mt-1">{errors.email.message}</span>
        )}

        <div className="text-sm text-[#f8f7ec] opacity-95 text-center drop-shadow-sm">
          We respect your privacy. Unsubscribe anytime.
        </div>
      </form>
    </section>

  );
};

export default NewsletterSection;
