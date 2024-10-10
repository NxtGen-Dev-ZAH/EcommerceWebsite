"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import Headers from "@/components/Header";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Headers />
      <div
        className="min-h-screen bg-cover bg-center text-crescent-brown relative"
        style={
          {
            // backgroundImage: `url(${contactBg.src})`,
          }
        }
      >
        <div className="absolute inset-0 bg-gradient-to-b from-crescent-white/90 to-crescent-beige/90"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-semibold tracking-tight mb-4 text-crescent-dark-brown">
              Get In Touch
            </h1>
            <p className="text-lg text-crescent-dark-brown">
              Feel free to reach out to us for any questions or support. We’re
              happy to help.
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col items-center">
              <Mail
                className="text-crescent-dark-brown hover:scale-105 transform transition duration-300"
                size={36}
              />
              <h3 className="text-2xl font-semibold mt-4">Email Us</h3>
              <p className="text-crescent-dark-brown mt-2">
                info@crescentsaline.com
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone
                className="text-crescent-dark-brown hover:scale-105 transform transition duration-300"
                size={36}
              />
              <h3 className="text-2xl font-semibold mt-4">Call Us</h3>
              <p className="text-crescent-dark-brown mt-2">+123 456 7890</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin
                className="text-crescent-dark-brown hover:scale-105 transform transition duration-300"
                size={36}
              />
              <h3 className="text-2xl font-semibold mt-4">Visit Us</h3>
              <p className="text-crescent-dark-brown mt-2">
                123 Salt Street, New York, NY
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white/95 p-10 rounded-lg shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-xl font-semibold text-crescent-dark-brown mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-crescent-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-crescent-dark-brown transition duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-xl font-semibold text-crescent-dark-brown mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-crescent-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-crescent-dark-brown transition duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-xl font-semibold text-crescent-dark-brown mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-crescent-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-crescent-dark-brown h-40 transition duration-300"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-crescent-dark-brown text-white px-8 py-3 rounded-lg font-bold transition duration-300 hover:bg-crescent-brown hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-crescent-dark-brown mb-4">
                  Thank you!
                </h2>
                <p className="text-lg text-crescent-dark-brown">
                  Your message has been sent. We will get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
