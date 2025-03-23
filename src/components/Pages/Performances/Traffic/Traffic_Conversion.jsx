import React, { useState } from "react";
import Sorting from "../../../Common/Sorting";
import { courseFilterList } from "../../../../utilities/enums/course";
import TraffiConversionCourseTable from "../../../Tables/TraffiConversionCourseTable";
import { monthList } from "../../../../utilities/enums";

const courseData = [
  {
    course: "MERN Stack: All You Need to Know with Practical Project",
    visitors: "40,493",
    conversion: "38.61%",
  },
  {
    course: "React: All You Need to Know with Practical Project",
    visitors: "32,164",
    conversion: "48.25%",
  },
  {
    course: "Node.js: All You Need to Know with Practical Project",
    visitors: "34,189",
    conversion: "45.06%",
  },
  {
    course: "Python for Beginners: Complete Python Bootcamp",
    visitors: "28,732",
    conversion: "42.18%",
  },
  {
    course: "Data Structures & Algorithms: Masterclass",
    visitors: "25,961",
    conversion: "39.74%",
  },
];

const Traffic_Conversation = () => {
  const [course, setCourse] = useState("");
  const [months, setMonths] = useState("");

  const handleChangeCourse = (value) => {
    setCourse(value);
  };
  const handleChange = (value) => {
    setMonths(value);
  };

  return (
    <div className='p-5'>
      {" "}
      <div className='flex gap-5'>
        <h1 className='text-2xl font-bold'>Traffic & Conversion</h1>
        <Sorting
          name={"Courses"}
          onChange={handleChangeCourse}
          values={courseFilterList}
        />
      </div>
      <p className='my-2'>To learn more, select a course</p>
      <div className='mt-10'>
        <div className='flex items-center justify-end'>
          <div className='flex justify-center items-center gap-2 mb-5'>
            <Sorting
              name={"Select Month"}
              values={monthList}
              onChange={handleChange}
            />
          </div>
        </div>
        <TraffiConversionCourseTable courseData={courseData} />
      </div>
    </div>
  );
};

export default Traffic_Conversation;
