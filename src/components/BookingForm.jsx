import React, { useState } from 'react';
import '../css/BookingForm.css'; // Import the CSS file for styling
import { submitAPI } from '../api/dummyFunctions';

const BookingForm = ({ availableTimes = [], onDateChange = () => {}  }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));

    if (id === 'date') {
      onDateChange(value); // Call onDateChange when the date changes
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit the form data using submitAPI
    const isSuccess = await submitAPI(formData);
    if (isSuccess) {
      alert('Reservation successfully submitted!');
    } else {
      alert('Failed to submit the reservation.');
    }
  };

  const renderOptions = (
    availableTimes.map((time, index) => {
      return <option key={index}>{time}</option>
    })
  )

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Reserve Your Table</h2>
      
      <div className="form-group">
        <label htmlFor="date">Choose date</label>
        <input type="date" id="date" value={formData.date} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label htmlFor="time">Choose time</label>
        <select id="time" value={formData.time} onChange={handleChange} required>
          <option value="" disabled>Select time</option>
          {renderOptions}
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input type="number" id="guests" value={formData.guests} onChange={handleChange} min="1" max="10" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={formData.occasion} onChange={handleChange} required>
          <option value="" disabled>Select occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Casual</option>
        </select>
      </div>
      
      <button type="submit" className="submit-btn">Make Your Reservation</button>
    </form>

  );
};

export default BookingForm;
