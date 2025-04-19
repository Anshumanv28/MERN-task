"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    number: "10,000+",
    label: "Insights Collected",
    description: "Data points analyzed to improve caregiving",
  },
  {
    number: "35,000+",
    label: "Hospitals & Patient Network",
    description: "Healthcare providers using MemoTag",
  },
  {
    number: "500+",
    label: "Lives Impacted",
    description: "Patients and caregivers supported",
  },
];

const testimonials = [
  {
    quote:
      "Managing multiple patients was tough, but MemoTag's health summaries and care tips make it seamless. It's like having an extra helping hand.",
    author: "Rajeev Mehta",
    role: "Professional Caregiver",
    result: "48% better cognition",
  },
  {
    quote:
      "MemoTag's geofencing alerts and health progress reports ensure my grandmother's safety. It's brought much-needed hope to our family.",
    author: "Anjali Gupta",
    role: "Granddaughter",
    result: "62% fewer wanderings",
  },
  {
    quote:
      "MemoTag's fall detection and speech analysis tools have been game-changers. My mother feels more secure, and I feel less stressed.",
    author: "Aman Verma",
    role: "Son",
    result: "87% falls prevented",
  },
  {
    quote:
      "Caring for my father with dementia was overwhelming until MemoTag. Its real-time alerts and cognitive insights give me peace of mind, even when I'm not around.",
    author: "Sunita Sharma",
    role: "Daughter",
    result: "38% memory improvement",
  },
];

export default function Traction() {
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
            Evolving Dementia Care with AI-Driven Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MemoTag integrates AI & data analytics to deliver personalized care
            solutions, cognitive stimulation with peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {achievement.number}
              </div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {achievement.label}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Hear from Our Care Community
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
              >
                <div className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {testimonial.role}
                </div>
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Result: {testimonial.result}
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
            Join Our Growing Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}
