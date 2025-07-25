import React from 'react'
import { HyperText } from './HyperText'
import PixelImage from './PixelImage'

import daviBeck from '../../assets/webpImagesPerfume/davidBeckham1.webp'
import TimelineJourney from './TimelineJourney'
const AboutDavid = () => {
    return (
        <div className=' flex flex-col items-center   text-[#181817]  gap-19  sm:gap-26 md:gap-30  lg:gap-38  xl:gap-48'>

            <div className='relative px-3 min-[400px]:px-4 sm:px-10  font-mono font-[500] mt-20  flex flex-col items-center gap-10  sm:gap-17 sm:mt-27 md:w-fit lg:mt-35 lg:gap-24 max-w-[2000px] xl:mt-45 xl:gap-30 '>
                <div className='absolute -top-8  tracking-wide text-sm sm:text-lg'>ABOUT US</div>
                <div className='flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12 '>
                    <h1 className='text-center max-[333px]:text-md text-2xl sm:text-3xl md:text-[33px] lg:text-[45px] xl:text-5xl'>
                        Welcome to the World of <span className='text-red-400'>David Beckham</span> <span className='md:block text-red-400'>Signature Scents</span></h1>
                    <p className=' text-center w-fit sm:w-[550px] sm:text-xl md:w-[650px] lg:w-[900px] lg:text-2xl '>
                        Driven by a passion for excellence and style, my journey into fragrance adds a new chapter to my story. Each scent in my collection is inspired by personal triumphs, heritage, and a commitment to elegance and authenticity.
                    </p>
                </div>
                <div className='flex flex-col gap-6 items-center sm:gap-8 lg:gap-15'>
                    <div className='text-center  font-[cinzel] font-[500] max-[320px]:text-[25px] text-[29px] min-[400px]:text-[35px] sm:text-[45px] md:text-[55px] lg:text-[75px] xl:text-[100px] md:tracking-wider'>
                        <HyperText className="text-red-400 " duration={1500} animateOnHover>DAVID BECKHAM</HyperText>
                    </div>
                    <div className='flex flex-col items-center md:justify-between gap-5 sm:gap-8 md:flex-row lg:gap-12 xl:gap-16'>
                        <PixelImage src={daviBeck} cardClass=" max-[400px]:w-[260px] max-[400px]:h-[260px] w-72 h-72  md:w-55 md:h-55 lg:w-80 lg:h-80 xl:h-100 xl:w-100" />
                        <p className='w-fit  text-center md:w-[450px] lg:w-[500px] lg:text-[18px] xl:w-[680px] xl:text-[22px]'>
                            ~ From my earliest days in football to achieving global recognition, I’ve learned that true confidence comes from authenticity. My passion for fragrance began as a personal search for scents that resonated with my own identity—scents that evoke memories, inspire new chapters, and allow everyone to express their spirit. Each creation is not just a product, but a story and a feeling I want to share with the world.
                        </p>

                    </div>
                </div>

            </div>
            <div className='w-full bg-amber-50 overflow-hidden font-mono font-[500] max-w-[2000px] '>
                <TimelineJourney />
            </div>
        </div>
    )
}

export default AboutDavid