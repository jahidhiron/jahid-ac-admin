import React from "react";
import { useFormik } from "formik";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import {
  MultipleImageUploader,
  SingleImageUploader,
  VideoUploadHandler,
} from "../../../UI/ImageHandler";

const GalleryImageUploadPage = () => {
  const formik = useFormik({
    initialValues: {
      gallery: [],
    },
    onSubmit: (values) => {
      console.log("Uploaded Gallery Images:", values.gallery);
      toast.success("Gallery updated successfully!");
    },
  });

  return (
    <div className='p-6 mx-auto bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold mb-4'>Upload Gallery Images</h1>
      <hr className='border-t-2 border-gray-200 mb-6' />
      <form onSubmit={formik.handleSubmit} className='space-y-6'>
        <SingleImageUploader
          title='Thumbnail Images'
          field='thumbnail'
          values={formik.values}
          setFieldValue={formik.setFieldValue}
        />
        <MultipleImageUploader
          title='Gallery Images'
          field='gallery'
          values={formik.values}
          setFieldValue={formik.setFieldValue}
        />

        <VideoUploadHandler
          title='Preview Video'
          field='preview'
          values={formik.values}
          setFieldValue={formik.setFieldValue}
        />

        <Button
          type='submit'
          color='red'
          className='bg-red-600 hover:bg-red-700 text-white'
        >
          Save Gallery
        </Button>
      </form>
    </div>
  );
};

export default GalleryImageUploadPage;
