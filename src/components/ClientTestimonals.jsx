import React from "react";

const ClientTestimonals = () => {
  const testimonials = [
    {
      title: "Very Upfront – She Advises You Not What You Want To Hear, But What You Need To Do",
      content: "I was hit with a surprise divorce petition which cast me in the most negative matter in order to gain assets and possible maintenance from me. I'm glad I chose Ms. Jacqueline Kriebel. She was upfront, communicative, responsive, and professional throughout. She was able to give genuine advice which helped me get through this legal process with minimal stress and loss to my present and future assets. I'll always be grateful.",
      author: "Jac",
      type: "Divorce client",
      rating: 5
    },
    {
      title: "Highly Recommend!! Quick Divorce And Excellent Service!",
      content: "My husband and I were seeking an attorney who was reasonable and efficient. We agreed on most issues and just had a couple legal questions regarding property division. I don't really trust attorneys and was unsure how to go about hiring one my husband and I could trust not to take us for a ride. I found Jacqueline Kriebel on avvo.com and saw her amazing reviews. Her clients are right about her. When I called she personally answered. I was expecting to speak to an assistant and not the attorney herself. I was impressed immediately! Jacqueline answered my questions patiently and made me feel at ease right away. My husband and I didn't want to drag out our divorce. Jacqueline filed our paperwork and finalized just past the 60-day waiting period. Our divorce was quick, easy, and legally painless.",
      author: "Anonymous",
      type: "Divorce client",
      rating: 5
    },
    {
      title: "Jacqueline Kriebel You ARE The Greatest!",
      content: "I'm 62 years old and have had many attorneys over the past 62 years of my life. I have had BAD experiences with attorneys until I met Ms. Kriebel. Jacqueline kept us informed with all that was going on it our case. She was right up front about the outcome and fought our rights. Whenever we called and could not talk to her she would always return our calls. All I can say is that she is GREAT!!!! She is a asset to the legal profession!! If I ever need an attorney you can bet she will be the one that I call. Jacqueline Kriebel WON our case and we want to say THANK YOU very much.",
      author: "Roy",
      type: "Child Custody client",
      rating: 5
    },
    {
      title: "Superstar!!",
      content: "Jacqueline Kriebel is a Superstar family attorney. She took all the correct legal steps to bring a quick and favorable resolution to my case in the absence of a mutual agreement. She communicated with me efficiently and provided legal guidance every step of the way. She is very knowledgeable and professional. She addressed issues in court as they arose effectively. I am very pleased with her overall service.",
      author: "Anonymous",
      type: "Family client",
      rating: 5
    }
  ];

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Client Testimonials
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Read what our clients have to say about their experience working with
          Jacqueline Kriebel and the Kriebel Law Firm.
        </p>
      </div>

      {/* Overall Rating */}
      <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 mb-12 text-center">
        <div className="flex justify-center mb-4">
          <StarRating rating={5} />
        </div>
        <h2 className="text-2xl font-bold mb-2">5.0 Average Rating</h2>
        <p className="text-lg opacity-90">Based on client reviews</p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif font-bold text-gray-900 flex-1 mr-4">
                  {testimonial.title}
                </h3>
                <StarRating rating={testimonial.rating} />
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div>
                  <span className="font-semibold">{testimonial.author}</span>
                  <span className="mx-2">•</span>
                  <span>{testimonial.type}</span>
                </div>
                <div className="text-red-900 font-semibold">
                  5-star review
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Ready to Discuss Your Case?
        </h3>
        <div className="space-x-4">
          <a
            href="tel:210-677-5586"
            className="inline-block bg-red-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
          >
            Call Now
          </a>
          <a
            href="/contact"
            className="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonals;
