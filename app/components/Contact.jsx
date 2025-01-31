"use client";
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="pb-4 py-16 bg-cyan-50">
    <div className="container mx-auto px-4">
     <h2 className="text-xl md:text-3xl font-bold text-center text-blue-600 mb-4">
                Your Questions: <span className="text-black italic">Our Priority</span>
            </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Reach Out – We&apos;re Just a Message Away!</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
          </p>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
          <p className="text-gray-600 mb-8">
            Contact us anytime for further information. Our team is here to assist you with any queries you may have regarding our services.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaEnvelope size={25} className="text-blue-500 mr-4" />
              <span className="text-gray-700">contact@example.com</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt size={25} className="text-green-500 mr-4" />
              <span className="text-gray-700">+123 456 7890</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt size={25} className="text-red-500 mr-4" />
              <span className="text-gray-700">123 Main Street, City, Country</span>
            </div>
            <div className="flex items-center">
              <FaWhatsapp size={25} className="text-green-400 mr-4" />
              <span className="text-gray-700">Chat with us on WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="contact">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
