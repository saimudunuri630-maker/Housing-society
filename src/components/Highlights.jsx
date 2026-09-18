import React, { useState } from 'react';
import '../components_styles/Highlights.css';

const highlightsData = {
  schools: [
    { name: 'Urban International School', distance: '1.9 KM' },
    { name: 'Geetanjali Concept School', distance: '2.6 KM' },
    { name: 'Tatva Global School', distance: '2.6 KM' },
    { name: 'Bachpan A Play School', distance: '3.0 KM' },
    { name: 'Orchids The International School', distance: '3.2 KM' },
  ],
  hospitals: [
    { name: 'Lifespan Super Speciality Hospital', distance: '2.3 KM' },
    { name: 'Malla Reddy Narayana Multispeciality Hospital', distance: '3.3 KM' },
    { name: 'Usha Mullapudi Cardiac Centre Shapur', distance: '3.6 KM' },
    { name: 'Lifespan Super Speciality Hospital', distance: '3.8 KM' },
  ],
  transport: [
    { name: 'Jeedimetla Bus Depot', distance: '1.2 KM' },
    { name: 'KPHB Metro Station', distance: '7.4 KM' },
    { name: 'Kukatpally Metro Station', distance: '8.3 KM' },
  ],
  malls: [
    { name: 'TRENDS', distance: '2.9 KM' },
    { name: 'TNR Northcity Mall & Multiplex', distance: '8.3 KM' },
    { name: 'LULU Mall', distance: '9.1 KM' },
    { name: 'Nexus Mall', distance: '10.5 KM' },
    { name: 'Manjeera Majestic Commercial', distance: '8.8 KM' },
  ],
  education: [
    { name: 'Malla Reddy Engineering College', distance: '6.7 KM' },
    { name: 'St. Peter’s Engineering College', distance: '7.6 KM' },
    { name: 'APJ Abdul Kalam Junior College', distance: '3.6 KM' },
    { name: 'Capital Degree & PG College', distance: '3.7 KM' },
  ],
  parks: [
    { name: 'Prashantha Vanam', distance: '3.2 KM' },
    { name: 'Pranavayu Urban Forest Park', distance: '2.7 KM' },
    { name: 'Children\'s Park', distance: '2.6 KM' },
  ],
};

const tabs = [
  { key: 'schools', label: 'SCHOOLS' },
  { key: 'hospitals', label: 'HOSPITALS' },
  { key: 'transport', label: 'TRANSPORT' },
  { key: 'malls', label: 'MALLS' },
  { key: 'education', label: 'EDUCATIONAL INSTITIONS' },
  { key: 'parks', label: 'PARKS' },
];

const Highlights = () => {
  const [activeTab, setActiveTab] = useState('schools');

  return (
    <section className="highlights-section" id="highlights">
      <div className="highlights-container">
        {/* Title */}
        <h2 className="highlights-title">Location Highlights</h2>

        {/* Tab Buttons Row */}
        <div className="highlights-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`highlight-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* List of Locations */}
        <div className="highlights-list">
          {highlightsData[activeTab].map((item, index) => (
            <div key={index} className="highlight-row">
              <div className="highlight-left">
                <span className="arrow-icon">&rarr;</span>
                <span className="highlight-name">{item.name}</span>
              </div>
              <span className="highlight-distance">{item.distance}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;