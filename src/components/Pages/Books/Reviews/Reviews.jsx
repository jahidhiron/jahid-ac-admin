import React from "react";
import { Formik } from "formik";
import { Switch, MultiSelect } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const ReviewsPage = () => {
  const navigate = useNavigate();

  const reviewerOptions = [
    { value: "students", label: "Students" },
    { value: "public", label: "Public" },
  ];

  return (
    <Formik
      initialValues={{
        isReviewable: false,
        reviewers: [],
      }}
      onSubmit={(values) => {
        const storedData = JSON.parse(localStorage.getItem("book-creation"));
        localStorage.setItem(
          "book-creation",
          JSON.stringify({ ...storedData, ...values })
        );
        navigate("/book/202020/reviews");
      }}
    >
      {({ values, setFieldValue, handleSubmit }) => (
        <div className='p-6 mx-auto bg-white shadow-md rounded-lg'>
          <h1 className='text-2xl font-bold mb-4'>Review Settings</h1>
          <hr className='border-t-2 border-gray-200 mb-6' />
          <div className='mb-4'>
            <Switch
              label='Allow Reviews'
              color='red'
              checked={values.isReviewable}
              onChange={(event) =>
                setFieldValue("isReviewable", event.currentTarget.checked)
              }
            />
          </div>
          {values.isReviewable && (
            <div className='mb-6'>
              <MultiSelect
                data={reviewerOptions}
                label='Who can leave reviews?'
                placeholder='Select reviewers'
                value={values.reviewers}
                onChange={(selected) => setFieldValue("reviewers", selected)}
              />
            </div>
          )}
          <button
            type='button'
            className='text-white bg-primary px-6 py-1'
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      )}
    </Formik>
  );
};

export default ReviewsPage;
