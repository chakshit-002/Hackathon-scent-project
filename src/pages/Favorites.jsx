// import React, { useEffect, useState } from "react";
// import ProductCard from "../components/productsSection/ProductCard"; // adjust path as needed

// const Favorites = () => {
//     const [favorites, setFavorites] = useState([]);

//     // Load favorites from localStorage on mount
//     useEffect(() => {
//         const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//         setFavorites(savedFavorites);
//     }, []);

//     // Remove item from favorites
//     const removeFromFavorites = (productId) => {
//         const updatedFavorites = favorites.filter(product => product.id !== productId);
//         setFavorites(updatedFavorites);
//         localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//     };

//     return (
//         <section className="min-h-screen py-10 px-4 bg-gray-50">
//             <h1 className="text-3xl font-bold mb-6 text-center font-[cinzel]">Your Favorites</h1>

//             {favorites.length === 0 ? (
//                 <p className="text-center text-gray-500">No favorites added yet.</p>
//             ) : (
//                 <div className="flex flex-wrap justify-center gap-6">
//                     {favorites.map((product, index) => (
//                         <div key={product.id} className="relative">
//                             {/* Product Card */}
//                             <ProductCard productDet={product} index={index} />

//                             {/* Remove button */}
//                             <button
//                                 onClick={() => removeFromFavorites(product.id)}
//                                 className="absolute top-2 right-2 bg-white border border-gray-300 text-red-500 px-2 py-1 rounded hover:bg-red-100 text-sm"
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </section>
//     );
// };

// export default Favorites;



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
                            {/* <ProductCard
                                productDet={product}
                                index={index}
                                cardClass="border border-pink-300"
                            /> */}
                            <ProductCard
                                productDet={product}
                                index={0}
                                isInitiallyFavorited={true} // because you're in the favorites page
                                onFavoriteToggle={(newStatus) => {
                                    if (!newStatus) removeFromFavorites(product.id);
                                }}
                            />

                            {/* <button
                                onClick={() => removeFromFavorites(product.id)}
                                className="absolute top-2 right-2 bg-white border border-gray-300 text-red-500 px-2 py-1 rounded hover:bg-red-100 text-sm"
                            >
                                Remove
                            </button> */}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favorites;
