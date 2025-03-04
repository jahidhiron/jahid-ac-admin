import React from 'react';

const Filter = ({...rest}) => {
    return (
        <div>
            <input {...rest} />
        </div>
    );
};

export default Filter;