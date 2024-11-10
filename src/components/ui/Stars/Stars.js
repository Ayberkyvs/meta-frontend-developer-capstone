import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa6";
import './Stars.css'

const Stars = ({ rating = 5 }) => {
    const totalStars = 5;
  return (
    <div className='stars'>
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className={index < rating ? 'stars__star--filled' : 'stars__star'}>
          {index < rating ? <FaStar /> : <FaRegStar />}
        </span>
      ))}
    </div>
  )
}

export default Stars