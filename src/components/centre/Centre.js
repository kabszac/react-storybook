import React from 'react';
import './Centre.css'
const Centre = (props) => {
    return (
        <div className='centre'>
           {props.children} 
        </div>
    );
};

export default Centre;