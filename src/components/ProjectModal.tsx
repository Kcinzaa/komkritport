"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, ArrowUpRight, GitFork, ExternalLink,
  CheckCircle2, Clock, User, Globe, Smartphone, BarChart3, Sparkles,
} from "lucide-react";
import { modalOverlay, modalPanel } from "@/lib/variants";
import type { Project } from "@/lib/data";

const projIcon: Record<string, React.ReactNode> = {
  "rhino-camp":       <Globe size={32} />,
  "tawng-bia-mae":        <Smartphone size={32} />,
  "olist-dashboard":      <BarChart3 size={32} />,
  "kabkhawja-hatyaibot":  <Sparkles size={32} />,
};

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // Close on Escape
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-md"
          />

          {/* Panel */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
            <motion.div
              key="panel"
              variants={modalPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-3xl rounded-3xl border border-white/[0.1] bg-[#0d0d0d] shadow-2xl shadow-black/80 overflow-hidden my-4"
            >
              {/* ── Hero Header ── */}
              <div
                className="relative h-52 md:h-64 flex items-end p-7 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, rgba(0,0,0,0.4))` }}
              >
                {/* Geometric decoration */}
                <div className="absolute inset-0 flex items-center justify-end pr-10 opacity-[0.08]">
                  <div className="w-64 h-64 rounded-full border-2 border-current" style={{ color: project.color }} />
                  <div className="absolute w-40 h-40 rounded-full border-2 border-current" style={{ color: project.color }} />
                  <div className="absolute w-20 h-20 rounded-full" style={{ backgroundColor: project.color }} />
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.3) 60%, transparent 100%)",
                  }}
                />

                {/* Icon + num */}
                <div className="absolute top-5 left-7 flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl border flex items-center justify-center"
                    style={{
                      backgroundColor: project.color + "20",
                      borderColor: project.color + "40",
                      color: project.color,
                    }}
                  >
                    {projIcon[project.id]}
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-[0.2em] uppercase"
                    style={{ color: project.color }}
                  >
                    Project {project.number}
                  </span>
                </div>

                {/* Title */}
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm font-semibold mt-1" style={{ color: project.color }}>
                    {project.subtitle}
                  </p>
                </div>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/[0.1] flex items-center justify-center transition-colors duration-200 text-neutral-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              {/* ── Body ── */}
              <div className="p-7 md:p-8">
                <div className="grid md:grid-cols-5 gap-8">

                  {/* Left — Description + Features */}
                  <div className="md:col-span-3 space-y-7">
                    <div>
                      <p className="text-xs text-neutral-600 uppercase tracking-widest font-bold mb-3">About</p>
                      <p className="text-sm text-neutral-400 leading-[1.8]">{project.longDesc}</p>
                    </div>

                    <div>
                      <p className="text-xs text-neutral-600 uppercase tracking-widest font-bold mb-3">Key Features</p>
                      <ul className="space-y-2.5">
                        {project.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-neutral-400">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: project.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right — Meta + Stack + Links */}
                  <div className="md:col-span-2 space-y-6">
                    {/* Meta */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: <User size={13} />, label: "Role",     value: project.role },
                        { icon: <Clock size={13} />, label: "Duration", value: project.duration },
                      ].map((m) => (
                        <div key={m.label} className="p-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.025]">
                          <div className="flex items-center gap-1.5 text-neutral-600 mb-1.5">
                            {m.icon}
                            <span className="text-[10px] uppercase tracking-widest font-bold">{m.label}</span>
                          </div>
                          <p className="text-xs font-semibold text-neutral-300 leading-snug">{m.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div>
                      <p className="text-xs text-neutral-600 uppercase tracking-widest font-bold mb-3">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full text-xs font-medium border"
                            style={{
                              color: project.color,
                              borderColor: project.color + "35",
                              backgroundColor: project.color + "10",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-2 pt-2">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
                        style={{ backgroundColor: project.color, color: "#0a0a0a" }}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm border border-white/[0.1] bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] transition-all duration-200 hover:scale-[1.02]"
                      >
                        <GitFork size={14} />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
