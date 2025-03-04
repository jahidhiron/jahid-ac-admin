import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { FaTrash } from "react-icons/fa";
import { TextInput } from "../../../UI/FormField";
import { useNavigate } from "react-router-dom";

const CustomFieldArray = ({ name, placeholder }) => (
  <FieldArray name={name}>
    {({ remove, push, form }) => (
      <div className='space-y-2'>
        {form?.values?.[name]?.map((_, index) => (
          <div key={index} className='flex items-center space-x-2 rounded-lg'>
            <TextInput
              name={`${name}.${index}`}
              placeholder={placeholder}
              isRequired
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
          + Add more to your response
        </button>
      </div>
    )}
  </FieldArray>
);

const CourseGoals = () => {
  const navigate = useNavigate();
  const initialValues = {
    responses1: [""],
    responses2: [""],
    responses3: [""],
  };

  const updateData = async (values) => {
    const formattedResponses = {
      learningObjectives: values?.responses1,
      prerequisites: values?.responses2,
      intendedLearners: values?.responses3,
    };
    const storedData = JSON.parse(localStorage.getItem("course-creation"));
    localStorage.setItem(
      "course-creation",
      JSON.stringify({ ...storedData, ...formattedResponses })
    );
    navigate("/course/202020/manage/course-structure");
  };

  return (
    <div className=''>
      <h1 className='text-3xl font-bold'>Intended Learners</h1>
      <hr className='border-t-2 border-gray-400 mt-1' />
      <div className='mt-3 text-lg'>
        <p>
          The following descriptions will be publicly visible on your Course
          Landing Page and will have a direct impact on your course performance.
          These descriptions will help learners decide if your course is right
          for them.
        </p>

        <h1 className='mt-5 font-bold'>
          What will students learn in your course?
        </h1>
        <p>
          You must enter at least 4 learning objectives or outcomes that
          learners can expect to achieve after completing your course.
        </p>
        <br />

        <Formik initialValues={initialValues} onSubmit={updateData}>
          {() => (
            <Form>
              <CustomFieldArray
                name='responses1'
                placeholder='Example: Define the roles and responsibilities of a project manager.'
              />
              <br />

              <h1 className='mt-5 font-bold'>
                What are the requirements or prerequisites for taking your
                course?
              </h1>
              <p>
                List the required skills, experience, tools or equipment
                learners should have prior to taking your course. If there are
                no requirements, use this space as an opportunity to lower the
                barrier for beginners.
              </p>
              <br />
              <CustomFieldArray
                name='responses2'
                placeholder='Example: Basic understanding of project management concepts.'
              />
              <br />
              <h1 className='mt-5 font-bold'>Who is this course for?</h1>
              <p>
                Write a clear description of the intended learners for your
                course who will find your course content valuable. This will
                help you attract the right learners to your course.
              </p>
              <br />
              <CustomFieldArray
                name='responses3'
                placeholder='Example: Aspiring project managers.'
              />
              <br />
              <button
                type='submit'
                className='w-[200px] block sm:ml-auto rounded bg-primary px-4 py-2 text-white'
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

export default CourseGoals;
