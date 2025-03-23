import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const StudentSlider = ({ students }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleSlides = 5;

  const nextSlide = () => {
    if (startIndex + 1 < students.length - visibleSlides + 1) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className='relative mt-5 w-full max-w-5xl mx-auto'>
      <div className='flex items-center justify-between'>
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className={`text-4xl text-primary transition ${
            startIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <IoIosArrowDropleftCircle />
        </button>

        <div className='overflow-hidden w-full'>
          <motion.div
            className='flex space-x-0'
            initial={{ x: 0 }}
            animate={{ x: `-${startIndex * (100 / visibleSlides)}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {students.map((student, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-1/5 bg-white shadow-lg rounded-lg p-5 text-center border border-gray-200 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl
                ${index === students.length - 1 ? "" : ""}`}
              >
                {/* Avatar */}
                <div className='w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center text-xl font-bold text-white shadow-md'>
                  {student.initials}
                </div>

                {/* Name */}
                <h3 className='mt-3 text-lg font-semibold text-gray-900'>
                  {student.name}
                </h3>

                {/* Country */}
                <p className='text-gray-500 text-sm'>{student.country}</p>

                {/* Course */}
                <p className='text-gray-600 text-xs mt-1 px-2 py-1 bg-gray-100 rounded-md'>
                  {student.course}
                </p>

                {/* Enrollment Date */}
                <p className='text-gray-400 text-xs mt-4'>
                  Enrolled:{" "}
                  <span className='font-medium'>{student.enrolled}</span>
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={startIndex + visibleSlides >= students.length}
          className={`text-4xl text-primary transition ${
            startIndex + visibleSlides >= students.length
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};

export default StudentSlider;
