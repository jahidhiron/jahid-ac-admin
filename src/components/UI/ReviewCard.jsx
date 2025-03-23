import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const ReviewCard = ({ course, review }) => {
  return (
    <div className='border-t  mt-6 p-4 shadow-sm bg-white w-full p-5 mx-auto'>
      <div className='border-b pb-3 mb-3 flex items-center gap-3'>
        <img
          src={course.thumbnail}
          alt={course.title}
          className='w-16 h-16 rounded-md object-cover'
        />
        <div>
          <h3 className='text-lg font-semibold text-blue-600'>
            {course.title}
          </h3>
          <p className='text-gray-500 text-sm'>{course.rating} Course Rating</p>
          <a href={course.link} className='text-blue-500 text-sm'>
            View Course Summary &gt;
          </a>
        </div>
      </div>
      <div className='flex items-center gap-3 mb-3'>
        <div className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-lg'>
          {review.reviewerInitials}
        </div>
        <div>
          <p className='text-sm font-semibold'>{review.reviewerName}</p>
          <p className='text-xs text-gray-500'>Uploaded {review.timeAgo}</p>
        </div>
      </div>
      <div className='flex items-center gap-1 text-yellow-500 mb-3'>
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
      </div>
      <div className='grid grid-cols-3 gap-2 text-sm text-gray-700 mb-4'>
        {review.highlights.map((highlight, i) => (
          <div key={i} className='flex items-center gap-2'>
            <FaCheckCircle className='text-green-600' />
            {highlight}
          </div>
        ))}
      </div>
      <button className='bg-[#DC2626] text-white px-4 py-2 rounded-md text-sm font-medium'>
        Respond
      </button>
    </div>
  );
};

export default ReviewCard;
