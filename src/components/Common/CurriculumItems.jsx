import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";


const CurriculumItem = ({ handleModal, section, }) => {
  const [showCarriculums, setShowCurriculums] = useState(false);
  return (
    <div className="mt-3">
      {showCarriculums ? (
        <div className='flex mt-3 gap-1'>
          <button
            onClick={() => handleModal({ title: "lecture", id: section?.id })}
            className='flex hover:border-red-600 hover:text-red-600 border-gray-400 items-center border p-2 rounded'
          >
            <FiPlus /> Lecture
          </button>
          <button
            onClick={() => handleModal({ title: "quiz", id: section?.id })}
            className='flex hover:border-red-600 hover:text-red-600 border-gray-400 items-center border p-2 rounded'
          >
            <FiPlus /> Quiz
          </button>
          <button
            onClick={() =>
              handleModal({ title: "coding-exercise", id: section?.id })
            }
            className='flex hover:border-red-600 hover:text-red-600 border-gray-400 items-center border p-2 rounded'
          >
            <FiPlus /> Coding Exercise
          </button>
          <button
            onClick={() => handleModal({ title: "practice", id: section?.id })}
            className='flex hover:border-red-600 hover:text-red-600 border-gray-400 items-center border p-2 rounded'
          >
            <FiPlus /> Practice
          </button>
          <button
            onClick={() =>
              handleModal({ title: "assignment", id: section?.id })
            }
            className='flex hover:border-red-600 hover:text-red-600 border-gray-400 items-center border p-2 rounded'
          >
            <FiPlus /> Assignment
          </button>
          <button
              onClick={() => setShowCurriculums(false)}
            className='flex hover:border-red-600 hover:text-red-600 border-gray-400 items-center border p-2 rounded'
          >
            <RxCross1 />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowCurriculums(true)}
          className='flex gap-2 hover:border-red-600 hover:text-red-600 border-gray-400 items-center border p-2 rounded'
        >
          {" "}
          <FiPlus className='text-xl' /> Curriculum Item
        </button>
      )}
    </div>
  );
};

export default CurriculumItem;
