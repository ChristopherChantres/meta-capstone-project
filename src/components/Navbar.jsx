import React from 'react'
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul className='navbar-ul'>
        <li><a href="/about-us">About us</a></li>
        <li><a href="/contact-us">Contact us</a></li>
        <li><a href="/reserve-table">Tables</a></li>
      </ul>
    </div>
  )
}

export default Navbar