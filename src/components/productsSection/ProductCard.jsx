import React, { useCallback, useEffect } from 'react'
import { LensImage } from '../LensImage'
// import imgLens from '../../assets/images/perfume1.jpg'
import HoverBtn from '../HoverBtn'
import { useState } from 'react'; // Make sure this is at the top with other imports
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const ProductCard = ({ productDet, index, cardClass = "", isInitiallyFavorited = false, onFavoriteToggle }) => {
    const [isFavorited, setIsFavorited] = useState(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        return favorites.some((item) => item.id === productDet.id);
    });

    const navigate = useNavigate();

 

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        let updated;

        if (isFavorited) {
            // Remove
            updated = favorites.filter(p => p.id !== productDet.id);
        } else {
            // Add
            const newItem = {
                id: productDet.id,
                title: productDet.title,
                price: productDet.price,
                img: productDet.img,
            };
            updated = [...favorites, newItem];
        }

        localStorage.setItem("favorites", JSON.stringify(updated));
        const newStatus = !isFavorited;
        setIsFavorited(newStatus);

        // Notify parent (Favorites page)
        if (onFavoriteToggle) {
            onFavoriteToggle(newStatus);
        }
    };



    const HandleClick = useCallback(() => {
        navigate("/productDetails", {
            state: { productDet },
        });
    }, [navigate, productDet]);




    const addToCart = useCallback(() => {
        const cart = localStorage.getItem("cart");
        let storedCart = cart ? JSON.parse(cart) : [];
        const existingItem = storedCart.find((item) => item.productDet.id === productDet.id);

        let updatedCart;
        if (existingItem) {
            updatedCart = storedCart.map((item) =>
                item.productDet.id ===  productDet.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedCart = [
                ...storedCart,
                {productDet, quantity: 1 },
            ];
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        toast.success("Product added to cart!");
    }, [productDet]);

    return (
        <div className={`max-[373px]:w-[230px] max-[373px]:p-4 max-[373px]:pb-6 max-[373px]:gap-5 w-[300px] min-[480px]:w-[350px] px-2 pb-8 pt-2 border-1 flex flex-col justify-around items-center gap-4  md:gap-5 md:w-[300px] md:h-[610px] xl:w-[350px] xl:h-[660px] 2xl:w-[400px] 2xl:h-[730px] font-[cinzel] ${cardClass} `}>
            <div className='overflow-hidden  w-fit'>
                <LensImage>
                    <img src={productDet.img} alt="zoomable image" className='max-[333px]:w-[200px] w-full h-full' />
                </LensImage>
            </div>
            <h2 onClick={HandleClick} className='cursor-pointer font-bold max-[400px]:text-[4.5vw] text-center text-xl'>
                {productDet.title}
            </h2>


            <div className='flex w-[100%] items-center justify-between min-[400px]:px-4'>
                <h3 className='font-bold max-[400px]:text-[22px] text-[25px]'>
                    Rs. {productDet.price}
                </h3>
                {/* Favorites */}
                {/* <div className='border px-1 rounded-[5px] md:px-2'><i className="ri-heart-line text-[32px]"></i></div> */}
                <div
                    className='border px-1 rounded-[5px] md:px-2 cursor-pointer'
                    onClick={toggleFavorite}
                    title={isFavorited ? "Remove from Favorites" : "Add to Favorites"}
                >
                    <i className={`text-[32px] ${isFavorited ? "ri-heart-fill text-red-500" : "ri-heart-line"}`}></i>
                </div>

            </div>


            {/* <HoverBtn buttonName={"Add To Cart"} cardClass=" min-[480px]:px-5  min-[480px]:py-4 lg:px-8 lg:py-5 lg:rounded-none" index={index} /> */}
            <HoverBtn
                buttonName="Add to Cart"
                index={index}
                cardClass=" min-[480px]:px-5  min-[480px]:py-4 lg:px-8 lg:py-5 lg:rounded-none"
                onClick={addToCart}
            />


        </div>
    )
}

export default ProductCard