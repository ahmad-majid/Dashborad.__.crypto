import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2023 Crypto Dashboard</p>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
