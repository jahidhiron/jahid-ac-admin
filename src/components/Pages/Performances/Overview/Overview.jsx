import React, { useState } from "react";
import { courseFilterList } from "../../../../utilities/enums/course";
import Sorting from "../../../Common/Sorting";
import PerformanceOverviewChart from "../../../Charts/PerformanceOverview";

const OverviewPage = () => {
  const [course, setCourse] = useState("");

  const handleChangeCourse = (value) => {
    setCourse(value);
  };

  return (
    <div className='p-5'>
      <div className='flex gap-5'>
        <h1 className='text-2xl font-bold'>Overview</h1>
        <Sorting
          name={"Courses"}
          onChange={handleChangeCourse}
          values={courseFilterList}
        />
      </div>
      <p>Get top insights about your performance</p>
      <div className='border py-3 w-full mt-10'>
        <div className='flex  block items-center gap-10 px-3'>
          <div className='w-fit px-3'>
            <h1 className='text-md font-semibold'>Total Revenue</h1>
            <h1 className='text-3xl font-semibold'>$1500</h1>
            <h1 className='text-md font-semibold'>$120 this month</h1>
          </div>
          <div>
            <h1 className='text-md font-semibold'>Total Enrollments</h1>
            <h1 className='text-3xl font-semibold'>1,500</h1>
            <h1 className='text-md font-semibold'>60 this month</h1>
          </div>
          <div>
            <h1 className='text-md font-semibold'>Instructor Rating</h1>
            <h1 className='text-3xl font-semibold'>4.50</h1>
            <h1 className='text-md font-semibold'>23 rating this month</h1>
          </div>
        </div>
        <PerformanceOverviewChart />
      </div>
    </div>
  );
};

export default OverviewPage;
