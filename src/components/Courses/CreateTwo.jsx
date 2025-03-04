import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../UI/FormField";

const CreateTwo = ({ setStep }) => {
  const handleNextStep = (values) => {
    const storedData = JSON.parse(localStorage.getItem("course-creation"));
    localStorage.setItem(
      "course-creation",
      JSON.stringify({ ...storedData, ...values })
    );
    setStep(3);
  };

  return (
    <div className='rounded-[10px] bg-white p-6 shadow-1 dark:text-white text-black dark:bg-boxdark dark:shadow-card sm:p-10'>
      <h1 className='text-center text-4xl'>How about a working title?</h1>
      <h3 className='mt-5 text-center'>
        It's ok if you can't think of a good title now. You can change it later.
      </h3>

      <Formik
        initialValues={{ courseName: "" }}
        validationSchema={Yup.object({
          courseName: Yup.string()
            .min(5, "Course name must be at least 5 characters")
            .required("Course name is required"),
        })}
        onSubmit={handleNextStep}
      >
        {({ isValid, dirty }) => (
          <Form>
            <div className='relative w-10/12 m-auto my-16'>
              <span className='absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500'>
                (60)
              </span>
              <TextInput
                name='courseName'
                id='courseName'
                placeholder='e.g. Learn Photoshop CS6 from Scratch'
                className='w-full rounded-md border border-stroke bg-gray-light p-5.5 text-xl text-dark dark:border-dark-3 dark:bg-boxdark dark:text-white'
              />
            </div>

            <div className='flex justify-between'>
              <button
                type='button'
                onClick={() => setStep(1)}
                className='text-white px-10 py-2 text-center m-auto block bg-primary'
              >
                Previous
              </button>
              <button
                type='submit'
                disabled={!isValid || !dirty}
                className={`text-white px-10 py-2 text-center m-auto block ${
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
