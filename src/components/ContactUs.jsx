import React from 'react';
import '../css/ContactUs.css';  // Ensure to link this CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>If you have any questions, feel free to reach out to us. We're here to help!</p>
          <ul>
            <li><strong>Email:</strong> info@littlelemon.com</li>
            <li><strong>Phone:</strong> +1 123 456 7890</li>
            <li><strong>Address:</strong> 123 Lemon Street, Food Town, FL 12345</li>
          </ul>
          <img src="/logo3.png" alt="Little Lemon" className="contact-image" />
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
