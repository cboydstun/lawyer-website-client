import React from "react";

const TrafficViolations = () => {
  const violationTypes = [
    "Reckless driving",
    "Speeding",
    "Expired registration",
    "Expired license",
    "Running a red light or stop sign",
    "Failure to signal when changing lanes",
    "Failure to wear a seatbelt",
    "Driving under the influence (DUI)",
    "Driving without a license or with a suspended license",
    "Leaving the scene of an accident",
    "Violating license restrictions",
    "Hit-and-run accidents"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Traffic Violations
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Assertive Texas Attorney Defending Clients Accused of Traffic Violations.
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Traffic tickets and moving violations can significantly disrupt your life.
            Fees can accumulate quickly, and points on your record may lead to
            skyrocketing insurance premiums or even a revoked or suspended license.
            At Kriebel Law Firm, PLLC, I understand the stakes when you've been cited
            for a traffic violation. I represent clients throughout the San Antonio
            area and Texas in a variety of traffic offenses, diligently questioning
            law enforcement actions to seek reductions or dismissals of the charges
            against you.
          </p>
        </div>
      </div>

      {/* Skilled Litigator */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Skilled Texas Litigator Working to Dismiss or Reduce Charges
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Facing a criminal or civil charge for a traffic violation can lead to serious
          penalties if you plead guilty. Paying a fine without contesting the charge may
          seem easier, but it can have long-term consequences, such as increased
          insurance costs or subsequent tickets. An attorney from Kriebel Law Firm, PLLC
          can advocate for you in court, aiming to have your charges dropped or reduced
          to mitigate penalties. I handle a range of traffic violation cases in Texas, including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {violationTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-sm"
            >
              <span className="text-gray-700">{type}</span>
            </div>
          ))}
        </div>
        <p className="text-lg text-gray-700 mt-6">
          With my knowledge and experience, I assert your rights and protect your
          interests in traffic court, addressing both moving and non-moving violations.
        </p>
      </div>

      {/* Building Strong Defenses */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Determined Counselor Building Strong and Strategic Defenses
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I adopt a meticulous approach to traffic violation defense, thoroughly
          examining all aspects of your case, including the police report, to determine
          if law enforcement violated your rights or failed to follow proper procedures.
          I also conduct interviews to gather detailed information about the circumstances
          surrounding your violation. In some instances, the wrong driver may be cited due
          to another motorist's actions.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          At Kriebel Law Firm, PLLC, I explore every scenario before deciding on the best
          strategy, and I am prepared to aggressively cross-examine witnesses during trial.
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
          Contact a Tenacious Texas Traffic Violation Lawyer
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          At Kriebel Law Firm, PLLC, I vigorously advocate for clients in Texas traffic courts.
          Call my San Antonio office at 210-677-5586 or contact me online to schedule a
          consultation today.
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
            className="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Contact Online
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrafficViolations;
