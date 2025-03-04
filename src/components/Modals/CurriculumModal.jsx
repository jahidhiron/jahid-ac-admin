import { Modal } from "@mantine/core";
import React, { useState } from "react";
import { TextInput } from "@mantine/core";

const CurriculumModal = ({
  section,
  setSections,
  sections,
  opendCurriculumModal,
  setOpenCurriculumModal,
}) => {
  const [title, setTitle] = useState("");
  const close = () => {
    setOpenCurriculumModal(false);
  };

  const handler = () => {
    const extactSection = sections.find((a) => a?.id == section?.id);
    const newCurriculumId = (extactSection.curriculum?.length ?? 0) + 1;
    const newCurriculum = {
      id: newCurriculumId,
      type: section?.title,
      title: title,
      content: "",
    };
    setSections((prev) =>
      prev.map((sec) =>
        sec.id === section.id
          ? {
              ...sec,
              curriculum: [...(sec.curriculum ?? []), newCurriculum],
            }
          : sec
      )
    );
    setOpenCurriculumModal(false);
    setTitle("");
  };

  return (
    <div className='bg-red-200'>
      <Modal
        opened={opendCurriculumModal}
        onClose={close}
        title={section?.title
          ?.replace(/-/g, " ")
          ?.replace(/\b\w/g, (char) => char.toUpperCase())}
        centered
      >
        <TextInput
          onChange={(e) => setTitle(e.target.value)}
          name='title'
          label='Title'
          placeholder='Enter a Title'
        />
        <button
          onClick={handler}
          className='flex mt-5 capitalize items-center border p-2 rounded'
        >
          Add {section?.title}
        </button>
      </Modal>
    </div>
  );
};

export default CurriculumModal;
