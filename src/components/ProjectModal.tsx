"use client";

import { useEffect } from "react";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, GitFork, Code2, CheckCircle2, Clock, User, Globe, BarChart3, UtensilsCrossed, Trees } from "lucide-react";
import { modalOverlay, modalPanel } from "@/lib/variants";
import type { Project } from "@/lib/data";

const projIcon: Record<string, React.ReactNode> = {
  "rhino-camp":      <Globe size={22} />,
  "tawng-bia-mae":   <Globe size={22} />,
  "olist-dashboard": <BarChart3 size={22} />,
  "burgermaikub":    <UtensilsCrossed size={22} />,
  "gorilla-resort":  <Trees size={22} />,
};

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div key="backdrop" variants={modalOverlay} initial="hidden" animate="visible" exit="exit" onClick={onClose} className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md" />

          <div className="fixed inset-0 z-[70] overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 md:p-8">
              <motion.div
                key="panel"
                variants={modalPanel}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full max-w-3xl rounded-3xl border border-white/[0.1] bg-[#0d0d0d] shadow-2xl shadow-black/80 overflow-hidden my-4"
              >
                {/* ── Screenshot Header ── */}
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: "52%" }}>
                  <NextImage src={project.image} alt={project.title} fill className="object-cover object-top" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/25 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

                  {/* Badge */}
                  <div className="absolute top-4 left-5 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl border flex items-center justify-center" style={{ backgroundColor: project.color + "22", borderColor: project.color + "45", color: project.color }}>
                      {projIcon[project.id]}
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border" style={{ color: project.color, borderColor: project.color + "35", backgroundColor: project.color + "12", backdropFilter: "blur(8px)" }}>
                      โปรเจกต์ {project.number}
                    </span>
                  </div>

                  {/* Close */}
                  <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 border border-white/[0.12] flex items-center justify-center transition-colors duration-200 text-neutral-400 hover:text-white backdrop-blur-md">
                    <X size={15} />
                  </button>

                  {/* Title */}
                  <div className="absolute bottom-5 left-6 right-16">
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight drop-shadow-lg">{project.title}</h2>
                    <p className="text-sm font-semibold mt-1 drop-shadow" style={{ color: project.color }}>{project.subtitle}</p>
                  </div>
                </div>

                {/* ── Body ── */}
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-5 gap-8">

                    {/* Left */}
                    <div className="md:col-span-3 space-y-7">
                      <div>
                        <p className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold mb-3">รายละเอียด</p>
                        <p className="text-sm text-neutral-400 leading-[1.85]">{project.longDesc}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold mb-3">ฟีเจอร์หลัก</p>
                        <ul className="space-y-2.5">
                          {project.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-sm text-neutral-400">
                              <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: project.color }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="md:col-span-2 space-y-5">
                      <div className="grid grid-cols-2 gap-2.5">
                        {[{ icon: <User size={12} />, label: "บทบาท", value: project.role }, { icon: <Clock size={12} />, label: "ระยะเวลา", value: project.duration }].map((m) => (
                          <div key={m.label} className="p-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.025]">
                            <div className="flex items-center gap-1.5 text-neutral-600 mb-1.5">
                              {m.icon}
                              <span className="text-[9px] uppercase tracking-widest font-bold">{m.label}</span>
                            </div>
                            <p className="text-xs font-semibold text-neutral-300 leading-snug">{m.value}</p>
                          </div>
                        ))}
                      </div>

                      <div>
                        <p className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold mb-3">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((t) => (
                            <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium border" style={{ color: project.color, borderColor: project.color + "35", backgroundColor: project.color + "10" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 pt-1">
                        {project.live !== "#" && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02]"
                            style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`, color: "#0a0a0a", boxShadow: `0 4px 24px ${project.color}30` }}
                          >
                            <ExternalLink size={14} /> เปิดเว็บไซต์
                          </a>
                        )}
                        {project.github !== "#" && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm border border-white/[0.1] bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] transition-all duration-200 hover:scale-[1.02]"
                          >
                            {project.id === "tawng-bia-mae" ? <Code2 size={14} /> : <GitFork size={14} />}
                            {project.id === "tawng-bia-mae" ? "ดู Apps Script" : "ดู Source Code"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
