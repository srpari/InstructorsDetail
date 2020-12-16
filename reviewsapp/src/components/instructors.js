import React, { useState } from 'react';
import {instructorsData} from './data';
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa';

const Instructors = () => {
    const [index, setIndusIndex] = useState(0);
    const { name, image, text } = instructorsData[index];
    const createTxtList = (text)=>{
        let tempTxtArr = text.split(",");
        return tempTxtArr;
    };
    return ( 
      <div className="instr-container">
        <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
            <FaQuoteRight />
            </span>
        </div>
        <div className="instr-name"><h4>{name}</h4></div>
        <p className="instr-about">
        {createTxtList(text).map(text=><li>{text}</li>)}    
        </p>
        <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button className='next-btn'>
          <FaChevronRight />
        </button>
       </div>
      </div>
     );
}
 
export default Instructors;

