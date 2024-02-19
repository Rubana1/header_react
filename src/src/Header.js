import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import the CSS file for styling

function Header() {
  useEffect(() => {
    // JavaScript logic to apply styles and functionality
    const header = document.querySelector('header');
    const logoContainer = document.querySelector('.logo-container');
    const navLinks = document.querySelectorAll('nav a');
    const searchBox = document.querySelector('.search-box');
    const cartLink = document.querySelector('#cartLink');

    // Apply styles and functionality using JavaScript
    header.style.backgroundImage = `url('/path/to/your/background-image.jpg')`; // Set the background image
    header.style.backgroundSize = 'cover'; // Make the background image cover the entire header
    header.style.backgroundPosition = 'center'; // Center the background image
    header.style.padding = '15px';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';

    logoContainer.style.display = 'flex';
    logoContainer.style.alignItems = 'center';
    logoContainer.style.marginRight = '10px';

    navLinks.forEach(link => {
      link.style.textDecoration = 'none';
      link.style.color = '#333';
      link.style.margin = '0 15px';
      link.style.fontSize = '18px';
      link.style.fontWeight = 'bold';
      link.style.padding = '15px';
      link.style.borderRadius = '5px';
    });

    searchBox.style.padding = '10px';
    searchBox.style.width = '250px';
    searchBox.style.backgroundColor = 'black';
    searchBox.style.color = 'white';
    searchBox.style.border = 'none';
    searchBox.style.borderRadius = '5px';
    searchBox.style.outline = 'none';

    cartLink.style.padding = '15px';
    cartLink.style.borderRadius = '5px';
  }, []); // Empty dependency array to run the effect only once

  return (
    <header>
      <div className="logo-container">
        <img src="/yummy-.avif" alt="logo" className="logo" />
      </div>
      <nav>
        <Link to="/Home" id="homeLink">Home</Link> {/* Use Link component */}
        <Link to="/AboutUs" id="aboutLink">About</Link> {/* Use Link component */}
        <Link to="/menu" id="menuLink">Menu</Link> {/* Use Link component */}
        <Link to="/ContactForm" id="contactLink">Contact</Link> {/* Use Link component */}
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-box" />
        </div>
        <Link to="/cart" id="cartLink"> {/* Use Link component */}
          {/* You can replace the cart logo URL below with your own */}
          <img src="/shopping-cart.png" alt="Cart Logo" className="cart-logo" />
        </Link>
        
      </nav>
    </header>
  );
}

export default Header;
