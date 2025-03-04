import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookHeader = ({ drawerOpened, setDrawerOpened }) => {
  return (
    <div className='shadow-sm sm:pr-5 px-4 sm:px-0  bg-white h-[70px] flex justify-between items-center'>
      <div className='flex gap-5 items-center'>
        <button
          className='sm:hidden block'
          onClick={() => setDrawerOpened(true)}
        >
          <FaBars className='text-2xl' />
        </button>
        <h1 className='font-bold text-xl'>Book Title</h1>
      </div>
      <div className='flex gap-3 items-center'>
        {/* <Link to={"/course/202020/manage/settings"}>
          {" "}
          <IoSettingsSharp className='text-2xl' />
        </Link> */}
      </div>
    </div>
  );
};

export default BookHeader;
