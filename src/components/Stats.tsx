"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Code2, Zap, Briefcase, Coffee } from "lucide-react";
import { fadeUp } from "@/lib/variants";

function Counter({
  to,
  suffix = "",
  isInfinity = false,
}: {
  to: number;
  suffix?: string;
  isInfinity?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const display = useTransform(count, (v) =>
    isInfinity ? "∞" : `${Math.round(v)}${suffix}`
  );
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || isInfinity) return;
    const ctrl = animate(count, to, { duration: 1.8, ease: "easeOut" });
    return ctrl.stop;
  }, [inView, count, to, isInfinity]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
    </motion.span>
  );
}

const stats = [
  {
    value: 4, suffix: "+",
    label: "Projects Shipped",
    sub: "Web · Mobile · BI",
    icon: <Code2 size={18} />,
    color: "#4ade80",
  },
  {
    value: 3, suffix: "",
    label: "Tech Domains",
    sub: "Data · Dev · Ops",
    icon: <Zap size={18} />,
    color: "#60a5fa",
  },
  {
    value: 3, suffix: "+",
    label: "Real Experiences",
    sub: "Intern & Events",
    icon: <Briefcase size={18} />,
    color: "#c084fc",
  },
  {
    value: 0, suffix: "", isInfinity: true,
    label: "Cups of Coffee",
    sub: "Fuel for code",
    icon: <Coffee size={18} />,
    color: "#fb923c",
  },
];

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            className="group relative p-6 rounded-3xl border border-white/[0.07] bg-white/[0.025] overflow-hidden"
          >
            {/* Hover top line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
            />
            {/* BG glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `radial-gradient(ellipse at top, ${s.color}0a, transparent 70%)` }}
            />

            <div
              className="relative w-10 h-10 rounded-2xl flex items-center justify-center mb-5 border"
              style={{ backgroundColor: s.color + "18", borderColor: s.color + "25", color: s.color }}
            >
              {s.icon}
            </div>

            <p
              className="relative text-[2.8rem] font-black tracking-tight leading-none mb-2"
              style={{ color: "#fff" }}
            >
              <Counter to={s.value} suffix={s.suffix} isInfinity={s.isInfinity} />
            </p>
            <p className="relative text-sm font-semibold text-neutral-300 mb-0.5">{s.label}</p>
            <p className="relative text-xs text-neutral-600">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
