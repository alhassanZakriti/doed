export function PulseLogo({
  className = "",
  size = "md",
  playing = true,
  section = "footer",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  playing?: boolean;
  section?: "header" | "footer";
}) {
  const sizeClass =
    size === "sm"
      ? "h-16 w-16"
      : "h-[5.5rem] w-[5.5rem] sm:h-24 sm:w-24 md:h-[10em] md:w-[10em]";

  return (
    <div className={`relative inline-flex overflow-visible ${playing ? "" : "is-paused"} ${className}`}>
      <span className={`pulse-ring ${section === "footer" ? "pulse-ring-white" : ""}`} />
      <span className={`pulse-ring ${section === "footer" ? "pulse-ring-white" : ""}`} />
      <span className={`pulse-ring ${section === "footer" ? "pulse-ring-white" : ""}`} />
      <div
        className={`relative z-1 flex items-center justify-center rounded-full p-5 border-4 border-white/50 bg-white shadow-lg ${sizeClass}`}
      >
        <svg className="h-[100%] w-auto" viewBox="0 0 105 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M76.7184 55.4211H56.2332V0H76.6913C82.3381 0 87.2001 1.10951 91.2773 3.32852C95.3725 5.52948 98.5296 8.70465 100.749 12.854C102.968 16.9853 104.077 21.9285 104.077 27.6835C104.077 33.4565 102.968 38.4177 100.749 42.5671C98.5477 46.7165 95.3996 49.9006 91.3043 52.1197C87.2091 54.3206 82.3471 55.4211 76.7184 55.4211ZM69.6284 44.0013H76.2042C79.3072 44.0013 81.9322 43.4781 84.079 42.4318C86.2439 41.3674 87.8766 39.6445 88.9771 37.2631C90.0956 34.8637 90.6549 31.6705 90.6549 27.6835C90.6549 23.6965 90.0956 20.5213 88.9771 18.158C87.8585 15.7766 86.2078 14.0627 84.0249 13.0164C81.86 11.952 79.19 11.4198 76.0148 11.4198H69.6284V44.0013Z" fill="#FB8500"/>
          <path d="M27.359 55.4211H47.8442V0H27.3861C21.7393 0 16.8773 1.10951 12.8001 3.32852C8.70489 5.52948 5.54776 8.70465 3.32875 12.854C1.10974 16.9853 0.000236511 21.9285 0.000236511 27.6835C0.000236511 33.4565 1.10974 38.4177 3.32875 42.5671C5.52972 46.7165 8.67783 49.9006 12.7731 52.1197C16.8683 54.3206 21.7303 55.4211 27.359 55.4211ZM34.449 44.0013H27.8732C24.7701 44.0013 22.1452 43.4781 19.9984 42.4318C17.8335 41.3674 16.2008 39.6445 15.1003 37.2631C13.9818 34.8637 13.4225 31.6705 13.4225 27.6835C13.4225 23.6965 13.9818 20.5213 15.1003 18.158C16.2189 15.7766 17.8696 14.0627 20.0525 13.0164C22.2174 11.952 24.8874 11.4198 28.0626 11.4198H34.449V44.0013Z" fill="#FB8500"/>
        </svg>
      </div>
    </div>
  );
}
