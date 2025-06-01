import React from 'react';
import './TopBar.css';

const TopBar = () => (
  <div className="topbar">
    <nav className="topbar__nav">
      <a href="/about-us">About Us</a>
    
      <a href="/employment">Employment</a>
      <a href="/faqs">FAQs</a>
      <a href="/contact-us">Contact Us</a>
    </nav>
  </div>
);

export default TopBar; 