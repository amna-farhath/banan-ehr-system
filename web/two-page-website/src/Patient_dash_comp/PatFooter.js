// Footer.js
import React from 'react';
import './PatFooter.css'; // Custom styles for the footer

const PatFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left side: Logo and Copyright */}
        <div className="footer-left">
          <img 
            src={process.env.PUBLIC_URL + '/path_to_logo.png'} // Ensure correct path to the logo image
            alt="Banan Logo" 
            className="footer-logo"
          />
          <p>© 2024 Banan, Inc. All rights reserved.</p>
        </div> 

        {/* Middle sections with links */}
        <div className="footer-links">
          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/mission">Mission</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/press">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Right side: Social Media Icons */}
        <div className="footer-right">
          <div className="social-icons">
            <a href="/facebook" className="icon"><i className="fab fa-facebook-f"></i></a>
            <a href="/twitter" className="icon"><i className="fab fa-twitter"></i></a>
            <a href="/instagram" className="icon"><i className="fab fa-instagram"></i></a>
            <a href="/linkedin" className="icon"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PatFooter;
