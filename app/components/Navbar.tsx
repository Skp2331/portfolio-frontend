"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const scrollToSection = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/60 backdrop-blur-xl border-b border-slate-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-bold tracking-wide text-sky-400"
        >
          SKP
        </motion.h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-sm text-slate-300 hover:text-white transition"
            >
              {item.label}

              {/* Underline animation */}
              {active === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 mx-auto h-[2px] bg-sky-400 rounded-full bottom-[-4px]"
                />
              )}
            </button>
          ))}

          {/* Premium Resume Button */}
          <a
            href="/Resume_SomKP.pdf"
            download
            className="btn-glow btn-shine px-4 py-2 rounded-full border border-sky-500 
                       text-sky-300 hover:bg-sky-500/20 transition text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-t border-slate-800 py-4 space-y-3 px-6"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-slate-300 hover:text-white transition text-sm"
            >
              {item.label}
            </button>
          ))}

          {/* Resume in mobile */}
          <a
            href="/Resume_SomKP.pdf"
            download
            className="block w-full text-left text-sky-300 border border-sky-500 px-3 py-2 rounded-lg 
                       hover:bg-sky-500/20 transition text-sm mt-2"
          >
            Resume
          </a>
        </motion.div>
      )}
    </nav>
  );
}
