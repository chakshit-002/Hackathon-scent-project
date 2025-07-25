import React from "react";
import StarRating from "./StarRating";


function UserReview({ name, rating, review, date, avatar }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3  p-4 rounded-lg shadow-sm border transition hover:shadow-lg max-w-xl w-full">
      {/* Optional Avatar */}
      {avatar && (
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-12 h-12 rounded-full object-cover border"
        />
      )}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-pink-800">{name}</span>
          {/* Date, if provided */}
          {date && (
            <span className="text-xs text-gray-400">{date}</span>
          )}
        </div>
        <div className="my-1">
          <StarRating rating={rating} readOnly />
        </div>
        <p className="text-gray-700 text-base leading-snug">{review}</p>
      </div>
    </div>
  );
}

export default UserReview;
