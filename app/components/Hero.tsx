"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-36 flex flex-col items-center text-center">
      {/* Background Glow Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-10 left-1/3 w-96 h-96 rounded-full bg-sky-500/20 blur-[110px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
        className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-blue-700/20 blur-[100px]"
      />

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm tracking-wide text-sky-300/90 uppercase"
      >
        Full Stack Developer • AI Integration • Java
      </motion.p>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold leading-tight mt-3"
      >
        Hi, I'm{" "}
        <span className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.6)]">
          Som Kumar Pawar
        </span>
      </motion.h1>

      {/* Short Bio */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="mt-4 text-slate-300 max-w-xl text-[15.5px] leading-relaxed"
      >
        I build interactive, modern, and AI-powered digital experiences.
        Passionate about clean UI, scalable backend systems, and bringing ideas
        to life using full-stack engineering.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-10 flex gap-4 z-20"
      >
        <a
          href="#projects"
          className="btn-glow btn-shine px-8 py-3 rounded-full bg-gradient-to-r 
               from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500
               text-sm font-medium shadow-lg shadow-sky-700/25
               transition-transform hover:scale-[1.04] active:scale-[0.96]"
        >
          View My Work
        </a>

        {/* <a
          href="#contact"
          className="px-8 py-3 rounded-full border border-slate-600 hover:border-sky-400
                     text-sm font-medium transition transform hover:scale-[1.03] 
                     active:scale-[0.98]"
        >
          Contact Me
        </a> */}

        <a
          href="/Resume_SomKP.pdf"
          download
          className="btn-glow btn-shine px-8 py-3 rounded-full border border-sky-500 
               text-sky-300 hover:bg-sky-500/20 transition text-sm font-medium
               hover:scale-[1.04] active:scale-[0.96]"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
