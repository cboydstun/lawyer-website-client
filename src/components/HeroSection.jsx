import React from "react";
import lawOfficeImg from "../assets/lawoffice.jpg";
import JcIcon from "../assets/kriebellaw.png";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-red-900/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-12">
          {/* Left Column - Image and Text */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <img
                className="rounded-full border-4 border-red-900/20 shadow-xl h-64 w-64 object-cover"
                src={JcIcon}
                alt="Jacqueline Kriebel Law Firm Icon"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-red-900">
                Aggressive. Knowledgeable. Serious.
              </h2>
              <p className="text-xl md:text-2xl text-gray-700">
                Providing Strong Legal Representation Since 2004
              </p>
              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-block bg-red-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors shadow-md"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Office Image */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent rounded-lg"></div>
            <img
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              src={lawOfficeImg}
              alt="Law Office"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
              <div className="space-y-2">
                <p className="text-white text-xl font-semibold">
                  San Antonio's Trusted Law Firm
                </p>
                <p className="text-gray-200">
                  Family Law • Criminal Defense • Estate Planning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Areas Pills */}
        <div className="flex flex-wrap justify-center gap-3 pb-12">
          {[
            "Family Law",
            "Criminal Defense",
            "Child Custody",
            "Divorce",
            "Estate Planning",
            "Protection Orders"
          ].map((area) => (
            <span
              key={area}
              className="px-4 py-2 bg-red-900/10 text-red-900 rounded-full text-sm font-medium hover:bg-red-900/20 transition-colors cursor-pointer"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
