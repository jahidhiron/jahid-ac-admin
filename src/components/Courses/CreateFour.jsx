import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateFour = ({ setStep }) => {
  const nagivate = useNavigate();
  const [courseSurvey, setCourseSurvey] = useState("");

  const handleAction = () => {
    const storedData =
      JSON.parse(localStorage.getItem("course-creation")) || {};
    localStorage.setItem(
      "course-creation",
      JSON.stringify({ ...storedData, courseSurvey })
    );
    nagivate("/course/202020/manage/goals");
  };

  const handleBackAction = () => {
    setStep(3);
  };

  return (
    <div className='rounded-[10px] bg-white p-6 shadow-1 dark:text-white text-black dark:bg-boxdark dark:shadow-card sm:p-10'>
      <h1 className='text-center  text-4xl'>
        How much time can you spend creating your course per week?
      </h1>
      <h3 className='mt-5 text-center'>
        There's no wrong answer. We can help you achieve your goals even if you
        don't have much time.
      </h3>
      <div className='w-8/12 m-auto my-10'>
        <label className='flex mb-3 p-5 border-gray-600 dark:border-slate-400 border rounded-lg  items-center space-x-3'>
          <input
            type='radio'
            name='availability'
            value='0-2'
            onChange={(e) => setCourseSurvey(e.target.value)}
            className='h-5 w-5 text-blue-600 focus:ring-blue-500 dark:focus:ring-offset-gray-800'
          />
          <span className='text-lg text-dark dark:text-white'>
            I’m very busy right now (0-2 hours)
          </span>
        </label>

        <label className='flex mb-3 p-5 border-gray-600 dark:border-slate-400 border rounded-lg  items-center space-x-3'>
          <input
            type='radio'
            name='availability'
            value='2-4'
            onChange={(e) => setCourseSurvey(e.target.value)}
            className='h-5 w-5 text-blue-600  focus:ring-blue-500 dark:focus:ring-offset-gray-800'
          />
          <span className='text-lg text-dark dark:text-white'>
            I’ll work on this on the side (2-4 hours)
          </span>
        </label>

        <label className='flex mb-3 p-5 border-gray-600 dark:border-slate-400 border rounded-lg  items-center space-x-3'>
          <input
            type='radio'
            name='availability'
            value='5+'
            onChange={(e) => setCourseSurvey(e.target.value)}
            className='h-5 w-5 text-blue-600  focus:ring-blue-500 dark:focus:ring-offset-gray-800'
          />
          <span className='text-lg text-dark dark:text-white'>
            I have lots of flexibility (5+ hours)
          </span>
        </label>

        <label className='flex mb-3 p-5 border-gray-600 dark:border-slate-400 border rounded-lg items-center space-x-3'>
          <input
            type='radio'
            name='availability'
            value='undecided'
            onChange={(e) => setCourseSurvey(e.target.value)}
            className='h-5 w-5 text-blue-600 rounded  focus:ring-blue-600 dark:focus:ring-offset-gray-800'
          />
          <span className='text-lg text-dark dark:text-white'>
            I haven’t yet decided if I have time
          </span>
        </label>
      </div>

      <div className='flex justify-between'>
        <button
          onClick={() => handleBackAction()}
          className={`text-white  px-10 py-2 text-center m-auto block bg-primary`}
        >
          Previeus
        </button>
        <button
          disabled={courseSurvey == ""}
          onClick={() => handleAction()}
          className={`text-white  px-10 py-2 text-center m-auto block ${
            !courseSurvey == "" ? "bg-primary" : " bg-gray-400"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CreateFour;
