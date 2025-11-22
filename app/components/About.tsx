"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-24">
      {/* Glow circle behind */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-sky-500/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          About Me
        </motion.h2>

        {/* Subtext under title */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-slate-400 text-sm max-w-md mx-auto"
        >
          A quick introduction to who I am and what drives me.
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-slate-300 text-[15.5px] leading-relaxed px-4"
        >
          I’m <span className="text-sky-400 font-medium">Som Kumar Pawar</span>, 
          a passionate Full-Stack Developer driven by crafting modern, intuitive
          and scalable digital experiences.  
          <br />
          <br />
          I enjoy solving problems with clean code, building real-world
          full-stack applications, integrating AI into user experiences, and ensuring
          the design feels smooth, minimal, and aesthetic.
          <br />
          <br />
          With experience across the MERN stack, Java, REST APIs, real-time 
          socket applications, and AI integrations — I aim to create meaningful 
          applications that blend creativity with engineering.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent w-full mt-6"
        />

        {/* Quick Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-6"
        >
          {[
            "Full Stack Developer",
            "AI Integration",
            "Java Backend",
            "REST APIs",
            "Clean UI/UX",
            "Real-Time Apps",
            "MERN Stack",
            "Cloud Enthusiast",
          ].map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs rounded-full border border-slate-700 
                         bg-slate-900/60 text-slate-300"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
