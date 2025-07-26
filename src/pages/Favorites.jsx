


import React, { useEffect, useState } from "react";
import ProductCard from "../components/productsSection/ProductCard";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    const removeFromFavorites = (productId) => {
        const updatedFavorites = favorites.filter(product => product.id !== productId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <section className="min-h-screen py-10 px-4 bg-gradient-to-t from-[#f8f7ec] to-[#cdf0ff]">
            <h1 className="text-3xl font-bold mb-6 text-center font-[cinzel] pt-40 md:text-5xl">Your Favorites</h1>

            {favorites.length === 0 ? (
                <p className="text-center text-gray-500 md:text-3xl">No favorites added yet.</p>
            ) : (
                <div className="flex flex-wrap justify-center gap-6">
                    {favorites.map((product, index) => (
                        <div key={product.id} className="relative">

                            <ProductCard
                                productDet={product}
                                index={0}
                                isInitiallyFavorited={true} // because you're in the favorites page
                                onFavoriteToggle={(newStatus) => {
                                    if (!newStatus) removeFromFavorites(product.id);
                                }}
                            />


                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favorites;
