import React from 'react';
import BookingForm from './BookingForm'; // Import the BookingForm component
import '../css/BookingPage.css'

const BookingPage = () => {
  return (
    <div className="booking-page">
      <h1 className="page-title">Book Your Table at Little Lemon</h1>
      <BookingForm />
      {/* Additional content like images, contact details, or promotions can be added here */}
    </div>
  );
};

export default BookingPage;
