import React from 'react';
import '../style/Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Welcome">Welcome</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar; 