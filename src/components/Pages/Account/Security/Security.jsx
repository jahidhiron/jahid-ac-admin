import React, { useState } from "react";
import { TextInput, Button, Switch, Tooltip } from "@mantine/core";
import AccountNav from "../../../Layout/AccountNav/AccountNav";

const SecurityPage = () => {
  const [isMfaEnabled, setIsMfaEnabled] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const handleToggleMfa = () => {
    setIsMfaEnabled((prev) => !prev);
  };

  const handlePasswordChange = () => {
    setIsPasswordChanged(true);
    // Add your password change logic here
  };

  return (
    <div className="p-6  mx-auto bg-white shadow-md rounded-lg">
        <AccountNav />
      <h1 className="text-2xl font-bold mb-4">Account Security</h1>
      <hr className="border-t-2 border-gray-200 mb-6" />

      {/* Email Section */}
      <div className="mb-6">
        <TextInput
        value={"user@gmail.com"}
          label="Email"
          readOnly
          className="bg-white"
        />
      </div>

      {/* Password Section */}
      <div className="mb-6">
        <TextInput
          label="Password"
          value={"*******"}
          readOnly
       className="bg-white"
          rightSection={
            <Tooltip label="Change Password">
              <Button size="xs" variant="light" onClick={handlePasswordChange}>
                Change
              </Button>
            </Tooltip>
          }
        />
      </div>

      {/* Multi-Factor Authentication Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">
            Multi-Factor Authentication
          </h2>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Increase your account security by requiring that a code emailed to you
          be entered when you log in. For more information on how multi-factor
          authentication works, refer to our{" "}
          <a
            href="/help-center"
            className="text-blue-600 underline"
          >
            Help Center article
          </a>
          
        </p>
        <br />
            <Switch
            checked={isMfaEnabled}
            onChange={handleToggleMfa}
            size="lg"
            color="red"
            className="w-[60px]"
          />
      </div>

    </div>
  );
};

export default SecurityPage;
