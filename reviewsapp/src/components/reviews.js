import React, { useState } from 'react';
import {reviewsData} from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
    const [index, setname] = useState(0);
    const { name, job, image, text } = reviewsData[index];
    return ( 
      <div className="reviews-container">
        <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            {/* <span className='quote-icon'>
            <FaQuoteRight />
            </span> */}
             <div className="reviewer-name"><h5>{name}</h5></div>
        </div>
      </div>
     );
}
 
export default Reviews;

