import React from "react";

const CPS = () => {
  const keyPoints = [
    {
      title: "Immediate Response",
      description: "Quick legal intervention when DFPS contacts you"
    },
    {
      title: "Experienced Defense",
      description: "Successfully challenged DFPS multiple times"
    },
    {
      title: "Protective Actions",
      description: "Can seek restraining orders to prevent child removal"
    },
    {
      title: "Strategic Guidance",
      description: "Navigate investigations with expert legal support"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Child Protective Services Defense
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Protecting families from unwarranted DFPS intervention
        </p>
      </div>

      {/* Alert Banner */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 mb-12">
        <div className="flex items-center justify-center mb-6">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-serif font-bold text-center mb-4">
          Has DFPS Contacted You?
        </h2>
        <p className="text-lg text-center mb-6 opacity-90">
          Don't face the Department of Family and Protective Services alone.
          Get immediate legal protection for your family.
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
            In Texas, the Department of Family and Protective Services (DFPS) is
            tasked with ensuring children are safe from abuse. However, their
            involvement can sometimes stem from misunderstandings or mistakes,
            leading to unnecessary complications for your family. If you've
            received a call or visit from DFPS, it's crucial to contact an
            experienced family law attorney immediately to safeguard your rights
            and your children.
          </p>
        </div>
      </div>

      {/* Key Points Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {keyPoints.map((point, index) => (
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
                  {point.title}
                </h3>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fearless Advocacy Section */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Fearless Advocacy in DFPS Cases
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            While many attorneys hesitate to take on DFPS cases, Jacqueline
            Kriebel is not intimidated. She has successfully challenged the DFPS
            multiple times, even securing restraining orders to prevent the agency
            from removing children from their homes. Depending on your situation,
            she may be able to do the same for you.
          </p>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Understanding DFPS Challenges
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            DFPS has significant governmental backing, giving them considerable
            power. If they believe your child is in danger, they can arrive at
            your home with a warrant to remove your children. Regaining custody
            can be a daunting and complex process.
          </p>
          <p>
            To avoid such traumatic outcomes, it's vital to have knowledgeable
            legal support. An experienced attorney can guide you through the DFPS
            investigation process, inform you of what to expect, and advise you
            on best practices when dealing with the agency. This preparation can
            help you avoid missteps that could jeopardize your custody.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">
          Don't Wait to Protect Your Family
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Contact Kriebel Law Firm today to protect yourself and your family from
          unnecessary intimidation tactics.
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

export default CPS;
