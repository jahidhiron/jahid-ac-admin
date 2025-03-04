import { TextInput, Select, Button } from "@mantine/core";
import React, { useState } from "react";
import ReactQuill from "react-quill";

const CourseLandingPage = () => {
  const [articleDescription, setArticleDescription] = useState("");
  const [dropdownValues, setDropdownValues] = useState({
    category: "",
    level: "",
    language: "",
    duration: "",
  });
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file); // Generate video preview URL
      setVideo(videoURL);
    }
  };

  const handleLandingPage = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const subtitle = e.target.subtitle.value;
    console.log(title, subtitle, articleDescription, dropdownValues);
  };

  const handleDropdownChange = (field, value) => {
    setDropdownValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'>Course Landing Page</h1>
      <hr className='border-t-2 border-gray-400 mt-1' />
      <div className='mt-3'>
        <p>
          Your course landing page is crucial to your success on Udemy. If it’s
          done right, it can also help you gain visibility in search engines
          like Google. As you complete this section, think about creating a
          compelling Course Landing Page that demonstrates why someone would
          want to enroll in your course. Learn more about creating your course
          landing page and course title standards.
        </p>
      </div>
      <div className='mt-6'>
        <form onSubmit={handleLandingPage}>
          <TextInput
            name='title'
            label='Course Title'
            placeholder='Insert your course title'
            description='Your title should be a mix of attention-grabbing, informative, and optimized for search'
          />
          <TextInput
            mt={5}
            name='subtitle'
            label='Course Subtitle'
            placeholder='Insert your course subtitle'
            description="Use 1 or 2 related keywords, and mention 3-4 of the most important areas that you've covered during your course."
          />
          <label className='mt-3 block'>
            <span className='font-semibold text-sm'>Course Description</span>
            <ReactQuill
              value={articleDescription}
              onChange={setArticleDescription}
              placeholder='Write the article description here...'
              className='mb-4 bg-white'
            />
          </label>

          {/* Dropdown Selects */}
          <div className='grid grid-cols-2 gap-3'>
            <Select
              label='Category'
              placeholder='Select category'
              data={[
                { value: "development", label: "Development" },
                { value: "design", label: "Design" },
                { value: "business", label: "Business" },
                { value: "marketing", label: "Marketing" },
              ]}
              value={dropdownValues.category}
              onChange={(value) => handleDropdownChange("category", value)}
              required
            />

            <Select
              label='Level'
              placeholder='Select level'
              data={[
                { value: "beginner", label: "Beginner" },
                { value: "intermediate", label: "Intermediate" },
                { value: "advanced", label: "Advanced" },
              ]}
              value={dropdownValues.level}
              onChange={(value) => handleDropdownChange("level", value)}
              required
            />

            <Select
              mt={5}
              label='Language'
              placeholder='Select language'
              data={[
                { value: "english", label: "English" },
                { value: "spanish", label: "Spanish" },
                { value: "french", label: "French" },
                { value: "german", label: "German" },
              ]}
              value={dropdownValues.language}
              onChange={(value) => handleDropdownChange("language", value)}
              required
            />

            <Select
              mt={5}
              label='Course Duration'
              placeholder='Select duration'
              data={[
                { value: "1-3_hours", label: "1-3 hours" },
                { value: "3-6_hours", label: "3-6 hours" },
                { value: "6-12_hours", label: "6-12 hours" },
                { value: "12+_hours", label: "12+ hours" },
              ]}
              value={dropdownValues.duration}
              onChange={(value) => handleDropdownChange("duration", value)}
              required
            />
          </div>

          {/* Image Upload */}
          <div className='mt-5'>
            {image && (
              <div>
                <span className='block font-semibold'>Image Preview:</span>
                <img
                  src={image}
                  alt='Uploaded Preview'
                  className='mt-2 w-64 h-36 object-cover rounded'
                />
              </div>
            )}
            <label className='block mb-2 font-semibold text-sm'>
              Upload Course Image
            </label>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='mb-4'
            />
          </div>

          {/* Video Upload */}
          <div className='mt-5'>
            {video && (
              <div>
                <span className='block font-semibold'>Video Preview:</span>
                <video
                  src={video}
                  controls
                  className='mt-2 w-64 h-36 object-cover rounded'
                ></video>
              </div>
            )}
            <label className='block mb-2 font-semibold text-sm'>
              Upload Course Video
            </label>
            <input
              type='file'
              accept='video/*'
              onChange={handleVideoChange}
              className='mb-4'
            />
          </div>

          <Button
            type='submit'
            className='flex px-10 items-center mt-6 bg-primary text-white p-1 rounded'
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CourseLandingPage;
