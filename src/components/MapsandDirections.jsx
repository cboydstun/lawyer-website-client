import React from "react";


const MapsandDirections = () => {
  return (
    <div>
      MapsandDirections
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD1R-01cFPivuWDZL_RhRVHrkGrJVH9rgg&zoom=16&maptype=roadmap&q=Kriebel Law Firm, PLLC Blanco Plaza 6609 Blanco Rd., Ste. 100, San Antonio, Texas78216"
      ></iframe>
    </div>
  );
};

export default MapsandDirections;
