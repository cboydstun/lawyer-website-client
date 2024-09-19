import React from "react";

const MapsandDirections = () => {
  return (
    <div>
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD1R-01cFPivuWDZL_RhRVHrkGrJVH9rgg&zoom=16&maptype=roadmap&q=Kriebel Law Firm, PLLC Blanco Plaza 6609 Blanco Rd., Ste. 100, San Antonio, Texas78216"
      ></iframe>
      <div>
        <p>Kriebel Law Firm, PLLC San Antonio Office Blanco Plaza 6609 Blanco Rd.,
      Ste. 100 San Antonio, Texas 78216 Phone: 210-677-5586 Fax: 210-467-5788 To
      get directions to this location, click "Directions" or "View larger map"
      on the map below (Google Maps will open in a new window).</p>
      </div>
    <div>
    
    </div>

     
    </div>
  );
};

export default MapsandDirections;
