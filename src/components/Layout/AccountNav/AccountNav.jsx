import React from "react";
import { NavLink } from "react-router-dom";

const AccountNav = () => {
  // Navigation menu items
  const navItems = [
    { label: "Account Security", path: "/account/security" },
    { label: "Notification Settings", path: "/account/notifications" },
    { label: "Message Settings", path: "/account/messages" },
    { label: "API Clients", path: "/account/api-clients" },
    { label: "GenAI Program", path: "/account/genai-program" },
    { label: "Close Account", path: "/account/close" },
  ];

  return (
    <div className="w-full mb-8">
      {/* Navigation menu */}
      <ul className="flex">
        {navItems.map((item, index) => (
          <li key={index} className="">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-xl px-3 cursor-pointer pb-2 border-b-4 ${
                  isActive
                    ? "text-primary border-primary font-bold"
                    : "text-gray-500 border-gray-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountNav;
