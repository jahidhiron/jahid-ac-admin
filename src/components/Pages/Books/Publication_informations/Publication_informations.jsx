import React from "react";
import { Formik, Form } from "formik";
import { DateField, TextInput } from "../../../UI/FormField";
import { useNavigate } from "react-router-dom";

const formatDateToUTC = (date) => {
  if (!date) return null;
  const utcDate = new Date(date);
  return utcDate.toISOString().split("T")[0];
};

const PublicationInformation = () => {
  const navigate = useNavigate();
  const initialValues = {
    publisher: "",
    publicationName: "",
    edition: "",
    publicationDate: null,
    country: "",
  };

  const submitData = async (values) => {
    const formattedValues = {
      ...values,
      publicationDate: formatDateToUTC(values.publicationDate),
    };
    const storedData = JSON.parse(localStorage.getItem("book-creation"));
    const updatedData = { ...storedData, ...formattedValues };
    localStorage.setItem("book-creation", JSON.stringify(updatedData));
    navigate("/book/202020/gallery");
  };

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold'>Publication Information</h1>
      <hr className='border-t-2 border-gray-400 mt-1' />
      <div className='mt-3 '>
        <p>
          Fill in the following details to provide information about the book's
          publication. These details help identify and categorize the book
          correctly.
        </p>
        <br />
        <Formik initialValues={initialValues} onSubmit={submitData}>
          {({ values, setFieldValue }) => (
            <Form className='space-y-5'>
              <TextInput
                label='Publisher'
                name='publisher'
                placeholder='Enter the publisher name'
                isRequired={false}
                description='The company or entity responsible for publishing the book.'
              />
              <TextInput
                label='Publication Name'
                name='publicationName'
                placeholder='Enter the publication name'
                isRequired={false}
                description='The official name of the publication under which the book is released.'
              />
              <TextInput
                label='Edition'
                name='edition'
                placeholder='Enter the book edition'
                isRequired={false}
                description='Specify the edition of the book (e.g., First Edition, Second Edition).'
              />
              <DateField
                label='Publication Date'
                name='publicationDate'
                isRequired={false}
                placeholder='Select Date'
                value={values.publicationDate}
                onChange={(date) => setFieldValue("publicationDate", date)}
                description='The official date when the book was published.'
              />

              <TextInput
                label='Country of Publication'
                name='country'
                placeholder='Enter the country of publication'
                isRequired={false}
                description='The country where the book was published.'
              />

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

export default PublicationInformation;
