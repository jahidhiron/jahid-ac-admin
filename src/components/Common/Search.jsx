import { CloseButton, Input } from "@mantine/core";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ ...rest }) => {
  return (
    <div>
      <div className='relative flex items-center rounded border border-primary bg-white dark:bg-boxdark transition-colors duration-300 p-1'>
        <span className='flex items-center pl-2 text-gray-500 dark:text-gray-300 mr-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-primary'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <circle cx='11' cy='11' r='8'></circle>
            <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
          </svg>
        </span>

        <input
          id='search'
          type='text'
          {...rest}
          className={`flex-1 bg-transparent border-none outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-primary px-2 ${rest.className}`}
          value={rest?.search}
          onChange={(e) => rest?.setSearch(e.target.value)}
        />

        <button
          id='clear-button'
          aria-label='Clear'
          onClick={() => rest?.setSearch("")}
          className='text-primary dark:text-primary pr-2 hover:text-gray-700 dark:hover:text-gray-400'
          style={{ display: rest?.search ? undefined : "none" }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Search;
