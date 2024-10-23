import React, { useState } from "react";

const RatingsandReviews = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Ratings and Reviews
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          See what clients are saying about Kriebel Law Firm on Lawyers.com
        </p>
      </div>

      {/* Rating Summary */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-8 h-8 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-center text-gray-600">
          Reviews from verified clients on Lawyers.com
        </p>
      </div>

      {/* Reviews iframe Container */}
      <div className="relative bg-white rounded-lg shadow-sm pt-10 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center">
              <svg
                className="animate-spin h-8 w-8 text-red-900 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p className="text-gray-600">Loading reviews...</p>
            </div>
          </div>
        )}

        <div className="w-full h-[800px] relative rounded-lg overflow-hidden">
          <iframe
            src="https://www.lawyers.com/san-antonio/texas/kriebel-law-firm-pllc-46824588-f/#reviews"
            className="absolute inset-0 w-[calc(100%+60px)] h-[3000px] -left-[30px] -top-[1000px]"
            frameBorder="0"
            scrolling="no"
            onLoad={() => setIsLoading(false)}
            title="Lawyers.com Reviews"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Ready to Experience Our Award-Winning Service?
        </h2>
        <div className="space-x-4">
          <a
            href="tel:210-677-5586"
            className="inline-block bg-red-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
          >
            Call Now
          </a>
          <a
            href="/contact"
            className="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Review Sites */}
      <div className="mt-16 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Find Us On Other Review Sites
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "Lawyers.com", path: "https://www.lawyers.com/san-antonio/texas/kriebel-law-firm-pllc-46824588-f/" },
            { label: "Avvo", path: "https://www.avvo.com/attorneys/78216-tx-jacqueline-kriebel-4091093.html" },
            { label: "Nolo", path: "https://lawyers.nolo.com/profile/kriebel-law-firm-pllc" },
            { label: "Martindale", path: "https://www.martindale.com/attorney/ms-jacqueline-r-kriebel-46824562/" },
            { label: "FindLaw", path: "https://lawyers.findlaw.com/profile/view/4044925_1?refPageViewId=8d73c11f302347ae" },
            { label: "Justia", path: "https://lawyers.justia.com/lawyer/jacqueline-kriebel-1508562" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="inline-block bg-red-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingsandReviews;
