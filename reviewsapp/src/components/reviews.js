import React, { useState } from 'react';
import {reviewsData} from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
    const [index, setname] = useState(0);
    const { name, job, image, text } = reviewsData[index];
    return ( 
      <div>
          {name}
      </div>
     );
}
 
export default Reviews;

