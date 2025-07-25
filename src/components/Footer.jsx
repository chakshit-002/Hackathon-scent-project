import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full h-auto bg-gradient-to-b from-[#f8f7ec] to-[#cdf0ff] text-[#181817] overflow-hidden mx-auto border-t ">
      <div className="footerContent p-4 md:p-10 space-y-10 ">
        {/* Logo */}
        <div className="font-[kenyan] font-semibold text-center mt-10 select-none">
          <h2 className="  text-[28px] min-[338px]:tracking-widest min-[400px]:text-[35px] sm:text-[55px] md:text-[67px] lg:text-[90px] xl:text-[115px] ">
            DAVID BECKHAM
          </h2>
          <div className='flex justify-center max-[400px]:text-xs min-[400px]:text-sm min-[400px]:-mt-1 sm:text-[18px] sm:-mt-3  md:text-[20px] md:-mt-5 lg:-mt-7 xl:text-[22px] xl:-mt-10 uppercase  tracking-[3px]'>
            <div className="max-[338px]:w-[238px] max-[400px]:w-[270px]  min-[400px]:w-[340px] sm:w-[535px] md:w-[650px] lg:w-[880px] xl:w-[1120px] flex justify-between items-center ">
              <h4>SIGNATURE</h4>
              <h4>SCENTS</h4>
              {/* bg-gray-400 max-[400px]:px-5 min-[340px]:w-[310px]*/}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className='flex  justify-center mt-15 lg:mt-25 '>
          <div className="flex flex-wrap gap-6 sm:gap-y-10 font-[cinzel] text-sm lg:text-[20px] text-center sm:text-left  sm:w-[540px] md:w-[650px] lg:w-full max-w-[1600px] sm:justify-between lg:justify-around">
            {/* Column 1 */}
            <div className="w-full sm:w-1/4 lg:w-fit space-y-2 flex flex-col">
              <div className='Home'>
                <NavLink
                  to="/"
                  className="w-fit relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[1px]  after:h-[1.5px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </NavLink>
              </div>
              <div className='About'>
                <NavLink
                  to="/about"
                  className="w-fit relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[1px]  after:h-[1.5px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </NavLink>
              </div>
              <div className='Products'>
                <NavLink
                  to="/products"
                  className="w-fit relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[1px]  after:h-[1.1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  Products
                </NavLink>
              </div>
              <div className='Contact'>
                <NavLink
                  to="/contact"
                  className="w-fit relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[1px]  after:h-[1.5px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </NavLink>
              </div>
            </div>

            {/* Column 2 */}
            <div className="w-full sm:w-1/4 lg:w-fit space-y-2 flex flex-col">
              <div className='TC'>
                <NavLink
                  to="/termsConditions"
                  className="w-fit relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[1px]  after:h-[1.5px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  Terms & Conditions
                </NavLink>
              </div>
              <div className='PP'>
                <NavLink
                  to="/privacyPolicy"
                  className="w-fit relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[1px]  after:h-[1.5px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  Privacy Policy
                </NavLink>
              </div>
              <div className='SP'>
                <NavLink
                  to="/shippingPolicy"
                  className="w-fit relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[1px]  after:h-[1.1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  Shipping Policy
                </NavLink>
              </div>
              <div className='FAQ'>
                <NavLink
                  to="/faqs"
                  className="w-fit relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[1px]  after:h-[1.5px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  FAQ's
                </NavLink>
              </div>
            </div>

            {/* Column 3 */}
            <div className="w-full sm:w-1/4 lg:w-fit space-y-2">
              <span className="font-semibold">Follow Us</span>
              <div className="flex justify-center sm:justify-start mt-1 space-x-4 text-xl xl:text-3xl ">
                <a href="https://instagram.com/veritte.royal" target="_blank">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://instagram.com/veritte.royal" target="_blank">
                  <i className="ri-twitter-x-line"></i>
                </a>
                <a href="https://instagram.com/veritte.royal" target="_blank">
                  <i className="ri-facebook-fill"></i>
                </a>
              </div>
            </div>
             {/* Column 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 space-y-2">
            <p className="font-semibold">David Beckham Signature Scents</p>
            <span className='block sm:inline'>Unit No. 27, Aroma Plaza,</span>
            <span className='block sm:inline'>Garden Avenue, Near Rosewood Mall, </span>
            <span className='block sm:inline'>Sector 15, Jaipur, Rajasthan - 302001, India</span>
            <div><a href="tel:+919876543210" className="inline-block mt-2 hover:underline">
              <i className="ri-phone-line text-xl mr-2"></i> +91 9876543210
            </a></div>
          </div>
          </div>

        </div>

   

        {/* Email */}
        <div className="font-[cinzel] text-center max-[640px]:text-lg sm:text-2xl lg:text-5xl lg:mt-20 lg:mb-20 ">
          <a href="mailto:David@BeckhamPerfumes.com" className="w-fit relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[6px]  after:h-[1.5px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full" >

            David@BeckhamPerfumes.com
          </a>
        </div>


        {/* Copyright */}
        <div className="font-[cinzel]  text-center text-xs md:text-sm  my-5 lg:text-lg">
          © {new Date().getFullYear()} David Beckham Signature Scents. All Rights Reserved.
        </div>
      </div>
    </div>

  )
}

export default Footer



