import React from 'react';
import '../components_styles/Home.css';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="home-image-card">
          <img
            src="/Images/Home.png"
            alt="Sahira Township B06 Tower Elevation"
            className="home-hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;