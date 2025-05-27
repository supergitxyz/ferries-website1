import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section
    className="hero-section"
    style={{ background: "url('/banner.jpg') center/cover no-repeat" }}
  >
    <div className="hero-section__content">
      
      <h1 className="hero-section__title">SERVING FALSE CREEK SINCE 1982</h1>
      <a href="/tickets" className="hero-section__cta">BUY TICKETS</a>
      
    </div>
  </section>
);

export default HeroSection; 