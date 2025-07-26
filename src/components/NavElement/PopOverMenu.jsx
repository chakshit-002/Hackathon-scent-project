

import React, { useCallback, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { isAuthenticated, logout } from '../../utils/auth';
import { toast } from 'react-toastify';
import { FiLogOut, FiUser } from "react-icons/fi";

const PopOverMenu = () => {
    const menuRef = useRef(null);
    const childRefs = useRef([]);
    const letterRefs = useRef([]);
    const loginRef = useRef(null);

    const navigate = useNavigate();
    // Wave animation on hover
    const handleMouseEnter = (index) => {
        const letterSpans = letterRefs.current[index]; // Array of span refs for this NavLink
        if (!letterSpans) return;

        // Animate wave - upward out
        gsap.fromTo(letterSpans,
            { y: 0 },
            {
                y: -40,
                opacity: 0,
                stagger: 0.05,
                duration: 0.3,
                ease: "power1.in",
                onComplete: () => {
                    // Reset and animate in from below
                    gsap.set(letterSpans, { y: 40, opacity: 0 });
                    gsap.to(letterSpans, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.05,
                        duration: 0.4,
                        ease: "power2.out",
                    });
                }
            });
    };

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(menuRef.current,
            {
                y: 0,
                scaleY: 1,
                transformOrigin: "top center",
                opacity: 0,
            },
            {
                duration: 0.6,
                scaleY: 1.08,
                opacity: 1,
                ease: "power3.out",
            });
        tl.to(menuRef.current,
            {
                duration: 0.6,
                scaleY: 1,
                opacity: 1,
                ease: "power3.out",
            });

        tl.fromTo(
            [...childRefs.current, loginRef.current],
            {
                y: 30,
                opacity: 0,
                scale: 1,
            },
            {
                y: 0,
                opacity: 1,
                scale: 1.04,
                duration: 0.5,
                stagger: 0.08,
                ease: "power3.out"
            },
            '-=0.3'
        );



    }, []);



    const navItems = ['Home', 'About', 'Products', 'Favorites', 'Cart'];
    const routeMap = {
        Home: '/',
        About: '/about',
        Products: '/products',
        Favorites: '/fav',
        Cart: '/cart',
    };


    const handleLogin = useCallback(() => {
        navigate("/login");
    }, [navigate]);

    const handleLogout = useCallback(() => {
        logout();
        toast.success("Logged out successfully!");
        navigate("/login");
    }, [navigate]);


    return (
        <div
            ref={menuRef}
            className='absolute z-50 bg-[#2d5a36] text-[#f8f7ec] w-full h-[630px] rounded-[30px] px-12 py-10 sm:w-[65%] sm:top-4 sm:right-4 md:h-[720px] md:px-15 lg:top-4 lg:right-5 lg:w-[600px] lg:h-[780px] xl:w-[700px] xl:h-[850px]'
        >
            <div className=' flex flex-col gap-3 text-3xl mt-14 md:mt-20 md:text-4xl md:gap-4 lg:gap-5 xl:text-5xl lg:mt-25'>
                {navItems.map((item, idx) => (
                    <NavLink
                        key={idx}
                        to={routeMap[item]}
                        ref={(el) => childRefs.current[idx] = el}
                        className='overflow-hidden h-[1.2em] w-fit'
                        onMouseEnter={() => handleMouseEnter(idx)}
                    >
                        <span className="inline-block">
                            {[...item].map((char, charIdx) => (
                                <span
                                    key={charIdx}
                                    className='inline-block'
                                    ref={el => {
                                        if (!letterRefs.current[idx]) letterRefs.current[idx] = [];
                                        letterRefs.current[idx][charIdx] = el;
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </span>
                    </NavLink>
                ))}

            </div>

            <div className='login-user mt-4 w-fit rounded-full flex items-center justify-center px-3 py-3 text-2xl border-1' ref={loginRef}>
                {isAuthenticated() ? (
                    <FiLogOut
                        onClick={handleLogout}
                        className="cursor-pointer hover:text-gray-600"
                        aria-label="Logout"
                    />
                ) : (
                    <FiUser
                        onClick={handleLogin}
                        className="cursor-pointer hover:text-gray-600"
                        aria-label="Login"
                    />
                )}
            </div>
            {/* Social + Contact Info */}
            <div className='w-full mt-5'>
                <div className='flex gap-3 w-full'>
                    {["instagram-line", "twitter-x-line", "facebook-fill"].map((icon, idx) => (
                        <span
                            key={idx}
                            ref={el => childRefs.current[6 + idx] = el}
                            className='w-fit rounded-full flex items-center justify-center px-3 py-2 bg-white text-[#181817]'
                        >
                            <a href="https://instagram.com/veritte.royal" target="_blank" rel="noopener noreferrer">
                                <i className={`ri-${icon} text-2xl`}></i>
                            </a>
                        </span>
                    ))}
                </div>

                <div
                    ref={el => childRefs.current[9] = el}
                    className='mt-5 flex flex-col md:mt-6 lg:mt-7'
                >
                    <a href="tel:+919876543210" className='mr-2'>
                        <i className="ri-phone-line text-xl"></i> +919876543210
                    </a>
                    <a href="mailto:hello@example.com">
                        <i className="ri-mail-line"></i> David@BeckhamScents.com
                    </a>
                </div>

                <div
                    ref={el => childRefs.current[10] = el}
                    className='mt-5 md:mt-6 lg:mt-7'
                >
                    Bali, Rajasthan 306701, India
                </div>
            </div>
        </div>
    );
};

export default PopOverMenu;






