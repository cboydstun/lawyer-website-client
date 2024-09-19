import React from "react";
import MapsandDirections from "./MapsandDirections";
import RatingsandReviews from "./RatingsandReviews";
import ContactUs from "./ContactUs";

const More = () => {
  return (
    <div style={{ backgroundColor: "gray" }}>
      More
      <div>
        <p>Text Area</p>
      </div>
      <News/>
      <RatingsandReviews/>
      <ContactUs/>
      <MapsandDirections/>
    </div>
  );
};

export default More;
