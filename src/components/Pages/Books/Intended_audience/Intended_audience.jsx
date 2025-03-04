import React from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { FaTrash } from "react-icons/fa";
import { TextInput } from "../../../UI/FormField";
import { useNavigate } from "react-router-dom";

const CustomFieldArray = ({ name, placeholder }) => (
  <FieldArray name={name}>
    {({ remove, push, form }) => (
      <div className='space-y-2 mt-2 '>
        {form?.values?.[name]?.map((_, index) => (
          <div key={index} className='flex  items-center space-x-2 rounded-lg'>
            <TextInput
              name={`${name}.${index}`}
              placeholder={placeholder}
              className='sm:w-[600px]   border border-gray-400 p-3 text-sm'
            />
            {form?.values?.[name]?.length > 1 && (
              <button
                type='button'
                onClick={() => remove(index)}
                className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white'
              >
                <FaTrash />
              </button>
            )}
          </div>
        ))}
        <button
          type='button'
          onClick={() => push("")}
          className='sm:w-4/12 rounded-md border border-dashed border-gray-500 p-2 text-red-600 hover:border-red-500'
        >
          + Add more
        </button>
      </div>
    )}
  </FieldArray>
);

const IntendedAudience = () => {
  const initialValues = {
    targetReaders: [""],
    prerequisites: [""],
    whoShouldRead: [""],
  };

  const validationSchema = Yup.object({
    targetReaders: Yup.array().of(Yup.string().required("Required")),
    prerequisites: Yup.array().of(Yup.string().required("Required")),
    whoShouldRead: Yup.array().of(Yup.string().required("Required")),
  });

  const navigate = useNavigate();

  const handleSave = (values) => {
    const storedData = JSON.parse(localStorage.getItem("book-creation"));
    const updatedData = { ...storedData, ...values };
    localStorage.setItem("book-creation", JSON.stringify(updatedData));
    navigate("/book/202020/book-informations");
  };

  return (
    <div className='rounded-[10px] bg-white p-6 shadow-1 dark:text-white text-black dark:bg-boxdark dark:shadow-card sm:p-10'>
      <h1 className='text-3xl font-bold'>Intended Audience</h1>
      <hr className='border-t-2 border-gray-400 mt-1' />
      <div className='mt-3 text-lg'>
        <p>
          Define your book’s intended audience to help potential readers
          understand if this book is for them.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSave}
        >
          {({ isValid, dirty }) => (
            <Form>
              <h1 className='mt-5 font-bold'>What will you know?</h1>
              <p>
                List the main target audience for this book. Be specific about
                the group of readers what will students know.
              </p>
              <CustomFieldArray
                name='targetReaders'
                placeholder='Example: Students, professionals, researchers, etc.'
              />
              <br />

              <h1 className='mt-5 font-bold'>Prerequisites</h1>
              <p>
                List any knowledge, skills, or background readers should have
                before reading this book.
              </p>
              <CustomFieldArray
                name='prerequisites'
                placeholder='Example: Basic knowledge of programming, physics, etc.'
              />
              <br />

              <h1 className='mt-5 font-bold'>Who should read this book?</h1>
              <p>
                Describe the ideal reader who will gain the most value from this
                book.
              </p>
              <CustomFieldArray
                name='whoShouldRead'
                placeholder='Example: Beginners in web development, data scientists, etc.'
              />
              <br />

              <button
                type='submit'
                disabled={!isValid || !dirty}
                className={`w-[200px] block sm:ml-auto rounded px-4 py-2 text-white ${
                  isValid && dirty ? "bg-primary" : "bg-gray-400"
                }`}
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default IntendedAudience;
