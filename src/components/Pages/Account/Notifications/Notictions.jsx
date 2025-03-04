import React, { useState } from "react";
import { Checkbox, Button } from "@mantine/core";
import { toast } from "react-toastify";
import AccountNav from "../../../Layout/AccountNav/AccountNav";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    smsAlerts: false,
    productAnnouncements: true,
    marketingEmails: false,
    securityAlerts: true,
  });

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    console.log("Saved Notifications Settings:", notifications);
    toast.success("Notifications settings saved!");
  };

  return (
    <div className="p-6 mx-auto bg-white shadow-md rounded-lg">
        <AccountNav />
      <h1 className="text-2xl font-bold mb-4">Notifications Settings</h1>
      <hr className="border-t-2 border-gray-200 mb-6" />

      <div className="space-y-4">
        {/* Email Updates */}
        <Checkbox
          label="Email Updates"
          checked={notifications.emailUpdates}
          onChange={() => handleNotificationChange("emailUpdates")}
          size="lg"
          color="#DC2626"
        />

        {/* SMS Alerts */}
        <Checkbox
          label="SMS Alerts"
          checked={notifications.smsAlerts}
          onChange={() => handleNotificationChange("smsAlerts")}
          size="lg"
             color="#DC2626"
        />

        {/* Product Announcements */}
        <Checkbox
          label="Product Announcements"
          checked={notifications.productAnnouncements}
          onChange={() => handleNotificationChange("productAnnouncements")}
          size="lg"
             color="#DC2626"
        />

        {/* Marketing Emails */}
        <Checkbox
          label="Marketing Emails"
          checked={notifications.marketingEmails}
          onChange={() => handleNotificationChange("marketingEmails")}
          size="lg"
             color="#DC2626"
        />

        {/* Security Alerts */}
        <Checkbox
          label="Security Alerts"
          checked={notifications.securityAlerts}
          onChange={() => handleNotificationChange("securityAlerts")}
          size="lg"
             color="#DC2626"
        />
      </div>

   
         <button     onClick={handleSave} className='flex px-10 disabled:bg-white disabled:text-primary disabled:border disabled:border-primary items-center mt-6 bg-primary text-white p-1 rounded'>
        Save
      </button>
    </div>
  );
};

export default NotificationsPage;
