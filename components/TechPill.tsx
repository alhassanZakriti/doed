import type { ReactNode } from "react";

export function TechPill({
  children,
  tone = "muted",
  className = "",
}: {
  children: ReactNode;
  tone?: "muted" | "on-dark";
  className?: string;
}) {
  const toneClass = tone === "on-dark" ? "bg-white/10 text-white" : "bg-blue-50 text-navy-text";

  return (
    <span className={`inline-flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium ${toneClass} ${className}`}>
      {children}
    </span>
  );
}
