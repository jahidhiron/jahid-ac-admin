import React, { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext"
import PublicSidebar from "./PublicSidebar";
const { PUBLIC_URL } = process.env;

const PublicLayout = (props) => {
  const auth = useContext(AuthContext);
  if (auth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <PublicSidebar />
        <div className="relative flex flex-1 flex-col dark:border-strokedark dark:bg-slate-900  bg-gray-200 overflow-y-auto overflow-x-hidden">
          {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4  md:p-6 2xl:p-10">
             <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default PublicLayout;
