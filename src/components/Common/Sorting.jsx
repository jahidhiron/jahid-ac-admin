import React from "react";

const Sorting = ({ name, values, onChange }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <div>
      <div className='relative flex items-center rounded border border-primary bg-white dark:bg-boxdark transition-colors duration-300 p-1'>
        <select
          className='flex-1 bg-transparent border-none outline-none text-primary dark:primary placeholder-gray-400  dark:placeholder-gray-500 px-2 bg-white dark:bg-boxdark transition-colors duration-300'
          onChange={handleChange}
          defaultValue=''
        >
          <option value='' disabled>
            {name}
          </option>
          {values?.map((value, index) => (
            <option
              key={index}
              value={
                typeof value.sort === "object"
                  ? JSON.stringify(value.sort)
                  : value.value
              }
            >
              {value.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sorting;
