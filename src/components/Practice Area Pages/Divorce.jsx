import React from "react";

const Divorce = () => {
  const propertyDivisionItems = [
    "Real Estate",
    "Vehicles",
    "Family Businesses",
    "Retirement Accounts",
    "Stocks",
    "Bonds",
    "Debts"
  ];

  const divorceServices = [
    {
      title: "Property Division",
      description: "Comprehensive division of assets and debts"
    },
    {
      title: "Spousal Maintenance",
      description: "Navigating alimony and spousal support"
    },
    {
      title: "Child Custody and Support",
      description: "Establishing visitation rights, child possession, and conservatorship arrangements"
    },
    {
      title: "Modifications or Enforcement",
      description: "Updating or enforcing existing court orders"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Divorce Law Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Expert legal guidance through every step of your divorce
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Navigating a divorce can be incredibly challenging, often involving
            intense conflicts. Even in amicable situations, having a seasoned
            divorce attorney by your side is crucial to safeguarding your
            interests and addressing potential complications that could shape your
            future.
          </p>
          <div className="mt-6 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Critical Questions to Consider:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-900 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                Where will you reside?
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-900 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                How will you maintain financial stability?
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-900 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                Are all your assets and debts accurately identified?
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-900 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                What if your spouse is concealing assets?
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {divorceServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Property Division */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold mb-6 text-center">
          Property Division
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {propertyDivisionItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg p-4 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Uncontested Divorce */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Considering an Uncontested Divorce?
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            If you and your spouse agree on the terms of your divorce and do not
            have children or shared property, you may qualify for a simple
            uncontested divorce. This streamlined process requires a waiver of
            service and is handled efficiently by Ms. Kriebel.
          </p>
          <p>
            Attorney Jacqueline Kriebel is forthright with clients about the
            realities they face. While she may deliver difficult truths,
            confronting challenges head-on offers the best chance to finalize
            your divorce and move forward with your life.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
          Take the First Step Towards Your New Future
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Contact Kriebel Law Firm today for clear and direct divorce counsel.
        </p>
        <div className="space-x-4">
          <a
            href="tel:210-677-5586"
            className="inline-block bg-red-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
          >
            Call 210-677-5586
          </a>
          <a
            href="/contact"
            className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Contact Online
          </a>
        </div>
      </div>
    </div>
  );
};

export default Divorce;
