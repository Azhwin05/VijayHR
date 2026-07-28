import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-[13px] text-[15px] font-medium tracking-[-0.01em] transition-all duration-300";

  if (variant === "outline") {
    return (
      <Link
        href={href}
        className={`${base} border border-black/[0.14] text-ink hover:border-[var(--accent)] hover:text-[var(--accent)]`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} text-white shadow-[0_1px_2px_rgba(0,0,0,0.12)] hover:-translate-y-[1px] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)]`}
      style={{ backgroundColor: "var(--accent)" }}
    >
      {children}
    </Link>
  );
}
