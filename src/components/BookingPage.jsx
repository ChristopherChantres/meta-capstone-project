import React, {useReducer} from 'react';
import BookingForm from './BookingForm'; // Import the BookingForm component
import '../css/BookingPage.css'

// Define the reducer function
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    default:
      return state;
  }
};

const BookingPage = () => {
  // useReducer to manage available times
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  // Function to update available times based on selected date
  const updateTimes = () => {
    // For now, return the same available times
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];    
    dispatch({ type: 'SET_TIMES', payload: times });
  };

  return (
    <div className="booking-page">
      <h1 className="page-title">Book Your Table at Little Lemon</h1>
      <BookingForm availableTimes={availableTimes} />
      {/* Additional content like images, contact details, or promotions can be added here */}
    </div>
  );
};

export default BookingPage;
