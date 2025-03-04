import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating, totalStars = 5, className = "" }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const hasHalfStar = decimal >= 0.3 && decimal <= 0.7;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className='text-yellow-500' />);
    } else if (hasHalfStar && i === fullStars + 1) {
      stars.push(<FaStarHalfAlt key={i} className='text-yellow-500' />);
    } else {
      stars.push(<FaRegStar key={i} className='text-gray-400' />);
    }
  }

  return <div className={`flex items-center ${className}`}>{stars}</div>;
};

export default Rating;
