import { Select } from "@mantine/core";
import React, { useState } from "react";

const Course_pricing = () => {
  const [dropdownValues, setDropdownValues] = useState({
    currency: "",
    priceTier: "",
  });
  const handleDropdownChange = (field, value) => {
    setDropdownValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'>Pricing</h1>

      <hr className='border-t-2 border-gray-400 mt-1' />
      <div className='mt-6'>
        <h1 className='text-lg font-bold'>Set a price for your course</h1>
        <p>
          Please select the currency and the price tier for your course. If
          you’d like to offer your course for free, it must have a total video
          length of less than 2 hours. Also, courses with practice tests can not
          be free.
        </p>
      </div>
      <form>
        <div className='grid grid-cols-2 gap-6'>
          {/* Currency Dropdown */}
          <Select
            mt={5}
            label='Currency'
            placeholder='Select currency'
            data={[
              { value: "usd", label: "USD" },
              { value: "eur", label: "EUR" },
              { value: "gbp", label: "GBP" },
              { value: "inr", label: "INR" },
            ]}
            value={dropdownValues.currency}
            onChange={(value) => handleDropdownChange("currency", value)}
            required
          />

          {/* Price Tier Dropdown */}
          <Select
            mt={5}
            label='Price Tier'
            placeholder='Select price tier'
            data={[
              { value: "free", label: "Free" },
              { value: "basic_10", label: "Basic - $10" },
              { value: "basic_20", label: "Basic - $20" },
              { value: "premium_50", label: "Premium - $50" },
              { value: "premium_100", label: "Premium - $100" },
              { value: "enterprise_500", label: "Enterprise - $500" },
              { value: "enterprise_1000", label: "Enterprise - $1000" },
            ]}
            value={dropdownValues.priceTier}
            onChange={(value) => handleDropdownChange("priceTier", value)}
            required
          />
          </div>
          <button
            type='submit'
            className='flex px-10 items-center mt-6 bg-primary text-white p-1 rounded'
          >
            Save
          </button>
        
      </form>
    </div>
  );
};

export default Course_pricing;
