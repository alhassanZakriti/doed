export function BulletListItem({
  label,
  description,
  stacked = false,
  className = "",
}: {
  label: string;
  description?: string;
  stacked?: boolean;
  className?: string;
}) {
  const id = label.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <li className={`flex items-start gap-3 ${className}`}>
      <svg
        className="mt-[-2%] size-10 shrink-0 md:size-12"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="17.82"
          transform="rotate(-90 24 24)"
          stroke={`url(#paint0_${id})`}
          strokeOpacity="0.8"
          strokeWidth="0.36"
        />
        <circle
          cx="24"
          cy="24"
          r="23.85"
          transform="rotate(-90 24 24)"
          stroke={`url(#paint1_${id})`}
          strokeOpacity="0.6"
          strokeWidth="0.3"
        />
        <rect x="16" y="32" width="16" height="16" rx="8" transform="rotate(-90 16 32)" fill="#FB8500" />
        <circle
          cx="24"
          cy="24"
          r="11.7426"
          transform="rotate(-90 24 24)"
          stroke={`url(#paint2_${id})`}
          strokeWidth="0.51474"
        />
        <defs>
          <linearGradient id={`paint0_${id}`} x1="21.3231" y1="2.86154" x2="26.9538" y2="47.3538" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FB8500" />
            <stop offset="1" stopColor="#FB8500" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`paint1_${id}`} x1="20.4308" y1="-4.18461" x2="27.9385" y2="55.1385" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FB8500" />
            <stop offset="1" stopColor="#FB8500" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`paint2_${id}`} x1="22.2154" y1="9.90769" x2="25.9692" y2="39.5692" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FB8500" />
            <stop offset="1" stopColor="#FB8500" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <p className="min-w-0 text-base leading-relaxed text-gray-body">
        <span className="font-bold text-navy-text">{label}</span>
        {description ? (
          stacked ? (
            <span className="mt-1 block">{description}</span>
          ) : (
            <> {description}</>
          )
        ) : null}
      </p>
    </li>
  );
}
