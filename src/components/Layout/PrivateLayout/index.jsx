import React, { useContext, useState } from "react";

import { Navigate, Outlet } from "react-router-dom";
// import { AuthContext } from "../../../contexts/AuthContext";
import Sidebar from "./Sidebar";
import Header from "./Header";

const PrivateLayout = (props) => {
  // const auth = useContext(AuthContext);
  // if (!auth) {
  //   return <Navigate to={{ pathname: ROUTE.HOME }} />;
  // }
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "false"
  );


  return (
    <React.Fragment>
      <div className="dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} sidebarExpanded={sidebarExpanded} />
        <div className="relative flex flex-1 flex-col dark:border-strokedark   bg-gray-100 overflow-y-auto overflow-x-hidden">
          <Header setShowSideBar={setSidebarExpanded} showSideBar={sidebarExpanded} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto z-5  max-w-screen-2xl p-4  md:p-6 2xl:p-10">
             <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
    </React.Fragment>

  );
};

export default PrivateLayout;

