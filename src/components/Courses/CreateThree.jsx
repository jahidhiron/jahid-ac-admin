import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SelectInput } from "../UI/FormField";

const CreateThree = ({ setStep }) => {
  const handleNextStep = (values) => {
    const storedData =
      JSON.parse(localStorage.getItem("course-creation")) || {};
    localStorage.setItem(
      "course-creation",
      JSON.stringify({ ...storedData, ...values })
    );
    setStep(4);
  };

  return (
    <div className='rounded-[10px] bg-white p-6 shadow-1 dark:text-white text-black dark:bg-boxdark dark:shadow-card sm:p-10'>
      <h1 className='text-center text-4xl'>
        What category best fits the knowledge you'll share?
      </h1>
      <h3 className='mt-5 text-center'>
        If you're not sure about the right category, you can change it later.
      </h3>

      <Formik
        initialValues={{ courseCategory: "" }}
        validationSchema={Yup.object({
          courseCategory: Yup.string().required("Category is required"),
        })}
        onSubmit={handleNextStep}
      >
        {({ setFieldValue, isValid, dirty }) => (
          <Form>
            <div className='w-10/12 m-auto my-16'>
              <SelectInput
                name='courseCategory'
                label='Select a category'
                isRequired
                setItem={(value) => setFieldValue("courseCategory", value)}
                options={[
                  { value: "design", key: "Design" },
                  { value: "development", key: "Development" },
                  { value: "marketing", key: "Marketing" },
                  { value: "photography", key: "Photography" },
                ]}
              />
            </div>

            <div className='flex justify-between'>
              <button
                type='button'
                onClick={() => setStep(2)}
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

export default CreateThree;
