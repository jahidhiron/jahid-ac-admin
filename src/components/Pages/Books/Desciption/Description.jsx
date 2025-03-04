import React from "react";
import { Formik, Form } from "formik";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";

const DescriptionPage = () => {
  const navigate = useNavigate();
  return (
    <div className='p-6 mx-auto bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold mb-4'>Add Description</h1>
      <hr className='border-t-2 border-gray-200 mb-6' />
      <Formik
        initialValues={{ description: "" }}
        onSubmit={(values) => {
          const storedData = JSON.parse(localStorage.getItem("book-creation"));
          const updatedData = { ...storedData, ...values };
          localStorage.setItem("book-creation", JSON.stringify(updatedData));
          navigate("/book/202020/reviews");
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Description
              </label>
              <ReactQuill
                value={values.description}
                onChange={(value) => setFieldValue("description", value)}
                className='mt-2 sm:mb-10 mb-16 h-60'
              />
            </div>

            <button
              className='text-white  bg-primary px-6 py-1'
              type='submit'
              color='blue'
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DescriptionPage;
