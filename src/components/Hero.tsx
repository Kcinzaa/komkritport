"use client";

import { useRef, useState, useEffect } from "react";
import NextImage from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ChevronDown, GraduationCap, MapPin, Mail,
  Code2, BarChart3, Server, Smartphone, Database, Cpu, Wifi,
  TrendingUp, Globe, Star,
} from "lucide-react";
import { EASE, fadeUp, fadeIn } from "@/lib/variants";

const ROLES = ["Data Analyst", "Full-Stack Developer", "IT Engineer", "Problem Solver"];

const TECH = [
  { icon: <Code2 size={11} />,      label: "Next.js" },
  { icon: <BarChart3 size={11} />,  label: "Power BI" },
  { icon: <Server size={11} />,     label: "Laravel" },
  { icon: <Database size={11} />,   label: "SQL" },
  { icon: <Smartphone size={11} />, label: "Kotlin" },
  { icon: <Cpu size={11} />,        label: "Grafana" },
  { icon: <Wifi size={11} />,       label: "Network" },
];

/* Animated dot-grid BG */
function DotGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage:
          "radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 80%)",
      }}
    />
  );
}

/* Smooth orbit ring */
function Ring({ size, dur, reverse = false, accent = false }: { size: number; dur: number; reverse?: boolean; accent?: boolean }) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        width: size, height: size,
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        animation: `orbit ${dur}s linear infinite${reverse ? " reverse" : ""}`,
        border: accent
          ? "1px solid rgba(74,222,128,0.18)"
          : "1px solid rgba(255,255,255,0.045)",
      }}
    >
      {accent && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
          style={{
            background: "radial-gradient(circle, #4ade80 0%, transparent 70%)",
            boxShadow: "0 0 12px rgba(74,222,128,0.9)",
          }}
        />
      )}
    </div>
  );
}

