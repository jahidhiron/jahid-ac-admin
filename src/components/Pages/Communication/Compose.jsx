import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../../UI/FormField";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

const ComposePage = () => {
  const handleNextStep = (values) => {
    console.log("Form Submitted", values);
  };

  return (
    <div className='px-4'>
      <div className='flex gap-5'>
        <h1 className='text-2xl font-bold'>New Message</h1>
      </div>

      <div className='bg-white mt-4 p-5'>
        <div className='flex justify-end'>
          {" "}
          <Link
            to={"/communication"}
            className='uppercase  w-[40px] text-center text-white bg-primary font-semibold rounded py-1'
          >
            X
          </Link>
        </div>

        <Formik
          initialValues={{ recipientEmail: "", message: "" }}
          validationSchema={Yup.object({
            message: Yup.string().required("Recipient email is required"),
            recipientEmail: Yup.string()
              .email("Invalid email address")
              .required("Recipient email is required"),
          })}
          onSubmit={(values) => handleNextStep(values)}
        >
          {({ values, setFieldValue, isValid, dirty }) => (
            <Form>
              <div className='w-full m-auto'>
                <TextInput
                  label='To'
                  placeholder='john@gmail.com'
                  name='recipientEmail'
                  value={values.recipientEmail}
                  onChange={(e) =>
                    setFieldValue("recipientEmail", e.target.value)
                  }
                  description='Enter recipient email address'
                  isRequired
                />
                <div>
                  <label className='block font-medium text-gray-700'>
                    Message<span className='text-red-600'>*</span>
                  </label>
                  <ReactQuill
                    value={values.message}
                    onChange={(value) => setFieldValue("message", value)}
                    className='mt-2 sm:mb-10 mb-16 h-60'
                  />
                </div>

                <button
                  type='submit'
                  disabled={!isValid || !dirty}
                  className='uppercase mt-5 px-5  text-white bg-primary px-2 font-semibold rounded py-1'
                >
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ComposePage;
