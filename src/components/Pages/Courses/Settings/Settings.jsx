import { Checkbox, Select } from "@mantine/core";
import React, { useState } from "react";

const SettingsCourse = () => {
  const accessOptions = [
    "Visible",
    "Manage",
    "Captions",
    "Performance",
    "Q&A",
    "Assignments",
    "Reviews",
  ];

  const [access, setAccess] = useState(
    accessOptions.reduce((acc, option) => {
      acc[option] = false;
      return acc;
    }, {})
  );

  const handleAccessChange = (option, checked) => {
    setAccess((prevAccess) => ({
      ...prevAccess,
      [option]: checked,
    }));
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'>Settings</h1>
      <hr className='border-t-2 border-gray-400 mt-1' />
      <div className='mt-6'>
        <h2 className='text-lg font-bold'>Course Status</h2>
        <p>This course is not published on the Udemy marketplace.</p>
        <div className='flex items-center text-lg gap-6 p-3'>
          <button className='text-primary hover:bg-white rounded  border-2 border-primary px-6 py-1'>
            Published
          </button>
          <p>
            New students cannot find your course via search, but existing
            students can still access content.
          </p>
        </div>
        <div className='flex items-center text-lg gap-6 p-3 mt-3'>
          <button className='text-primary hover:bg-white rounded  border-2 border-primary px-6 py-1'>
            Delete
          </button>
          <p>
            We promise students lifetime access, so courses cannot be deleted
            after students have enrolled.
          </p>
        </div>
      </div>
      <div className='mt-6'>
        <h2 className='text-lg font-bold'> Enrollment (Privacy)</h2>
        <p>
          Public courses show up in search results and are available for anyone
          to take on Udemy.
        </p>
        <Select
          className='w-8/12 text-lg'
          mt={10}
          placeholder='Select enrollment'
          data={[
            { value: "public", label: "Public" },
            { value: "private invition", label: "Private Invition" },
            { value: "private password", label: "Private Password" },
          ]}
          required
        />
        <button
          type='submit'
          className='flex px-10 items-center mt-6 bg-primary text-white p-1 rounded'
        >
          Save
        </button>
      </div>
      <hr className='mt-6' />
      <div className='mt-6'>
        <div className='flex w-full justify-around bg-white'>
          {accessOptions.map((option, index) => (
            <div
              key={option}
              className={`flex flex-col items-center ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className='flex-1 px-4 py-2'>{option}</div>
              <div className='px-4 py-2'>
                <Checkbox
                  checked={access[option]}
                  color='red'
                  onChange={(e) => handleAccessChange(option, e.target.checked)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <button className='flex px-10 items-center mt-6 bg-primary text-white p-1 rounded'>
          Save
        </button>
      </div>
    </div>
  );
};

export default SettingsCourse;
