import React from "react";
import HeroSection from "./HeroSection.jsx";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="space-y-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <HeroSection />
          <div className="p-6 sm:p-8">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              San Antonio Family Lawyer Delivers Strong Representation to Clients
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experienced attorney also advocates for clients in criminal defense
              cases and provides estate planning services. When a legal issue
              involves your family or your freedom, it is crucial to retain the
              help of a lawyer who will help you obtain the best possible
              solution. At Kriebel Law Firm, PLLC in San Antonio, Texas, I
              advocate for clients dealing with a wide range of family law
              matters. I also provide fierce representation in criminal defense
              cases and helpful estate planning services. For over 10 years, I've
              dedicated myself to each of the cases I take on, and you can be
              confident that I'll use that experience to capably serve you.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Seasoned advocate provides exemplary service to Texas residents
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            My firm is focused on helping people from all walks of life in and
            around San Antonio with their legal concerns. My clients rely on my
            services because I am:
          </p>
          <ul className="mt-4 space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Tenacious —</span>
              Even in the most difficult cases and in the face of the toughest opposition,
              I never shy away from a challenge. With my effective representation, you can
              be confident that I'll work to reach the best possible outcome.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Attentive —</span>
              I will listen patiently as you explain your situation, then give you
              knowledgeable feedback about the law, your options and how we should proceed.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Thorough —</span>
              Whether you need fierce defense against a criminal charge, help with a
              family law matter or guidance while making end-of-life plans, I will leave
              no stone unturned when handling your matter.
            </li>
          </ul>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            With more than a decade of experience, you can rely on me to guide you
            through your matter.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Attorney provides strong, knowledgeable representation for criminal
            and family Law cases
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            When what you value most is at risk, my firm delivers strong legal
            support to ease your stress. I have deep knowledge and experience in
            multiple practice areas, including:
          </p>
          <ul className="mt-4 space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Family law —</span>
              I handle family law matters ranging from child custody disputes, alimony
              awards, property distribution and other divorce-related issues to
              protection orders and adoption guidance.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Department of Family and Protective Services Cases —</span>
              For parents who have been contacted by Family and Protective Services (CPS)
              on suspicion of abuse, I will aim to give you legal recourse against false
              accusations of neglect or abuse and combat any intimidation tactics used
              by the organization.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Criminal law —</span>
              A criminal conviction can have a significant effect on virtually every
              aspect of your life, which is why I provide strong criminal defense
              representation in cases involving allegations of drug crimes, homicide,
              assault, domestic violence, traffic violations and a range of other crimes.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Probate and estate administration —</span>
              If you have been tasked with distributing a deceased loved one's assets in
              accordance with their will, I provide support throughout the probate and
              estate administration process.
            </li>
          </ul>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            I have over a decade of experience handling cases just like yours, so
            you can be confident that I will aim for a positive resolution to your
            matter.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Contact a dedicated Texas advocate for a consultation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Kriebel Law Firm, PLLC, I represent clients in and around San
            Antonio with family law, criminal defense and estate planning matters.
            My office is conveniently located in the heart of San Antonio. To
            schedule a consultation, call me at{" "}
            <a
              href="tel:210-677-5586"
              className="text-red-900 hover:text-red-700 font-semibold transition-colors"
            >
              210-677-5586
            </a>{" "}
            or{" "}
            <a
              href="/contact"
              className="text-red-900 hover:text-red-700 font-semibold transition-colors"
            >
              contact me online
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
