"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function ParticleBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth parallax transformation
  const moveX = useTransform(mouseX, [0, 1], [-20, 20]);
  const moveY = useTransform(mouseY, [0, 1], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ x: moveX, y: moveY }}
    >
      {/* Very soft glowing circles */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-sky-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 blur-[130px] rounded-full" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-400/10 blur-[150px] rounded-full" />
    </motion.div>
  );
}
