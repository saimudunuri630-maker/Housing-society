import React from 'react';
import '../components_styles/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-copyright">
          &copy; 2026 | Housingsociety.net &mdash; All Rights Reserved.
        </p>
        <p className="footer-powered">
          Powered by <span className="cfo-text">CFO</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;