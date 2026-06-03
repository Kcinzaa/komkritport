"use client";

import { useRef, useState } from "react";
import NextImage from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Smartphone, BarChart3, UtensilsCrossed, Trees } from "lucide-react";
import { fadeUp } from "@/lib/variants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectModal } from "@/components/ProjectModal";
import { projects, type Project } from "@/lib/data";

// ── Device frames ─────────────────────────────────────────────────────────

function BrowserFrame({ url, color, children }: { url: string; color: string; children: React.ReactNode }) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/[0.12] shadow-xl shadow-black/40">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#1a1a1a] border-b border-white/[0.08]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 h-5 mx-2 rounded-md bg-white/[0.06] border border-white/[0.06] flex items-center px-2 gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color + "80" }} />
          <span className="text-[9px] text-neutral-500 font-mono truncate">{url}</span>
        </div>
      </div>
      {/* Screenshot */}
      {children}
    </div>
  );
}

function PhoneFrame({ dark = true, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <div
      className="relative w-[110px] h-[224px] rounded-[2.2rem] overflow-hidden shadow-2xl shadow-black/60 flex-shrink-0"
      style={{
        border: "2.5px solid rgba(255,255,255,0.13)",
        background: dark ? "#0a0a0a" : "#f5f5f5",
      }}
    >
      {/* Dynamic island */}
      <div className="absolute top-0 left-0 right-0 flex justify-center z-20 pt-2">
        <div
          className="w-14 h-4 rounded-b-2xl"
          style={{ background: dark ? "#060606" : "#e5e5e5", border: dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)" }}
        />
      </div>
      {/* Screen */}
      <div className="absolute inset-0 pt-5 overflow-hidden">{children}</div>
      {/* Home bar */}
      <div
        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full"
        style={{ background: dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
      />
    </div>
  );
}

function DashboardFrame({ url, color, children }: { url: string; color: string; children: React.ReactNode }) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/[0.1] shadow-xl shadow-black/40">
      <div className="flex items-center justify-between px-3 py-2 bg-[#1c1c2e] border-b border-white/[0.07]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }} />
          <span className="text-[9px] text-neutral-400 font-semibold tracking-wider">{url}</span>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map((n) => (
            <div key={n} className="w-3.5 h-3.5 rounded bg-white/[0.06] border border-white/[0.07]" />
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

// ── Screenshot visual per project ──────────────────────────────────────────

function ProjectVisual({ project, size = "featured" }: { project: Project; size?: "featured" | "small" }) {
  const h = size === "featured" ? "h-[200px]" : "h-[150px]";
  const c = project.color;

  if (project.mockupType === "browser") {
    return (
      <BrowserFrame url={project.mockupUrl ?? ""} color={c}>
        <div className={`relative ${h} overflow-hidden`}>
          <NextImage
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        </div>
      </BrowserFrame>
    );
  }

  if (project.mockupType === "phone") {
    return (
      <PhoneFrame dark>
        <NextImage
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
        />
      </PhoneFrame>
    );
  }

  if (project.mockupType === "phone-light") {
    return (
      <PhoneFrame dark={false}>
        <NextImage
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
        />
      </PhoneFrame>
    );
  }

  // dashboard
  return (
    <DashboardFrame url={project.mockupUrl ?? "Power BI"} color={c}>
      <div className={`relative ${h} overflow-hidden`}>
        <NextImage
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
        />
      </div>
    </DashboardFrame>
  );
}

// ── Icon map ───────────────────────────────────────────────────────────────

const projIcon: Record<string, React.ReactNode> = {
  "rhino-camp":      <Globe size={20} />,
  "tawng-bia-mae":   <Globe size={20} />,
  "olist-dashboard": <BarChart3 size={20} />,
  "burgermaikub":    <UtensilsCrossed size={20} />,
  "gorilla-resort":  <Trees size={20} />,
};

// ── Featured card (project 01) ─────────────────────────────────────────────

function FeaturedCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  const isPhone = project.mockupType === "phone" || project.mockupType === "phone-light";

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
          background: `radial-gradient(350px circle at ${mouse.x}px ${mouse.y}px, ${project.color}0d, transparent 70%)`,
        }} />
      )}

      <div className="relative z-10 grid lg:grid-cols-2 min-h-[300px]">
        {/* Text side */}
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

        {/* Screenshot side */}
        <div
          className="relative flex items-center justify-center p-8 border-t lg:border-t-0 lg:border-l border-white/[0.06]"
          style={{ background: `radial-gradient(ellipse at center, ${project.gradientFrom}, transparent 70%)` }}
        >
          <div className={isPhone ? "flex justify-center" : "w-full max-w-[340px]"}>
            <ProjectVisual project={project} size="featured" />
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/[0.07] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink size={13} className="text-white" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}99, transparent)` }} />
    </motion.div>
  );
}

// ── Small card (projects 02–04) ────────────────────────────────────────────

function SmallCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  const isPhone = project.mockupType === "phone" || project.mockupType === "phone-light";

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
          background: `radial-gradient(220px circle at ${mouse.x}px ${mouse.y}px, ${project.color}0d, transparent 70%)`,
        }} />
      )}

      {/* Screenshot area */}
      <div
        className="relative z-10 flex items-center justify-center px-5 pt-5 pb-4 border-b border-white/[0.06] min-h-[190px]"
        style={{ background: `radial-gradient(ellipse at center, ${project.gradientFrom}, transparent 80%)` }}
      >
        <div className={isPhone ? "flex justify-center" : "w-full"}>
          <ProjectVisual project={project} size="small" />
        </div>
        <span className="absolute bottom-2.5 left-4 text-[10px] text-neutral-700 tracking-widest uppercase font-bold">{project.number}</span>
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/[0.07] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink size={11} className="text-white" />
        </div>
      </div>

      {/* Text */}
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

      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}88, transparent)` }} />
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
              variants={fadeUp} custom={0.5} initial="hidden" animate={inView ? "visible" : "hidden"}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
