import React from "react";

const Homicide = () => {
  const defenseStrategies = [
    {
      type: "Mistaken Identity",
      description: "Challenging witness identification and establishing alibis"
    },
    {
      type: "Justified Homicide",
      description: "Self-defense or defense of others in life-threatening situations"
    },
    {
      type: "Accidental Death",
      description: "Death occurring during lawful activities without criminal intent"
    },
    {
      type: "Lack of Premeditation",
      description: "Challenging first-degree murder charges by disproving premeditation"
    }
  ];

  const evidenceTypes = [
    "Autopsy records",
    "Blood splatter analyses",
    "Firearm tests",
    "DNA reports",
    "Witness statements",
    "Surveillance footage",
    "Digital evidence",
    "Expert testimony"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Homicide Defense
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experienced legal defense for serious homicide charges
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
          Facing Homicide Charges?
        </h2>
        <p className="text-lg text-center mb-6 opacity-90">
          Get immediate legal representation. Your freedom is at stake.
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
            Homicide, defined as the unlawful killing of another person, carries
            severe penalties, potentially resulting in life imprisonment. If you
            are facing charges of murder, manslaughter, or any other violent
            crime, you need an experienced defense attorney who will fiercely
            advocate for your rights within the criminal justice system.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            At Kriebel Law Firm, PLLC, I possess the skill and tenacity to
            defend clients throughout San Antonio and Texas against homicide
            accusations. Depending on the specifics of your case, I will strive
            for the best possible outcome, whether that means an acquittal, a
            reduced sentence, or a favorable plea agreement.
          </p>
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
                  {strategy.type}
                </h3>
                <p className="text-gray-600">
                  {strategy.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Evidence Analysis */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Thorough Evidence Analysis
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Homicide investigations often involve complex evidence, including
          scientific data and witness statements. I meticulously review all
          relevant evidence and collaborate with expert forensic scientists who
          can provide compelling testimony.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {evidenceTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-sm"
            >
              <span className="text-gray-700">{type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Burden of Proof */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold mb-6 text-center">
          Remember: The Burden of Proof is on the Prosecution
        </h2>
        <p className="text-lg text-center opacity-90">
          Every defendant is presumed innocent until proven guilty beyond a
          reasonable doubt. When I represent you, you can count on my zealous
          advocacy to uphold your rights from the very beginning of your case.
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
          Your Freedom is at Stake
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          If you are charged with a serious felony such as murder or
          manslaughter, you need immediate assistance from a defense attorney
          committed to fighting for your rights.
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

export default Homicide;
