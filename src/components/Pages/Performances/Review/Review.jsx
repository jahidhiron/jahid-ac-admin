import React, { useState } from "react";
import ReviewCard from "../../../UI/ReviewCard";
import sampleReview from "../../../../fakeData/review.json";
import Sorting from "../../../Common/Sorting";
import { courseFilterList } from "../../../../utilities/enums/course";
import { sortingList } from "../../../../utilities/enums";
import { Pagination } from "@mantine/core";
const sampleCourse = {
  title: "NodeJS: All You Need to Know with Practical Project",
  rating: 4.5,
  thumbnail:
    "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
  link: "#",
};

const ReviewPage = () => {
  const [course, setCourse] = useState("");

  const handleChangeCourse = (value) => {
    setCourse(value);
  };

  return (
    <div className='p-5'>
      <div className='flex gap-5'>
        <h1 className='text-2xl font-bold'>Reviews</h1>
        <Sorting
          name={"Courses"}
          onChange={handleChangeCourse}
          values={courseFilterList}
        />
        <Sorting
          name={"Sort"}
          onChange={handleChangeCourse}
          values={sortingList}
        />
      </div>
      {sampleReview.map((review) => (
        <ReviewCard course={sampleCourse} review={review} />
      ))}
      <Pagination className='m-auto flex justify-center mt-12' total={10} />
    </div>
  );
};

export default ReviewPage;
