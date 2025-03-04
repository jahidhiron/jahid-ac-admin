import React, { useState } from "react";
import ReactQuill from "react-quill";

const Course_messages = () => {
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const [congratsMsg, setCongratsMsg] = useState("");
  const handleMessage = (e)=> {
    e.preventDefault()
  }
  return (
    <div>
      <h1 className='text-2xl font-bold'>Course messages</h1>

      <hr className='border-t-2 border-gray-400 mt-1' />
      <div className='mt-16 p-5'>
        <p>
          Write messages to your students (optional) that will be sent
          automatically when they join or complete your course to encourage
          students to engage with course content. If you do not wish to send a
          welcome or congratulations message, leave the text box blank.
        </p>
        <form onSubmit={handleMessage}> 
        <label className='mt-16 block '>
          <span className='font-semibold text-sm'>Welcome Message</span>
          <ReactQuill
            value={welcomeMsg}
            onChange={setWelcomeMsg}
            placeholder='Write the article description here...'
            className='mb-4 bg-white'
          />
        </label>
        <label className='mt-10 block '>
          <span className='font-semibold text-sm'>Congratulations  Message</span>
          <ReactQuill
            value={congratsMsg}
            onChange={setCongratsMsg}
            placeholder='Write the article description here...'
            className='mb-4 bg-white'
          />
        </label>
            <button
            type='submit'
            className='flex px-10 items-center mt-6 bg-primary text-white p-1 rounded'
          >
            Save
          </button>
        
      </form>
      </div>
    </div>
  );
};

export default Course_messages;
