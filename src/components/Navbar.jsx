import React from 'react'
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul className='navbar-ul'>
        <li><a href="/about">About us</a></li>
        <li><a href="/contact">Contact us</a></li>
        <li><a href="/tables">Tables</a></li>
      </ul>
    </div>
  )
}

export default Navbar