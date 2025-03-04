import React, { useState } from "react";
import { MdPictureAsPdf } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";

const CreateOne = ({ setStep }) => {
  const [contentType, setContentType] = useState("");

  const handleAction = () => {
    if (contentType) {
      const storedData = { bookType: contentType };
      localStorage.setItem("book-creation", JSON.stringify(storedData));
      setStep(2);
    }
  };

  return (
    <div className='rounded-[10px] dark:text-white text-black bg-white p-6 shadow-1 dark:bg-boxdark dark:shadow-card sm:p-10'>
      <h1 className='text-center text-4xl'>
        First, let's find out what type of content you're creating.
      </h1>
      <div className='flex w-full my-16 h-[230px] justify-center items-center gap-2'>
        <div
          onClick={() => setContentType("pdf")}
          className={`w-3/12 h-full  py-6 px-3 rounded hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer border-2 ${
            contentType === "pdf"
              ? "border-2 border-red-600"
              : "border-black dark:border-gray-300"
          }`}
        >
          <MdPictureAsPdf className='text-3xl text-center m-auto' />
          <h1 className='text-center text-xl font-bold my-5'>PDF</h1>
          <p>
            Upload and share structured documents in PDF format for easy reading
            and distribution.
          </p>
        </div>
        <div
          onClick={() => setContentType("content")}
          className={`w-3/12 h-full  py-6 px-3 rounded hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer border-2 ${
            contentType === "content"
              ? "border-2 border-red-600"
              : "border-black dark:border-gray-300"
          }`}
        >
          <AiOutlineFileText className='text-3xl text-center m-auto' />
          <h1 className='text-center text-xl font-bold my-5'>Content</h1>
          <p>
            Create and share rich textual content with formatting, images, and
            more.
          </p>
        </div>
      </div>
      <button
        onClick={() => handleAction()}
        className={`text-white px-10 py-2 text-center m-auto block ${
          contentType === "" ? "bg-gray-400" : "bg-primary"
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default CreateOne;
