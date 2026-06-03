"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Power BI", "Next.js", "React", "DAX", "Data Modeling",
  "Tailwind CSS", "Laravel", "PHP", "Kotlin", "Prometheus",
  "Grafana", "Network Admin", "TypeScript", "SQL", "LAN/WAN",
  "Predictive Analytics", "Google Gemini", "LINE OA", "LIFF", "Jetpack Compose",
];

function Strip({ items, dir }: { items: string[]; dir?: "left" | "right" }) {
  const doubled = [...items, ...items];
  const target  = dir === "right" ? "0%" : "-50%";
  return (
    <div className="relative overflow-hidden flex">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#060606] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#060606] to-transparent z-10 pointer-events-none" />
      <motion.div
        animate={{ x: [dir === "right" ? "-50%" : "0%", target] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap w-max"
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-[#4ade80]/30" />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  return (
    <div className="py-4 border-y border-white/[0.055] bg-white/[0.008] space-y-3 overflow-hidden">
      <Strip items={ITEMS} />
      <Strip items={[...ITEMS].reverse()} dir="right" />
    </div>
  );
}
