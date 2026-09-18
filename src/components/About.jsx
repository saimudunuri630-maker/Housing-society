import React from 'react';
import '../components_styles/About.css';

const About = () => {
  return (
    <section className="about-wrapper" id="about-b06">
      <div className="about-content">
        {/* Title */}
        <h2 className="about-main-title">About Housing Society</h2>

        {/* Narrative */}
        <p className="about-text-content">
          HousingSociety.net is a platform created to promote real estate projects
          &mdash; including apartments, plots, and townships &mdash; that are
          affordable and value-driven. Our goal is to help people find reliable,
          low-cost housing options that fit their budget. With a focus on
          transparency and accessibility, we aim to connect communities with
          genuine, budget-friendly projects, making property ownership easier
          and more attainable for everyone.
        </p>

        {/* Center Building Card */}
        <div className="about-media-box">
          <img
            src="/Images/About.jpg"
            alt="Housing Society Project Showcase"
            className="about-building-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;