import React from "react";
import Navbar from "./Navbar";

const RatingsandReviews = () => {
  return (
    <div>
      <div>
        <h1>Ratings and Reviews</h1>
        <div
          style={{
            width: "650px",
            height: "1700px",
            overflow: "hidden",
            position: "relative",
            borderRadius: "3em",
            margin: "0 auto",
          }}
        >
          <iframe
            width="745px"
            height="700px"
            scrolling="no"
            style={{
              border: "none",
              height: "3000px",
              position: "absolute",
              left: "-30px",
              top: "-1000px",
            }}
            // scrolling="no"
            src="https://www.lawyers.com/san-antonio/texas/kriebel-law-firm-pllc-46824588-f/#reviews"
          ></iframe>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default RatingsandReviews;
