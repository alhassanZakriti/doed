"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { IconArrow } from "@/components/icons";

type Variant = "primary" | "outline" | "primary-invert" | "outline-invert";

const variantClass: Record<Variant, string> = {
  primary: "bg-orange-500 text-on-accent border-2 border-orange-500",
  outline: "bg-transparent text-orange-500 border-2 border-orange-500",
  "primary-invert": "bg-white text-orange-500 border-2 border-white dark:text-navy-900",
  "outline-invert": "bg-transparent text-white border-2 border-white dark:text-navy-900 dark:border-navy-900",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  entrance,
  disabled = false,
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  entrance?: "1" | "2";
  disabled?: boolean;
}) {
  const [flashing, setFlashing] = useState(false);
  const label = typeof children === "string" ? children : null;

  const handleClick = () => {
    setFlashing(false);
    requestAnimationFrame(() => setFlashing(true));
    window.setTimeout(() => setFlashing(false), 450);
  };

  const classes = `btn inline-flex min-h-11 items-center justify-center rounded-button px-6 py-3 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${variantClass[variant]} ${entrance === "1" ? "btn-1" : ""} ${entrance === "2" ? "btn-2" : ""} ${className}`;

  const inner = label ? (
    <span className="btn-label-row">
      <span className={`btn-text-wrap${entrance ? " btn-label" : ""}`}>
        <span className="btn-text">{label}</span>
        <span className="btn-text">{label}</span>
      </span>
      <span className={`btn-arrow${flashing ? " is-flashing" : ""}`} aria-hidden="true">
        <IconArrow className="h-4 w-4" />
      </span>
    </span>
  ) : (
    children
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={handleClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={handleClick} disabled={disabled}>
      {inner}
    </button>
  );
}
