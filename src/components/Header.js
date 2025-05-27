import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="False Creek Ferries Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Plan Your Trip</a></li>
          <li><a href="/dock-locations">Dock Locations</a></li>
          <li><a href="/sight-seeing-cruises">Sight Seeing Cruises</a></li>
          <li><a href="/attractions">Attractions</a></li>
          <li><a href="/tickets">Tickets</a></li>
        </ul>
      </nav>
      {/* Hamburger menu for mobile (to be implemented) */}
      <div className="header__hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header; 