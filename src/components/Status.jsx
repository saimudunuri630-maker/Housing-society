import React, { useState } from 'react';
import '../components_styles/Status.css';

const statusImages = [
  { id: 1, src: '/Images/status.png', alt: 'Project Status View 1' },
  { id: 2, src: '/Images/status2.png', alt: 'Project Status View 2' },
  { id: 3, src: '/Images/status3.jpg', alt: 'Project Status View 3' },
  { id: 4, src: '/Images/status4.jpg', alt: 'Project Status View 4' },
];

const Status = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? statusImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === statusImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="status-section">
      <div className="status-container">
        {/* Title */}
        <h2 className="status-title">Current Project Status - Nov 2025</h2>

        {/* Carousel Card Box */}
        <div className="carousel-card">
          {/* Left Arrow Button */}
          <button
            type="button"
            className="arrow-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            &#8249;
          </button>

          {/* Active Image */}
          <div className="carousel-image-wrapper">
            <img
              src={statusImages[currentIndex].src}
              alt={statusImages[currentIndex].alt}
              className="carousel-img"
            />
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="arrow-btn next-btn"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Status;