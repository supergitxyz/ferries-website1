import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__info">
      <div>
        <strong>False Creek Ferries</strong><br />
        1519 Foreshore Walk, Granville Island, Vancouver, BC<br />
        <a href="mailto:info@granvilleislandferries.bc.ca">Send Email</a> | 604 684 7781
      </div>
      <div className="footer__social">
        <a href="#" aria-label="Facebook">FB</a>
        <a href="#" aria-label="Twitter">TW</a>
        <a href="#" aria-label="Instagram">IG</a>
        <a href="#" aria-label="Tripadvisor">TA</a>
        <a href="#" aria-label="Flickr">FL</a>
      </div>
    </div>
    <div className="footer__acknowledgement">
      We acknowledge that False Creek Ferries operates on the unceded traditional territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh) Nations.
    </div>
    <div className="footer__copyright">
      &copy; {new Date().getFullYear()} False Creek Ferries
    </div>
  </footer>
);

export default Footer; 