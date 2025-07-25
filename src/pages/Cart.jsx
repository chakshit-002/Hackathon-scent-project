// import React, { useEffect, useState } from "react";

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
//     setCartItems(storedCart);
//   }, []);

//   const updateCart = (items) => {
//     setCartItems(items);
//     localStorage.setItem("cartItems", JSON.stringify(items));
//   };

//   const increaseQty = (id) => {
//     const updatedCart = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     updateCart(updatedCart);
//   };

//   const decreaseQty = (id) => {
//     const updatedCart = cartItems
//       .map(item =>
//         item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//       )
//       .filter(item => item.quantity > 0);
//     updateCart(updatedCart);
//   };

//   const removeFromCart = (id) => {
//     const updatedCart = cartItems.filter(item => item.id !== id);
//     updateCart(updatedCart);
//   };

//   if (cartItems.length === 0) {
//     return <div className="p-4 text-center text-xl">🛒 Your cart is empty.</div>;
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cartItems.map((item) => (
//           <div key={item.id} className="p-4 border rounded-lg shadow">
//             <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded" />
//             <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
//             <p className="text-gray-600 mt-1">{item.description}</p>
//             <p className="text-black font-medium mt-2">${item.price}</p>

//             {/* Quantity Controls */}
//             <div className="mt-4 flex items-center gap-3">
//               <button
//                 onClick={() => decreaseQty(item.id)}
//                 className="px-3 py-1 bg-gray-200 rounded text-xl"
//               >
//                 −
//               </button>
//               <span className="text-lg font-bold">{item.quantity}</span>
//               <button
//                 onClick={() => increaseQty(item.id)}
//                 className="px-3 py-1 bg-gray-200 rounded text-xl"
//               >
//                 +
//               </button>
//             </div>

//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
// import bgSpace from "../assets/images/bg.webp";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const hasScrolledToTop = useRef(false);

  // ✅ Scroll to top once on mount without triggering GSAP issues
  useLayoutEffect(() => {
    if (location.pathname === "/cart" && !hasScrolledToTop.current) {
      window.scrollTo({ top: 0, behavior: "instant" });
      hasScrolledToTop.current = true;
    }
  }, [location.pathname]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => {
      const numeric = parseFloat(item.productDet.price.replace("$", ""));
      return total + numeric * item.quantity;
    }, 0);

  const handleQuantityChange = (id, delta) => {
    let updated = cartItems.map((item) =>
      item.productDet.id === id ? { ...item, quantity: item.quantity + delta } : item
    );

    // Remove items with quantity <= 0
    updated = updated.filter((item) => item.quantity > 0);

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const filtered = cartItems.filter((item) => item.productDet.id !== id);
    setCartItems(filtered);
    localStorage.setItem("cart", JSON.stringify(filtered));
  };

  return (
    <div
    //   style={{ backgroundImage: `url(${bgSpace})` }}
      className="min-h-screen bg-contain pt-30 py-10 px-4 pb-40  bg-gradient-to-t from-[#f8f7ec] to-[#cdf0ff] font-[cinzel]"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#181817] pt-10">
        🛒 Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-xl text-gray-500">No items added!</div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6 lg:space-y-12">
          {cartItems.map((item) => (
            <div
              key={item.productDet.id}
              className="flex items-center justify-between overflow-x-hidden bg-[#222] px-1 py-2 min-[400px]:px-2 sm:p-4 lg:py-8 shadow rounded-lg"
            >
              <img
                src={item.productDet.img}
                alt={item.productDet.title}
                className="w-16 h-16 object-contain lg:w-24 lg:h-24"
              />
              <div className="flex-1 px-4">
                <h2 className="text-lg font-semibold text-white lg:text-2xl">
                  {item.productDet.title}
                </h2>
                <p className="text-sm text-gray-400 lg:text-lg">{item.productDet.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.productDet.id, -1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <span className="text-white">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.productDet.id, 1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.productDet.id)}
                className="ml-4 text-red-700"
              >
                ❌
              </button>
            </div>
          ))}
          <div className="text-center text-xl md:text-2xl font-bold text-white bg-[#112] py-4 rounded-xl">
            Total: ${getTotalPrice().toFixed(2)}
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400  text-white rounded-full"
        >
          ⬅ Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;