import React, { useState } from "react";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { FaRegTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const UploadThumbnail = ({ setStep }) => {
  const nagivate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (files) => {
    const file = files[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeThumbnail = () => {
    setThumbnail(null);
    setPreview(null);
  };

  const handleAction = () => {
    nagivate("/book/202020/intended-audience");
  };

  const handleBackAction = () => {
    setStep(3);
  };

  return (
    <div className='rounded-[10px] bg-white p-6 shadow-1 dark:text-white text-black dark:bg-boxdark dark:shadow-card sm:p-10'>
      <h1 className='text-center text-4xl'>Upload a Thumbnail</h1>
      <h3 className='mt-5 text-center'>
        Choose an image to represent your book.
      </h3>

      {preview ? (
        <div className='w-6/12 relative m-auto my-5'>
          <img
            src={preview}
            alt='Thumbnail Preview'
            className='rounded-md w-full'
          />
          <button
            onClick={removeThumbnail}
            className=' absolute right-0 top-0 bg-primary text-white px-4 py-4'
          >
            <FaRegTrashCan />
          </button>
        </div>
      ) : (
        <div className='w-8/12 m-auto my-10'>
          <Dropzone
            onDrop={handleFileChange}
            accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.webp]}
            className='p-20 border border-dashed border-gray-400 rounded-lg text-center cursor-pointer'
          >
            <p className='text-lg text-gray-600 dark:text-gray-300'>
              Drag & drop an image here or click to select one
            </p>
          </Dropzone>
        </div>
      )}

      <div className='flex w-5/12 m-auto justify-between'>
        <button
          onClick={handleBackAction}
          className='text-white px-10 py-2 bg-primary'
        >
          Previous
        </button>
        <button
          disabled={!thumbnail}
          onClick={handleAction}
          className={`text-white px-10 py-2 ${
            thumbnail ? "bg-primary" : "bg-gray-400"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default UploadThumbnail;
