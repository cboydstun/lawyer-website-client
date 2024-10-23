import React from "react";

const DrugCrimes = () => {
  const drugCharges = [
    "Drug possession",
    "Possession with intent to sell",
    "Drug trafficking",
    "Driving under the influence of drugs",
    "Prescription drug fraud",
    "Manufacturing illegal substances",
    "Conspiracy to sell drugs",
    "Operation of a methamphetamine lab",
    "Sale of illegal substances in a school zone",
    "Possession of drug paraphernalia"
  ];

  const defenseStrategies = [
    {
      title: "Traffic Stop Analysis",
      description: "Examining the legality of the initial stop and subsequent search"
    },
    {
      title: "Search Consent Review",
      description: "Investigating whether proper consent was obtained for vehicle searches"
    },
    {
      title: "Evidence Scrutiny",
      description: "Challenging the reliability of informants and evidence collection methods"
    },
    {
      title: "Alternative Solutions",
      description: "Seeking rehabilitation programs as alternatives to incarceration"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Drug Crime Defense
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experienced legal defense for drug-related charges in San Antonio
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
          Facing Drug Charges?
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
            Drug charges are serious and can lead to severe consequences,
            including fines, jail time, job loss, school expulsion, and strained
            relationships. However, even in challenging situations, viable
            defenses exist. At Kriebel Law Firm, PLLC, I work diligently to have
            confessions dismissed and to seek reductions or dismissals of
            charges. Additionally, I aim to place clients in rehabilitation
            programs instead of incarceration.
          </p>
        </div>
      </div>

      {/* Types of Drug Charges */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
          Types of Drug Charges We Defend
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {drugCharges.map((charge, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg p-4 shadow-sm"
            >
              <svg className="w-5 h-5 text-red-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">{charge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Defense Strategies */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {defenseStrategies.map((strategy, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-900 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {strategy.title}
                </h3>
                <p className="text-gray-600">
                  {strategy.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Traffic Stop Defense */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Challenging Drug Charges from Traffic Stops
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            Many drug arrests arising from traffic stops may not be legally
            conducted. The initial stop might not hold up under scrutiny in
            court. Police often stop drivers for unrelated issues, such as
            speeding or a broken taillight, and may then request a vehicle
            search.
          </p>
          <p>
            Officers need probable cause for such searches, and many drivers
            unknowingly consent to searches without realizing they can refuse. If
            you denied consent and the police searched your vehicle anyway,
            contact me immediately. I challenge the prosecution at every turn,
            examining whether the police had a legal reason for the stop, if any
            confession was coerced, or if unreliable informants were involved in
            your arrest.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">
          Protect Your Rights and Future
        </h2>
        <p className="text-lg mb-8 opacity-90">
          If you've been charged with a drug crime, your future is at stake.
          Contact Kriebel Law Firm today for experienced criminal defense
          representation.
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

export default DrugCrimes;
