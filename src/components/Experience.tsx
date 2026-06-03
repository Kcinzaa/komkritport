"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Shield, Users, Activity, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { fadeUp, EASE } from "@/lib/variants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experiences } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "IT Support Intern":  <Shield size={15} />,
  "Hall Support Staff": <Users size={15} />,
  "Operations Support": <Activity size={15} />,
};

export function Experience() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={sectionRef} className="py-28 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <SectionLabel>Journey</SectionLabel>
            <h2 className="text-5xl md:text-[5.5rem] font-black tracking-[-0.04em] text-white leading-[0.88]">
              Experience
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp} custom={0.5} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-sm text-neutral-600 max-w-[240px] leading-relaxed"
          >
            Real-world roles across healthcare IT, academic events, and large-scale operations.
          </motion.p>
        </div>

        <div className="space-y-3">
          {experiences.map((item, i) => (
            <ExperienceCard key={item.company} item={item} index={i} parentInView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  item, index, parentInView,
}: {
  item: (typeof experiences)[number]; index: number; parentInView: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index + 1}
      initial="hidden"
      animate={parentInView ? "visible" : "hidden"}
      whileHover={{ x: 5, transition: { duration: 0.22 } }}
      className="group relative rounded-3xl border border-white/[0.07] bg-white/[0.022] overflow-hidden hover:border-white/[0.13] transition-colors duration-400"
    >
      {/* Left color bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top"
        style={{ backgroundColor: item.color }}
      />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${item.color}88, transparent)` }}
      />

      {/* Hover BG tint */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at left center, ${item.color}05, transparent 60%)` }}
      />

      <div className="relative p-7 md:p-8">
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="w-11 h-11 rounded-2xl border flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: item.color + "14", borderColor: item.color + "28", color: item.color }}
            >
              {iconMap[item.role]}
            </div>

            {/* Labels */}
            <div>
              <div className="flex items-center flex-wrap gap-2 mb-1.5">
                <span
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full border tracking-widest uppercase"
                  style={{ color: item.color, borderColor: item.color + "30", backgroundColor: item.color + "10" }}
                >
                  {item.type}
                </span>
                <span className="text-[10px] text-neutral-600 font-medium italic">{item.highlight}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug">{item.role}</h3>
              <p className="text-sm font-semibold mt-0.5" style={{ color: item.color + "cc" }}>{item.company}</p>
            </div>
          </div>

          {/* Date + location */}
          <div className="flex flex-col items-end gap-1.5 text-xs text-neutral-700">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
              <Clock size={10} /> {item.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={10} /> {item.location}
            </span>
          </div>
        </div>

        {/* Bullet grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2.5 pl-[3.75rem]">
          {item.bullets.map((b) => (
            <div key={b} className="flex items-start gap-3 text-sm text-neutral-500 leading-relaxed">
              <div
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-60"
                style={{ backgroundColor: item.color }}
              />
              {b}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
