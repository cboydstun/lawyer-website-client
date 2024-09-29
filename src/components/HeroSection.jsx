import React from "react";
import lawOfficeImg from "../assets/lawoffice.jpg";
import JcIcon from "../assets/Kriebellaw.png";

const HeroSection = () => {
  return (
    <div className="hero-container flex justify-center gap-5">
      <div>
        <img src={JcIcon} alt="Jacqueline Kriebel Law Firm Icon" />
      </div>
      <div>
        <img src={lawOfficeImg} alt="Law Firm Hero Image" />
      </div>
      <>
        <p className="text-2xl font bold text-justify">
          Aggressive. Knowledgeable.{" "}
          <p className="text-2xl font bold text-justify">Serious.</p>
          <p className="text-2xl font bold text-justify">
            Aggressive and Serious
          </p>
          Representation Since 2004
        </p>
      </>
    </div>
  );
};

export default HeroSection;
