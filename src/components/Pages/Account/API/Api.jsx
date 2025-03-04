import React, { useState } from "react";
import { Checkbox, Button } from "@mantine/core";
import { toast } from "react-toastify";
import AccountNav from "../../../Layout/AccountNav/AccountNav";

const APIClent = () => {
  const [notifications, setNotifications] = useState({
    directmessage: true });

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    console.log("Saved Message Settings:", notifications);
    toast.success("Message settings saved!");
  };

  return (
    <div className="p-6 mx-auto bg-white shadow-md rounded-lg">
        <AccountNav />
      <h1 className="text-2xl font-bold mb-4">Affiliate API</h1>
      <hr className="border-t-2 border-gray-200 mb-6" />
        <div className="mt-6"> 
            <p>Access to the Affiliate API on Udemy has been discontinued since 1/1/2025. To access the Affiliate API please review our instructions on <br />joining the Udemy Affiliate Program.</p>
        </div>
      
    </div>
  );
};

export default APIClent;
