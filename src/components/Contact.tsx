"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight, GitFork, Link2, Copy, CheckCheck, MapPin, Clock } from "lucide-react";
import { fadeUp, EASE } from "@/lib/variants";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EMAIL = "nnnickgundim@gmail.com";

const socials = [
  { icon: <Mail size={18} />,    label: "Email",    value: EMAIL,                    href: `mailto:${EMAIL}`, color: "#4ade80" },
  { icon: <GitFork size={18} />, label: "GitHub",   value: "github.com/Kcinzaa",   href: "https://github.com/Kcinzaa",   color: "#60a5fa" },
];

/* Decorative big "@" */
function BigAt() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden w-[380px] h-[380px] opacity-[0.025]">
      <span
        className="text-[320px] font-black leading-none text-white"
        style={{ letterSpacing: "-0.08em" }}
      >
        @
      </span>
    </div>
  );
}

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" ref={ref} className="relative py-36 px-6 border-t border-white/[0.06] overflow-hidden">

      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#4ade80]/[0.04] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.03] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-16 xl:gap-28 items-start">

          {/* ── Left ── */}
          <div>
            <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <SectionLabel>Let&apos;s Talk</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[clamp(3rem,7vw,5.5rem)] font-black tracking-[-0.04em] text-white leading-[0.88] mb-7 mt-1"
            >
              Let&apos;s Build
              <br />
              <span className="gradient-text">Something</span>
              <br />
              <span className="text-neutral-600">Together.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-neutral-400 text-base leading-[1.82] mb-10 max-w-[420px]"
            >
              Open to internships, freelance projects, and exciting collaborations.
              I build things that matter — let&apos;s create something together.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              variants={fadeUp} custom={3} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="flex items-center gap-3 flex-wrap mb-10"
            >
              <motion.a
                href={`mailto:${EMAIL}`}
                whileHover={{ scale: 1.05, boxShadow: "0 0 48px rgba(74,222,128,0.45)" }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-neutral-950"
                style={{ background: "linear-gradient(135deg, #4ade80, #22c55e)" }}
              >
                <Mail size={16} />
                Send a Message
                <ArrowUpRight size={16} />
              </motion.a>
              <motion.button
                onClick={copy}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-5 py-4 rounded-full font-semibold text-sm border border-white/[0.09] bg-white/[0.035] text-neutral-400 hover:text-white hover:border-white/[0.16] transition-all duration-200"
              >
                {copied
                  ? <><CheckCheck size={14} className="text-[#4ade80]" />Copied!</>
                  : <><Copy size={14} />Copy email</>
                }
              </motion.button>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={fadeUp} custom={4} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-[#4ade80]/18 bg-[#4ade80]/[0.055]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-50" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ade80]" />
              </span>
              <p className="text-xs text-[#4ade80] font-semibold">Currently available · replies within 24h</p>
            </motion.div>
          </div>

          {/* ── Right — Contact cards ── */}
          <div className="relative">
            <BigAt />

            <motion.div
              variants={fadeUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="space-y-2.5"
            >
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="group flex items-center gap-5 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                    style={{ backgroundColor: s.color + "14", borderColor: s.color + "25", color: s.color }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-neutral-700 uppercase tracking-widest font-bold mb-0.5">{s.label}</p>
                    <p className="text-sm font-semibold text-neutral-300 truncate">{s.value}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-neutral-700 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
                  />
                </motion.a>
              ))}

              {/* Info card */}
              <div className="grid grid-cols-2 gap-2.5 mt-1">
                {[
                  { icon: <MapPin size={13} />, label: "Location", value: "Hat Yai, Thailand (ICT+7)" },
                  { icon: <Clock size={13} />,  label: "Response", value: "Within 24 hours" },
                ].map((info) => (
                  <div
                    key={info.label}
                    className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.015]"
                  >
                    <div className="flex items-center gap-1.5 text-neutral-700 mb-1.5">
                      {info.icon}
                      <span className="text-[10px] uppercase tracking-widest font-bold">{info.label}</span>
                    </div>
                    <p className="text-xs font-medium text-neutral-400 leading-snug">{info.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
