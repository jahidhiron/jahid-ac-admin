import React from "react";
import { toast } from "react-toastify";
import AccountNav from "../../../Layout/AccountNav/AccountNav";

const GenAIProgramPage = () => {
  const handleApply = () => {
    toast.success("GenAI Program applied successfully!");
  };

  return (
    <div className="p-6 mx-auto bg-white shadow-md rounded-lg">
      <AccountNav />
      <h1 className="text-2xl font-bold mb-4">GenAI Program Overview</h1>
      <hr className="border-t-2 border-gray-200 mb-6" />

      <div className="space-y-6">
        {/* Introduction Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            What is the GenAI Program?
          </h2>
          <p className="text-gray-600">
            The GenAI Program is designed to provide advanced AI solutions tailored to meet specific needs in various industries. With a focus on personalization, automation, and data-driven decision-making, GenAI leverages cutting-edge machine learning algorithms to drive innovation and efficiency in your operations.
          </p>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Advanced Natural Language Processing (NLP) capabilities</li>
            <li>Real-time data analytics for actionable insights</li>
            <li>Predictive modeling and forecasting tools</li>
            <li>Customizable AI models for your specific use case</li>
            <li>Seamless integration with existing systems</li>
          </ul>
        </section>

        {/* Program Benefits Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Benefits of the GenAI Program
          </h2>
          <p className="text-gray-600">
            The GenAI Program offers numerous advantages to help organizations enhance their AI capabilities. By adopting our platform, you'll unlock:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Increased operational efficiency through automation</li>
            <li>Improved decision-making with data-driven insights</li>
            <li>Scalable AI solutions that grow with your business</li>
            <li>Access to expert AI support and consultation</li>
            <li>Future-proof technology with regular updates and innovations</li>
          </ul>
        </section>

        {/* Apply for Program Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            How to Apply for the GenAI Program
          </h2>
          <p className="text-gray-600 mb-4">
            Applying for the GenAI Program is quick and simple. Fill out the application form, provide details about your organization and AI needs, and one of our representatives will get in touch to discuss how we can tailor the program to your specific requirements.
          </p>
          <button
            onClick={handleApply}
            className="bg-primary text-white p-3 rounded-lg hover:bg-red-600"
          >
            Apply for GenAI Program
          </button>
        </section>
      </div>
    </div>
  );
};

export default GenAIProgramPage;
