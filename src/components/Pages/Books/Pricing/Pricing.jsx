import React from "react";
import { Formik } from "formik";
import { NumberInput, Select } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();

  const currencyOptions = [
    { value: "USD", label: "USD ($)" },
    { value: "EUR", label: "EUR (€)" },
    { value: "GBP", label: "GBP (£)" },
    { value: "INR", label: "INR (₹)" },
  ];

  return (
    <Formik
      initialValues={{
        price: 0,
        discount: 0,
        currency: "USD",
      }}
      onSubmit={(values) => {
        const storedData =
          JSON.parse(localStorage.getItem("book-creation")) || {};
        localStorage.setItem(
          "book-creation",
          JSON.stringify({ ...storedData, ...values })
        );
        navigate("/book/202020/book-messages");
      }}
    >
      {({ values, setFieldValue, handleSubmit }) => (
        <div className='p-6 mx-auto bg-white shadow-md rounded-lg'>
          <h1 className='text-2xl font-bold mb-4'>Book Pricing</h1>
          <hr className='border-t-2 border-gray-200 mb-6' />
          <div className='mb-4'>
            <NumberInput
              label='Book Price'
              value={values.price}
              onChange={(val) => setFieldValue("price", val || 0)}
              min={0}
              step={0.01}
            />
          </div>
          <div className='mb-4'>
            <NumberInput
              label='Discount Percentage'
              value={values.discount}
              onChange={(val) => setFieldValue("discount", val || 0)}
              min={0}
              max={100}
              step={1}
            />
          </div>
          <div className='mb-6'>
            <Select
              label='Currency'
              data={currencyOptions}
              value={values.currency}
              onChange={(val) => setFieldValue("currency", val)}
              className='w-full'
            />
          </div>

          <button
            type='button'
            onClick={handleSubmit}
            className='text-white bg-primary px-6 py-1'
          >
            Save Pricing
          </button>
        </div>
      )}
    </Formik>
  );
};

export default PricingPage;
