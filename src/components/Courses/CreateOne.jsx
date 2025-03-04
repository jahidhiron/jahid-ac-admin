import React, { useState } from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

const CreateOne = ({ setStep }) => {
  const [courseType, setCourseType] = useState("");
  const handleAction = () => {
    if (courseType) {
      const storedData = { courseType: courseType };
      localStorage.setItem("course-creation", JSON.stringify(storedData));
      setStep(2);
    }
  };
  return (
    <div className='rounded-[10px] dark:text-white text-black bg-white p-6 shadow-1  dark:bg-boxdark dark:shadow-card sm:p-10'>
      <h1 className='text-center text-4xl'>
        First, let's find out what type of course you're making.
      </h1>
      <div className='flex w-full my-16 h-[230px] justify-center items-center gap-2'>
        <div
          onClick={() => setCourseType("course")}
          className={`w-3/12  h-full py-6 px-3 rounded hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer border-2 ${
            courseType == "course"
              ? "border-2 border-red-600"
              : "border-black dark:border-gray-300"
          }`}
        >
          <MdOutlineOndemandVideo className='text-3xl text-center m-auto' />
          <h1 className='text-center text-xl font-bold my-5'>Course</h1>
          <p className=''>
            Create rich learning experiences with the help of video lectures,
            quizzes, coding exercises, etc.
          </p>
        </div>
        <div
          onClick={() => setCourseType("practise")}
          className={`w-3/12 h-full  py-6 px-3 rounded hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer border-2 ${
            courseType == "practise"
              ? "border-2 border-red-600"
              : "border-black dark:border-gray-300"
          }`}
        >
          <GiNotebook className='text-3xl text-center m-auto' />
          <h1 className='text-center text-xl font-bold my-5'>Practise Test</h1>
          <p className=''>
            Help students prepare for certification exams by providing practice
            questions.
          </p>
        </div>
      </div>
      <button
        onClick={() => handleAction()}
        className={`text-white  px-10 py-2 text-center m-auto block ${
          courseType == "" ? "bg-gray-400" : "bg-primary"
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default CreateOne;
