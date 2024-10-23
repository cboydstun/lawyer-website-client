import React from "react";
import NewsImage from "../assets/News.png";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Jacqueline's Appearance on KENS5 Great Day SA",
      date: "2024",
      image: NewsImage,
      url: "https://www.kens5.com/video/entertainment/television/great-day-sa/kriebel-law-firm/273-8284632",
      description: "Watch Jacqueline Kriebel's television appearance where she discusses important legal matters and provides valuable insights for the San Antonio community.",
      type: "Media Appearance"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Latest News & Media
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest news, media appearances, and achievements
          from Kriebel Law Firm.
        </p>
      </div>

      {/* News Grid */}
      <div className="space-y-8">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.01] duration-300"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-block bg-red-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.type}
                    </span>
                  </div>
                </a>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {item.description}
                  </p>
                </div>
                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-900 hover:text-red-700 font-semibold transition-colors"
                  >
                    Watch Now
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Areas of Practice Pills */}
      <section className="text-center mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-6">Areas of Practice</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "Family Law", path: "/family-law" },
            { label: "Criminal Defense", path: "/criminal-law" },
            { label: "Child Custody", path: "/child-custody" },
            { label: "Divorce", path: "/divorce" },
            { label: "Domestic Violent", path: "/domestic-violence" },
            { label: "Protection Orders", path: "/protection-orders" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="inline-block bg-red-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-800 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="mt-16 bg-red-900 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">
          Stay Informed
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Want to receive updates about our latest news and legal insights?
          Contact us to join our mailing list.
        </p>
        <div className="space-x-4">
          <a
            href="/contact"
            className="inline-block bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
          <a
            href="tel:210-677-5586"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Follow Us on Social Media
        </h3>
        <div className="flex justify-center space-x-6">
          {/* Add social media links when available */}
          <a
            href="#"
            className="text-gray-600 hover:text-red-900 transition-colors"
          >
            <span className="sr-only">Facebook</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
