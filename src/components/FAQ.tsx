"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How does MemoTag work?",
    answer:
      "MemoTag combines an IoT wearable device with a mobile application to monitor a patient's physical and cognitive health. It tracks sleep patterns, fall detection, GPS location, and geofencing alerts while offering personalized care recommendations. The platform also uses AI to analyze cognitive patterns and provide actionable insights for caregivers and families.",
  },
  {
    question: "How & Who can use MemoTag?",
    answer:
      "MemoTag is designed for dementia patients, their caregivers, and family members. While a cell phone is required to access the MemoTag app, caregivers can manage the device for patients who may not use a phone. The wearable itself functions independently for features like fall detection and GPS tracking.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Yes, MemoTag prioritizes your data privacy. All health data is encrypted and stored on secure servers compliant with global privacy standards such as GDPR and HIPAA. Only authorized users have access to patient data.",
  },
  {
    question: "What is cognitive analysis, and how can it help?",
    answer:
      "Cognitive analysis involves tracking memory, speech, and behavior patterns to identify early signs of cognitive decline. MemoTag provides tailored exercises and insights based on this analysis, helping caregivers proactively manage the patient's condition and maintain their mental health.",
  },
  {
    question: "How much does MemoTag cost?",
    answer:
      "MemoTag's wearable costs ₹10,999 + ₹4,000 annual subscription for the app's features. This averages to just ₹11 per day, offering maximum care and support at an affordable price.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to the most common questions about MemoTag and how we
            support dementia & elder caregiving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-blue-600 dark:text-blue-400 transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-4 transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Still Have Questions? Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
