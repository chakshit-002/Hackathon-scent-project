// FavoritesButton.js
import React from "react";

/**
 * Props:
 * - isFavorite: boolean (current favorite status)
 * - onClick: function (callback triggered on click)
 * - size: optional string/css class for icon size, e.g. 'text-[29px]'
 */
const FavoritesButton = ({ isFavorite, onClick, size = "text-[29px] lg:text-[39px]" }) => {
  return (
    <button
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      className={`rounded-full w-fit bg-white px-4 py-1 lg:px-5 lg:py-3 flex items-center justify-center cursor-pointer ${size}`}
      onClick={onClick}
      type="button"
      style={{ border: "none", background: "white" }}
    >
      {isFavorite ? (
        <i className="ri-heart-fill text-pink-600" />
      ) : (
        <i className="ri-heart-line text-pink-600" />
      )}
      <span className="sr-only">
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </span>
    </button>
  );
};

export default FavoritesButton;
