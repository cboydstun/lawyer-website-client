import React from "react";

const CriminalLaw = () => {
  const constitutionalRights = [
    {
      amendment: "Fourth Amendment",
      right: "Protection from warrantless searches and seizures",
      icon: "shield"
    },
    {
      amendment: "Fifth Amendment",
      right: "Your right to remain silent and due process",
      icon: "silence"
    },
    {
      amendment: "Sixth Amendment",
      right: "Your right to legal representation",
      icon: "scale"
    }
  ];

  const criminalDefenseAreas = [
    "Arson",
    "Assault",
    "Domestic Violence",
    "DWI/DUI",
    "Traffic Violations",
    "Public Intoxication",
    "Juvenile Delinquency",
    "Drug Crimes",
    "Prostitution",
    "Human Trafficking",
    "Welfare Fraud",
    "Homicide"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Criminal Law Defense
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experienced criminal defense representation in San Antonio
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Being Charged with a Criminal Offense is Life-Changing
        </h2>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            If you're under suspicion for a crime, the fear of losing your freedom
            can be overwhelming. A conviction could lead to imprisonment, heavy
            fines, and the loss of family, job, and reputation. Additionally, a
            felony conviction may strip you of certain constitutional rights and
            close off various career paths permanently. If you have children, a
            criminal charge can jeopardize your custody and visitation rights.
            With so much at stake, you need an experienced attorney who will fight
            for your rights.
          </p>
        </div>
      </div>

      {/* Constitutional Rights */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold mb-8 text-center">
          Your Constitutional Rights Matter
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {constitutionalRights.map((right, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">{right.amendment}</h3>
                <p className="text-gray-100">{right.right}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Hire an Experienced Criminal Defense Lawyer
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            Attorney Jacqueline Kriebel will meet with you personally to
            understand your situation and educate you about the relevant laws.
            She'll discuss your options and assist you in making critical
            decisions regarding your case.
          </p>
          <p>
            Ms. Kriebel will conduct a thorough investigation to ensure your
            constitutional rights are upheld. She will interview witnesses, review
            all prosecution evidence, and help determine if pursuing a plea
            agreement is beneficial. Her goal is to minimize the impact of this
            stressful situation on your life.
          </p>
        </div>
      </div>

      {/* Practice Areas Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
          Comprehensive Defense for Misdemeanors and Felonies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {criminalDefenseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-gray-700">{area}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bulldog Section */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          A Bulldog in the Courtroom
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            When your freedom is on the line, you need a fierce advocate.
            Attorney Jacqueline Kriebel has earned the nickname "bulldog in the
            courtroom" for her tenacity in defending clients. If going to trial
            is in your best interest, you can trust that she will fight
            vigorously on your behalf. While no outcomes can be guaranteed,
            knowing that Ms. Kriebel is dedicated to protecting your rights will
            provide you with peace of mind.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">
          Don't Leave Your Future to Chance
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Contact Kriebel Law Firm today for a consultation and protect your rights.
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

export default CriminalLaw;
