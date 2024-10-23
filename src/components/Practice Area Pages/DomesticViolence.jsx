import React from "react";

const DomesticViolence = () => {
  const violentActs = [
    "Actual or threatened physical harm",
    "Criminal harassment (e.g., threatening letters or calls)",
    "Stalking",
    "Physical assaults (e.g., pushing, hitting, choking)",
    "Sexual assault",
    "Rape",
    "Sexual battery",
    "Statutory rape"
  ];

  const consequences = [
    "Imprisonment",
    "Permanent restraining orders",
    "Loss of housing or custody rights",
    "Employment difficulties",
    "Mandatory domestic violence treatment programs",
    "Inability to possess firearms",
    "Immigration consequences for non-citizens"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Domestic Violence Defense
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experienced legal defense for domestic violence cases in San Antonio
        </p>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 mb-12">
        <div className="flex items-center justify-center mb-6">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-serif font-bold text-center mb-4">
          Facing Domestic Violence Charges?
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
            Facing domestic violence accusations can lead to severe criminal
            penalties and life-altering consequences. If you are charged with such
            an offense, it's crucial to have an experienced and aggressive defense
            team on your side. At Kriebel Law Firm, PLLC, I handle domestic
            violence cases with skill and professionalism. Clients throughout the
            San Antonio area and Texas choose my firm for its results-oriented
            approach.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            I will thoroughly review police reports and may conduct independent
            investigations to uncover the truth surrounding your arrest. My
            commitment is to ensure your rights are upheld and that you receive
            the legal protections you deserve.
          </p>
        </div>
      </div>

      {/* Types of Domestic Violence */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Understanding Domestic Violence Charges
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Domestic violence charges can arise from actual acts of violence or even
          threats against individuals with whom the accused shares an intimate
          relationship, such as spouses, partners, parents, or roommates.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {violentActs.map((act, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 rounded-lg p-4"
            >
              <svg className="w-5 h-5 text-red-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-gray-700">{act}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Potential Consequences */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Potential Consequences
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {consequences.map((consequence, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg p-4"
            >
              <svg className="w-5 h-5 text-red-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">{consequence}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Defense */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Strategic Defense Approach
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            I understand the distress and frustration that come with being accused
            of domestic violence. My goal is to guide you through the necessary
            steps to protect your interests and prevent your situation from
            worsening.
          </p>
          <p>
            If you are served with a restraining order, Kriebel Law Firm, PLLC
            can help you contest it in court. It is vital to adhere to the order
            until a judge issues modifications.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">
          Protect Your Rights and Reputation
        </h2>
        <p className="text-lg mb-8 opacity-90">
          When accused of domestic violence, securing a strong and committed
          defense attorney is essential. Contact Kriebel Law Firm today for
          experienced representation.
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

export default DomesticViolence;
