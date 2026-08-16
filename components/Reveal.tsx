"use client";

import type { ReactNode } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export function Reveal({
  from,
  className = "",
  children,
  delay = 0,
}: {
  from: "left" | "right" | "top";
  className?: string;
  children: ReactNode;
  delay?: number;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const anim = from === "left" ? "reveal-left" : from === "right" ? "reveal-right" : "reveal-top";

  return (
    <div
      ref={ref}
      className={`${inView ? anim : "reveal-pending"} ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
