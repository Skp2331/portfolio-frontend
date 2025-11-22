"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[450px] h-[450px] bg-blue-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Let’s Connect
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-slate-300 max-w-xl mx-auto text-[15px]"
        >
          Whether you're looking for a full-time developer, intern, or want to discuss a project,
          feel free to reach out. I’ll get back to you as soon as possible.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 p-8 rounded-2xl bg-slate-950/40 border border-slate-800 
                     backdrop-blur-xl shadow-[0_0_25px_rgba(56,189,248,0.15)]
                     hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] 
                     transition"
        >
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="text-left">
              <label className="text-sm text-slate-300">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 px-3 py-2 text-sm rounded-lg bg-slate-900 
                           border border-slate-700 outline-none focus:border-sky-500
                           transition"
              />
            </div>

            {/* Email */}
            <div className="text-left">
              <label className="text-sm text-slate-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-3 py-2 text-sm rounded-lg bg-slate-900 
                           border border-slate-700 outline-none focus:border-sky-500
                           transition"
              />
            </div>
          </div>

          {/* Message */}
          <div className="text-left mt-6">
            <label className="text-sm text-slate-300">Message</label>
            <textarea
              placeholder="Tell me a bit about your project or requirement..."
              className="w-full mt-1 px-3 py-3 text-sm rounded-lg bg-slate-900 
                         border border-slate-700 outline-none focus:border-sky-500
                         min-h-[120px] transition"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="submit"
            className="w-full mt-8 px-4 py-3 rounded-full bg-sky-600 hover:bg-sky-500 
                       text-sm font-medium shadow-lg shadow-sky-700/30"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Direct Email */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-sm text-slate-400"
        >
          Or email me directly at{" "}
          <span className="text-sky-400 font-medium">
            somkumarpawar7@gmail.com
          </span>
        </motion.p>
      </div>
    </section>
  );
}