/* Floating stat card */
function FloatCard({
  className, delay, children, float = 0,
}: { className: string; delay: number; children: React.ReactNode; float?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: EASE }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={{ y: [0, float || -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 + delay, ease: "easeInOut" }}
        className="px-4 py-3 rounded-2xl border border-white/[0.1] bg-[#0c0c0c]/90 backdrop-blur-2xl shadow-2xl shadow-black/70"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 700], [0, -80]);
  const opacityOut = useTransform(scrollY, [0, 450], [1, 0]);
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-28 pb-24 overflow-hidden">

      {/* ── Ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-1 absolute top-[-20%] left-[5%]   w-[800px] h-[800px] rounded-full bg-[#4ade80]/[0.05] blur-[160px]" />
        <div className="aurora-2 absolute bottom-[-20%] right-[0%] w-[600px] h-[600px] rounded-full bg-blue-500/[0.04]  blur-[140px]" />
        <div className="aurora-3 absolute top-[40%]  left-[-10%]  w-[400px] h-[400px] rounded-full bg-violet-500/[0.03] blur-[120px]" />
      </div>
      <DotGrid />

      <motion.div style={{ y: yParallax, opacity: opacityOut }} className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 xl:gap-24 items-center">

          {/* ───── Left ───── */}
          <div className="order-2 lg:order-1">

            {/* Available badge */}
            <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="mb-9">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#4ade80]/22 bg-[#4ade80]/[0.06]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-55" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
                </span>
                <span className="text-[11px] font-semibold text-[#4ade80] tracking-wide">Available for opportunities</span>
              </div>
            </motion.div>

            {/* "Hi, I'm" */}
            <motion.p
              variants={fadeUp} custom={0.4} initial="hidden" animate="visible"
              className="text-[10px] text-neutral-600 uppercase tracking-[0.3em] mb-5"
            >
              Hi, I&apos;m
            </motion.p>

            {/* ── BIG NAME — Komkrit ── */}
            <div className="overflow-hidden mb-1" style={{ perspective: "1200px" }}>
              <div
                className="flex"
                style={{
                  fontSize: "clamp(3.8rem, 9.5vw, 7.8rem)",
                  lineHeight: 0.85,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                {"Komkrit".split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: "100%", rotateX: -55 }}
                    animate={{ opacity: 1, y: "0%",  rotateX: 0 }}
                    transition={{ duration: 0.78, delay: 0.3 + i * 0.07, ease: EASE }}
                    style={{
                      transformOrigin: "bottom center",
                      color: i === 0 ? "#4ade80" : "#ffffff",
                    }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* ── Ponimdang ── */}
            <div className="overflow-hidden mb-4" style={{ perspective: "1200px" }}>
              <div
                className="flex"
                style={{
                  fontSize: "clamp(3.8rem, 9.5vw, 7.8rem)",
                  lineHeight: 0.88,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                {"Ponimdang".split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    className="inline-block gradient-text"
                    initial={{ opacity: 0, y: "100%", rotateX: -55 }}
                    animate={{ opacity: 1, y: "0%",  rotateX: 0 }}
                    transition={{ duration: 0.78, delay: 0.82 + i * 0.055, ease: EASE }}
                    style={{ transformOrigin: "bottom center" }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Thai + divider */}
            <motion.div
              variants={fadeUp} custom={1.6} initial="hidden" animate="visible"
              className="flex items-center gap-4 mb-6"
            >
              <p className="text-neutral-700 text-sm font-light tracking-[0.16em]">คมกฤช โพธิ์นิ่มแดง</p>
              <div className="flex-1 h-px bg-gradient-to-r from-white/[0.06] to-transparent" />
            </motion.div>

            {/* Rotating role */}
            <motion.div
              variants={fadeUp} custom={2} initial="hidden" animate="visible"
              className="flex items-center gap-3 mb-7 overflow-hidden h-7"
            >
              <Star size={12} className="text-[#4ade80] flex-shrink-0" />
              <div className="relative h-7 overflow-hidden flex-1" style={{ minWidth: 260 }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIdx}
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0,  opacity: 1 }}
                    exit={{ y: -28,   opacity: 0 }}
                    transition={{ duration: 0.38, ease: EASE }}
                    className="absolute text-sm font-semibold gradient-text whitespace-nowrap"
                  >
                    {ROLES[roleIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp} custom={2.4} initial="hidden" animate="visible"
              className="text-neutral-400 text-base md:text-[1.05rem] leading-[1.8] mb-9 max-w-[500px]"
            >
              นักศึกษาที่มุ่งมั่นในการเชื่อมโยง{" "}
              <span className="font-semibold text-[#4ade80]">Data Analytics</span>,{" "}
              <span className="font-semibold text-white">Full-Stack Development</span>{" "}
              และ{" "}
              <span className="font-semibold text-neutral-200">IT Infrastructure</span>{" "}
              ให้กลายเป็นโซลูชันที่ใช้งานได้จริง
            </motion.p>

            {/* Meta pills */}
            <motion.div
              variants={fadeUp} custom={2.8} initial="hidden" animate="visible"
              className="flex flex-wrap gap-3 text-xs text-neutral-600 mb-10"
            >
              {[
                { icon: <GraduationCap size={13} />, text: "คณะวิทยาการจัดการ · ระบบสารสนเทศทางธุรกิจ · ชั้นปีที่ 3" },
                { icon: <MapPin size={12} />,         text: "มหาวิทยาลัยสงขลานครินทร์" },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
                  <span className="text-neutral-700">{m.icon}</span> {m.text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} custom={3.2} initial="hidden" animate="visible"
              className="flex items-center gap-3 flex-wrap mb-10"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.06, boxShadow: "0 0 48px rgba(74,222,128,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm overflow-hidden group"
                style={{ background: "linear-gradient(135deg, #4ade80, #22c55e)", color: "#0a0a0a" }}
              >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                View Projects <ArrowUpRight size={15} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.22)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm border border-white/[0.1] bg-white/[0.035] text-white hover:bg-white/[0.07] transition-all duration-200"
              >
                Contact Me <Mail size={14} />
              </motion.a>
            </motion.div>

            {/* Tech chips */}
            <motion.div variants={fadeUp} custom={3.6} initial="hidden" animate="visible" className="flex flex-wrap gap-2">
              {TECH.map((b) => (
                <motion.div
                  key={b.label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.025] text-xs text-neutral-700 hover:text-neutral-400 hover:border-white/[0.12] transition-all duration-200"
                >
                  <span className="text-neutral-700">{b.icon}</span>
                  {b.label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ───── Right — Photo ───── */}
          <motion.div
            variants={fadeIn} custom={2} initial="hidden" animate="visible"
            className="order-1 lg:order-2 flex justify-center items-center relative h-[500px] lg:h-[580px]"
          >
            {/* Orbit rings */}
            <Ring size={400} dur={24} accent />
            <Ring size={490} dur={38} reverse />
            <Ring size={318} dur={16} />

            {/* ── Photo card ── */}
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.38 }}
              className="relative z-10"
            >
              {/* Glowing border wrapper */}
              <div
                className="p-[1.5px] rounded-[2.8rem]"
                style={{
                  background: "linear-gradient(145deg, rgba(74,222,128,0.4) 0%, rgba(255,255,255,0.06) 40%, rgba(96,165,250,0.2) 100%)",
                }}
              >
                <div
                  className="relative w-[268px] sm:w-[292px] h-[358px] sm:h-[395px] rounded-[2.6rem] overflow-hidden"
                  style={{ background: "#0c0c0c" }}
                >
                  {/* Profile photo */}
                  <NextImage
                    src="/profile.jpg"
                    alt="Komkrit Ponimdang"
                    fill
                    className="object-cover object-top"
                    priority
                  />

                  {/* Bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/75 to-transparent z-20" />

                  {/* Name tag */}
                  <div className="absolute bottom-4 inset-x-4 z-30 px-4 py-3 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/[0.08]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-white leading-none">Komkrit Ponimdang</p>
                        <p className="text-[10px] text-neutral-500 mt-1">Data · Full-Stack · IT</p>
                      </div>
                      <div className="w-7 h-7 rounded-xl bg-[#4ade80]/15 border border-[#4ade80]/25 flex items-center justify-center">
                        <Star size={11} className="text-[#4ade80]" />
                      </div>
                    </div>
                  </div>

                  {/* Top green accent line */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#4ade80]/80 to-transparent z-30" />
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <FloatCard className="top-[8%] -right-2 lg:-right-10" delay={1.0} float={-7}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#4ade80]/15 border border-[#4ade80]/20 flex items-center justify-center">
                  <TrendingUp size={14} className="text-[#4ade80]" />
                </div>
                <div>
                  <p className="text-[9px] text-neutral-600 uppercase tracking-wider font-semibold">Domain</p>
                  <p className="text-xs font-bold text-white">Data Analytics</p>
                </div>
              </div>
            </FloatCard>

            <FloatCard className="top-[35%] -left-2 lg:-left-14" delay={1.1} float={-5}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                  <Globe size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-[9px] text-neutral-600 uppercase tracking-wider font-semibold">Stack</p>
                  <p className="text-xs font-bold text-white">Next.js · Laravel</p>
                </div>
              </div>
            </FloatCard>

            <FloatCard className="bottom-[18%] -right-2 lg:-right-12" delay={1.2} float={-8}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
                  <Server size={14} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-[9px] text-neutral-600 uppercase tracking-wider font-semibold">Ops</p>
                  <p className="text-xs font-bold text-white">IT Infrastructure</p>
                </div>
              </div>
            </FloatCard>

            <FloatCard className="bottom-[4%] left-0 lg:-left-6" delay={1.3} float={-6}>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-50" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ade80]" />
                </span>
                <p className="text-[10px] font-semibold text-neutral-400">Open to hire</p>
              </div>
            </FloatCard>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-700"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-medium">scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
