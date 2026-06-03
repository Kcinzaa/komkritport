"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Smartphone, BarChart3, Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/variants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectModal } from "@/components/ProjectModal";
import { projects, type Project } from "@/lib/data";

// ── Mockup frames ──────────────────────────────────────────────────────────

function BrowserFrame({ url, color, children }: { url: string; color: string; children: React.ReactNode }) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/[0.1] bg-[#0a0a0a]">
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#0d0d0d] border-b border-white/[0.07]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 h-5 mx-2 rounded bg-white/[0.04] border border-white/[0.05] flex items-center px-2 gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color + "70" }} />
          <span className="text-[9px] text-neutral-600 font-mono truncate">{url}</span>
        </div>
      </div>
      <div className="px-3 pt-2 pb-3">{children}</div>
    </div>
  );
}

function PhoneFrame({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      className="relative w-28 h-52 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60"
      style={{ border: "2px solid rgba(255,255,255,0.1)" }}
    >
      <div className="absolute top-0 left-0 right-0 flex justify-center z-10 pt-1.5">
        <div className="w-12 h-4 rounded-b-xl bg-[#060606] border-b border-x border-white/[0.08]" />
      </div>
      <div className="h-full bg-[#0a0a0a] pt-5">{children}</div>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/20" />
    </div>
  );
}

