import React from "react";

const Alimony = () => {
  const alimonyTypes = [
    {
      title: "Temporary Alimony",
      description: "Provides essential financial support during divorce proceedings, helping recipients meet their needs until the case concludes."
    },
    {
      title: "Rehabilitative Alimony",
      description: "Designed to assist a dependent spouse in acquiring the skills necessary for self-sufficiency, this support typically ends once the recipient secures suitable employment or completes their education."
    },
    {
      title: "Reimbursement Alimony",
      description: "Awarded to a spouse who contributed to the household while the other pursued career advancement, recognizing their sacrifices during the marriage."
    },
    {
      title: "Permanent Alimony",
      description: "Granted to spouses who are seriously ill or otherwise unable to earn a sustainable income, particularly at the end of a long marriage. While termed 'permanent,' these arrangements can be modified based on changing circumstances."
    }
  ];

  const alimonyFactors = [
    "Length of marriage",
    "Couple's standard of living",
    "Relative incomes",
    "Each spouse's needs",
    "Educational background",
    "Employment history",
    "Future earning potential",
    "Health and age considerations"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Alimony Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Expert legal representation for spousal support matters
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Divorce involves crucial decisions that can significantly affect your
            quality of life. Whether negotiating an agreement or battling in a
            Texas court, the issue of alimony can become highly contentious. At
            Kriebel Law Firm, PLLC, I bring extensive knowledge of spousal
            support laws to represent clients seeking payments as well as those
            facing requests for alimony.
          </p>
        </div>
      </div>

      {/* Alimony Factors */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold mb-8 text-center">
          Factors Considered in Alimony Determinations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {alimonyFactors.map((factor, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
            >
              {factor}
            </div>
          ))}
        </div>
      </div>

      {/* Types of Alimony */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {alimonyTypes.map((type, index) => (
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
                  {type.title}
                </h3>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enforcement and Modifications */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Enforcement and Modifications
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            Clients frequently express concerns about potential changes in their
            financial situations impacting alimony obligations. Others may face
            challenges in receiving court-ordered payments. At Kriebel Law Firm,
            PLLC, I am dedicated to petitioning for appropriate modifications to
            alimony arrangements and assisting clients with enforcement actions
            when payments are delayed or ignored.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">
          Get Expert Alimony Representation
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Navigating alimony matters requires experienced legal guidance. Contact
          Kriebel Law Firm today to discuss your spousal support case.
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

export default Alimony;
