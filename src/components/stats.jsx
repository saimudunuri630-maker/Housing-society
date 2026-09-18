import React from 'react';
import '../components_styles/stats.css';

const statsData = [
  { value: '112', label: 'UNITS' },
  { value: '1.4 Acres', label: 'TOTAL AREA' },
  { value: '3', label: 'BHK' },
  { value: 'East & West', label: 'FACING' },
  { value: '14', label: 'FLOORS' },
  { value: '1150-1266', label: 'SQ.FT' },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((item, index) => (
          <div className="stat-box" key={index}>
            <span className="stat-value">{item.value}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;