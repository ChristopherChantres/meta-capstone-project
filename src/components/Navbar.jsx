import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul className='navbar-ul'>
        <li><Link to="/about-us">About us</Link></li>
        <li><Link to="/contact-us">Contact us</Link></li>
        <li><Link to="/reserve-table">Tables</Link></li>
      </ul>
    </div>
  )
}

export default Navbar