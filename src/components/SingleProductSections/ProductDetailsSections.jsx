


import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { LensImage } from "../LensImage";
import HoverBtn from "../HoverBtn";
import BackButton from "../BackButton";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// const HERO_IMG =
//     "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=1200&q=80";

// // Example alternate image for hover effect
// const HOVER_IMG =
//     "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

const ProductDetailsSections = () => {
    const { state } = useLocation();
    const { productDet } = state;
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isFav = favorites.some((item) => item.id === productDet.id);
        setIsFavorited(isFav);
    }, [productDet.id]);


    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (isFavorited) {
            // Remove from favorites
            const updated = favorites.filter(p => p.id !== productDet.id);
            localStorage.setItem("favorites", JSON.stringify(updated));
        } else {
            // Add to favorites
            const newItem = {
                id: productDet.id,
                name: productDet.name,
                price: productDet.price,
                // include image or other needed info if you want
            };
            const updated = [...favorites, newItem];
            localStorage.setItem("favorites", JSON.stringify(updated));
        }

        setIsFavorited(!isFavorited);
    };


    const containerRef = useRef(null);
    const originalImgRef = useRef(null);
    const hoverImgRef = useRef(null);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
        gsap.from(".heroChild", {
            opacity: 0,
            y: 28,
            stagger: 0.17,
            delay: 0.2,
            duration: 0.9,
            ease: "power2.out",
        });
    }, []);

    // Animate image opacity on hover state change
    useEffect(() => {
        if (!hoverImgRef.current) return;

        if (isHovering && productDet.img_alt) {
            // Show hover image, hide original
            gsap.to(hoverImgRef.current, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
            });
            gsap.to(originalImgRef.current, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
            });
        } else {
            // Show original image, hide hover image
            gsap.to(hoverImgRef.current, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
            });
            gsap.to(originalImgRef.current, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
            });
        }
    }, [isHovering]);


    const addToCart = useCallback(() => {
        const cart = localStorage.getItem("cart");
        let storedCart = cart ? JSON.parse(cart) : [];
        const existingItem = storedCart.find((item) => item.productDet.id === productDet.id);

        let updatedCart;
        if (existingItem) {
            updatedCart = storedCart.map((item) =>
                item.productDet.id === productDet.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedCart = [
                ...storedCart,
                { productDet, quantity: 1 },
            ];
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        toast.success("Product added to cart!");
    }, [productDet]);

    return (
        <section
            // bg-gradient-to-b from-rose-50 via-white to-white 
            ref={containerRef}
            className="bg-[#f8f7ec] relative w-full h-auto flex flex-col md:flex-row items-center md:items-start md:justify-center md:gap-10 px-3 md:px-12 pt-10 md:pt-28 lg:pt-35 pb-12 overflow-hidden "
        >
            <div className="w-fit flex flex-col md:flex-row items-center md:items-start md:justify-center  md:gap-10 lg:gap-14 xl:gap-18 ">
                {/* Hero Image */}{/* xl:flex-1 */}
                <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className=" object-cover flex items-center justify-center mb-8 md:mb-0 w-full h-[360px] min-[450px]:h-[410px] min-[500px]:w-[450px] md:w-[400px] md:h-[500px] xl:w-[550px] xl:h-[500px] relative overflow-hidden rounded-xl shadow-lg border border-white cursor-pointer"
                >

                    {/* Original Image */}
                    <img
                        ref={originalImgRef}
                        src={productDet.img}
                        alt="product image"
                        className="object-cover w-full h-full rounded-xl absolute top-0 left-0"
                        style={{ opacity: 1, transition: "opacity 0.6s ease-out" }}
                        draggable={false}
                    />
                    {/* Hover Image */}
                    {productDet.img_alt && (
                        <img
                            ref={hoverImgRef}
                            src={productDet.img_alt}
                            alt="product image hover"
                            className="object-cover w-full h-full rounded-xl absolute top-0 left-0 pointer-events-none"
                            style={{ opacity: 0, transition: "opacity 0.6s ease-out" }}
                            draggable={false}
                        />
                    )}

                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-center md:items-start md:w-[280px] z-10  font-[cinzel] lg:w-[450px] xl:w-[530px] ">
                    {/* drop-shadow-xl */}
                    <h1 className="heroChild text-xl md:text-5xl font-800 text-stone-900 mb-4 text-center md:text-left tracking-tight 
        ">
                        {productDet.title}
                    </h1>
                    <p className="heroChild text-lg md:text-2xl text-gray-500 mb-4 text-center md:text-left italic">
                        <span className="font-bold block">Description:-</span>{productDet.description}
                    </p>
                    <div className="heroChild mb-6 text-stone-700 text-center md:text-left">
                        <span className="font-semibold">Scent Profile: </span>
                        {productDet.flavor}
                    </div>
                    <div className="heroChild mb-6 text-stone-700 text-center md:text-left"><span>Category: </span>{productDet.category}</div>
                    <div className="w-full heroChild flex flex-col gap-4 items-center min-[480px]:w-[400px] md:w-full lg:w-[380px] xl:w-[400px] ">

                        <HoverBtn buttonName={"Add To Cart"} cardClass='w-full  max-[480px]:h-15 min-[480px]:px-5  min-[480px]:py-4 lg:px-8 lg:py-5 lg:rounded-none ' index={0} onClick={addToCart} />
                        <div className="w-full flex justify-between gap-5 md:gap-7">
                            <HoverBtn buttonName={"Buy Now"} cardClass=' w-full max-[480px]:h-15 min-[480px]:px-5  min-[480px]:py-4 lg:px-8 lg:py-5 lg:rounded-none' index={1} />
                            {/* <div className="rounded-full w-fit bg-white px-4 py-1 lg:px-5 lg:py-3 flex items-center justify-center  cursor-pointer  text-[29px] lg:text-[39px]">
                                <i className="ri-heart-line"></i>
                            </div> */}
                            <div
                                className="rounded-full w-fit bg-white px-4 py-1 lg:px-5 lg:py-3 flex items-center justify-center cursor-pointer text-[29px] lg:text-[39px]"
                                onClick={toggleFavorite}
                                title={isFavorited ? "Remove from Favorites" : "Add to Favorites"}
                            >
                                <i className={`${isFavorited ? "ri-heart-fill text-red-500" : "ri-heart-line"}`}></i>
                            </div>

                        </div>
                        <div className="w-full">
                            <BackButton />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsSections;



//  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
{/* Decorative blur circle for high-end look */ }
{/* <div className="w-72 h-72 md:w-[420px] md:h-[420px] bg-rose-30 rounded-full blur-3xl opacity-100"></div> */ }
{/* </div> */ }