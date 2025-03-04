import { FileInput } from "@mantine/core";
import React, { useRef, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import {
  fileRemove,
  fileUpload,
} from "../../stores/actions/file.actions.types";
import { BsUpload } from "react-icons/bs";
import { connect } from "react-redux";
import { errorMessage } from "../../utilities/notification";
import { imageBaseUrl } from "../../utilities/constants";

const ImageHandler = ({
  title,
  field,
  fileUpload,
  fileRemove,
  values,
  setFieldValue,
}) => {
  const [fileUploading, setFileUploading] = useState(false);
  const [fileRemoving, setFileRemoving] = useState(false);
  const fileRef = useRef(null);

  const handleFileChange = async (e, setFieldValue) => {
    setFileUploading(true);
    const imageFormData = new FormData();
    const maxSize = 10 * 1024 * 1024;
    const inputFile = e;
    if (!inputFile) return;

    const ext = inputFile?.name?.split(".")?.pop().toLowerCase();
    if (!["png", "jpg", "jpeg"].includes(ext)) {
      errorMessage("Only .png, .jpg, or .jpeg files are supported");
      fileRef.current.value = "";
      return;
    }
    if (inputFile.size > maxSize) {
      errorMessage("File size must be less than 10MB");
      return;
    }

    imageFormData.append("files", inputFile);

    try {
      const callback = (data) => {
        const item_image = data?.data?.files[0]?.path;
        setFieldValue(field, item_image);
        setFileUploading(false);
      };
      fileUpload({ data: imageFormData, callback });
    } catch (error) {
      errorMessage("Upload failed");
      setFileUploading(false);
    }
  };

  const handleFileDelete = async (file, setFieldValue) => {
    setFileRemoving(true);
    const callback = (data) => {
      if (data.success) {
        setFieldValue(field, null);
        setFileRemoving(false);
      } else {
        setFileRemoving(false);
      }
    };
    let request = { path: file, callback };
    fileRemove(request);
  };

  return (
    <div>
      <div className='col-span-1 sm:col-span-2 my-4'>
        <label className='text-sm font-medium'>{title}</label>
        {values?.[field] ? (
          <div className='mt-2 relative w-32 h-32'>
            <img
              src={`${imageBaseUrl}/${values?.[field]}`}
              alt='Preview'
              className='w-32 h-32'
            />
            <button
              type='button'
              className='absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full'
              onClick={() => handleFileDelete(values?.[field], setFieldValue)}
            >
              {fileRemoving ? (
                <BiLoaderAlt
                  size={20}
                  className='animate-spin text-primary dark:text-white'
                />
              ) : (
                <MdDelete size={20} />
              )}
            </button>
          </div>
        ) : fileUploading ? (
          <BiLoaderAlt className='animate-spin text-4xl text-primary dark:text-white' />
        ) : (
          <label className='relative border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 w-full mt-2'>
            <BsUpload
              size={50}
              strokeWidth={1.5}
              className='text-gray-500 mb-2'
            />
            <p className='text-sm text-gray-500'>
              Click or drag an image to upload
            </p>
            <input
              ref={fileRef}
              type='file'
              className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
              accept='image/png, image/jpeg, image/jpg'
              onChange={(e) => handleFileChange(e, setFieldValue)}
            />
          </label>
        )}
      </div>
    </div>
  );
};

const GalleryHandler = ({
  title,
  fileUpload,
  fileRemove,
  field,
  values,
  setFieldValue,
}) => {
  const [fileUploading, setFileUploading] = useState(false);
  const [fileRemoving, setFileRemoving] = useState(false);

  const handleMultipleFileChange = async (e) => {
    setFileUploading(true);
    const imageFormData = new FormData();
    const maxSize = 10 * 1024 * 1024;
    const inputFiles = e.target.files;
    if (!inputFiles || inputFiles.length === 0) return;

    for (const file of inputFiles) {
      const ext = file?.name?.split(".")?.pop().toLowerCase();
      if (!["png", "jpg", "jpeg"].includes(ext)) {
        errorMessage("Only .png, .jpg, or .jpeg files are supported");
        setFileUploading(false);
        return;
      }
      if (file.size > maxSize) {
        errorMessage("File size must be less than 10MB");
        setFileUploading(false);
        return;
      }
      imageFormData.append("files", file);
    }

    try {
      const callback = (data) => {
        const newImages = data?.data?.files?.map((file) => file.path) || [];
        setFieldValue(field, [...values?.[field], ...newImages]);
        setFileUploading(false);
      };

      fileUpload({ data: imageFormData, callback });
    } catch (error) {
      errorMessage("Upload failed");
      setFileUploading(false);
    }
  };

  const handleGalleryFileDelete = (fileToDelete) => {
    setFileRemoving(true);
    const callback = (data) => {
      if (data.success) {
        setFieldValue(
          field,
          values?.[field].filter((file) => file !== fileToDelete)
        );
      }
      setFileRemoving(false);
    };

    fileRemove({ path: fileToDelete, callback });
  };

  return (
    <div>
      <label className='text-sm font-medium'>{title}</label>
      <div className='flex flex-wrap gap-2 mt-2'>
        {values?.[field]?.map((file, index) => (
          <div key={index} className='relative w-24 h-24'>
            <img
              src={`${imageBaseUrl}/${file}`}
              alt='Preview'
              className='w-24 h-24'
            />
            <button
              type='button'
              className='absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full'
              onClick={() => handleGalleryFileDelete(file)}
            >
              {fileRemoving ? (
                <BiLoaderAlt
                  size={20}
                  className='animate-spin text-primary dark:text-white'
                />
              ) : (
                <MdDelete size={20} />
              )}
            </button>
          </div>
        ))}
      </div>
      {fileUploading ? (
        <BiLoaderAlt className='animate-spin text-4xl text-primary dark:text-white mt-2' />
      ) : (
        <label className='relative border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 w-full mt-2'>
          <BsUpload
            size={50}
            strokeWidth={1.5}
            className='text-gray-500 mb-2'
          />
          <p className='text-sm text-gray-500'>
            Click or drag images to upload
          </p>
          <input
            type='file'
            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
            accept='image/png, image/jpeg, image/jpg'
            multiple
            onChange={(e) => handleMultipleFileChange(e, setFieldValue)}
          />
        </label>
      )}
    </div>
  );
};

const VideoHandler = ({
  title,
  fileUpload,
  fileRemove,
  field,
  values,
  setFieldValue,
}) => {
  const [fileUploading, setFileUploading] = useState(false);
  const [fileRemoving, setFileRemoving] = useState(false);

  const handleFileChange = async (e) => {
    setFileUploading(true);
    const videoFormData = new FormData();
    const maxSize = 50 * 1024 * 1024;
    const inputFile = e.target.files[0];
    if (!inputFile) return;

    const ext = inputFile?.name?.split(".")?.pop().toLowerCase();
    if (!["mp4", "mov", "avi"].includes(ext)) {
      errorMessage("Only .mp4, .mov, or .avi files are supported");
      setFileUploading(false);
      return;
    }
    if (inputFile.size > maxSize) {
      errorMessage("File size must be less than 50MB");
      setFileUploading(false);
      return;
    }

    videoFormData.append("file", inputFile);

    try {
      const callback = (data) => {
        const videoPath = data?.data?.file?.path;
        setFieldValue(field, videoPath);
        setFileUploading(false);
      };

      fileUpload({ data: videoFormData, callback });
    } catch (error) {
      errorMessage("Upload failed");
      setFileUploading(false);
    }
  };

  const handleFileDelete = () => {
    setFileRemoving(true);
    const callback = (data) => {
      if (data.success) {
        setFieldValue(field, null);
      }
      setFileRemoving(false);
    };

    fileRemove({ path: values?.[field], callback });
  };

  return (
    <div>
      <label className='text-sm font-medium'>{title}</label>
      <div className='mt-2'>
        {values?.[field] ? (
          <div className='relative w-64 h-36'>
            <video controls className='w-full h-full'>
              <source
                src={`${imageBaseUrl}/${values?.[field]}`}
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
            <button
              type='button'
              className='absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full'
              onClick={handleFileDelete}
            >
              {fileRemoving ? (
                <BiLoaderAlt
                  size={20}
                  className='animate-spin text-primary dark:text-white'
                />
              ) : (
                <MdDelete size={20} />
              )}
            </button>
          </div>
        ) : fileUploading ? (
          <BiLoaderAlt className='animate-spin text-4xl text-primary dark:text-white mt-2' />
        ) : (
          <label className='relative border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 w-full mt-2'>
            <BsUpload
              size={50}
              strokeWidth={1.5}
              className='text-gray-500 mb-2'
            />
            <p className='text-sm text-gray-500'>
              Click or drag a video to upload
            </p>
            <input
              type='file'
              className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
              accept='video/mp4, video/mov, video/avi'
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ loading: state?.app?.visible });

export const SingleImageUploader = connect(mapStateToProps, {
  fileUpload,
  fileRemove,
})(ImageHandler);
export const MultipleImageUploader = connect(mapStateToProps, {
  fileUpload,
  fileRemove,
})(GalleryHandler);
export const VideoUploadHandler = connect(mapStateToProps, {
  fileUpload,
  fileRemove,
})(VideoHandler);
