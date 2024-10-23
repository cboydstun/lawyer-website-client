import React from "react";

const Assault = () => {
  const misdemeanorCharges = [
    {
      level: "Class A Misdemeanor",
      description: "Causing bodily injury to another person without aggravating factors.",
      penalty: "Up to 1 year in jail and $4,000 fine"
    },
    {
      level: "Class B Misdemeanor",
      description: "Committing assault during a sporting event or as retaliation for a sports performance.",
      penalty: "Up to 180 days in jail and $2,000 fine"
    },
    {
      level: "Class C Misdemeanor",
      description: "Threatening bodily harm or making physical contact in a provocative manner without aggravating circumstances.",
      penalty: "Up to $500 fine"
    }
  ];

  const felonyCharges = [
    {
      level: "1st Degree Felony",
      description: "Aggravated assault resulting in serious injury or involving a weapon against domestic partners, public officials, first responders, or informants.",
      penalty: "Up to life in prison and $10,000 fine"
    },
    {
      level: "2nd Degree Felony",
      description: "Assault against a family member or partner, particularly involving choking, especially if the defendant has prior convictions.",
      penalty: "Up to 20 years in prison and $10,000 fine"
    },
    {
      level: "3rd Degree Felony",
      description: "Assault against public servants, emergency personnel, or household members.",
      penalty: "Up to 10 years in prison and $10,000 fine"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Assault Defense
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experienced legal defense for assault charges in San Antonio
        </p>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 mb-12">
        <div className="flex items-center justify-center mb-6">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-serif font-bold text-center mb-4">
          Facing Assault Charges?
        </h2>
        <p className="text-lg text-center mb-6 opacity-90">
          Get immediate legal representation to protect your rights and future.
        </p>
        <div className="flex justify-center">
          <a
            href="tel:210-677-5586"
            className="inline-block bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Immediate Help
          </a>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Facing assault charges can be a life-altering experience, impacting
            not just defendants but their families as well. At Kriebel Law Firm,
            PLLC, I am committed to providing strong representation for clients
            across San Antonio and the surrounding counties, defending against all
            types of assault allegations. With over a decade of courtroom
            experience, I have the expertise to guide you through this challenging
            time.
          </p>
        </div>
      </div>

      {/* Misdemeanor Charges */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
          Misdemeanor Assault Charges
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {misdemeanorCharges.map((charge, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-red-900 mb-3">
                {charge.level}
              </h3>
              <p className="text-gray-600 mb-4">
                {charge.description}
              </p>
              <div className="text-sm text-gray-500 font-medium">
                Potential Penalty: {charge.penalty}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Felony Charges */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
          Felony Assault Charges
        </h2>
        <div className="space-y-6">
          {felonyCharges.map((charge, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-900 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {charge.level}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {charge.description}
                  </p>
                  <div className="text-sm text-red-900 font-medium">
                    Potential Penalty: {charge.penalty}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Defense Strategy */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Strong Defense Strategy
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            Whether negotiating plea deals, challenging evidence, or demonstrating
            that your actions were justifiable, I will provide skilled
            representation tailored to your needs. It is crucial to have an
            experienced attorney by your side to maximize your chances of a
            favorable outcome.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">
          Protect Your Rights and Future
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Don't face assault charges alone. Contact Kriebel Law Firm today for
          experienced criminal defense representation.
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

export default Assault;
