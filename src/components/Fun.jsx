import React from 'react';
import '../components_styles/Fun.css';

const amenities = [
  {
    id: 1,
    title: 'Gym',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 7v3h-2v4h2v3h-3v-4H7v4H4v-3h2v-4H4V7h3v4h10V7h3zM2 9h2v6H2V9zm18 0h2v6h-2V9z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Yoga',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="4" r="2.5" />
        <path d="M12 7.5c-1.5 0-3 1-3.5 2.5l-1.8 4.2 1.8.8 1.5-3.5h1.5l1.5 3.5 1.8-.8-1.8-4.2c-.5-1.5-2-2.5-3-2.5zm-5.5 8.5l-2.5 4 1.7 1 2.3-3.7V22h2v-5H9.5v.5zm11 0l-1.5 1.3V22h2v-4.7l2.3 3.7 1.7-1-2.5-4h-2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Pool',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="16" cy="4" r="2" />
        <path d="M20 9.5l-4.5-2.2c-.5-.2-1-.2-1.5 0L9 9.8l1 1.7 4-2.1v2.1l-5 2.5-4-2-1 1.7 4.5 2.3c.5.3 1.1.3 1.6 0l4.4-2.2v2.2l5.5-2.8V9.5zM2 18.5c1.5 0 2.5.8 4 0 1.5-.8 2.5 0 4 0 1.5 0 2.5-.8 4 0 1.5.8 2.5 0 4 0 1.5 0 2.5-.8 4 0v2c-1.5 0-2.5.8-4 0-1.5-.8-2.5 0-4 0-1.5 0-2.5-.8-4 0-1.5.8-2.5 0-4 0-1.5 0-2.5-.8-4 0v-2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Walking Area',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="13.5" cy="4" r="2" />
        <path d="M13.5 7.5c-.8 0-1.5.4-2 1l-3 3.5 1.5 1.3 2.5-2.8V15l-3 4.5 1.6 1.1 3.4-5.1V22h2v-8.5l2-2.5 2.5 2.5 1.4-1.4-3.5-3.5c-.5-.6-1.1-1-1.9-1h-1z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Conference Room',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 2H5c-1.1 0-2 .9-2 2v16h2V4h14v16h2V4c0-1.1-.9-2-2-2zm-7 2H7v16h5V4zm1 7h2v2h-2v-2z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'EV Charging',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15v-3.5H8.5l3.5-6.5v3.5h2.5L11 17zm9-9h-1v7h1c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Creche',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 3v18h2v-3h6l3.5 3h2.5l-4-4V3H7zm2 2h6v2H9V5zm0 4h6v2H9V9zm0 4h6v2H9v-2z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Auditorium',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 10v7h16v-7c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4zm-2 9v-7c0-2.8 1.9-5.1 4.5-5.8V4h2v2h7V4h2v2.2c2.6.7 4.5 3 4.5 5.8v7h-2v2h-2v-2H6v2H4v-2H2z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Garden',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.5 2 5.5 4.5 5 8c-1.7.5-3 2.1-3 4 0 2.2 1.8 4 4 4h5v4h-2v2h6v-2h-2v-4h5c2.2 0 4-1.8 4-4 0-1.9-1.3-3.5-3-4-.5-3.5-3.5-6-7-6z" />
      </svg>
    ),
  },
  {
    id: 10,
    title: 'Car Parking',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 9.2l-1.5-4.4c-.3-.8-1-1.3-1.9-1.3H8.5c-.9 0-1.6.5-1.9 1.3L5.1 9.2C3.8 9.6 3 10.7 3 12v6h2v2h3v-2h8v2h3v-2h2v-6c0-1.3-.8-2.4-2.1-2.8zM7.5 5.5h9l1 3H6.5l1-3zm-1 9.5c-.8 0-1.5-.7-1.5-1.5S5.7 12 6.5 12s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm11 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
      </svg>
    ),
  },
];

const Fun = () => {
  return (
    <section className="fun-section" id="amenities">
      <div className="fun-container">
        {/* Title */}
        <h2 className="fun-title">Extra Fun, More Happiness</h2>

        {/* Narrative Paragraph */}
        <p className="fun-description">
          Extra fun for children &amp; alike starts the moment you are on the
          elevation at the grand floor. Designated blocks have their own areas
          for children so that they don’t have to move far from the block once
          they come down. Adventurous ones in an extra proactive area for
          growing and sweating out &mdash; swing over or slide &amp; glide, you
          sure are in for extra fun here!
        </p>

        {/* 3-Column Amenities Grid */}
        <div className="amenities-grid">
          {amenities.map((item) => (
            <div key={item.id} className="amenity-item">
              <span className="amenity-icon">{item.icon}</span>
              <span className="amenity-label">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fun;