import React, { useState } from "react";
import { MdRadioButtonUnchecked, MdOutlineCheckCircle } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import { Drawer } from "@mantine/core";

const menuSections = [
  {
    title: "Plan your course",
    items: [
      { value: "Intended learners", path: "goals" },
      { value: "Course structure", path: "course-structure" },
      { value: "Setup & test video", path: "setup" },
    ],
  },
  {
    title: "Create your content",
    items: [
      { value: "Film & edit", path: "film-edit" },
      { value: "Curriculum", path: "curriculum" },
      { value: "Captions (optional)", path: "captions" },
      { value: "Accessibility (optional)", path: "accessibility" },
    ],
  },
  {
    title: "Publish your course",
    items: [
      { value: "Course landing page", path: "course-landing-page" },
      { value: "Pricing", path: "pricing" },
      { value: "Promotions", path: "promotions" },
      { value: "Course messages", path: "course-messages" },
    ],
  },
];

const CourseSidebar = ({ drawerOpened, setDrawerOpened }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [visited, setVisited] = useState(["Intended learners"]);

  const handleVisit = ({ value, path }) => {
    if (!visited.includes(value)) {
      setVisited((prev) => [...prev, value]);
    }
    // replace when dynamic
    const id = 202020;
    navigate(`/course/${id}/manage/${path}`);
    setDrawerOpened(false);
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Course Added");
    }, 2000);
  };

  const renderMenuSection = (section) => (
    <div key={section.title} className='mb-8'>
      <h1 className='font-bold text-xl mb-4'>{section.title}</h1>
      <ul>
        {section.items.map((item) => (
          <li
            key={item.path}
            onClick={() => handleVisit(item)}
            className='flex items-center text-lg gap-2 mb-3 cursor-pointer'
          >
            {visited.includes(item.value) ? (
              <MdOutlineCheckCircle className='text-2xl text-gray-500' />
            ) : (
              <MdRadioButtonUnchecked className='text-2xl text-gray-500' />
            )}
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className='relative'>
      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        padding='md'
        size='75%'
        title={
          <div className='flex justify-between items-center p-4'>
            <Link
              className='flex items-center gap-2 hover:text-blue-600'
              to='/courses'
            >
              <FaArrowLeft /> Back to Courses
            </Link>
          </div>
        }
        overlayOpacity={0.3}
        zIndex={1000}
      >
        <div className='px-4'>{menuSections.map(renderMenuSection)}</div>
      </Drawer>

      {/* Desktop Sidebar */}
      <div className='hidden md:block px-10'>
        <Link
          className='flex py-7 items-center gap-2 hover:text-blue-600'
          to='/courses'
        >
          <FaArrowLeft /> Back to Courses
        </Link>
        {menuSections.map(renderMenuSection)}
        <button
          onClick={handleSave}
          className='uppercase w-full text-white bg-primary px-6 py-2 font-bold'
        >
          {loading ? (
            <ImSpinner9 className='text-2xl m-auto animate-spin' />
          ) : (
            "Submit for Review"
          )}
        </button>
      </div>
    </div>
  );
};

export default CourseSidebar;
