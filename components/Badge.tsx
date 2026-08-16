import type { ReactNode } from "react";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-orange-500 ${className}`}
    >
      {children}
    </span>
  );
}
