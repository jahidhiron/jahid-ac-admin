import React, { useState } from 'react';

const Course_captions = () => {
    const [enable, setEnable] = useState(false)
    return (
        <div>
           <div className='flex justify-between items-center'>
             <h1 className='text-2xl font-bold'>Captions</h1>
             <button onClick={()=> setEnable(!enable)} className='bg-primary text-white px-5 py-1 rounded'>
                {enable ? "Enable" : "Disable"}
             </button>
           </div>
      <hr className='border-t-2 border-gray-400 mt-1' />
      <p className="mt-5">Learners of all levels of language proficiency highly value subtitles as it helps follow, understand and memorize the content. Also having subtitles to ensure the content is accessible for those that are deaf or hard of hearing is crucial. Learn more.</p>
        </div>
    );
};

export default Course_captions;