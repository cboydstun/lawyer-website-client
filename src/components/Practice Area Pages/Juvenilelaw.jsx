import React from "react";

const Juvenilelaw = () => {
  const casesHandled = [
    "Underage drinking",
    "Theft offenses",
    "Drug-related crimes",
    "Vandalism",
    "Criminal trespass",
    "Shoplifting",
    "Assault and battery"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Juvenile Law
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Dedicated legal representation for minors in the San Antonio area.
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Juvenile law recognizes that young individuals should be treated
            differently from adults within the legal system. The focus of the
            juvenile justice system is on rehabilitation, aiming to ensure that
            early mistakes do not unduly impact a youth's future. At Kriebel Law
            Firm, PLLC, I represent minors in San Antonio and throughout Texas
            who face criminal charges, advocating for outcomes that prioritize
            your child's long-term well-being.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Additionally, I stand up for vulnerable minors at risk of harm from
            guardians. When you choose my services, you gain a knowledgeable and
            assertive juvenile law attorney who understands the intricacies of
            the Texas juvenile system and its courts.
          </p>
        </div>
      </div>

      {/* Experienced Advocate */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Experienced Advocate for Juveniles Accused of Misconduct
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Parents’ primary concern is often the safety of their children. When
          young people confront criminal charges, obtaining skilled legal
          counsel experienced in juvenile law is crucial. I leverage my
          extensive background to deliver a robust defense for juveniles
          involved in cases such as:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {casesHandled.map((caseType, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-sm"
            >
              <span className="text-gray-700">{caseType}</span>
            </div>
          ))}
        </div>
        <p className="text-lg text-gray-700 mt-6">
          Juvenile court judges have various options when addressing cases
          before them. While they must balance the needs of the young offender
          with public safety, they are generally inclined to recommend probation
          and treatment programs over confinement. My experience allows me to
          anticipate how local judges and juvenile courts are likely to handle
          your child's case, enabling me to effectively represent their rights
          and pursue the most favorable outcome.
        </p>
      </div>

      {/* Protecting Your Child's Future */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Committed to Protecting Your Child's Future
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          If your child is accused of, charged with, or under investigation for
          a criminal offense, swift action is essential. Delays can jeopardize
          valuable legal advantages and your child's future. I am committed to
          ensuring that your child's mistakes do not follow them into adulthood.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          My comprehensive understanding of juvenile law equips me to navigate
          the court's expectations and advocate for sentencing options that
          prevent a criminal record, thereby safeguarding your child's
          opportunities for higher education and meaningful careers.
        </p>
      </div>

      {/* Advocacy for Abuse Cases */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Proactive Advocacy for Juveniles Facing Abuse
        </h2>
        <p className="text-lg text-gray-700">
          In addition to representing juveniles accused of misconduct, I also
          advocate for youth involved in abuse and neglect cases, where they may
          be at risk from a parent or guardian. The state may intervene to
          protect these vulnerable individuals, appointing attorneys to act as
          guardians ad litem and represent their best interests.
        </p>
        <p className="text-lg text-gray-700 mt-6">
          If a young person is deemed at risk, courts may provide rehabilitative
          programs for families or, in severe cases, terminate parental rights.
          I fight vigorously for the rights and safety of juveniles, ensuring
          they receive the protection they deserve.
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
          Contact a Dedicated Texas Juvenile Law Attorney
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Kriebel Law Firm, PLLC represents youth throughout Texas in a wide
          range of juvenile law matters. When your child needs assistance, I
          offer strategic advice and advocacy to protect their rights and
          future.
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

export default Juvenilelaw;
