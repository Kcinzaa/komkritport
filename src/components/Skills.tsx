"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart3, Code2, Server, Sparkles,
  Globe, Smartphone, Terminal, Database, Wifi, Activity, Cpu, Shield,
} from "lucide-react";
import { fadeUp } from "@/lib/variants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";

type TagColor = "green" | "blue" | "purple" | "amber" | "orange" | "default";

// ── Spotlight card ──
function SpotlightCard({
  children, className, accentColor, delay,
}: {
  children: React.ReactNode;
  className?: string;
  accentColor: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.018, transition: { duration: 0.22 } }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setMouse(null)}
      className={`${className} group relative rounded-3xl border border-white/[0.08] bg-white/[0.026] overflow-hidden`}
    >
      {/* Spotlight gradient */}
      {mouse && (
        <div
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${mouse.x}px ${mouse.y}px, ${accentColor}14, transparent 70%)`,
          }}
        />
      )}
      {/* Top accent on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}99, transparent)` }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const dataTags    = ["Power BI", "DAX", "Data Modeling", "Predictive Analytics", "SQL", "Python", "Excel"];
  const devTags     = ["Next.js", "React", "TypeScript", "Tailwind CSS", "PHP", "Laravel", "Kotlin", "REST APIs"];
  const opsTags     = ["Network Admin", "LAN/WAN", "Prometheus", "Grafana", "Linux", "UPS Management", "HIS"];
  const exploringBars = [
    { label: "AI / LLM Integration",   pct: 75, color: "#4ade80" },
    { label: "Cloud Architecture",      pct: 50, color: "#60a5fa" },
    { label: "DevOps & CI/CD",          pct: 62, color: "#c084fc" },
    { label: "RAG & Vector Databases",  pct: 38, color: "#fb923c" },
  ];

  return (
    <section id="skills" ref={ref} className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <SectionLabel>Arsenal</SectionLabel>
            <h2 className="text-5xl md:text-[5.5rem] font-black tracking-[-0.04em] text-white leading-[0.88]">
              Skills &amp;
              <br />
              <span className="gradient-text">Capabilities</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-sm text-neutral-500 max-w-[280px] leading-relaxed"
          >
            Cross-disciplinary from raw data to deployed product — the full lifecycle.
          </motion.p>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Data */}
          <SpotlightCard className="md:col-span-5" delay={1} accentColor="#4ade80">
            <div className="p-7">
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#4ade80]/12 border border-[#4ade80]/20 flex items-center justify-center">
                  <BarChart3 size={20} className="text-[#4ade80]" />
                </div>
                <span className="text-[10px] text-neutral-700 tracking-[0.2em] uppercase font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1.5">Data &amp; Analytics</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                Board-ready dashboards and predictive models from raw, messy datasets.
              </p>
              <div className="flex flex-wrap gap-2">
                {dataTags.map((s) => <Tag key={s} color="green">{s}</Tag>)}
              </div>
            </div>
          </SpotlightCard>

          {/* Dev */}
          <SpotlightCard className="md:col-span-7" delay={2} accentColor="#60a5fa">
            <div className="p-7">
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/12 border border-blue-500/20 flex items-center justify-center">
                  <Code2 size={20} className="text-blue-400" />
                </div>
                <span className="text-[10px] text-neutral-700 tracking-[0.2em] uppercase font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1.5">Full-Stack Development</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                Modern, performant apps from API layer to pixel — web and mobile.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {devTags.map((s) => <Tag key={s} color="blue">{s}</Tag>)}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[{ icon: <Globe size={13} />, label: "Web" }, { icon: <Smartphone size={13} />, label: "Mobile" }, { icon: <Terminal size={13} />, label: "APIs" }].map((x) => (
                  <div key={x.label} className="flex flex-col items-center gap-1.5 py-2.5 rounded-xl bg-blue-500/[0.07] border border-blue-500/[0.1]">
                    <span className="text-blue-400">{x.icon}</span>
                    <span className="text-[10px] text-neutral-600">{x.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* Ops */}
          <SpotlightCard className="md:col-span-7" delay={3} accentColor="#c084fc">
            <div className="p-7">
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-purple-500/12 border border-purple-500/20 flex items-center justify-center">
                  <Server size={20} className="text-purple-400" />
                </div>
                <span className="text-[10px] text-neutral-700 tracking-[0.2em] uppercase font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1.5">IT Operations &amp; Infrastructure</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                Mission-critical networks — kept hospital ICU/ER LAN alive around the clock.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {opsTags.map((s) => <Tag key={s} color="purple">{s}</Tag>)}
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-purple-500/[0.07] border border-purple-500/10">
                <Shield size={13} className="text-purple-400 flex-shrink-0" />
                <p className="text-xs text-neutral-500">Deployed in live hospital (ICU & ER) environments</p>
              </div>
            </div>
          </SpotlightCard>

          {/* Exploring */}
          <SpotlightCard className="md:col-span-5" delay={4} accentColor="#fbbf24">
            <div className="p-7">
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/12 border border-amber-500/20 flex items-center justify-center">
                  <Sparkles size={20} className="text-amber-400" />
                </div>
                <span className="text-[10px] text-neutral-700 tracking-[0.2em] uppercase font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1.5">Currently Exploring</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">Always raising the ceiling.</p>
              <div className="space-y-4">
                {exploringBars.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-neutral-500">{item.label}</span>
                      <span className="text-neutral-700">{item.pct}%</span>
                    </div>
                    <div className="h-[3px] rounded-full bg-white/[0.05] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* Mini cards */}
          {[
            { icon: <Wifi size={16} className="text-[#4ade80]" />,      title: "Network",    desc: "LAN · WAN · ICU/ER",        border: "border-[#4ade80]/10", bg: "bg-[#4ade80]/[0.035]" },
            { icon: <Database size={16} className="text-blue-400" />,   title: "Databases",  desc: "MySQL · SQL Server · NoSQL", border: "border-blue-500/10",   bg: "bg-blue-500/[0.035]" },
            { icon: <Activity size={16} className="text-purple-400" />, title: "Monitoring", desc: "Prometheus + Grafana",        border: "border-purple-500/10", bg: "bg-purple-500/[0.035]" },
            { icon: <Cpu size={16} className="text-amber-400" />,       title: "AI Tools",   desc: "Gemini · OpenAI APIs",       border: "border-amber-500/10",  bg: "bg-amber-500/[0.035]" },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              custom={5 + i * 0.35}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.06, transition: { duration: 0.18 } }}
              className={`md:col-span-3 p-5 rounded-2xl border ${c.border} ${c.bg} flex items-start gap-4`}
            >
              <div className="mt-0.5 flex-shrink-0">{c.icon}</div>
              <div>
                <p className="text-sm font-semibold text-white mb-0.5">{c.title}</p>
                <p className="text-xs text-neutral-600">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
