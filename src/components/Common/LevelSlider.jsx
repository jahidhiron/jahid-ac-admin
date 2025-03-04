import React from "react";

const LevelSlider = ({ level, bg }) => {
  return (
    <div
      className='w-full   rounded-full'
      style={{
        background: `${bg ? bg : "transparent"}`,
        height: `${bg ? "12px" : "6px"}`,
      }}
    >
      <div
        className=' bg-red-500 rounded-full'
        style={{ width: `${level}%`, height: `${bg ? "12px" : "6px"}` }}
      ></div>
    </div>
  );
};

export default LevelSlider;
