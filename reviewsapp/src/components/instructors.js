import React, { useState } from 'react';
import {instructorsData} from './data';
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa';

const Instructors = () => {
    const [index, setInstrIndex] = useState(0);
    const { name, image, text } = instructorsData[index];
    const createTxtList = (text)=>{
        let tempTxtArr = text.split(",");
        return tempTxtArr;
    };
    const prevPerson = () => {
     setInstrIndex((index)=>{
      return checkNumber(index-1);
     })
    };
    const nextPerson = () => {
      setInstrIndex((index)=>{
        return checkNumber(index+1);
       })
     };
    const checkNumber = (number) => {
      if (number > instructorsData.length - 1) {
        return 0;
      }
      if (number < 0) {
        return instructorsData.length - 1;
      }
      return number;
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
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
       </div>
      </div>
     );
}
 
export default Instructors;

