import React, { useState } from 'react';
import '../css/BookingForm.css'; // Import the CSS file for styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${formData.guests} guests on ${formData.date} at ${formData.time} for a ${formData.occasion}`);
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
