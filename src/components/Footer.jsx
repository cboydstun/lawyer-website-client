import React from "react";
import { Link } from "react-router-dom";
import JCicon from "../assets/photos2.jpg";

const reviews = [
  {
    text: "Powerhouse!!! Amazing, worth every penny!! Justice was served!!! You can't go wrong hiring her!!!! I'm so grateful for her!!!!",
    author: "Heather M."
  },
  {
    text: "Jackie Kribel is an outstanding attorney. If you want an attorney that will remove the fear and doubt you may have, she does just that. Being in a legal battle is scary. Jackie Kribel put my mind at ease. She is confident & experienced and I promise exactly what you need when you need legal representation.",
    author: "Rich R."
  },
  {
    text: "Mrs. Kriebel has been wonderful on my case. She has been aggressive and knowledgeable. My case has been going on for a year and not once has she dropped the ball. She has kept me informed throughout the entire process.",
    author: "Marlene"
  },
  {
    text: "My wife and hired Mrs. Kriebel for a CPS custody battle. We had to fight the state, the Ad Litem and the Foster Parents. Mrs. Kriebel was able to get the job done and by the end the state and the Ad Litem was on our side. She got us standing when there wasn't any.",
    author: "John"
  },
  {
    text: "She was my public defender in a criminal case where I was pretty much doomed. Thanks to her investigative skills, hard work and determination she got the case dismissed due to technicality!!",
    author: "Joshua"
  },
  {
    text: "She's feisty and a go getter. So glad I went with her! She answered my call on a weekend which I wasn't expecting! She plays no games and she is great at what she does!",
    author: "Emily"
  }
];

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Logo and Contact Section */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <img
              src={JCicon}
              alt="Jacqueline R. Kriebel"
              className="w-24 h-24 rounded-full border-2 border-yellow-300 mb-4"
            />
            <Link
              to="/attorneyprofile"
              className="text-yellow-300 hover:text-yellow-200 transition-colors font-semibold mb-4"
            >
              Attorney Profile
            </Link>
            <div className="space-y-2">
              <a
                href="tel:210-677-5586"
                className="flex items-center text-yellow-300 hover:text-yellow-200 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                210-677-5586
              </a>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                San Antonio, Texas
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: "/home", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/contact", label: "Contact" },
                { path: "/practice-areas", label: "Practice Areas" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Reviews Section */}
          <div className="md:col-span-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Client Reviews</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                >
                  <p className="text-gray-200 text-sm italic mb-2">"{review.text}"</p>
                  <p className="text-yellow-300 text-sm font-semibold">- {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center border-t border-white/20 pt-8">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Take Control of Your Legal Situation
          </h3>
          <div className="space-y-2">
            <p className="text-lg">Schedule Your Consultation Today</p>
            <a
              href="tel:210-677-5586"
              className="inline-block bg-yellow-300 text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-200 transition-colors"
            >
              Call 210-677-5586
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Kriebel Law Firm, PLLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
