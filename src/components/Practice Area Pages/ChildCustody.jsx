import React from "react";

const ChildCustody = () => {
  const custodyServices = [
    {
      title: "Conservatorship",
      description: "Navigating joint or sole managing conservatorship arrangements",
      icon: "users"
    },
    {
      title: "Visitation Rights",
      description: "Establishing and enforcing possession and access to your child",
      icon: "calendar"
    },
    {
      title: "Modifications",
      description: "Adjusting existing orders to reflect new circumstances",
      icon: "refresh"
    },
    {
      title: "Contempt Orders",
      description: "Enforcing compliance with court orders",
      icon: "scale"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Child Custody Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Protecting your children's best interests with experienced legal representation
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Understanding the laws governing child custody can be a daunting task.
            Custody arrangements may designate both parents as joint managing
            conservators or assign sole managing conservatorship to one parent.
            When it comes to visitation schedules, parents may reach an agreement,
            or, if they cannot, the court will impose a possession and access plan
            tailored to your family's needs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Attorney Jacqueline Kriebel is a seasoned child custody attorney with
            a proven track record in handling a wide range of custody issues, from
            amicable arrangements to highly contested disputes involving parental
            alienation. She recognizes that achieving a mutually agreeable custody
            arrangement can be challenging. When negotiations fail, Ms. Kriebel is
            prepared to vigorously defend your rights in court.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {custodyServices.map((service, index) => (
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
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optimal Arrangement Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Finding the Optimal Arrangement for Your Family
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            Is your current child custody arrangement in the best interest of your
            child? Prioritizing your child's well-being is essential for moving
            forward after a divorce or separation. Ms. Kriebel is dedicated to
            working closely with you to develop and implement effective strategies
            that not only protect your child's emotional health but also
            aggressively pursue a favorable outcome for your case.
          </p>
          <p>
            Ms. Kriebel provides candid legal advice and personalized attention,
            addressing your questions with sensitivity and respect. She
            collaborates with clients to set realistic goals, ensuring the best
            possible outcomes in child custody and support matters.
          </p>
        </div>
      </div>

      {/* DFPS Alert Section */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold mb-6">
          DFPS Involvement? Act Quickly
        </h2>
        <p className="text-lg mb-6 opacity-90">
          If the Department of Family and Protective Services (DFPS) has contacted
          you regarding your parenting, it's crucial to seek legal representation
          without delay. An experienced attorney can clarify your rights and
          advocate assertively on your behalf, both prior to and during court
          proceedings.
        </p>
        <div className="flex justify-center">
          <a
            href="tel:210-677-5586"
            className="inline-block bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Immediate Legal Support
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
          Schedule Your Consultation Today
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          You deserve a reliable attorney who is responsive to your needs and
          provides timely feedback on your family law matters.
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
            className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Contact Online
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChildCustody;
