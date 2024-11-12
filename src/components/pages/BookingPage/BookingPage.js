import React from 'react'
import BookingForm from './BookingForm'

const BookingPage = () => {
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
      console.log("Form Başarıyla Gönderildi, ", formData)
    }
  return (
    <section id='booking-page' className='grid'>
        <BookingForm
            availableTimes={state.availableTimes}
            dispatchOnDateChange={updateTimes}
            submitData={submitData}
        />
    </section>
  )
}

export default BookingPage