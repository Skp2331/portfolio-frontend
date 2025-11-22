"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
  tags: string[];
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_API_BASE_URL;
        const res = await fetch(`${base}/api/projects`);
        const data = await res.json();
        setProjects(data.projects || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-16 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="text-slate-400 text-sm mt-1">
          A showcase of my best work — full-stack, AI, and real-time apps.
        </p>
      </div>

      {loading ? (
        <p className="text-slate-400 text-center text-sm">Loading projects...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(56,189,248,0.25)",
              }}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 
                         backdrop-blur-xl p-6 transition-all duration-300"
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                               transition duration-500 bg-gradient-to-br from-sky-500/20 to-blue-700/20 blur-xl" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-sm text-slate-300 mb-4">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-full text-xs border border-slate-700 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 text-sm">
                  {project.live && (
                    <a
                      className="underline text-sky-400 hover:text-sky-300 transition"
                      href={project.live}
                      target="_blank"
                    >
                      Live
                    </a>
                  )}
                  <a
                    className="underline text-slate-200 hover:text-white transition"
                    href={project.github}
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
