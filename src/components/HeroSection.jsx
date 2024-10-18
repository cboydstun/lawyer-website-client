import React from "react";
import lawOfficeImg from "../assets/lawoffice.jpg";
import JcIcon from "../assets/kriebellaw.png";

const HeroSection = () => {
  return (
    <div className="hero-container flex justify-center gap-20">
      <div>
        <div>
          <img
            className="rounded-full"
            src={JcIcon}
            alt="Jacqueline Kriebel Law Firm Icon"
            height={450}
            width={300}
          />
        </div>
        {/* <div>
        <img className="rounded-lg shadow-lg src={lawOfficeImg} alt="Law Firm Hero Image" />
      </div> */}
        <>
          {/* <p className="text-2xl font bold text-justify">
            Aggressive. Knowledgeable.{" "}
            <p className="text-2xl font bold text-justify">Serious.</p>
            <p className="text-2xl font bold text-justify">
              Aggressive and Serious
            </p>
            Representation Since 2004
          </p> */}
        </>
      </div>
    </div>
  );
};

export default HeroSection;
