import React, { useState } from "react";
import CourseSidebar from "./Sidebar";
import CourseHeader from "./Header";
import { Outlet } from "react-router-dom";

const CourseLayout = () => {
    const [drawerOpened, setDrawerOpened] = useState(false);
  return (
    <div>
      <React.Fragment>
        <div className='dark:text-bodydark'>
          <div className='flex h-fit overflow-hidden'>
            <CourseSidebar drawerOpened={drawerOpened} setDrawerOpened={setDrawerOpened} />
            <div className='relative flex flex-1 flex-col dark:border-strokedark   bg-gray-100 overflow-y-auto overflow-x-hidden'>
              <CourseHeader drawerOpened={drawerOpened} setDrawerOpened={setDrawerOpened}  />
              <main>
                <div className='mx-auto z-5   max-w-screen-2xl p-6  md:p-10 2xl:p-10'>
                  <Outlet />
                </div>
              </main>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default CourseLayout;
