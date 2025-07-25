import React from "react";

const SingleProductCard = ({productDet}) => {
  return (
    <div className="border rounded-md p-4 min-h-[24rem] max-w-[450px] mx-auto bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="flex justify-center">
        <img
          src={productDet.img}
          alt="Amber Wood Perfume"
          className="w-full h-full object-contain"  // Increased from h-48 to h-64
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold truncate">
          {productDet.title}
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-xl font-bold text-gray-900">{productDet.price}</span>
        </div>
      </div>
     
    </div>
  );
};

export default SingleProductCard;
