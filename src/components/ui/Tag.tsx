"use client";

type TagColor = "green" | "blue" | "purple" | "amber" | "orange" | "default";

const styles: Record<TagColor, string> = {
  green:   "bg-[#4ade80]/10 text-[#4ade80] border-[#4ade80]/20",
  blue:    "bg-blue-500/10 text-blue-400 border-blue-500/20",
  purple:  "bg-purple-500/10 text-purple-400 border-purple-500/20",
  amber:   "bg-amber-500/10 text-amber-400 border-amber-500/20",
  orange:  "bg-orange-500/10 text-orange-400 border-orange-500/20",
  default: "bg-white/[0.05] text-neutral-500 border-white/[0.08]",
};

export function Tag({
  children,
  color = "default",
}: {
  children: React.ReactNode;
  color?: TagColor;
}) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[color]}`}>
      {children}
    </span>
  );
}
