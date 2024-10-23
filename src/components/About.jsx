import React from "react";
import JacqulineRKriebleImage from "../assets/photos2.jpg";
import JcIcon from "../assets/kriebellaw.png";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header Section with Image */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-red-900/10 rounded-full transform -rotate-6 scale-105"></div>
          <img
            className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-xl"
            src={JcIcon}
            alt="Jacqueline R. Kriebel"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Meet Jacqueline Section */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Meet Jacqueline R. Kriebel
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Before Jacqueline R. Kriebel earned her Juris Doctor in 2004, her
            studies were in psychology and education. With this foundation, she
            has the sensitivity and listening skills to really hear what you and
            your family are going through. Over the years, she has developed a
            work ethic dedicated to meticulous case preparation and aggressive
            representation. She focuses on treating each client with respect and
            dignity regardless of what their legal situation is.
          </p>
        </section>

        {/* More About Section */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            More About Jacqueline R. Kriebel
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              She will return your phone call as soon as is practical. She will
              listen patiently while you explain your situation and provide
              immediate feedback as to how your case should be handled and what
              you can expect throughout the legal process. For criminal defense
              cases, she has a solid reputation of aggressively cross-examining
              witnesses and attacking their credibility to consistently win at
              trial. Because of her experience as a former teacher, she knows how
              to communicate effectively with a jury. When jurors clearly
              understand the legalities of your case, you have a better chance in
              court. She aims to win your case. She can help you find peace
              throughout the legal process by providing you the knowledge and
              confidence you need to make the important decisions in your case.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ms. Kriebel has worked closely with teens, including troubled youth,
              as a 9th grade world geography teacher. She has also been a mental
              health caseworker and a counselor at a shelter for battered women.
              She remains active in the Texas community and has two children of
              her own. You may read more about Ms. Kriebel's professional
              background by following the link below:{" "}
              <a href="/attorneyprofile" className="text-red-900 hover:text-red-700 font-semibold transition-colors">
                Jacqueline R. Kriebel
              </a>.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            You Deserve an Experienced Attorney You Can Trust
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            It is important to have a divorce lawyer on your side to help you
            understand what you might face. Attorney Kriebel can help you. She
            helps people from all walks of life who are living or working in San
            Antonio and nearby counties who are getting divorced, have child
            custody issues to solve, want help with their adoption and are
            contending with DFPS matters. Not only does Ms. Kriebel provide
            knowledgeable family law representation, but she also provides
            trusted criminal defense for men and women throughout Greater San
            Antonio.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="bg-red-900 text-white rounded-lg shadow-lg overflow-hidden p-8">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Schedule Your Consultation Today
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Ms. Kriebel will fight to protect your rights. Get peace of mind by
            working with an attorney who is in your corner. Call her office in San
            Antonio at{" "}
            <a
              href="tel:210-677-5586"
              className="text-yellow-300 hover:text-yellow-200 font-semibold transition-colors"
            >
              210-677-5586
            </a>{" "}
            to schedule a personal consultation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:210-677-5586"
              className="inline-block bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Online
            </a>
          </div>
        </section>

        {/* Areas of Practice Pills */}
        <section className="text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Areas of Practice</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { index: 0, label: "Family Law", path: "/family-law" },
              { index: 1, label: "Criminal Defense", path: "/criminal-law" },
              { index: 2, label: "Child Custody", path: "/child-custody" },
              { index: 3, label: "Divorce", path: "/divorce" },
              { index: 4, label: "Domestic Violent", path: "/domestic-violence" },
              { index: 5, label: "Protection Orders", path: "/protection-orders" },
            ].map((index) => (
              <a
                key={index}
                href={index.path}
                className="inline-block bg-red-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-800 transition-colors"
              >
                {index.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
