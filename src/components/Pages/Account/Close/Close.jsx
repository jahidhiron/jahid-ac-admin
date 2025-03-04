import React, { useState } from "react";
import { toast } from "react-toastify";
import AccountNav from "../../../Layout/AccountNav/AccountNav";

const CloseAccountPage = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmChange = () => {
    setIsConfirmed(!isConfirmed);
  };

  const handleCloseAccount = () => {
    if (!isConfirmed) {
      toast.error("Please confirm before closing your account.");
      return;
    }
    // Add your close account logic here, e.g., API call
    toast.success("Your account has been closed successfully!");
  };

  return (
    <div className="p-6 mx-auto bg-white shadow-md rounded-lg">
      <AccountNav />
      <h1 className="text-2xl font-bold mb-4">Close Your Account</h1>
      <hr className="border-t-2 border-gray-200 mb-6" />

      <div className="space-y-6">
        {/* Introduction Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Are you sure you want to close your account?
          </h2>
          <p className="text-gray-600">
            Closing your account will permanently remove all your data, including personal details, order history, and other information. You will no longer be able to access your account or any associated services after this process is completed.
          </p>
        </section>

        {/* Confirmation Checkbox Section */}
        <section>
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={handleConfirmChange}
              id="confirmClose"
              className="h-5 w-5 border-gray-300 text-primary"
            />
            <label htmlFor="confirmClose" className="text-primary">
              I confirm that I want to close my account and understand the consequences.
            </label>
          </div>
        </section>

        {/* Action Section */}
        <section className="space-x-4">
          <button
            onClick={handleCloseAccount}
            className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 disabled:bg-gray-300"
            disabled={!isConfirmed}
          >
            Close My Account
          </button>
        </section>
      </div>
    </div>
  );
};

export default CloseAccountPage;
