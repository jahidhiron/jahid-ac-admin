import React, { useState } from "react";
import { Formik, Form } from "formik";
import ReactQuill from "react-quill";

const MessagesPage = () => {
  const [editorValue, setEditorValue] = useState("");

  const initialValues = {
    message: "",
  };

  const handleSubmit = () => {
    const formattedData = {
      message: editorValue,
    };
    const storedData = JSON.parse(localStorage.getItem("book-creation"));
    const updatedData = { ...storedData, ...formattedData };
    localStorage.setItem("book-creation", JSON.stringify(updatedData));
    setEditorValue("");
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-4'>Send Message to Students</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form className='space-y-4'>
            <div>
              <label className='block text-lg font-medium mb-2'>Message</label>
              <ReactQuill
                value={editorValue}
                onChange={(content) => {
                  setEditorValue(content);
                  setFieldValue("message", content);
                }}
                className='bg-white  rounded-md h-32 sm:mb-10 mb-20'
              />
            </div>
            <button
              type='submit'
              className='w-40 bg-primary text-white px-4 py-2 rounded-md hover:bg-red-700'
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MessagesPage;
