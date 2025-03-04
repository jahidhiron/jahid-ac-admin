import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../UI/FormField";

const CreateTwo = ({ setStep }) => {
  const handleNextStep = (values) => {
    const storedData = JSON.parse(localStorage.getItem("book-creation"));
    const updatedData = { ...storedData, ...values };
    localStorage.setItem("book-creation", JSON.stringify(updatedData));
    setStep(3);
  };

  return (
    <div className='rounded-[10px] bg-white p-6 shadow-1 dark:text-white text-black dark:bg-boxdark dark:shadow-card sm:p-10'>
      <h1 className='text-center text-4xl'>What’s the title of your book?</h1>
      <h3 className='mt-5 text-center'>You can always change it later.</h3>

      <Formik
        initialValues={{
          bookTitle: "",
          bookSubtitle: "",
        }}
        validationSchema={Yup.object({
          bookTitle: Yup.string()
            .min(5, "Title must be at least 5 characters")
            .required("Title is required"),
          bookSubtitle: Yup.string()
            .min(5, "Subtitle must be at least 5 characters")
            .required("Subtitle is required"),
        })}
        onSubmit={(values) => handleNextStep(values)}
      >
        {({ isValid, dirty }) => (
          <Form>
            <div className='relative w-10/12 m-auto my-8'>
              <label className='block text-xl mb-2'>Title</label>
              <TextInput
                name='bookTitle'
                id='bookTitle'
                placeholder='e.g. The Art of Coding'
                className='w-full rounded-md h-[40px] outline outline-green-500/50 outline-[1px] focus:outline-[2px]  py-3 px-2  text-sm text-dark dark:border-dark-3 dark:bg-boxdark dark:text-white'
              />
            </div>

            <div className='relative w-10/12 m-auto my-8'>
              <label className='block text-xl mb-2'>Subtitle</label>
              <TextInput
                name='bookSubtitle'
                id='bookSubtitle'
                placeholder='e.g. A Guide to Mastering Programming'
                className='w-full rounded-md h-[40px] outline outline-green-500/50 outline-[1px] focus:outline-[2px]  py-3 px-2  text-sm text-dark dark:border-dark-3 dark:bg-boxdark dark:text-white'
              />
            </div>

            <div className='flex w-5/12 m-auto justify-between'>
              <button
                type='button'
                onClick={() => setStep(1)}
                className='text-white px-10 py-2 bg-primary'
              >
                Previous
              </button>
              <button
                type='submit'
                disabled={!isValid || !dirty}
                className={`text-white px-10 py-2 ${
                  isValid && dirty ? "bg-primary" : "bg-gray-400"
                }`}
              >
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTwo;
