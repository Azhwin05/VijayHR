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
