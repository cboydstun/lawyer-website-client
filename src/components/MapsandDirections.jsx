import React from "react";

const MapsandDirections = () => {
  return (
    <div>
      <iframe
        width="1100"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD1R-01cFPivuWDZL_RhRVHrkGrJVH9rgg&zoom=16&maptype=roadmap&q=Kriebel Law Firm, PLLC Blanco Plaza 6609 Blanco Rd., Ste. 100, San Antonio, Texas78216"
      ></iframe>
      <br/>
      <div>
        <p>
          Kriebel Law Firm, PLLC <br/>San Antonio Office Blanco Plaza 6609 Blanco
          Rd.,<p> Ste. 100 San Antonio, <br/>Texas 78216 <br/>Phone: 210-677-5586 Fax:
          210-467-5788 </p>To get directions to this location, <br/>click "Directions" or
          <p>"View larger map" on the map below </p>(Google Maps will open in a new
          window).
        </p>
      </div>
    </div>
  );
};

export default MapsandDirections;
