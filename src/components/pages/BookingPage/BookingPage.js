import React from 'react'
import BookingForm from './BookingForm'
import './BookingPage.css'
import Heading from "../../ui/Heading/Heading";
import BookingConfirmed from './BookingConfirmed';

const BookingPage = () => {
    const [isBookingConfirmed, setIsBookingConfirmed] = React.useState(false);
    const availableTimesReducer = (state, action) => {
        switch (action.type) {
          case 'UPDATE_TIMES':
            // Dummy logic for changing available times based on date
            console.log("Form submitted with date: ", action.payload.date);
            return {
              ...state,
              availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00'],
            };
          default:
            return state;
        }
    };

    const initialState = {
        availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00']
    };

    const [state, dispatch] = React.useReducer(availableTimesReducer, initialState);

    const updateTimes = (date) => {
        dispatch({ type: 'UPDATE_TIMES', payload: { date } });
    };

    const submitData = (formData) => {
      console.log("Form Başarıyla Gönderildi, ", formData);
      setIsBookingConfirmed(true);
    }
  return (
    <section id='booking-page' className='grid'>
      <div id='booking-page__container'>
        <div id='booking-page__image'><img src="https://placehold.co/500x600"/></div>
        <div id="booking-page__form" className={`${isBookingConfirmed && "booking-page__form--confirmed"}`}>
          {isBookingConfirmed
          ? <BookingConfirmed />
          :
          <>
          <Heading title="Make Reservation" variant="section"/>
          <BookingForm
              availableTimes={state.availableTimes}
              dispatchOnDateChange={updateTimes}
              submitData={submitData}
            />
          </>
          }
        </div>
      </div>
    </section>
  )
}

export default BookingPage