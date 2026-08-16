type SvgProps = { className?: string };

export function IconCode({ className = "h-6 w-6" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 8 4 12l4 4M16 8l4 4-4 4M13 6l-2 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCloud({ className = "h-6 w-6" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 18h9.2A4.3 4.3 0 0 0 21 13.8c0-2.1-1.6-3.9-3.7-4.2A5.2 5.2 0 0 0 7.2 11 3.8 3.8 0 0 0 3.5 14.7 3.3 3.3 0 0 0 7.5 18Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCycle({ className = "h-6 w-6" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12a8 8 0 0 1 13.3-6M20 6v4h-4M20 12a8 8 0 0 1-13.3 6M4 18v-4h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconShield({ className = "h-6 w-6" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 5 6.5v5.2c0 4.3 2.9 7.2 7 8.8 4.1-1.6 7-4.5 7-8.8V6.5L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHeadset({ className = "h-6 w-6" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 13v-1a8 8 0 1 1 16 0v1M4 13a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2ZM20 13a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M17 17v1a3 3 0 0 1-3 3h-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconLayers({ className = "h-6 w-6" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m12 4 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 16l8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBolt({ className = "h-6 w-6" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 3 5.5 13h6L11 21 18.5 11h-6L13 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLoop({ className = "h-8 w-8" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 7h5a5 5 0 0 1 0 10H9M16 17h-5a5 5 0 0 1 0-10h3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m7 5 2 2-2 2M17 19l-2-2 2-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconNetwork({ className = "h-5 w-5" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12h8M8.2 13.2 16 17.2M8.2 10.8 16 6.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconFlagNL({ className = "h-4 w-6" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 18 12" aria-hidden="true">
      <rect width="18" height="4" fill="#AE1C28" />
      <rect y="4" width="18" height="4" fill="#FFFFFF" />
      <rect y="8" width="18" height="4" fill="#21468B" />
      <rect width="18" height="12" fill="none" stroke="#0E2A45" strokeOpacity="0.15" />
    </svg>
  );
}

export function IconChevron({ className = "h-5 w-5", open = false }: SvgProps & { open?: boolean }) {
  return (
    <svg
      className={`${className} transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFacebook({ className = "h-5 w-5" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

export function IconInstagram({ className = "h-5 w-5" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.5" cy="7.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function IconLinkedIn({ className = "h-5 w-5" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.1 9H4.3v11h2.8V9ZM5.7 4C4.7 4 4 4.7 4 5.6S4.7 7.2 5.7 7.2 7.4 6.5 7.4 5.6 6.6 4 5.7 4ZM20 13.2c0-2.8-1.5-4.3-3.8-4.3-1.7 0-2.5.9-2.9 1.6V9H10.5c0 1.3 0 11 0 11H13.3v-6.1c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 1.9 1 1.9 2.6V20H20v-6.8Z" />
    </svg>
  );
}

export function IconArrow({ className = "h-4 w-4" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
