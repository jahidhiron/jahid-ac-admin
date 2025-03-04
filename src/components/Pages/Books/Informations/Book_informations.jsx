import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput, SelectInput } from "../../../UI/FormField";
import { useNavigate } from "react-router-dom";

const languageOptions = [
  { value: "English", key: "English" },
  { value: "Spanish", key: "Spanish" },
  { value: "French", key: "French" },
  { value: "German", key: "German" },
];

const genreOptions = [
  { value: "Fiction", key: "Fiction" },
  { value: "Non-Fiction", key: "Non-Fiction" },
  { value: "Mystery", key: "Mystery" },
  { value: "Science Fiction", key: "Science Fiction" },
  { value: "Fantasy", key: "Fantasy" },
  { value: "Biography", key: "Biography" },
];

const BookInformations = () => {
  const initialValues = {
    author: "",
    isbn: "",
    language: "",
    genre: "",
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    author: Yup.string().required("Author is required"),
    isbn: Yup.string().required("ISBN is required"),
    language: Yup.string().required("Select a language"),
    genre: Yup.string().required("Select a genre"),
  });

  const handleData = async (values) => {
    const storedData = JSON.parse(localStorage.getItem("book-creation"));
    const updatedData = { ...storedData, ...values };
    localStorage.setItem("book-creation", JSON.stringify(updatedData));
    navigate("/book/202020/meta-information");
  };

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold'>Book Information</h1>
      <hr className='border-t-2 border-gray-400 mt-1' />
      <div className='mt-3 text-lg'>
        <p>
          Fill in the following details to provide essential information about
          the book. These details will be used for categorization and display.
        </p>
        <br />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleData}
        >
          {({ isValid, dirty }) => (
            <Form className='space-y-5'>
              <TextInput
                label='Author'
                name='author'
                placeholder='Enter the author name'
                isRequired
              />
              <TextInput
                label='ISBN'
                name='isbn'
                placeholder='Enter the ISBN number'
                isRequired
              />
              <SelectInput
                label='Language'
                name='language'
                options={languageOptions}
                isRequired
              />
              <SelectInput
                label='Genre'
                name='genre'
                options={genreOptions}
                isRequired
              />
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

export default BookInformations;
