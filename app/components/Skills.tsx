"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "SQL", "Python"] },
  { category: "Frontend", items: ["React.js", "Next.js", "HTML", "CSS", "TailwindCSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Socket.io"] },
  { category: "Databases", items: ["MongoDB", "MySQL"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Docker (Basics)"] },
  { category: "Core Concepts", items: ["DSA", "OOP", "MVC", "JWT/OAuth", "Real-Time Apps", "Agile"] },
];

export default function Skills() {
  return (
    <section className="relative py-24">
      
      {/* Subtle Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[450px] h-[450px] bg-blue-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800 
                         backdrop-blur-xl shadow-[0_0_20px_rgba(56,189,248,0.10)] hover:shadow-[0_0_26px_rgba(56,189,248,0.25)] 
                         transition hover:border-sky-500"
            >
              <h3 className="text-lg font-semibold text-sky-300 mb-4">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item: string) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-md bg-slate-900/70 border border-slate-700 text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
