"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Mail } from "lucide-react";
import { EASE } from "@/lib/variants";

const links = [
  { label: "Work",       href: "#work" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 50)), [scrollY]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#060606]/85 backdrop-blur-2xl border-b border-white/[0.055]"
            : "py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a href="#" className="flex items-center gap-2.5 group" whileHover={{ scale: 1.04 }}>
            <div className="relative w-8 h-8 rounded-xl bg-[#4ade80] flex items-center justify-center overflow-hidden">
              <span className="text-neutral-950 text-sm font-black z-10">N</span>
              <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80] to-[#22c55e]" />
            </div>
            <span className="text-sm font-bold text-white tracking-tight">
              Komkrit<span className="text-neutral-700">.</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center p-1 rounded-full border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl gap-0.5">
            {links.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.07)", color: "#fff" }}
                className="px-4 py-2 rounded-full text-sm text-neutral-500 transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#4ade80] group-hover:w-5 transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:nnnickgundim@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(74,222,128,0.3)" }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#4ade80] text-neutral-950 hover:bg-[#22c55e] transition-colors duration-200"
          >
            <Mail size={13} />
            Hire Me
          </motion.a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.04] flex items-center justify-center"
          >
            <div className="flex flex-col gap-1.5 w-4">
              <span className={`block h-px w-full bg-white rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block h-px w-full bg-white rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px w-full bg-white rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[68px] left-4 right-4 z-40 rounded-2xl bg-[#111]/95 backdrop-blur-xl border border-white/[0.09] p-3 shadow-2xl"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center px-4 py-3.5 rounded-xl text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
            <div className="h-px bg-white/[0.06] mx-2 my-2" />
            <a
              href="mailto:nnnickgundim@gmail.com"
              className="flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-[#4ade80] hover:bg-[#4ade80]/[0.08] transition-all duration-200"
            >
              <Mail size={14} /> Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
