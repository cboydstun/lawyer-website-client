import React from "react";

const FamilyLaw = () => {
  const services = [
    {
      title: "Divorce",
      description: "Uncontested and contested divorce, including military divorce considerations"
    },
    {
      title: "Complex Property Division",
      description: "Fair and equitable distribution of real property, assets, and debts"
    },
    {
      title: "Spousal Maintenance",
      description: "Accurate assessments regarding the amount and duration of orders"
    },
    {
      title: "Child Custody and Support",
      description: "Fathers' rights, paternity issues, parental alienation, joint or managing conservatorships, modifications of orders, and visitation rights"
    },
    {
      title: "DFPS Cases",
      description: "Pre-investigations and negotiation support with the Department of Family and Protective Services"
    },
    {
      title: "Adoptions",
      description: "Including stepparent, family member, and same-sex couple adoptions"
    },
    {
      title: "Termination of Parental Rights",
      description: "Both voluntary and involuntary terminations"
    },
    {
      title: "Protective Orders",
      description: "Legal protection for families in dangerous situations"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Family Law Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experienced legal representation for all aspects of family law in San Antonio
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Navigating family disputes can be one of life's most stressful
            challenges. Are you uncertain about how to handle your divorce?
            Concerned about maintaining your relationship with your children
            post-separation? Attempting to manage these issues alone can be
            overwhelming, but an experienced family law attorney can provide the
            clarity and support you need.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Attorney Jacqueline Kriebel possesses comprehensive knowledge of the San
            Antonio family court system, effectively alleviating the stress
            associated with family law disputes. She is prepared to assist you with
            divorce proceedings, file custody orders, or modify existing orders as
            your family dynamics evolve.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {services.map((service, index) => (
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

      {/* Additional Information */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Committed to Efficiently Resolving Your Family Law Issues
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            Ms. Kriebel recognizes the intimidation that comes with resolving
            disputes independently. Family law can be intricate, as one decision
            can profoundly impact various facets of your family's welfare.
            Partnering with a knowledgeable attorney enables you to make informed
            choices regarding divorce and child-related matters.
          </p>
          <p>
            Concerned about a visit from CPS? Defend your right to parent your
            children. Attorney Jacqueline Kriebel offers seasoned family law
            advocacy for individuals and families throughout Greater San Antonio.
            She understands the distress that arises from uncertainty about your
            family's future.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">
          Take the First Step Towards Resolution
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Contact Kriebel Law Firm today to discuss your legal options and find
          effective resolutions for your family law issues.
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

export default FamilyLaw;
