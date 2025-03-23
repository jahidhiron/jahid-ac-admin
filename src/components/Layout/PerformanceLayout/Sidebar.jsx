import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const menuSections = [
  {
    items: [
      {
        value: "Overview",
        path: "",
      },
      {
        value: "Students",
        path: "students",
      },
      {
        value: "Reviews",
        path: "reviews",
      },
      {
        value: "Engagements",
        path: "engagements",
      },
      {
        value: "Traffic & Conversation",
        path: "traffic-and-conversation",
      },
    ],
  },
];

const PerformanceSidebar = ({ drawerOpened, setDrawerOpened }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleVisit = (path) => {
    navigate(`/performance/${path}`);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const renderMenuSection = (section) => (
    <div key={section.title} className='mb-5 h-full sm:w-[250px]'>
      <ul>
        {section.items.map((item, index) => {
          const isActive = location.pathname === `/performance/${item.path}`;
          const isChildActive = item.children?.some(
            (child) => location.pathname === `/performance/${child.path}`
          );

          return (
            <li key={item.path} className=''>
              <div
                onClick={() =>
                  item.children ? toggleDropdown(index) : handleVisit(item.path)
                }
                className={`flex items-center font-bold  border-b p-3 text-md gap-2 cursor-pointer transition-colors 
                  ${isActive || isChildActive ? "bg-white" : ""}`}
              >
                {item.value}
                {item.children && (
                  <MdKeyboardArrowDown
                    className={`transition-transform text-xl duration-200 ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown Child Items */}
              {item.children && activeDropdown === index && (
                <ul className='ml-4 mt-2'>
                  {item.children.map((child) => {
                    const isChildSelected =
                      location.pathname === `/performance/${child.path}`;
                    return (
                      <li
                        key={child.path}
                        onClick={() => handleVisit(child.path)}
                        className={`text-lg font-bold cursor-pointer mb-2 transition-colors 
                          ${isChildSelected ? "" : "bg-white"}`}
                      >
                        {child.value}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className='relative w-[250px] bg-gray-100 py-3'>
      <div className='hidden md:block'>
        <h1 className='flex pb-7 font-bold text-xl items-center gap-2'>
          Performance
        </h1>
        {menuSections.map(renderMenuSection)}
      </div>
    </div>
  );
};

export default PerformanceSidebar;
