"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiDocker,
} from "react-icons/si";

import { DiJava } from "react-icons/di";

const techStack = [
  { name: "JavaScript", icon: <SiJavascript size={28} className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript size={28} className="text-blue-400" /> },
  { name: "React.js", icon: <SiReact size={28} className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={28} className="text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs size={28} className="text-green-400" /> },
  { name: "Express.js", icon: <SiExpress size={28} className="text-slate-300" /> },
  { name: "MongoDB", icon: <SiMongodb size={28} className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql size={28} className="text-blue-300" /> },
  { name: "Java", icon: <DiJava size={28} className="text-orange-400" /> },
  { name: "Git", icon: <SiGit size={28} className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub size={28} className="text-slate-200" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-sky-400" /> },
  { name: "Postman", icon: <SiPostman size={28} className="text-orange-400" /> },
  { name: "Vercel", icon: <SiVercel size={28} className="text-white" /> },
  { name: "Docker (Basics)", icon: <SiDocker size={28} className="text-blue-400" /> },
];

export default function TechStack() {
  return (
    <section className="relative py-24">
      {/* Glow background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Tech Stack
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative flex flex-col items-center gap-2 
                        p-6 rounded-2xl bg-slate-950/50 border border-slate-800 
                        backdrop-blur-xl hover:border-sky-500
                        hover:shadow-[0_0_22px_rgba(56,189,248,0.35)]
                        transition cursor-default"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15),_transparent_70%)] transition"></div>

              {/* Icon */}
              <div className="relative z-10">{tech.icon}</div>

              {/* Label */}
              <p className="relative z-10 text-slate-300 text-sm">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
