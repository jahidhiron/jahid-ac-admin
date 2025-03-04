import React, { useState, useEffect } from "react";
import { RiArticleLine } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { errorMessage, successMessage } from "../../utilities/notification";

const LectureSection = ({ curriculum, setSections, sectionId }) => {
  const [contentType, setContentType] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [articleDescription, setArticleDescription] = useState("");
  const [contentSaved, setContentSaved] = useState(false);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      setTimeout(() => {
        setVideoFile(file);
        setVideoUrl(URL.createObjectURL(file));
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleConfirmVideoUpload = () => {
    if (!videoFile) {
      errorMessage("No video selected!");
      return;
    }
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              curriculum: section.curriculum.map((item) =>
                item.id === curriculum?.id
                  ? { ...item, content: videoFile.name }
                  : item
              ),
            }
          : section
      )
    );
    successMessage(`Video uploaded: ${videoFile.name}`);
    setContentSaved(true);
  };

  const handleDescriptionSave = () => {
    if (!articleDescription.trim()) {
      errorMessage("Please enter a description before saving.");
      return;
    }
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              curriculum: section.curriculum.map((item) =>
                item.id === curriculum?.id
                  ? { ...item, content: articleDescription }
                  : item
              ),
            }
          : section
      )
    );
    successMessage("Article saved successfully!");
    setContentSaved(true);
  };

  useEffect(() => {
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [videoUrl]);

  const handleRemoveContent = () => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              curriculum: section.curriculum.map((item) =>
                item.id === curriculum?.id ? { ...item, content: "" } : item
              ),
            }
          : section
      )
    );
    setVideoFile(null);
    setArticleDescription("");
    setContentType("");
    successMessage("Content removed!");
    setContentSaved(false);
  };

  return (
    <div className='p-6'>
      {!contentSaved ? (
        contentType === "" ? (
          <div className='flex justify-center items-center my-6 gap-6'>
            <div
              onClick={() => setContentType("video")}
              className='border group cursor-pointer hover:border-red-600 border-gray-400 rounded-lg w-[180px] p-4 shadow-md hover:shadow-lg transition-all duration-300'
            >
              <MdOndemandVideo className='text-4xl m-auto text-gray-600 group-hover:text-red-600' />
              <p className='mt-3 text-lg font-semibold text-center text-gray-600 group-hover:text-red-600'>
                Video
              </p>
            </div>
            <div
              onClick={() => setContentType("article")}
              className='border group cursor-pointer hover:border-red-600 border-gray-400 rounded-lg w-[180px] p-4 shadow-md hover:shadow-lg transition-all duration-300'
            >
              <RiArticleLine className='text-4xl m-auto text-gray-600 group-hover:text-red-600' />
              <p className='mt-3 text-lg font-semibold text-center text-gray-600 group-hover:text-red-600'>
                Article
              </p>
            </div>
          </div>
        ) : (
          <div className='border-gray-200 p-6 rounded-lg shadow-md relative'>
            <IoClose
              onClick={() => setContentType("")}
              className='text-2xl text-gray-500 absolute top-4 right-4 cursor-pointer hover:text-red-600 transition-all duration-200'
            />

            {contentType === "video" ? (
              <div>
                <h2 className='text-xl font-semibold mb-4 text-center'>
                  Upload Your Video
                </h2>
                <div className='border-2 border-dashed border-red-400 rounded-lg p-6 flex flex-col items-center justify-center'>
                  <MdOndemandVideo className='text-5xl text-red-500 mb-3' />
                  {isLoading ? (
                    <p className='text-gray-500'>Uploading...</p>
                  ) : videoFile ? (
                    <div className='text-center'>
                      <p className='text-gray-600'>
                        Uploaded Video:{" "}
                        <span className='font-semibold'>{videoFile.name}</span>
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className='text-gray-500 mb-4'>
                        Drag & drop your video here, or{" "}
                        <label
                          htmlFor='video-upload'
                          className='text-red-600 font-semibold cursor-pointer hover:underline'
                        >
                          browse
                        </label>
                      </p>
                      <input
                        type='file'
                        accept='video/*'
                        className='hidden'
                        id='video-upload'
                        onChange={handleVideoUpload}
                      />
                    </>
                  )}
                </div>
                {videoFile && (
                  <button
                    className='bg-primary text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-700 transition-all'
                    onClick={handleConfirmVideoUpload}
                  >
                    Confirm Video
                  </button>
                )}
              </div>
            ) : (
              <div>
                <h2 className='text-xl font-semibold mb-4 text-center'>
                  Write Article
                </h2>
                <ReactQuill
                  value={articleDescription}
                  onChange={setArticleDescription}
                  placeholder='Write the article description here...'
                  className='mb-4'
                />
                <button
                  className='bg-primary text-white px-6 py-2 rounded-lg mt-6 hover:bg-red-700 transition-all'
                  onClick={handleDescriptionSave}
                >
                  Save Description
                </button>
              </div>
            )}
          </div>
        )
      ) : (
        <div className='border-gray-200 p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4 text-center'>
            {contentType === "video" ? "Uploaded Video" : "Article Content"}
          </h2>
          {contentType === "video" ? (
            videoUrl ? (
              <div className='relative'>
                <IoClose
                  onClick={() => handleRemoveContent()}
                  className='text-2xl text-gray-500 absolute top-4 right-4 cursor-pointer hover:text-red-600 transition-all duration-200'
                />
                <br />
                <video
                  controls
                  className='w-fit h-[200px] rounded-lg shadow-lg'
                >
                  <source src={videoUrl} type={videoFile.type} />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <p className='text-gray-500 text-center'>No video available</p>
            )
          ) : (
            <div className='relative'>
              <IoClose
                onClick={() => handleRemoveContent()}
                className='text-2xl text-gray-500 absolute top-4 right-4 cursor-pointer hover:text-red-600 transition-all duration-200'
              />
              <div
                className='border p-4 rounded-lg bg-gray-100'
                dangerouslySetInnerHTML={{ __html: articleDescription }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LectureSection;
