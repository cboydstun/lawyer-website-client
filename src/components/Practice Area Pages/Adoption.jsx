import React from "react";

const Adoption = () => {
  const adoptionTypes = [
    "Termination of parental rights",
    "Paternity registry",
    "Open adoptions",
    "Closed adoptions",
    "Private adoptions",
    "Domestic adoptions",
    "International adoptions",
    "Stepparent adoptions"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Adoption Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Helping families grow through experienced adoption legal services
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Adopting a child should be a joyous occasion, but unforeseen
            challenges—such as a biological parent's change of heart or
            immigration issues—can turn the process into a stressful struggle. At
            Kriebel Law Firm, PLLC, I am a dedicated family law attorney with
            extensive experience in managing the intricate legal procedures and
            frustrating red tape associated with adoption in San Antonio and
            throughout Texas.
          </p>
        </div>
      </div>

      {/* Types of Adoption Grid */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold mb-8 text-center">
          Types of Adoption We Handle
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {adoptionTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
            >
              {type}
            </div>
          ))}
        </div>
      </div>

      {/* Parental Rights Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Termination of Parental Rights
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            The possibility of birth parents challenging an adoption
            post-finalization is a legitimate concern for adoptive families.
            Poorly managed adoptions can cause immense emotional turmoil for
            everyone involved—the adoptive parents, birth parents, and children
            caught in the middle.
          </p>
          <p>
            At Kriebel Law Firm, PLLC, I rigorously ensure that the rights of
            both birth and adoptive parents are respected, resulting in a final
            adoption that is secure and unassailable. I will confirm that birth
            parents consent to the adoption freely and voluntarily, protecting
            against claims of fraud, duress, or coercion that could jeopardize
            the adoption.
          </p>
        </div>
      </div>

      {/* Biological Father's Rights */}
      <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Biological Father's Rights
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            A biological father holds the same parental rights as the mother,
            especially if he is listed in the state's putative father registry
            and has been actively involved in the child's life. When a father
            resists adoption, I will take all necessary measures to identify
            biological fathers, secure their consent, or litigate issues of
            fitness when appropriate.
          </p>
        </div>
      </div>

      {/* Open vs Closed Adoptions */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
            Open Adoptions
          </h3>
          <p className="text-gray-700">
            An open adoption agreement allows the biological family to maintain a
            relationship with the child, with terms defined in a written contract
            that can vary from regular visits to yearly updates.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
            Closed Adoptions
          </h3>
          <p className="text-gray-700">
            A closed adoption safeguards the identities of both biological parents
            and the child, while still disclosing essential information such as
            heritage and medical history.
          </p>
        </div>
      </div>

      {/* International Adoptions */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          International Adoptions
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            International adoptions—also known as intercountry adoptions—present
            unique challenges due to a complex web of laws and policies spanning
            Texas, the United States, U.S. immigration, the child's country of
            origin, and the Hague Adoption Convention. I will provide you with
            expert advice on both domestic and international requirements,
            standing by your side to navigate every step of the process and
            mitigate potential issues.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">
          Start Your Adoption Journey Today
        </h2>
        <p className="text-lg mb-8 opacity-90">
          While adoption can bring immense joy to your family, it requires
          navigating a myriad of legal requirements. Contact Kriebel Law Firm
          today for experienced guidance through the adoption process.
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

export default Adoption;
