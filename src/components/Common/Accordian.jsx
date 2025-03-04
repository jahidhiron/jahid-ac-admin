import React, { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs"; // Drag icon
import LectureSection from "../Courses/LectureSection";

const ThemedAccordion = ({ curriculum, sectionId, setSections }) => {
  const [activeIndices, setActiveIndices] = useState([]);
  
  const toggleAccordion = (index) => {
    setActiveIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("dragIndex", index);
    e.currentTarget.style.opacity = "0.5"; // Add visual feedback for drag start
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = "1"; // Reset opacity
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData("dragIndex"), 10);

    if (dragIndex === dropIndex) return;

    const reorderedCurriculum = [...curriculum];
    const [draggedItem] = reorderedCurriculum.splice(dragIndex, 1);
    reorderedCurriculum.splice(dropIndex, 0, draggedItem);

    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? { ...section, curriculum: reorderedCurriculum }
          : section
      )
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeCurriculum = (sectionId, curriculumIndex) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              curriculum: section.curriculum.filter(
                (_, index) => index !== curriculumIndex
              ),
            }
          : section
      )
    );
  };

  return (
    <div className="accordion">
      {curriculum?.map((item, index) => (
        <div
          key={item.id}
          className="accordion-item"
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          <div className="accordion-header flex py-2 text-xl  items-center">
            <span className="drag-icon cursor-grab mr-2">
              <BsGripVertical size={18} />
            </span>
            <span
              className="capitalize flex-1 flex items-center gap-1"
              onClick={() => toggleAccordion(index)}
            >
              <IoCheckmarkCircle /> <b>{item.type}</b> :{" "}
              <small>{item?.title}</small>
            </span>
            <FaTrash
              className="text-sm ml-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                removeCurriculum(sectionId, index);
              }}
            />
            <span className="accordion-icon ml-2">
              {activeIndices.includes(index) ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </span>
          </div>
          <div
            className={`accordion-content border-t-2 border-gray-400 transition-all duration-300 ${
              activeIndices.includes(index) ? "open max-h-screen" : "hidden max-h-0"
            }`}
          >
            {item?.type === "lecture" && (
              <div>
                <h1 className="text-center">
                  Select the main type of content. Files and links can be added
                  as resources. Learn about content types.
                </h1>
                <LectureSection setSections={setSections} curriculum={item} sectionId={sectionId}  />
              </div>
            )}
            {item?.type === "quiz" && (
              <div>
                <h1 className="text-center">Multiple Choice</h1>
              </div>
            )}
            {item?.type === "assignment" && (
              <div>
                <h1 className="text-center">Assignment Details</h1>
              </div>
            )}
            {item?.type === "coding-exercise" && (
              <div>
                <h1 className="text-center">Assignment Details</h1>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemedAccordion;
