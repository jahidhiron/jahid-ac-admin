import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import PerformanceSidebar from "./Sidebar";

const PerformanceLayout = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  return (
    <div className='bg-white'>
      <React.Fragment>
        <div className='dark:text-bodydark'>
          <div className='flex h-fit overflow-hidden'>
            <PerformanceSidebar
              drawerOpened={drawerOpened}
              setDrawerOpened={setDrawerOpened}
            />

            <main className='w-full'>
              <div className='mx-auto z-5'>
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default PerformanceLayout;
