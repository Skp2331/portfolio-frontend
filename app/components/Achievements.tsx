"use client";

import { motion } from "framer-motion";
import { FaMedal, FaStar, FaCertificate } from "react-icons/fa";

const achievements = [
  {
    year: "2024–2027",
    title: "Google Cloud Certified – Cloud Digital Leader",
    icon: <FaCertificate className="text-blue-400" />,
    description: "Completed the Cloud Digital Leader certification validating cloud concepts, security, and workload deployment."
  },
  {
    year: "2024",
    title: "DSA Using Java – HPC Certified",
    icon: <FaStar className="text-yellow-400" />,
    description: "Mastered Data Structures and Algorithms in Java with hands-on problem solving."
  },
  {
    year: "2024",
    title: "NPTEL Cloud Computing – IIT Kharagpur",
    icon: <FaMedal className="text-pink-400" />,
    description: "Completed NPTEL Cloud Computing course by IIT Kharagpur with strong theoretical + practical foundations."
  },
  {
    year: "2024",
    title: "100+ Problems Solved on LeetCode",
    icon: <FaStar className="text-sky-400" />,
    description: "Strengthened problem-solving, algorithms, and coding confidence."
  }
];

export default function Achievements() {
  return (
    <section className="relative py-24">
      {/* Glow background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[450px] h-[450px] bg-sky-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Achievements
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-slate-700 ml-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative pl-10 mb-12"
            >
              {/* Dot */}
              <div
                className="absolute left-[-12px] top-1 w-4 h-4 rounded-full 
                           bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.6)]"
              />

              {/* Icon */}
              <div className="absolute left-[-48px] top-[-6px] text-xl">
                {item.icon}
              </div>

              {/* Year */}
              <p className="text-xs text-slate-400">{item.year}</p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-sky-300 mt-1">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
