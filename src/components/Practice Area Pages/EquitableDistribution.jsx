import React from "react";

const EquitableDistribution = () => {
  const maritalAssets = [
    {
      type: "Real Estate",
      items: ["Marital home", "Vacation properties", "Timeshares"]
    },
    {
      type: "Financial Assets",
      items: ["Stocks and bonds", "Bank accounts", "Investment accounts"]
    },
    {
      type: "Retirement",
      items: ["Retirement funds", "Pensions", "Annuities"]
    },
    {
      type: "Other Assets",
      items: ["Automobiles", "Home furnishings", "Businesses"]
    }
  ];

  const distributionFactors = [
    "Financial situation of each spouse",
    "Earning potential",
    "Contributions to marital property",
    "Length of marriage",
    "Age and health of parties",
    "Future needs and liabilities",
    "Tax consequences",
    "Child custody arrangements"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Equitable Distribution
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Expert guidance in Texas marital property division
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            In Texas, assets acquired and liabilities incurred during a marriage
            are classified as marital property. Upon divorce or separation, these
            assets are subject to equitable distribution. When couples cannot
            reach an agreement, Texas courts will divide marital property fairly
            and equitably—though not necessarily equally.
          </p>
        </div>
      </div>

      {/* Property Classification */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold mb-6 text-center">
          Property Classification
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Marital Property</h3>
            <p className="opacity-90">
              Assets acquired during the marriage, subject to division in divorce
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Separate Property</h3>
            <p className="opacity-90">
              Assets obtained prior to marriage or through inheritance/gift,
              exempt from division
            </p>
          </div>
        </div>
      </div>

      {/* Marital Assets Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
          Types of Marital Property
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {maritalAssets.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-red-900 mb-4">
                {category.type}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-red-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Distribution Factors */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Factors in Property Division
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {distributionFactors.map((factor, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg p-4 shadow-sm"
            >
              <svg className="w-5 h-5 text-red-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">{factor}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Our Approach to Property Division
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            At Kriebel Law Firm, PLLC, I aim to transform a potentially
            stressful and contentious matter into a positive resolution. My
            experience allows me to handle negotiations and mediations regarding
            property division whenever possible, providing you with greater
            control over the outcome.
          </p>
          <p>
            However, I recognize that property division is often one of the most
            contentious aspects of divorce. When agreement is unattainable, I am
            fully prepared to vigorously advocate for your rights in court.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">
          Protect Your Financial Future
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Don't navigate property division alone. Contact Kriebel Law Firm today
          for experienced legal guidance.
        </p>
        <div className="space-x-4">
          <a
            href="tel:210-677-5586"
            className="inline-block bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call 210-677-5586
          </a>
          <a
            href="/contact"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Contact Online
          </a>
        </div>
      </div>
    </div>
  );
};

export default EquitableDistribution;
