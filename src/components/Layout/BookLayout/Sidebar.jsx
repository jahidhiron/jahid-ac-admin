import React, { useState } from "react";
import { MdRadioButtonUnchecked, MdOutlineCheckCircle } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import { Drawer } from "@mantine/core";

const menuSections = [
  {
    title: "Book Details",
    items: [
      { value: "Intended audience", path: "intended-audience" },
      { value: "Book Informations", path: "book-informations" },
      { value: "Meta Information", path: "meta-information" },
      { value: "Publication Information", path: "publication-information" },
    ],
  },
  {
    title: "Media & Content",
    items: [
      { value: "Gallery", path: "gallery" },
      { value: "PDFs", path: "pdfs" },
      { value: "Preview PDF", path: "preview-pdf" },
      { value: "Description", path: "description" },
    ],
  },
  {
    title: "Publish your book",
    items: [
      { value: "Reviews", path: "reviews" },
      { value: "Pricing", path: "pricing" },
      { value: "Welcome messages", path: "welcome-messages" },
    ],
  },
];

const BookSidebar = ({ drawerOpened, setDrawerOpened }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [visited, setVisited] = useState(["Intended audience"]);

  const handleVisit = ({ value, path }) => {
    if (!visited.includes(value)) {
      setVisited((prev) => [...prev, value]);
    }
    // replace when dynamic
    const id = 303030;
    navigate(`/book/${id}/${path}`);
    setDrawerOpened(false);
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Book Added");
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
    <div className='relative pb-10'>
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
              to='/books'
            >
              <FaArrowLeft /> Back to Books
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
          to='/books'
        >
          <FaArrowLeft /> Back to Books
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

export default BookSidebar;
