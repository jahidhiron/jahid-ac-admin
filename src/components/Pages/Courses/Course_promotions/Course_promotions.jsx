import { Button, Modal, NumberInput, Select, Table, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Course_promotions = () => {

  const [opened, setOpened] = useState(false);
  const [coupons, setCoupons] = useState([
    { code: "WELCOME10", discount: "10%", type: "Percentage" },
    { code: "SUMMER20", discount: "20%", type: "Percentage" },
    { code: "FREESHIP", discount: "Free Shipping", type: "Flat" },
  ]);

  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount: "",
    type: "",
  });

  const handleAddCoupon = () => {
    if (newCoupon.code && newCoupon.discount && newCoupon.type) {
      setCoupons([...coupons, newCoupon]);
      setNewCoupon({ code: "", discount: "", type: "" }); // Reset form
      setOpened(false); // Close modal
    } else {
      toast.error("Please fill all fields!");
    }
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'>Promotions</h1>

      <hr className='border-t-2 border-gray-400 mt-1' />
      <div className='mt-6'>
        <h2 className='font-bold text-xl'>Refer students</h2>
        <p>
          Any time a student uses this link, we will credit you with the sale.{" "}
          <Link to={"/"} className='text-blue-600'>
            Learn more
          </Link>
        </p>
        <div className='mt-5'>
          <label className='block font-semibold text-sm mb-2'>
            Referral Link
          </label>
          <div className='flex items-center gap-3'>
            <TextInput
              value='https://example.com/referral-link'
              readOnly
              className='flex-1'
            />
            <button
            className="text-white bg-primary px-6 py-1 rounded"
              onClick={() => {
                navigator.clipboard.writeText(
                  "https://example.com/referral-link"
                );
                toast.success("Referral link copied to clipboard!");
              }}
            >
              Copy
            </button>
          </div>
        </div>

         <div className="mt-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold mb-3">Coupon Codes</h2>
      
      {/* Button to open modal */}
      <button   className="text-white bg-primary px-6 py-1 rounded" onClick={() => setOpened(true)} >
        Add New Code
      </button>
      </div>
      {/* Table for displaying coupon codes */}
      <Table highlightOnHover>
        <thead>
          <tr className="bg-white text-lg">
            <th className="text-start  p-2">Code</th>
            <th className="text-start  p-2">Discount</th>
            <th className="text-start  p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon, index) => (
            <tr key={index} className="border-b p-2">
              <td className="p-2">{coupon.code}</td>
              <td className="p-2">{coupon.discount}</td>
              <td className="p-2">{coupon.type}</td>
            </tr>
          ))}
        </tbody>
      </Table>


      {/* Modal for adding new coupon */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add New Coupon Code"
        centered
      >
        <div className="space-y-4">
          <TextInput
            label="Coupon Code"
            placeholder="Enter coupon code"
            value={newCoupon.code}
            onChange={(e) =>
              setNewCoupon({ ...newCoupon, code: e.target.value })
            }
            required
          />
          <NumberInput
            label="Discount"
            placeholder="Enter discount amount"
            value={newCoupon.discount}
            onChange={(value) =>
              setNewCoupon({ ...newCoupon, discount: value })
            }
            required
          />
          <Select
            label="Discount Type"
            placeholder="Select type"
            data={[
              { value: "Percentage", label: "Percentage" },
              { value: "Flat", label: "Flat" },
            ]}
            value={newCoupon.type}
            onChange={(value) =>
              setNewCoupon({ ...newCoupon, type: value })
            }
            required
          />
        </div>

        <button
          onClick={handleAddCoupon}
      className="text-white bg-primary px-6 py-1 rounded"
          fullWidth
        >
          Add Coupon
        </button>
      </Modal>
    </div>
      </div>
    </div>
  );
};

export default Course_promotions;
