import React from 'react';
import '../css/Main.css'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main-content">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome to <span className="brand-name">Little Lemon</span></h2>
        <p>Your favorite place to enjoy delicious meals and great ambiance!</p>
      </section>

      {/* Featured Dishes Section */}
      <section className="featured-dishes">
        <h2>Our Featured Dishes</h2>
        <div className="card-container">
          <div className="card">
            <img src="lemon_chicken.jpg" alt="Dish 1" className="card-img" />
            <h3>Lemon Chicken</h3>
            <p>A classic dish with a zesty lemon twist. The top secret of the top secret!</p>
          </div>
          <div className="card">
            <img src="seafood_pasta.jpg" alt="Dish 2" className="card-img" />
            <h3>Seafood Pasta</h3>
            <p>Fresh seafood in a creamy sauce. Ask anyone about this one!</p>
          </div>
          <div className="card">
            <img src="vegetarian_delight.jpg" alt="Dish 3" className="card-img" />
            <h3>Vegetarian Delight</h3>
            <p>A healthy mix of seasonal vegetables. You can't wait to order!</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>At Little Lemon, we believe in the power of quality and tradition. Our chefs use only the finest ingredients to craft dishes that honor timeless recipes while adding a fresh, modern twist. Each meal is a celebration of flavor, from locally sourced produce to carefully selected spices. We are dedicated to creating an exceptional dining experience that blends the warmth of comfort food with the elegance of fine dining. Whether you're here for a casual meal or a special occasion, every dish reflects our passion for excellence and our commitment to making every visit memorable.</p>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <h2>Our Menu</h2>
        <p>Explore our menu to find your favorite dish.</p>
        <Link to='/#' className="menu-button">View Full Menu</Link>
      </section>

      {/* Reservations Section */}
      <section className="reservations-section">
        <h2>Make a Reservation</h2>
        <p>Discover our new feature for online booking</p>
        <Link to='/reserve-table' className="reserve-button">Reserve a Table</Link>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <blockquote>
          "Amazing food and atmosphere! The Lemon Chicken is a must-try!" - Sarah K.
        </blockquote>
        <blockquote>
          "Best dining experience ever. I love their Seafood Pasta!" - Samuel D.
        </blockquote>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Our Gallery</h2>
        <div className="gallery-container">
          <div className="img-wrapper">
            <img src="vegi1.jpg" alt="Vegi Dish 1" className="gallery-img" />
          </div>
          <div className="img-wrapper">
            <img src="vegi2.jpg" alt="Vegi Dish 2" className="gallery-img" />
          </div>
          <div className="img-wrapper">
            <img src="vegi3.jpg" alt="Vegi Dish 3" className="gallery-img" />
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="visit-section">
        <h2>Visit Us</h2>
        <p>Visit us at 123 Lemon St, Toronto, or call us at (123) 456-7890.</p>
        <p>Follow us on social media for updates!</p>
      </section>
    </div>
  );
};

export default Main;
