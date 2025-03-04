import React from "react";

const CategorySorting = ({ categories, onChange }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <div>
      <div className='relative flex items-center rounded-lg border border-gray-300 bg-white dark:bg-boxdark transition-colors duration-300 p-1'>
        <select
          name='categoryId'
          onChange={handleChange}
          className='flex-1 bg-transparent border-none outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400  dark:placeholder-gray-500 px-2 bg-white dark:bg-boxdark transition-colors duration-300'
        >
          <option value=''>All Category</option>
          {categories.map((category) => (
            <option key={category?._id} value={category?.slug}>
              {category?.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategorySorting;
