import React from 'react';
import '../components_styles/location.css';

const Location = () => {
  const directMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=17.525547,78.448555';

  // Embed URL centered with satellite mode (t=k), zoom 17, and &iwloc= to remove info popovers
  const mapEmbedUrl =
    'https://maps.google.com/maps?ll=17.525547,78.448555&t=k&z=17&ie=UTF8&iwloc=&output=embed';

  return (
    <section className="location-section" id="location">
      <div className="location-container">
        {/* Title */}
        <h2 className="location-title">Location</h2>

        {/* Address */}
        <p className="location-subtitle">
          Find us at Rajiv Swagruha Township, Mettakanigudem, Hyderabad, Telangana 500055
        </p>

        {/* Map Container */}
        <div className="map-card-wrapper">
          {/* Functional Single "Open in Maps" Pill */}
          <a
            href={directMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="open-maps-pill"
          >
            <span>Open in Maps</span>
            <svg
              className="open-icon"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>

          {/* Clean Map Frame */}
          <iframe
            title="Meghdoot Exotica B06 Tower Location"
            src={mapEmbedUrl}
            className="map-iframe-clean"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;