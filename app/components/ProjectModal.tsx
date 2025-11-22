"use client";

import { motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose }: any) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Modal box */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        className="relative w-[90%] max-w-2xl bg-slate-950/90 border border-slate-800 rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.3)] p-6 space-y-4"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-200 transition"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-sky-400">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-3">
          {project.techStack?.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-700 text-xs text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full bg-slate-900/70 border border-slate-700 text-sky-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-6 pt-4">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 text-sky-400 hover:text-sky-300 text-sm"
          >
            <Github size={18} />
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="flex items-center gap-2 text-slate-200 hover:text-white text-sm"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
