import { Accordion } from '@mantine/core';
import React from 'react';
import ThemedAccordion from '../Common/Accordian';


const CurriculumOptions = ({curriculum , sectionId, setSections}) => {

    return (
      <div>
        {curriculum?.length > 0 && <div className='m-3 p-3 rounded border border-gray-400'>
        
    <ThemedAccordion curriculum={curriculum} sectionId={sectionId} setSections={setSections}/>
        </div>}
      </div>
    );
};

export default CurriculumOptions;