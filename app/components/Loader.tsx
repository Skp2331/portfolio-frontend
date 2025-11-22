"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1.2,
            }}
            className="text-4xl font-bold text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
          >
            SKP
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
