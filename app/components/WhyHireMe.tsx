"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Trophy, Rocket, Sparkles, ShieldCheck } from "lucide-react";

export default function WhyHireMe() {
  const items = [
    {
      icon: <Code2 size={28} className="text-sky-400" />,
      title: "Strong Technical Foundation",
      desc: "Skilled in MERN stack, Java, REST APIs, and full-stack architecture.",
    },
    {
      icon: <Brain size={28} className="text-sky-400" />,
      title: "Problem-Solving Mindset",
      desc: "100+ DSA problems solved with strong OOP and algorithmic thinking.",
    },
    {
      icon: <Rocket size={28} className="text-sky-400" />,
      title: "Fast & Adaptive Learner",
      desc: "Quickly adapt to new technologies, tools, and development workflows.",
    },
    {
      icon: <Sparkles size={28} className="text-sky-400" />,
      title: "AI + Full-Stack Capability",
      desc: "Built AI-powered applications — a rare skill set among freshers.",
    },
    {
      icon: <ShieldCheck size={28} className="text-sky-400" />,
      title: "Reliable & Professional",
      desc: "Deliver clean code, meet deadlines, and maintain a strong work ethic.",
    },
    {
      icon: <Trophy size={28} className="text-sky-400" />,
      title: "End-to-End Project Execution",
      desc: "From idea → design → backend → frontend → deployment.",
    }
  ];

  return (
    <section className="py-20 space-y-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center"
      >
        Why Should You Hire Me?
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800
                       backdrop-blur-xl hover:border-sky-500 
                       hover:shadow-[0_0_22px_rgba(56,189,248,0.35)]
                       transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-sky-300 font-semibold text-lg">{item.title}</h3>
            </div>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
