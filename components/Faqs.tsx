"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Are your Himalayan salt products authentic?",
    answer:
      "Yes, we source all our Himalayan salt directly from the foothills of the Himalayas, ensuring authenticity and purity in every product.",
  },
  {
    id: 2,
    question: "Do you offer international shipping for your salt products?",
    answer:
      "Yes, we offer international shipping to many countries. We ensure that our packaging is secure, eco-friendly, and suitable for safe transportation of salt products globally.",
  },
  {
    id: 3,
    question: "What is your return policy for salt products?",
    answer:
      "We offer a 30-day return policy on most of our products. If you're unsatisfied with your purchase, you can return it for a refund or exchange, provided the product remains in its original condition.",
  },
  {
    id: 4,
    question: "How do I track my order?",
    answer:
      "After placing your order, you'll receive an email with a tracking number. You can track your shipment on our website or through the courier's website.",
  },
  {
    id: 5,
    question: "Do you have wholesale options for your products?",
    answer:
      "Yes, we offer wholesale purchasing options. Please contact our customer service for details on bulk orders and special pricing.",
  },
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-crescent-light-brown py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-crescent-dark-brown">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-crescent-dark-brown" />
        ) : (
          <ChevronDown className="w-5 h-5 text-crescent-dark-brown" />
        )}
      </button>
      {isOpen && <p className="mt-3 text-gray-600">{answer}</p>}
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="bg-gradient-to-t from-crescent-light-beige to-white py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-crescent-dark-brown text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
