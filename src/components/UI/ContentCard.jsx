import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Common/Ratings";

const ContentCard = ({ content, type }) => {
  return (
    <div>
      <div className='bg-white flex justify-between overflow-hidden rounded-md shadow-md'>
        <div className='w-5/12'>
          <div className='relative group'>
            <div className='flex'>
              <img
                className='w-36 h-36 object-cover'
                src={content.image}
                alt={content.title}
              />
              <div className='flex flex-col justify-between p-4'>
                <h1 className='text-base font-bold'>{content.title}</h1>
                <p className='text-sm font-bold text-primary'>
                  ${content.price}
                </p>
                <div className='flex items-center gap-4'>
                  <p
                    className={`font-semibold w-[80px] text-sm capitalize rounded px-2 ${
                      content?.status === "published"
                        ? "bg-green-600 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {content.status}
                  </p>

                  <p className='text-sm'>{content.privacy}</p>
                </div>
              </div>
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

        <div className='w-7/12 sm:flex hidden items-center justify-between px-4'>
          <div className='w-4/12'>
            <div className='relative group px-3'>
              <div>
                <h1 className='text-xl mb-2 font-bold'>${content?.earning}</h1>
                <p>Earning This Month</p>
              </div>
              <div className='absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity'></div>
              <Link to={"/earning"}>
                <div className='absolute inset-0 flex items-center justify-center cursor-pointer'>
                  <p className='text-primary text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity'>
                    View Earnings
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className='w-4/12'>
            <div className='relative group px-3'>
              <div>
                <h1 className='text-xl mb-2 font-bold'>
                  {type == "book" ? content?.soldCount : content?.studentCount}
                </h1>
                <p> {type == "book" ? "Total Sold" : "Students"}</p>
              </div>
              <div className='absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity'></div>
              <Link to={"/students"}>
                <div className='absolute inset-0 flex items-center justify-center cursor-pointer'>
                  <p className='text-primary text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity'>
                    View {type == "book" ? "Total Sold" : "Students"}
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className='w-4/12'>
            <div className='relative group px-3'>
              <div>
                <h1 className='flex items-center gap-3 text-xl font-bold mb-2'>
                  {content?.rating}
                  <Rating rating={content?.rating} className='text-xl' />
                </h1>
                <p>Rating</p>
              </div>
              <div className='absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity'></div>
              <Link to={"/ratings"}>
                <div className='absolute inset-0 flex items-center justify-center cursor-pointer'>
                  <p className='text-primary text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity'>
                    View Ratings
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
