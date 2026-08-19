import type { ReactNode } from "react";

export function IconStatCard({
  icon,
  title,
  description,
  className = "",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <article className={`card-interactive rounded-card border border-border-orange bg-surface p-5 sm:p-6 ${className}`}>
      <div className="mb-4 text-orange-500">{icon}</div>
      <h3 className="mb-2 text-[21px] font-bold text-navy-text">{title}</h3>
      <p className="text-base leading-relaxed text-gray-body">{description}</p>
    </article>
  );
}