function DashboardFrame({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/[0.08] bg-[#080808]">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] bg-[#0c0c0c]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }} />
          <span className="text-[9px] text-neutral-600 font-semibold uppercase tracking-wider">Power BI Report</span>
        </div>
        <div className="flex gap-1">
          {["bar", "pie", "line"].map((t) => (
            <div key={t} className="w-4 h-4 rounded bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
              <div className="w-2 h-1.5 bg-white/20 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

// ── Visual content per project ─────────────────────────────────────────────

function ProjectVisual({ project }: { project: Project }) {
  const c = project.color;

  if (project.id === "rhino-camp") {
    return (
      <BrowserFrame url="rhino-camp.vercel.app" color={c}>
        <div className="space-y-2">
          <div className="h-14 rounded-lg" style={{ background: `linear-gradient(135deg, ${c}22, ${c}08)` }}>
            <div className="flex items-center justify-between h-full px-3">
              <div className="space-y-1">
                <div className="h-1.5 w-16 rounded-full" style={{ backgroundColor: c + "60" }} />
                <div className="h-1 w-10 rounded-full bg-white/10" />
              </div>
              <div className="px-2.5 py-1 rounded-md text-[8px] font-bold" style={{ backgroundColor: c, color: "#0a0a0a" }}>Book</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[0.9, 0.6, 0.75].map((o, i) => (
              <div key={i} className="h-8 rounded-md border border-white/[0.06]" style={{ backgroundColor: `rgba(255,255,255,${o * 0.03})` }} />
            ))}
          </div>
          <div className="flex gap-1.5">
            <div className="h-5 flex-1 rounded bg-white/[0.03] border border-white/[0.05]" />
            <div className="h-5 w-12 rounded" style={{ backgroundColor: c + "40" }} />
          </div>
        </div>
      </BrowserFrame>
    );
  }

  if (project.id === "tawng-bia-mae") {
    return (
      <PhoneFrame color={c}>
        <div className="px-2 space-y-1.5">
          <div className="h-5 rounded-md" style={{ background: `linear-gradient(135deg, ${c}30, ${c}10)` }}>
            <div className="flex items-center gap-1 h-full px-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c }} />
              <div className="h-1 w-10 rounded-full" style={{ backgroundColor: c + "60" }} />
            </div>
          </div>
          {[0.8, 0.6, 0.4].map((o, i) => (
            <div key={i} className="flex items-center gap-1.5 p-1.5 rounded-lg border border-white/[0.06]" style={{ backgroundColor: `rgba(255,255,255,${o * 0.03})` }}>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c + (i === 0 ? "60" : "25") }} />
              <div className="space-y-0.5 flex-1">
                <div className="h-1 rounded-full bg-white/15" style={{ width: `${80 - i * 15}%` }} />
                <div className="h-0.5 rounded-full bg-white/10" style={{ width: `${60 - i * 10}%` }} />
              </div>
            </div>
          ))}
          <div className="mt-1 h-7 rounded-lg border border-white/[0.1] bg-white/[0.02] flex items-center px-2 gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c + "80" }} />
            <div className="h-1 flex-1 rounded-full bg-white/10" />
          </div>
        </div>
      </PhoneFrame>
    );
  }

  if (project.id === "olist-dashboard") {
    return (
      <DashboardFrame color={c}>
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-1.5">
            {["Revenue", "Orders", "Churn"].map((l, i) => (
              <div key={l} className="p-2 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                <p className="text-[7px] text-neutral-600 mb-0.5">{l}</p>
                <div className="h-1 w-full rounded-full bg-white/[0.05] overflow-hidden">
                  <div className="h-full rounded-full" style={{ backgroundColor: c, width: `${75 - i * 15}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="h-16 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
            <div className="flex items-end gap-1 h-full">
              {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ height: `${h}%`, backgroundColor: i === 5 ? c : c + "35" }}
                />
              ))}
            </div>
          </div>
        </div>
      </DashboardFrame>
    );
  }

  // KabKhawJa
  return (
    <BrowserFrame url="hatyaibot.vercel.app" color={c}>
      <div className="space-y-2">
        <div className="h-8 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center gap-2 px-2">
          <div className="w-5 h-5 rounded-full" style={{ background: `linear-gradient(135deg, ${c}50, ${c}20)` }} />
          <div className="h-1 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="space-y-1.5">
          {[{ side: "right", w: "70%" }, { side: "left", w: "55%" }, { side: "right", w: "80%" }].map((m, i) => (
            <div key={i} className={`flex ${m.side === "right" ? "justify-end" : "justify-start"}`}>
              <div
                className="h-5 rounded-xl px-2 flex items-center"
                style={{
                  width: m.w,
                  backgroundColor: m.side === "right" ? c + "35" : "rgba(255,255,255,0.05)",
                  border: "1px solid " + (m.side === "right" ? c + "40" : "rgba(255,255,255,0.07)"),
                }}
              >
                <div className="h-1 w-full rounded-full" style={{ backgroundColor: m.side === "right" ? c + "80" : "rgba(255,255,255,0.15)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

// ── Cards ──────────────────────────────────────────────────────────────────

const projIcon: Record<string, React.ReactNode> = {
  "rhino-camp":      <Globe size={20} />,
  "tawng-bia-mae":       <Smartphone size={20} />,
  "olist-dashboard":     <BarChart3 size={20} />,
  "kabkhawja-hatyaibot": <Sparkles size={20} />,
};

function FeaturedCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={1}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -4, transition: { duration: 0.28 } }}
      onClick={onClick}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setMouse(null)}
      data-cursor
      className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.022] overflow-hidden cursor-pointer mb-4"
    >
      {mouse && (
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: `radial-gradient(350px circle at ${mouse.x}px ${mouse.y}px, ${project.color}0e, transparent 70%)`,
        }} />
      )}

      <div className="relative z-10 grid lg:grid-cols-2 min-h-[300px]">
        {/* Text */}
        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-2xl border flex items-center justify-center"
                style={{ backgroundColor: project.color + "18", borderColor: project.color + "30", color: project.color }}
              >
                {projIcon[project.id]}
              </div>
              <div>
                <p className="text-[10px] text-neutral-700 tracking-widest uppercase font-bold">{project.number}</p>
                <p className="text-sm font-semibold" style={{ color: project.color }}>{project.subtitle}</p>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3 leading-tight">
              {project.title}
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-5 max-w-md">{project.shortDesc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 5).map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg text-xs text-neutral-600 bg-white/[0.04] border border-white/[0.07]">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 pt-6 mt-4 border-t border-white/[0.06]">
            {[{ label: "Role", value: project.role }, { label: "Duration", value: project.duration }].map((s) => (
              <div key={s.label}>
                <p className="text-[10px] text-neutral-700 uppercase tracking-widest mb-0.5">{s.label}</p>
                <p className="text-sm font-semibold text-neutral-300">{s.value}</p>
              </div>
            ))}
            <div className="ml-auto flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: project.color }}>
              View details <ArrowUpRight size={14} />
            </div>
          </div>
        </div>

        {/* Mockup */}
        <div className="relative flex items-center justify-center p-8 border-t lg:border-t-0 lg:border-l border-white/[0.06]"
          style={{ background: `radial-gradient(ellipse at center, ${project.gradientFrom}, transparent 70%)` }}
        >
          <div className="w-full max-w-[320px]">
            <ProjectVisual project={project} />
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/[0.07] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink size={13} className="text-white" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${project.color}99, transparent)` }} />
    </motion.div>
  );
}

function SmallCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index * 0.45 + 2}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -7, transition: { duration: 0.28 } }}
      onClick={onClick}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setMouse(null)}
      data-cursor
      className="group relative rounded-3xl border border-white/[0.07] bg-white/[0.022] overflow-hidden cursor-pointer flex flex-col"
    >
      {mouse && (
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: `radial-gradient(220px circle at ${mouse.x}px ${mouse.y}px, ${project.color}0e, transparent 70%)`,
        }} />
      )}

      {/* Mockup area */}
      <div
        className="relative z-10 flex items-center justify-center px-5 pt-5 pb-4 border-b border-white/[0.06] min-h-[180px]"
        style={{ background: `radial-gradient(ellipse at center, ${project.gradientFrom}, transparent 80%)` }}
      >
        {project.id === "tawng-bia-mae" ? (
          <ProjectVisual project={project} />
        ) : (
          <div className="w-full">
            <ProjectVisual project={project} />
          </div>
        )}
        <span className="absolute bottom-2.5 left-4 text-[10px] text-neutral-700 tracking-widest uppercase font-bold">{project.number}</span>
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/[0.07] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink size={11} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-0.5 leading-tight">{project.title}</h3>
        <p className="text-xs font-semibold mb-3" style={{ color: project.color }}>{project.subtitle}</p>
        <p className="text-sm text-neutral-500 leading-relaxed mb-4 flex-1 line-clamp-3">{project.shortDesc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md text-[10px] text-neutral-600 bg-white/[0.04] border border-white/[0.06]">{t}</span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] text-neutral-700 bg-white/[0.03] border border-white/[0.05]">+{project.tags.length - 3}</span>
          )}
        </div>
        <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-xs text-neutral-700">{project.role}</span>
          <span className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1" style={{ color: project.color }}>
            Explore <ArrowUpRight size={12} />
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${project.color}88, transparent)` }} />
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <section id="work" ref={ref} className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="text-5xl md:text-[5.5rem] font-black tracking-[-0.04em] text-white leading-[0.88]">
                Projects
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={0.5}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col items-end gap-2"
            >
              <p className="text-sm text-neutral-500 max-w-[240px] text-right leading-relaxed">
                Click any card to explore the full project details.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-neutral-700">
                <span className="w-4 h-px bg-neutral-700" />
                4 projects
              </div>
            </motion.div>
          </div>

          <FeaturedCard project={projects[0]} onClick={() => setActive(projects[0])} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.slice(1).map((p, i) => (
              <SmallCard key={p.id} project={p} index={i} onClick={() => setActive(p)} />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
