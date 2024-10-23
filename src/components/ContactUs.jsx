import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input, Button } from "react-daisyui";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xwpejzay");

  if (state.succeeded) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            Thank You for Contacting Us
          </h2>
          <p className="text-gray-600">
            We have received your message and will respond as soon as possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-900 focus:border-red-900"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-900 focus:border-red-900"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-1 text-sm text-red-600"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-900 focus:border-red-900"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-900 focus:border-red-900 resize-none"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-1 text-sm text-red-600"
              />
            </div>

            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-red-900 hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Office Information */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Office Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-red-900 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">San Antonio, Texas</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-red-900 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a
                    href="tel:210-677-5586"
                    className="text-red-900 hover:text-red-700 transition-colors"
                  >
                    210-677-5586
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-red-900 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a
                    href="mailto:jacquelinekriebel@gmail.com"
                    className="text-red-900 hover:text-red-700 transition-colors"
                  >
                    jacquelinekriebel@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Office Hours
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="text-gray-900 font-medium">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday - Sunday</span>
                <span className="text-gray-900 font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
