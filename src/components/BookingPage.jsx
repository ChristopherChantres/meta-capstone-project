import React, {useReducer, useEffect} from 'react';
import BookingForm from './BookingForm'; // Import the BookingForm component
import '../css/BookingPage.css'
import { fetchAPI } from '../api/dummyFunctions';

// Define the reducer function
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload.times;
    default:
      return state;
  }
};

export const initializeTimes = async () => {
  const today = new Date();            // Get today's date
  const availableTimes = await fetchAPI(today);  // Fetch available times from API for today's date
  return availableTimes;
};

const updateTimes = async (selectedDate) => {
  const dateObj = new Date(selectedDate);
  const availableTimes = await fetchAPI(dateObj);  // API call
  return availableTimes;  // Return the times fetched from the API
};

const BookingPage = () => {
  // useReducer to manage available times
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  useEffect(() => {
    console.log("Component Mounting")
    const initializeAvailableTimes = async () => {
      const times = await initializeTimes(); // Fetch initial times
      console.log(times)
      dispatch({ type: 'SET_TIMES', payload: {times: times} });
    };
  
    initializeAvailableTimes();  // Fetch times when component mounts
  }, []);  
  
  const handleDateChange = async (selectedDate) => {
    const dateObj = new Date(selectedDate);
    const updatedTimes = await updateTimes(dateObj); // Call updateTimes with the selected date
    dispatch({ type: 'SET_TIMES', payload: { times: updatedTimes, date: selectedDate } }); // Dispatch state update
  };

  return (
    <div className="booking-page">
      <h1 className="page-title">Book Your Table at Little Lemon</h1>
      <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} />
    </div>
  );
};

export default BookingPage;
