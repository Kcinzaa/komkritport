"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
} from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Server,
  Smartphone,
  Globe,
  Activity,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  GitFork,
  Link2,
  ChevronDown,
  Sparkles,
  Zap,
  Shield,
  ExternalLink,
  Clock,
  Users,
  Coffee,
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

// ─── Shared UI Atoms ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest uppercase text-neutral-400 mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
      {children}
    </div>
  );
}

function GlowCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden group cursor-default ${className}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/5 to-transparent" />
      </div>
      {children}
    </motion.div>
  );
}

function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />;
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  scrollY.on("change", (v) => setScrolled(v > 40));

  const links = [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-sm font-semibold tracking-tight text-white"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-[#4ade80]">N</span>ick.
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 relative group"
              whileHover={{ y: -1 }}
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#4ade80] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:nnnickgundim@gmail.com"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(74,222,128,0.3)",
          }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:border-[#4ade80]/40 hover:bg-[#4ade80]/10 transition-all duration-300 text-white"
        >
          <Mail size={13} />
          Get in touch
        </motion.a>
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Radial background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#4ade80]/5 blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Status badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/5 text-xs text-[#4ade80] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            Available for internships &amp; collaborations
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-center text-neutral-400 text-lg md:text-xl font-light mb-3"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Big name */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-center mb-4"
        >
          <h1 className="text-[clamp(4rem,14vw,10rem)] font-black tracking-tighter leading-[0.9] text-white">
            Nick
          </h1>
          <p className="text-neutral-500 text-sm md:text-base mt-3 font-light tracking-widest">
            คมกฤช โพธิ์นิ่มแดง
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-center text-neutral-300 text-lg md:text-2xl font-light max-w-3xl leading-relaxed mb-10"
        >
          Bridging{" "}
          <span className="text-[#4ade80] font-medium">Data Analytics</span>,{" "}
          <span className="text-white font-medium">Full-Stack Mastery</span>, and{" "}
          <span className="text-neutral-200 font-medium">
            High-Performance IT Infrastructure
          </span>
          .
        </motion.p>

        {/* University status */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-500 mb-12"
        >
          <span className="flex items-center gap-1.5">
            <GraduationCap size={14} />
            3rd-year · Business Information Systems · PSU Hat Yai
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            Hat Yai, Thailand
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.a
            href="#work"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(74,222,128,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm bg-[#4ade80] text-neutral-950 hover:bg-[#22c55e] transition-colors duration-200"
          >
            View Projects
            <ArrowUpRight size={15} />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-200 text-white"
          >
            Contact Me
            <Mail size={14} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600 text-xs"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Stats Strip ──────────────────────────────────────────────────────────────

function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const stats = [
    { value: "4+", label: "Projects Shipped", icon: <Code2 size={16} /> },
    { value: "3", label: "Tech Domains", icon: <Zap size={16} /> },
    { value: "2+", label: "Internships", icon: <Briefcase size={16} /> },
    { value: "∞", label: "Cups of Coffee", icon: <Coffee size={16} /> },
  ];

  return (
    <section ref={ref} className="py-12 px-6 border-y border-white/5">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
          >
            <span className="text-[#4ade80]">{s.icon}</span>
            <span className="text-3xl font-black text-white tracking-tight">{s.value}</span>
            <span className="text-xs text-neutral-500 tracking-wide">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Skills Bento Grid ────────────────────────────────────────────────────────

function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const dataSkills = ["Power BI", "DAX", "Data Modeling", "Predictive Analytics", "SQL", "Python"];
  const devSkills = ["Next.js", "React", "Tailwind CSS", "PHP", "Laravel", "Kotlin", "TypeScript"];
  const opsSkills = ["Network Admin", "LAN/WAN", "Prometheus", "Grafana", "Linux", "UPS Mgmt"];

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <SectionLabel>Arsenal</SectionLabel>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
            Skills &amp;
            <br />
            <span className="text-[#4ade80]">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Data Analytics — 5 cols */}
          <GlowCard className="md:col-span-5 p-8" delay={1}>
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#4ade80]/10 border border-[#4ade80]/20 flex items-center justify-center">
                <BarChart3 size={22} className="text-[#4ade80]" />
              </div>
              <span className="text-xs text-neutral-600 tracking-widest uppercase">01</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Data & Analytics</h3>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Transforming raw datasets into actionable business intelligence through advanced modeling and visualization.
            </p>
            <div className="flex flex-wrap gap-2">
              {dataSkills.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/20">
                  {s}
                </span>
              ))}
            </div>
          </GlowCard>

          {/* Full-Stack Dev — 7 cols */}
          <GlowCard className="md:col-span-7 p-8" delay={2}>
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Code2 size={22} className="text-blue-400" />
              </div>
              <span className="text-xs text-neutral-600 tracking-widest uppercase">02</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Development</h3>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Building modern, performant web and mobile applications with a focus on exceptional user experience.
            </p>
            <div className="flex flex-wrap gap-2">
              {devSkills.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {s}
                </span>
              ))}
            </div>
          </GlowCard>

          {/* IT Ops — 7 cols */}
          <GlowCard className="md:col-span-7 p-8" delay={3}>
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Server size={22} className="text-purple-400" />
              </div>
              <span className="text-xs text-neutral-600 tracking-widest uppercase">03</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">IT Operations & Infra</h3>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Maintaining critical network infrastructure and monitoring systems in high-stakes hospital environments.
            </p>
            <div className="flex flex-wrap gap-2">
              {opsSkills.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {s}
                </span>
              ))}
            </div>
          </GlowCard>

          {/* Currently Learning — 5 cols */}
          <GlowCard className="md:col-span-5 p-8" delay={4}>
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Sparkles size={22} className="text-amber-400" />
              </div>
              <span className="text-xs text-neutral-600 tracking-widest uppercase">04</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Currently Exploring</h3>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Always pushing the boundary of what&apos;s possible.
            </p>
            <div className="space-y-4">
              {[
                { label: "AI / LLM Integration", pct: 75 },
                { label: "Cloud Architecture", pct: 55 },
                { label: "DevOps & CI/CD", pct: 60 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs text-neutral-500 mb-1.5">
                    <span>{item.label}</span>
                    <span>{item.pct}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-amber-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

// ─── Experience Timeline ───────────────────────────────────────────────────────

function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const items = [
    {
      role: "IT Support Intern",
      company: "Hatyai Hospital",
      type: "Internship",
      period: "2024",
      color: "#4ade80",
      icon: <Shield size={16} />,
      bullets: [
        "Maintained critical LAN infrastructure across ICU and Emergency Room environments",
        "Managed Hospital Information System (HIS) ensuring zero-downtime operations",
        "Performed UPS maintenance and network troubleshooting under high-pressure conditions",
        "Documented infrastructure topology and performed hardware replacements",
      ],
    },
    {
      role: "Hall Support Staff",
      company: "Diamond Brains (ICC Hat Yai)",
      type: "Event",
      period: "2023",
      color: "#60a5fa",
      icon: <Users size={16} />,
      bullets: [
        "Coordinated crowd control and logistics for large-scale academic competition events",
        "Collaborated with a cross-functional team to ensure smooth event flow",
        "Managed participant check-in and orientation procedures",
      ],
    },
    {
      role: "Operations Support",
      company: "SITE 2026 Charity Concert",
      type: "Event Operations",
      period: "2025",
      color: "#c084fc",
      icon: <Activity size={16} />,
      bullets: [
        "Managed ticketing systems and gate operations for a large-scale charity concert",
        "Coordinated real-time logistics with operations and security teams",
        "Handled attendee issues and ensured compliance with event protocols",
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <SectionLabel>Journey</SectionLabel>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

          <div className="space-y-5">
            {items.map((item, i) => (
              <motion.div
                key={item.company}
                variants={fadeUp}
                custom={i + 1}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 hidden md:flex items-center justify-center"
                  style={{ backgroundColor: item.color + "22", borderColor: item.color + "44" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                </div>

                <div className="p-6 md:p-8 rounded-3xl border border-white/8 bg-white/[0.025] hover:border-white/15 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ color: item.color }}>{item.icon}</span>
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full border"
                          style={{
                            color: item.color,
                            borderColor: item.color + "40",
                            backgroundColor: item.color + "15",
                          }}
                        >
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <p className="text-neutral-400 text-sm font-medium">{item.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-600">
                      <Clock size={12} />
                      {item.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-neutral-400">
                        <span
                          className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const projects = [
    {
      number: "01",
      title: "Gorilla Resort",
      subtitle: "Full-Stack Hotel Booking Platform",
      description:
        "End-to-end hotel booking system with seamless LINE OA integration, LIFF micro-frontend, and LINE Login authentication. Built for real business deployment.",
      tags: ["Next.js", "LINE OA", "LIFF", "LINE Login", "Tailwind"],
      color: "#4ade80",
      gradientFrom: "rgba(74,222,128,0.08)",
      gradientTo: "transparent",
      icon: <Globe size={20} />,
      stat1: { label: "Platform", value: "Full-Stack" },
      stat2: { label: "Integration", value: "LINE OA" },
    },
    {
      number: "02",
      title: "ทวงเบี้ยแม่",
      subtitle: "AI-Powered Debt Tracker",
      description:
        'Mobile-first personal finance application featuring a Google Gemini-powered "Wealth Advisor" that provides contextual financial guidance based on spending patterns.',
      tags: ["Mobile", "Google Gemini", "AI", "Finance", "Kotlin"],
      color: "#60a5fa",
      gradientFrom: "rgba(96,165,250,0.08)",
      gradientTo: "transparent",
      icon: <Smartphone size={20} />,
      stat1: { label: "AI Model", value: "Gemini" },
      stat2: { label: "Platform", value: "Mobile" },
    },
    {
      number: "03",
      title: "Olist E-Commerce Dashboard",
      subtitle: "Advanced Power BI Analytics",
      description:
        "Sophisticated BI dashboard separating descriptive and predictive analytics layers. Features DAX-powered KPIs, customer segmentation, and delivery performance forecasting.",
      tags: ["Power BI", "DAX", "Predictive Analytics", "Data Modeling", "SQL"],
      color: "#c084fc",
      gradientFrom: "rgba(192,132,252,0.08)",
      gradientTo: "transparent",
      icon: <BarChart3 size={20} />,
      stat1: { label: "Tool", value: "Power BI" },
      stat2: { label: "Type", value: "Analytics" },
    },
    {
      number: "04",
      title: "KabKhawJa & HatyaiBot",
      subtitle: "Food Ordering + Smart Assistant",
      description:
        "Dual project: a custom UI/UX food ordering platform and a Gemini-powered smart assistant (HatyaiBot) providing local city information and recommendations.",
      tags: ["Next.js", "Google Gemini", "UI/UX", "Chatbot", "React"],
      color: "#fb923c",
      gradientFrom: "rgba(251,146,60,0.08)",
      gradientTo: "transparent",
      icon: <Sparkles size={20} />,
      stat1: { label: "AI", value: "Gemini" },
      stat2: { label: "Type", value: "Dual App" },
    },
  ];

  return (
    <section id="work" ref={ref} className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap items-end justify-between gap-6 mb-16"
        >
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
              Projects
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
            A curated selection of work spanning data, development, and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i * 0.5 + 1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative rounded-3xl border border-white/8 bg-white/[0.025] overflow-hidden cursor-pointer"
            >
              {/* Image placeholder area */}
              <div
                className="relative h-52 w-full border-b border-white/5 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})` }}
              >
                <div className="absolute inset-0 bg-neutral-900/50" />

                {/* Geometric decoration */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-64 h-64 rounded-full border" style={{ borderColor: p.color }} />
                  <div className="absolute w-40 h-40 rounded-full border" style={{ borderColor: p.color }} />
                  <div className="absolute w-20 h-20 rounded-full opacity-60" style={{ backgroundColor: p.color }} />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-2xl border flex items-center justify-center"
                    style={{
                      borderColor: p.color + "40",
                      backgroundColor: p.color + "15",
                      color: p.color,
                    }}
                  >
                    {p.icon}
                  </div>
                  <span className="text-xs text-neutral-500 font-medium tracking-widest uppercase">
                    {p.number}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={13} className="text-white" />
                </div>
              </div>

              {/* Card content */}
              <div className="p-7">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{p.title}</h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: p.color }}>
                      {p.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-neutral-600 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-0.5"
                  />
                </div>

                <p className="text-sm text-neutral-500 leading-relaxed mb-5">{p.description}</p>

                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/5">
                  <div>
                    <p className="text-xs text-neutral-600 mb-0.5">{p.stat1.label}</p>
                    <p className="text-sm font-semibold text-neutral-300">{p.stat1.value}</p>
                  </div>
                  <div className="w-px h-6 bg-white/10" />
                  <div>
                    <p className="text-xs text-neutral-600 mb-0.5">{p.stat2.label}</p>
                    <p className="text-sm font-semibold text-neutral-300">{p.stat2.value}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs text-neutral-500 bg-white/5 border border-white/8"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const links = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "nnnickgundim@gmail.com",
      href: "mailto:nnnickgundim@gmail.com",
    },
    {
      icon: <GitFork size={18} />,
      label: "GitHub",
      value: "github.com/nickkxxx",
      href: "https://github.com",
    },
    {
      icon: <Link2 size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/nickkxxx",
      href: "https://linkedin.com",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionLabel>Let&apos;s Talk</SectionLabel>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none mb-8 mt-2"
        >
          Get In{" "}
          <span className="text-[#4ade80]">Touch</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-neutral-400 text-lg leading-relaxed max-w-xl mx-auto mb-14"
        >
          Open to internships, freelance projects, and exciting collaborations.
          Whether you have a project in mind or just want to say hi — my inbox is always open.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              custom={i + 4}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 20px rgba(74,222,128,0.1)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center gap-3 p-6 rounded-3xl border border-white/8 bg-white/[0.025] hover:border-[#4ade80]/20 hover:bg-[#4ade80]/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4ade80]">
                {l.icon}
              </div>
              <div>
                <p className="text-xs text-neutral-600 mb-0.5">{l.label}</p>
                <p className="text-sm font-medium text-neutral-300">{l.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="mailto:nnnickgundim@gmail.com"
          variants={fadeUp}
          custom={7}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(74,222,128,0.4)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-base bg-[#4ade80] text-neutral-950 hover:bg-[#22c55e] transition-colors duration-200"
        >
          <Mail size={17} />
          Send Me a Message
          <ArrowUpRight size={17} />
        </motion.a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-white">
            <span className="text-[#4ade80]">N</span>ick.
          </span>
          <span className="text-neutral-700 text-xs">·</span>
          <span className="text-xs text-neutral-600">คมกฤช โพธิ์นิ่มแดง</span>
        </div>

        <p className="text-xs text-neutral-700">
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>

        <p className="text-xs text-neutral-700">
          © {new Date().getFullYear()} Komkrit Ponimdang
        </p>
      </div>
    </footer>
  );
}

// ─── Root Page ────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="relative">
      <GrainOverlay />
      <Nav />
      <Hero />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
