const PATHS: Record<string, React.ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  shield: <path d="M12 3.5 5 6v5.5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-2.5Z" />,
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c.6-3 2.9-5 5.5-5s4.9 2 5.5 5" />
      <circle cx="17" cy="9.5" r="2.2" />
      <path d="M15.5 14.2c2.1.3 3.7 2 4.2 4.3" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  "check-shield": (
    <>
      <path d="M12 3.5 5 6v5.5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-2.5Z" />
      <path d="M9 12.2l2 2 4-4.4" />
    </>
  ),
  wallet: (
    <>
      <path d="M3.5 7.5A2 2 0 0 1 5.5 5.5h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-9Z" />
      <path d="M15.5 12.2h3" />
    </>
  ),
  heart: <path d="M12 19.5S3.5 14.8 3.5 8.9C3.5 6 5.8 4 8.4 4c1.6 0 3 .8 3.6 2 .6-1.2 2-2 3.6-2 2.6 0 4.9 2 4.9 4.9 0 5.9-8.5 10.6-8.5 10.6Z" />,
  star: <path d="M12 3.5l2.5 5.4 5.9.6-4.5 4 1.3 5.9L12 16.4 6.8 19.4l1.3-5.9-4.5-4 5.9-.6L12 3.5Z" />,
  pulse: <path d="M2.5 12h4l2-6 3 12 2.5-9 1.5 3h6.5" />,
  bolt: <path d="M12.5 3 5 13.5h5.5L11 21l7.5-10.5H13l-.5-7.5Z" />,
  briefcase: (
    <>
      <rect x="3" y="8" width="18" height="11" rx="2" />
      <path d="M8.5 8V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M8 21h8" />
      <path d="M5 7h6M13 7h6" />
      <path d="M5 7 2.5 12a2.5 2.5 0 0 0 5 0L5 7ZM19 7l-2.5 5a2.5 2.5 0 0 0 5 0L19 7Z" />
    </>
  ),
  "search-check": (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M8 10.3l1.6 1.6L13.5 8" />
      <path d="M15.3 15.3 20.5 20.5" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M7 10.5c0-3 2.2-5.5 5-5.5s5 2.5 5 5.5c0 2-1.1 3.2-2 4-.6.5-1 1-1 2H9c0-1-.4-1.5-1-2-.9-.8-2-2-2-4Z" />
    </>
  ),
  server: (
    <>
      <rect x="3.5" y="4" width="17" height="6" rx="1.5" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  handshake: (
    <>
      <path d="M2.5 12.5 6 9l3 2.5 3-3 3 3 3-2.5 3.5 3.5" />
      <path d="M8.5 12.5 6 15l2.5 2.5M15.5 12.5 18 15l-2.5 2.5" />
    </>
  ),
  "graduation-cap": (
    <>
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" />
      <path d="M6.5 11v4.5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V11" />
    </>
  ),
  factory: (
    <>
      <path d="M3.5 20V11l5 3.2V11l5 3.2V8.5l6 4V20Z" />
      <path d="M3.5 20h16.5" />
      <path d="M17 8.5V5h2v2" />
    </>
  ),
  "building-stack": (
    <>
      <rect x="3.5" y="9" width="7" height="11" rx="1" />
      <rect x="13.5" y="4" width="7" height="16" rx="1" />
      <path d="M6.5 12.5h1M6.5 15.5h1M16.5 8h1M16.5 11h1M16.5 14h1" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4.5c-8 0-15 5-15 13 0 1 .1 1.5.2 2 7-.5 12.8-5 14.8-11" />
      <path d="M5.2 19.5C6 13 10 8.5 17 6.5" />
    </>
  ),
  truck: (
    <>
      <rect x="2.5" y="7" width="11" height="9" rx="1" />
      <path d="M13.5 10h4l3 3v3h-7v-6Z" />
      <circle cx="7" cy="18" r="1.7" />
      <circle cx="17" cy="18" r="1.7" />
    </>
  ),
};

export default function Icon({
  name,
  className = "",
  style,
}: {
  name: keyof typeof PATHS | string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden
    >
      {path}
    </svg>
  );
}
