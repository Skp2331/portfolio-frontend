"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-10 mt-20 border-t border-slate-800 bg-slate-950/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left - Branding */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold tracking-wide text-sky-400"
        >
          SKP Portfolio
        </motion.h3>

        {/* Middle - Socials */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex items-center gap-6 text-xl"
        >
          <a
            href="https://github.com/Skp2331"
            target="_blank"
            className="text-slate-300 hover:text-sky-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/som-kumar-pawar"
            target="_blank"
            className="text-slate-300 hover:text-sky-400 transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* Right - Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-sm text-slate-500"
        >
          © {new Date().getFullYear()} Som Kumar Pawar • All Rights Reserved
        </motion.p>
      </div>
    </footer>
  );
}
