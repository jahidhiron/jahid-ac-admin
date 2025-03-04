import React from "react";
import Draftcard from "../UI/Draftcard";
import courses from "../../fakeData/course.json";
import ContentCard from "../UI/ContentCard";

const ListPage = () => {
  const sortedCourses = [...courses].sort((a, b) =>
    a.status === "draft" ? -1 : 1
  );

  return (
    <div>
      <div className='space-y-4 my-4'>
        {sortedCourses.map((course) =>
          course.status === "draft" ? (
            <Draftcard key={course.id} content={course} />
          ) : (
            <ContentCard key={course.id} content={course} />
          )
        )}
      </div>

      <div className='mt-28 text-center'>
        {" "}
        <h2>Have questions? Here are our most popular instructor resources.</h2>
        <div className='mt-16 flex gap-6'>
          <div className='w-3/12'>
            <img
              className='w-[70px] m-auto'
              src='/resources/relevance-1.webp'
            />
            <h1 className='text-center mt-2 text-primary font-bold'>
              Test Video
            </h1>
            <p className='text-center mt-4  text-sm'>
              Send us a sample video and get expert feedback.
            </p>
          </div>
          <div className='w-3/12'>
            <img
              className='w-[70px] m-auto'
              src='/resources/communication.webp'
            />
            <h1 className='text-center mt-2 text-primary font-bold'>
              Instructor Community
            </h1>
            <p className='text-center mt-4  text-sm'>
              Connect with experienced instructors. Ask questions, browse
              discussions, and more.
            </p>
          </div>
          <div className='w-3/12'>
            <img className='w-[70px] m-auto' src='/resources/instructor.webp' />
            <h1 className='text-center mt-2 text-primary font-bold'>
              Teaching Center
            </h1>
            <p className='text-center mt-4  text-sm'>
              Learn about best practices for teaching on Udemy.
            </p>
          </div>
          <div className='w-3/12'>
            <img
              className='w-[70px] m-auto'
              src='/resources/impact-measurement.webp'
            />
            <h1 className='text-center mt-2 text-primary font-bold'>
              Marketplace Insights
            </h1>
            <p className='text-center mt-4 text-sm'>
              Validate your course topic by exploring our marketplace supply and
              demand.
            </p>
          </div>
          <div className='w-3/12'>
            <img
              className='w-[70px] m-auto'
              src='/resources/soft-skills.webp'
            />
            <h1 className='text-center mt-2 text-primary font-bold'>
              Help and Support
            </h1>
            <p className='text-center mt-4  text-sm'>
              Browse our Help Center or contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
