import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { MdOutlineBarChart } from "react-icons/md";
import { LuMessageSquareText } from "react-icons/lu";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  sidebarExpanded,
  setSidebarExpanded,
}) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <RiDashboardLine className='text-xl' />,
      activeCondition: pathname === "/" || pathname.includes("dashboard"),
      to: "/",
    },
    {
      title: "Posts",
      icon: <FaRegUser />,
      activeCondition: pathname.includes("post"),
      to: "/posts/",
    },
    {
      title: "Courses",
      icon: <MdOutlineOndemandVideo className='text-xl' />,
      activeCondition: pathname.includes("courses"),
      to: "/courses",
    },
    {
      title: "Books",
      icon: <FiBook />,
      activeCondition: pathname.includes("book"),
      to: "/books/",
    },
    {
      title: "Performance",
      icon: <MdOutlineBarChart className='text-xl' />,
      activeCondition: pathname.includes("performance"),
      to: "/performance/",
    },
    {
      title: "Communication",
      icon: <LuMessageSquareText className='text-xl' />,
      activeCondition: pathname.includes("communication"),
      to: "/communication/",
    },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen flex-col overflow-y-hidden bg-white duration-300 ease-linear text-black dark:text-white lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } ${
        sidebarExpanded
          ? "w-56 duration-300 ease-linear"
          : "w-16 duration-300 ease-linear"
      }`}
    >
      {/* Sidebar Header */}
      <div className='flex h-32 items-center justify-between gap-2 py-4 lg:pt-6.5'>
        <NavLink to='/' className='w-full text-center'>
          <img
            className={`m-auto ${
              sidebarExpanded
                ? "w-20 duration-300 ease-linear"
                : "w-14 h-fit duration-300 ease-linear"
            }`}
            src='/logo.png'
            alt='Logo'
          />
        </NavLink>
        {/* Close Button for Mobile */}
        <button className='lg:hidden p-2' onClick={() => setSidebarOpen(false)}>
          ✕
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        <nav className=''>
          <ul className='flex flex-col gap-1.5'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <div>
                  {/* Parent Menu Item */}
                  <div
                    className={`group flex items-center border-l-4 gap-2.5 rounded-sm py-2 h-[40px] px-4 hover:bg-gray-200 ${
                      item.activeCondition
                        ? "border-l-4 border-red-600"
                        : "border-white"
                    }`}
                  >
                    <NavLink
                      to={item.to || "#"}
                      className='flex items-center w-full'
                      onClick={() =>
                        item.children ? toggleDropdown(index) : undefined
                      }
                    >
                      {sidebarExpanded ? (
                        <div className='flex items-center duration-300 ease-linear'>
                          {item.icon}
                          <span className='pl-2'>{item.title}</span>
                        </div>
                      ) : (
                        <>{item.icon}</>
                      )}
                    </NavLink>
                    {item.children && sidebarExpanded && (
                      <MdKeyboardArrowDown
                        className={`transition-transform text-xl duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {item.children &&
                    activeDropdown === index &&
                    sidebarExpanded && (
                      <ul className='ml-6 mt-1 flex flex-col gap-1 overflow-hidden duration-300 ease-linear'>
                        {item.children.map((child, childIndex) => (
                          <li
                            key={childIndex}
                            className='duration-300 ease-linear'
                          >
                            <NavLink
                              to={child.to}
                              className='block py-2 pl-8 pr-4 text-sm text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700'
                            >
                              {child.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
