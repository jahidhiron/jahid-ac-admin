import { Input, Textarea, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import CurriculumOptions from "../../../Courses/CurriculumOptions";
import CurriculumItem from "../../../Common/CurriculumItems";
import CurriculumModal from "../../../Modals/CurriculumModal";

const CourseCurriculam = () => {
  const [sections, setSections] = useState([]);
  const [opendCurriculumModal, setOpenCurriculumModal] = useState(false);
  const [modalSection, setModalSection] = useState({});

  console.log(sections);

  const addSection = () => {
    setSections((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: "",
        description: "",
      },
    ]);
  };

  const handleSection = (e, id) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    setSections((prev) =>
      prev.map((section) =>
        section.id === id
          ? {
              ...section,
              title,
              description: desc,
            }
          : section
      )
    );
  };

  const handleModal = (section) => {
    setModalSection(section);
    setOpenCurriculumModal(true);
  };

  const removeSection = (sectionId) => {
    setSections((prevSections) =>
      prevSections.filter((section) => section.id !== sectionId)
    );
  };

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Curriculum</h1>
        <button className='flex mt-5 items-center border border-gray-400 p-2 rounded'>
          Bulk Upload
        </button>
      </div>
      <hr className='border-t-2 border-gray-400 mt-1' />
      <p className='mt-5'>
        Start putting together your course by creating sections, lectures and
        practice (quizzes, coding exercises and assignments).
        <br />
        <br />
        Start putting together your course by creating sections, lectures and
        practice activities (quizzes, coding exercises and assignments). Use
        your course outline to structure your content and label your sections
        and lectures clearly. If you’re intending to offer your course for free,
        the total length of video content must be less than 2 hours.
      </p>
      <div>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className='rounded-[10px] mb-6  border bg-white p-4 shadow-1 border-dark-400 dark:bg-boxdark dark:shadow-card sm:p-7.5'
          >
            {section?.title ? (
              <div>
                <h1 className='text-lg flex items-center'>
                  Section {index + 1}: {section?.title}{" "}
                  <FaTrash
                    className='text-sm ml-2 cursor-pointer hover:text-primary'
                    onClick={() => removeSection(section?.id)}
                  />
                </h1>

                <CurriculumOptions
                  curriculum={section?.curriculum}
                  sectionId={section.id}
                  setSections={setSections}
                />

                <CurriculumItem handleModal={handleModal} section={section} />
              </div>
            ) : (
              <form onSubmit={(e) => handleSection(e, section.id)}>
                <TextInput
                  name='title'
                  label='Title'
                  placeholder='Section Title'
                  defaultValue={section.title}
                />
                <Textarea
                  name='desc'
                  label='What will students be able to do at the end of this section?'
                  placeholder='Section Description'
                  defaultValue={section.description}
                />
                <button
                  type='submit'
                  className='flex mt-5 items-center border border-gray-400 p-2 rounded'
                >
                  Add Section
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
      <br />
      <button
        onClick={addSection}
        className='flex px-10 items-center border hover:border-primary hover:text-primary p-3 border-gray-400 rounded'
      >
        <FiPlus /> Add Section
      </button>
      <CurriculumModal
        opendCurriculumModal={opendCurriculumModal}
        setOpenCurriculumModal={setOpenCurriculumModal}
        section={modalSection}
        sections={sections}
        setSections={setSections}
      />
    </div>
  );
};

export default CourseCurriculam;
