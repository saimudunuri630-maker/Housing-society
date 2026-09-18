import React from 'react';
import '../components_styles/Enquiry.css';

const Enquiry = () => {
  const handleClick = () => {
    // Scrolls to the contact / login form section
    const targetSection = document.getElementById('login') || document.getElementById('contact-us');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      className="floating-enquiry-tab"
      onClick={handleClick}
      aria-label="Enquiry"
    >
      ENQUIRY
    </button>
  );
};

export default Enquiry;