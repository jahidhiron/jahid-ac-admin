import React, { useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import { FaTrash } from "react-icons/fa";
import { TextInput, TextAreaInput } from "../../../UI/FormField";
import { useNavigate } from "react-router-dom";

const MetaInformations = () => {
  const initialValues = {
    metaTitle: "",
    metaDesc: "",
    metaKeywords: [],
  };
  const [keywordInput, setKeywordInput] = useState("");
  const navigate = useNavigate();

  const updateData = async (values) => {
    const storedData = JSON.parse(localStorage.getItem("book-creation"));
    const updatedData = { ...storedData, ...values };
    localStorage.setItem("book-creation", JSON.stringify(updatedData));
    navigate("/book/202020/publication-information");
  };
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold'>Meta Information</h1>
      <hr className='border-t-2 border-gray-400 mt-1' />
      <div className='mt-3'>
        <p className=''>
          Provide metadata for the book to improve search visibility and SEO.
        </p>
        <br />
        <Formik initialValues={initialValues} onSubmit={updateData}>
          {({ values, setFieldValue }) => {
            return (
              <Form className='space-y-5'>
                <TextInput
                  label='Meta Title'
                  name='metaTitle'
                  placeholder='Enter meta title'
                  isRequired
                  description='This title will appear in search engine results.'
                />
                <TextAreaInput
                  label='Meta Description'
                  name='metaDesc'
                  placeholder='Enter meta description'
                  isRequired={false}
                  className='w-full p-2 h-[100px] border'
                  description='A short summary that will appear in search results.'
                />

                <div>
                  <label className='block font-bold'>Meta Keywords</label>
                  <small className='text-gray-600'>
                    Add relevant keywords separated as individual tags.
                  </small>
                  <FieldArray name='metaKeywords'>
                    {({ remove, push }) => (
                      <div className='space-y-2'>
                        <div className='flex text-sm flex-wrap gap-2'>
                          {values.metaKeywords.map((keyword, index) => (
                            <div
                              key={index}
                              className='flex items-center bg-white border px-3 py-1 rounded-full'
                            >
                              <span>{keyword}</span>
                              <button
                                type='button'
                                onClick={() => remove(index)}
                                className='ml-2 text-red-500'
                              >
                                <FaTrash />
                              </button>
                            </div>
                          ))}
                        </div>
                        <input
                          type='text'
                          value={keywordInput}
                          placeholder='Enter keyword and press Enter'
                          className='w-full p-3 text-sm border focus:outline focus:outline-[1px] rounded outline-gray-500/50 focus:outline-green-500/50  focus:border border-green-500/50 focus:m-[0px]'
                          onChange={(e) => setKeywordInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && keywordInput.trim()) {
                              e.preventDefault();
                              push(keywordInput.trim());
                              setKeywordInput("");
                            }
                          }}
                        />
                      </div>
                    )}
                  </FieldArray>
                </div>
                <button
                  type='submit'
                  className='w-[200px] block sm:ml-auto rounded bg-primary px-4 py-2 text-white'
                >
                  Save
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default MetaInformations;
