import React from "react";
import LevelSlider from "../Common/LevelSlider";
import { Link } from "react-router-dom";

const Draftcard = ({ content, type }) => {
  return (
    <div>
      <div className='relative bg-white flex justify-between group overflow-hidden rounded-md shadow-md'>
        <div className='flex w-5/12'>
          <img
            className='w-36 h-36 object-cover'
            src={content.image}
            alt={content.title}
          />
          <div className='flex flex-col justify-between p-4'>
            <h1 className='text-base font-bold'>{content.title}</h1>
            <div className='flex items-center gap-4'>
              <p className='font-semibold text-sm capitalize rounded bg-primary text-white px-2'>
                {content.status}
              </p>
              <p className='text-sm'>{content.privacy}</p>
            </div>
          </div>
        </div>

        <div className='w-7/12 sm:flex hidden  flex-col justify-center  px-4'>
          <h2 className='text-base font-bold'>Your Completion</h2>
          <LevelSlider bg='lightgray' level={content.completion} />
        </div>

        <div className='absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity'></div>

        <Link
          to={`${
            type === "book"
              ? "/book/202020/intended-audience"
              : "/course/202020/manage/goals"
          }`}
        >
          <div className='absolute inset-0 flex items-center justify-center cursor-pointer'>
            <p className='text-primary text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity'>
              Edit / Manage
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Draftcard;
