import React, { useState } from 'react';
import '../components_styles/Layout.css';

const Layout = () => {
  const [activeTab, setActiveTab] = useState('site-layout');

  return (
    <section className="layout-section" id="floor-plans">
      <div className="layout-container">
        {/* Section Heading */}
        <h2 className="layout-title">Site Layout &amp; Floor Plans</h2>

        {/* Tab Selection Row */}
        <div className="layout-tabs">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'site-layout' ? 'active' : ''}`}
            onClick={() => setActiveTab('site-layout')}
          >
            Site Layout
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'floor-plan' ? 'active' : ''}`}
            onClick={() => setActiveTab('floor-plan')}
          >
            Floor Plan
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'map-location' ? 'active' : ''}`}
            onClick={() => setActiveTab('map-location')}
          >
            Map Location
          </button>
        </div>

        {/* Interactive Blueprint & Map Card */}
        <div className="layout-card">
          {activeTab === 'site-layout' && (
            <div className="blueprint-viewport">
              <img
                src="/Images/layout.png"
                alt="Master Site Layout"
                className="blueprint-img"
              />
            </div>
          )}

          {activeTab === 'floor-plan' && (
            <div className="blueprint-viewport">
              <img
                src="/Images/layoutPlan.jpg"
                alt="Floor Plan Unit Layout"
                className="blueprint-img"
              />
            </div>
          )}

          {activeTab === 'map-location' && (
            <div className="blueprint-viewport">
              <img
                src="/Images/map.jpg"
                alt="Township Satellite Map Location"
                className="blueprint-img"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Layout;