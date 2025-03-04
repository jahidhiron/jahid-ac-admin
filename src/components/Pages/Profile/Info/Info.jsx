import React, { useState, useEffect } from "react";
import { TextInput, Button, Textarea } from "@mantine/core";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const initialProfileData = {
    firstName: "John",
    lastName: "Doe",
    headline: "Software Engineer",
    biography: "Passionate about building scalable web applications.",
    website: "https://example.com",
    xLink: "https://x.com/johndoe",
    facebookLink: "https://facebook.com/johndoe",
    linkedinLink: "https://linkedin.com/in/johndoe",
    youtubeLink: "https://youtube.com/johndoe",
  };
  const [articleDescription, setArticleDescription] = useState("");
  const [profileData, setProfileData] = useState(initialProfileData);
  const [isChanged, setIsChanged] = useState(false);

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    // Check if any value has changed to enable/disable the save button
    const isProfileChanged = Object.keys(initialProfileData).some(
      (key) => profileData[key] !== initialProfileData[key]
    );
    setIsChanged(isProfileChanged);
  }, [profileData]);

  const handleSave = () => {
    console.log("Saved Data:", profileData);
    // Reset the initial data to the updated data after saving
    setIsChanged(false);
  };

  return (
    <div className='p-6'>
      <ul className='flex  pb-6'>
        <li
          className={`text-2xl px-3 cursor-pointer pb-2  border-b-4 border-black font-bold`}
        >
          Basic Information
        </li>
        <Link
        to={"/profile/avatar"}
          className={`text-2xl px-3 cursor-pointer pb-2 text-gray-500 border-b-4 border-gray-300`}
        >
          Profile Picture
        </Link>
      </ul>

      <h1 className='text-xl font-bold mb-4'>Profile Page</h1>
      <div className=' flex items-start justify-between gap-5'>
        <div className='w-full'>
          <TextInput
            label='First Name'
            value={profileData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            placeholder='Enter your first name'
            required
            size='lg'
          />
          <TextInput
            label='Last Name'
            value={profileData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            placeholder='Enter your last name'
            required
            size='lg'
          />
          <TextInput
            label='Headline'
            size='lg'
            value={profileData.headline}
            onChange={(e) => handleInputChange("headline", e.target.value)}
            placeholder='Enter your professional headline'
          />

          <label className='mt-3 block'>
            <span className='font-semibold text-lg'>Biography</span>
            <ReactQuill
              value={articleDescription}
              onChange={setArticleDescription}
              placeholder='Write the article description here...'
              className=' bg-white'
            />
            <small>
              To help learners learn more about you, your bio should reflect
              your Credibility, Empathy, Passion, and Personality. Your
              biography should have at least 50 words, links and coupon codes
              are not permitted.
            </small>
          </label>
        </div>

        {/* Unique Design for Social Links */}
        <div className='w-full'>
          <TextInput
            label='Website'
            size='lg'
            value={profileData.website}
            onChange={(e) => handleInputChange("website", e.target.value)}
            placeholder='https://yourwebsite.com'
          />
          <TextInput
            label='X (Twitter) Link'
            value={profileData.xLink}
            size='lg'
            onChange={(e) => handleInputChange("xLink", e.target.value)}
            placeholder='https://x.com/yourhandle'
            icon={<span className='font-bold text-lg'>X</span>}
          />
          <TextInput
            label='Facebook Link'
            size='lg'
            value={profileData.facebookLink}
            onChange={(e) => handleInputChange("facebookLink", e.target.value)}
            placeholder='https://facebook.com/yourhandle'
            icon={<i className='fab fa-facebook text-blue-600'></i>}
          />
          <TextInput
            label='LinkedIn Link'
            size='lg'
            value={profileData.linkedinLink}
            onChange={(e) => handleInputChange("linkedinLink", e.target.value)}
            placeholder='https://linkedin.com/in/yourhandle'
            icon={<i className='fab fa-linkedin text-blue-500'></i>}
          />
          <TextInput
            label='YouTube Link'
            size='lg'
            value={profileData.youtubeLink}
            onChange={(e) => handleInputChange("youtubeLink", e.target.value)}
            placeholder='https://youtube.com/yourchannel'
            icon={<i className='fab fa-youtube text-red-600'></i>}
          />
        </div>
      </div>

      <button
        disabled={!isChanged}
        className='flex px-10 disabled:bg-white disabled:text-primary disabled:border disabled:border-primary items-center mt-6 bg-primary text-white p-1 rounded'
      >
        Save
      </button>
    </div>
  );
};

export default ProfilePage;
