"use client";

import { motion } from "framer-motion";
import { Mail, GitFork, Link2, ArrowUp, Heart } from "lucide-react";

const navLinks   = ["Work", "Skills", "Experience", "Contact"];
const socialLinks = [
  { icon: <Mail size={13} />,    href: "mailto:nnnickgundim@gmail.com", label: "Email" },
  { icon: <GitFork size={13} />, href: "https://github.com",            label: "GitHub" },
  { icon: <Link2 size={13} />,   href: "https://linkedin.com",          label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#4ade80]/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 relative">

        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">

          {/* Brand */}
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-neutral-950 text-sm" style={{ background: "linear-gradient(135deg, #4ade80, #22c55e)" }}>
              N
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-none">Komkrit Ponimdang.</p>
              <p className="text-[10px] text-neutral-700 mt-0.5 tracking-wide">คมกฤช โพธิ์นิ่มแดง</p>
            </div>
          </motion.div>

          {/* Nav */}
          <div className="flex items-center gap-1 p-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="px-4 py-2 rounded-full text-xs text-neutral-600 hover:text-neutral-200 hover:bg-white/[0.05] transition-all duration-200"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Social + top */}
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-8 h-8 rounded-xl border border-white/[0.07] bg-white/[0.025] flex items-center justify-center text-neutral-600 hover:text-[#4ade80] hover:border-[#4ade80]/25 hover:bg-[#4ade80]/[0.07] transition-all duration-200"
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
            <div className="w-px h-5 bg-white/[0.07] mx-1" />
            <motion.a
              href="#"
              whileHover={{ scale: 1.12, y: -3 }}
              className="w-8 h-8 rounded-xl border border-white/[0.07] bg-white/[0.025] flex items-center justify-center text-neutral-600 hover:text-white hover:border-white/[0.14] transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={13} />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-neutral-700">
            © {new Date().getFullYear()} Komkrit Photnimdaeng · All rights reserved.
          </p>
          <p className="text-[11px] text-neutral-700 flex items-center gap-1.5">
            Built with <Heart size={10} className="text-[#4ade80]" /> using Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
