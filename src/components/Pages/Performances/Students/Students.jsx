import React, { useState } from "react";
import { courseFilterList } from "../../../../utilities/enums/course";
import Sorting from "../../../Common/Sorting";
import StudentCardSlider from "../../../UI/StudentCard";
import studentsData from "../../../../fakeData/students.json";
import WorldMapWithStudents from "../../../UI/GlobeMap";

const StudentsPage = () => {
  const [course, setCourse] = useState("");

  const handleChangeCourse = (value) => {
    setCourse(value);
  };
  return (
    <div className='p-5'>
      <div className='flex gap-5'>
        <h1 className='text-2xl font-bold'>Students</h1>
        <Sorting
          name={"Courses"}
          onChange={handleChangeCourse}
          values={courseFilterList}
        />
      </div>
      <p>
        <span className='text-xl'>58964</span> students
      </p>
      <StudentCardSlider students={studentsData} />
      <WorldMapWithStudents />
    </div>
  );
};

export default StudentsPage;
