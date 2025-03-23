import React from "react";

const TraffiConversionCourseTable = ({ courseData }) => {
  return (
    <div className='w-full  mx-auto bg-white rounded-lg'>
      <table className='w-full border-2 text-sm border-collapse'>
        <thead>
          <tr className='border-b'>
            <th className='text-left  text-gray-600 font-semibold p-3'>
              Course
            </th>
            <th className='text-left text-gray-600 font-semibold p-3'>
              Landing page visitors
            </th>
            <th className='text-left text-gray-600 font-semibold p-3'>
              Conversion rate
            </th>
            <th className='p-3'></th>
          </tr>
        </thead>
        <tbody>
          {courseData.map((course, index) => (
            <tr key={index} className='border-b last:border-0'>
              <td className='p-3'>{course.course}</td>
              <td className='p-3'>{course.visitors}</td>
              <td className='p-3'>{course.conversion}</td>
              <td className='p-3 text-blue-600 cursor-pointer hover:underline'>
                See details &gt;
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TraffiConversionCourseTable;
