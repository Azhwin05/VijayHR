export default function Eyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <span className={`inline-flex flex-col gap-2 ${center ? "items-center" : "items-start"}`}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
        {children}
      </span>
      <span
        aria-hidden
        className="h-[2px] w-9 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
      />
    </span>
  );
}
