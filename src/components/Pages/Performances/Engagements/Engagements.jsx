import React, { useState } from "react";
import { courseFilterList } from "../../../../utilities/enums/course";
import Sorting from "../../../Common/Sorting";
import PerformanceEngagementChart from "../../../Charts/PerformanceEngagement";

const EngagementsPage = () => {
  const [course, setCourse] = useState("");

  const handleChangeCourse = (value) => {
    setCourse(value);
  };
  return (
    <div className='p-5'>
      {" "}
      <div className='flex gap-5'>
        <h1 className='text-2xl font-bold'>Course Engagements</h1>
        <Sorting
          name={"Courses"}
          onChange={handleChangeCourse}
          values={courseFilterList}
        />
      </div>
      <p className='my-2'>Minutes consumed by active learners</p>
      <PerformanceEngagementChart />
    </div>
  );
};

export default EngagementsPage;
