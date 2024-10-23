import React from "react";

const MapsandDirections = () => {
  const officeInfo = {
    name: "Kriebel Law Firm, PLLC",
    location: "San Antonio Office",
    building: "Blanco Plaza",
    address: "6609 Blanco Rd., Ste. 100",
    city: "San Antonio",
    state: "Texas",
    zip: "78216",
    phone: "210-677-5586",
    fax: "210-467-5788"
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Visit Our Office
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Conveniently located in San Antonio, our office is easily accessible and ready to serve you.
        </p>
      </div>

      {/* Map and Contact Info Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-8">
          {/* Office Details Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Office Location
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-red-900 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">{officeInfo.name}</h3>
                  <p className="text-gray-600">{officeInfo.location}</p>
                  <p className="text-gray-600">{officeInfo.building}</p>
                  <p className="text-gray-600">{officeInfo.address}</p>
                  <p className="text-gray-600">{officeInfo.city}, {officeInfo.state} {officeInfo.zip}</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-red-900 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact</h3>
                  <p className="text-gray-600">
                    Phone: <a href={`tel:${officeInfo.phone}`} className="text-red-900 hover:text-red-700 transition-colors">{officeInfo.phone}</a>
                  </p>
                  <p className="text-gray-600">Fax: {officeInfo.fax}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours of Operation */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Office Hours
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="text-gray-900">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday - Sunday</span>
                <span className="text-gray-900">Closed</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-red-900 text-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Need Immediate Assistance?</h2>
            <div className="space-y-4">
              <a
                href={`tel:${officeInfo.phone}`}
                className="block w-full bg-white text-red-900 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
              <a
                href="/contact"
                className="block w-full bg-transparent border-2 border-white text-white text-center py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Online
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden">
          <iframe
            className="w-full h-[600px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD1R-01cFPivuWDZL_RhRVHrkGrJVH9rgg&zoom=16&maptype=roadmap&q=Kriebel Law Firm, PLLC Blanco Plaza 6609 Blanco Rd., Ste. 100, San Antonio, Texas78216"
          ></iframe>
          <div className="p-4 bg-gray-50 border-t">
            <p className="text-sm text-gray-600">
              To get directions to our office, click "Directions" or "View larger map" on the map above.
              Google Maps will open in a new window with detailed navigation options.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
          Parking Information
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Free parking is available in front of our office building. The entrance to our office
          is easily accessible from the parking lot.
        </p>
      </div>
    </div>
  );
};

export default MapsandDirections;
