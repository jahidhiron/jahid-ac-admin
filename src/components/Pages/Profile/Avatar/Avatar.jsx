import React, { useState } from "react";
import { Button, FileInput } from "@mantine/core";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProfilePicturePage = () => {
  const [currentImage, setCurrentImage] = useState(
    "https://via.placeholder.com/150" // Placeholder for existing profile image
  );
  const [newImage, setNewImage] = useState(null);

  const handleImageChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewImage(reader.result); // Set preview for the selected image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (newImage) {
      setCurrentImage(newImage); // Update current image to the new image
      setNewImage(null); // Reset new image preview after saving
      toast.success("Profile picture updated successfully!");
    }
  };

  return (
    <div className='p-6'>
      <ul className='flex pb-6'>
        <Link
        to={"/profile/basic-informations"}
          className={`text-2xl px-3 cursor-pointer pb-2 text-gray-500 border-b-4 border-gray-300`}
        >
          Basic Information
        </Link>
        <li
          className={`text-2xl px-3 cursor-pointer pb-2  border-b-4 border-black font-bold`}
        >
          Profile Picture
        </li>
      </ul>
      <h1 className='text-xl font-bold mb-4'>Update Profile Picture</h1>
      <div className='flex items-center space-x-6'>
        {/* New Image Preview */}
        {newImage ? (
          <div>
            <img
              src={newImage}
              alt='New Profile Preview'
              className='w-40 h-40 rounded-full object-cover mt-2 border border-gray-300'
            />
          </div>
        ) : (
          <img
            src={currentImage}
            alt='Current Profile'
            className='w-40 h-40 rounded-full object-cover mt-2 border border-gray-300'
          />
        )}
      </div>

      {/* File Input */}
      <div className='mt-4'>
        <FileInput
          label='Upload New Profile Picture'
          placeholder='Choose file'
          accept='image/*'
          onChange={handleImageChange}
        />
      </div>

      {/* Save Button */}
      <button className='flex px-10 disabled:bg-white disabled:text-primary disabled:border disabled:border-primary items-center mt-6 bg-primary text-white p-1 rounded'>
        Save
      </button>
    </div>
  );
};

export default ProfilePicturePage;
