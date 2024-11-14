import React from 'react'
import BookingForm from './BookingForm'
import './BookingPage.css'
import Heading from "../../ui/Heading/Heading";
import BookingConfirmed from './BookingConfirmed';
import { fetchAPI, submitAPI } from '../../utils/api';
const BookingPage = () => {
    const [isBookingConfirmed, setIsBookingConfirmed] = React.useState(false);
    const availableTimesReducer = (state, action) => {
        switch (action.type) {
          case 'UPDATE_TIMES':
            try {
              if (action.payload.date === undefined || action.payload.date === null) {
                throw new Error('Date is undefined');
              }else {
                const data = fetchAPI(new Date(action.payload.date))
                if (data === undefined || data === null) {
                  throw new Error('Data is undefined');
                }
                return {availableTimes: data};
              }
            }catch (error) {
              console.error(error.message);
              return state;
            }
        }
    };

    const initialState = {
        availableTimes: fetchAPI(new Date()),
    };

    const [state, dispatch] = React.useReducer(availableTimesReducer, initialState);

    const updateTimes = (date) => {
        dispatch({ type: 'UPDATE_TIMES', payload: { date } });
    };

    const submitData = (formData) => {
      setIsBookingConfirmed(submitAPI(formData));
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
          <Heading title="Make a Reservation" variant="section"/>
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