import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import BookHeader from "./Header";
import BookSidebar from "./Sidebar";

const BookLayout = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  return (
    <div>
      <React.Fragment>
        <div className='dark:text-bodydark'>
          <div className='flex h-fit overflow-hidden'>
            <BookSidebar
              drawerOpened={drawerOpened}
              setDrawerOpened={setDrawerOpened}
            />
            <div className='relative flex flex-1 flex-col dark:border-strokedark   bg-gray-100 overflow-y-auto overflow-x-hidden'>
              <BookHeader
                drawerOpened={drawerOpened}
                setDrawerOpened={setDrawerOpened}
              />
              <main>
                <div className='mx-auto    max-w-screen-2xl p-6  md:p-10 2xl:p-10'>
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

export default BookLayout;
