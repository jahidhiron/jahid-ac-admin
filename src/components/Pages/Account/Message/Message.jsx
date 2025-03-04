import React, { useState } from "react";
import { Checkbox, Button } from "@mantine/core";
import { toast } from "react-toastify";
import AccountNav from "../../../Layout/AccountNav/AccountNav";

const MessagePage = () => {
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
      <h1 className="text-2xl font-bold mb-4">Message Settings</h1>
      <hr className="border-t-2 border-gray-200 mb-6" />

      <div className="space-y-4">
        <Checkbox
          label="Turn Off Direct Messages"
          checked={notifications.directmessage}
          onChange={() => handleNotificationChange("emailUpdates")}
          size="lg"
          color="#DC2626"
        />
        <p>When you turn off direct messages, you will no longer be able to send or receive direct messages as an instructor.</p>
       
      </div>

   
         <button     onClick={handleSave} className='flex px-10 disabled:bg-white disabled:text-primary disabled:border disabled:border-primary items-center mt-6 bg-primary text-white p-1 rounded'>
        Save
      </button>
    </div>
  );
};

export default MessagePage;
