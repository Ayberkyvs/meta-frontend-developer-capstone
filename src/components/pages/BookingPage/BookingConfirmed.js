import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import './BookingConfirmed.css'

const BookingConfirmed = () => {
  return (
    <div id='booking-confirmed'>
        <FaCircleCheck className='booking-confirmed__icon'/>
        <h2>Your reservation has been confirmed.</h2>
        <p>You will receive an email with all the details.</p>
    </div>
  )
}

export default BookingConfirmed