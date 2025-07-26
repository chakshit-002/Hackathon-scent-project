import React, { useState } from "react";

function Star({ filled, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill={filled ? "#fbbf24" : "none"}
      stroke="#fbbf24"
      strokeWidth="1.5"
      className="w-6 h-6 cursor-pointer transition"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <polygon
        points="10,2 12.59,7.36 18.51,8.09 14,12.05 15.18,17.92 10,14.77 4.82,17.92 6,12.05 1.49,8.09 7.41,7.36"
      />
    </svg>
  );
}

// Usage: <StarRating rating={4} setRating={setRating} />
export default function StarRating({ rating, setRating, max = 5, className = "", readOnly = false }) {
  const [hover, setHover] = useState(null);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          onClick={() => !readOnly && setRating(i + 1)}
          onMouseEnter={() => !readOnly && setHover(i + 1)}
          onMouseLeave={() => !readOnly && setHover(null)}
        >
          <Star filled={hover ? i < hover : i < rating} />
        </span>
      ))}
    </div>
  );
}


