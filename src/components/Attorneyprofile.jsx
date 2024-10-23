import React from "react";
import JCicon from "../assets/photos2.jpg";

const Attorneyprofile = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-red-900/10 rounded-full transform -rotate-6 scale-105"></div>
          <img
            className="relative rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl"
            src={JCicon}
            alt="Jacqueline R. Kriebel"
          />
        </div>

        {/* Contact Information */}
        <div className="mt-8 space-y-2">
          <h1 className="text-4xl font-serif font-bold text-gray-900">
            Jacqueline R. Kriebel
          </h1>
          <div className="flex justify-center space-x-6 text-gray-600">
            <a
              href="tel:210-677-5586"
              className="flex items-center hover:text-red-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              210-677-5586
            </a>
            <span className="text-gray-400">|</span>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Fax: 210-467-5788
            </div>
          </div>
          <a
            href="mailto:jacquelinekriebel@gmail.com"
            className="inline-block text-red-900 hover:text-red-700 transition-colors"
          >
            jacquelinekriebel@gmail.com
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Jacqueline Kriebel is originally from Pennsylvania, where she
              developed a spirited work ethic and aggressive style of
              representation. She is dedicated to providing a client-centered
              representation where each client is treated with respect and dignity
              regardless of your legal situation. She will return your phone call as
              soon as practical. Jacqueline Kriebel listens patiently while you
              explain your situation and provides immediate feedback as to how your
              case should be handled and what you can expect throughout the legal
              process.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Additionally, Jacqueline Kriebel aggressively cross-examines witnesses
              and attacks their credibility to consistently win at trial. Because of
              her experience as a former teacher, Jacqueline Kriebel knows how to
              educate a jury to understand the legalities of your case and to sway
              them to your side. Plain and simple, Jacqueline Kriebel wins! She
              helps you find peace throughout the legal process by providing you the
              knowledge and confidence you need to make the important decisions in
              your case. Her motto is, "Put your stress with me. If I'm not worried,
              you shouldn't be worried."
            </p>
          </div>
        </section>

        {/* Areas of Practice */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            Areas of Practice
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Divorce",
              "Child Support & Custody & Modifications",
              "Criminal Defense",
              "Department of Family and Protective Services CPS Cases",
            ].map((area) => (
              <li key={area} className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {area}
              </li>
            ))}
          </ul>
        </section>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bar Admissions */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Bar Admissions
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Texas, 2004
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                U.S. District Court Western District of Texas
              </li>
            </ul>
          </section>

          {/* Education */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Education
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <div className="font-semibold">St. Mary's University School of Law</div>
                <div>San Antonio, Texas</div>
                <div>J.D. - 2004</div>
              </li>
              <li>
                <div className="font-semibold">Clarion University of Pennsylvania</div>
                <div>Clarion, Pennsylvania</div>
                <div>B.A. cum laude - 1995</div>
                <div>Major: Psychology & Secondary Education</div>
              </li>
            </ul>
          </section>

          {/* Honors and Awards */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Honors and Awards
            </h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Superb Rated Attorney, 2015 - Present",
                "10 Best Family Law Attorneys, 2018 - Present",
                "10 Best Attorneys, 2018 - Present",
                "Client Satisfaction Award, 2015 - Present",
              ].map((honor) => (
                <li key={honor} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {honor}
                </li>
              ))}
            </ul>
          </section>

          {/* Professional Associations and Past Employment */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Professional Associations
                </h2>
                <ul className="text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    San Antonio Bar Association
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Past Employment
                </h2>
                <ul className="text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Martin & Drought, P.C, Associate Attorney, 2004 - 2007
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Attorneyprofile;
