import Link from "next/link";

export default function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-block w-fit text-[15px] font-medium text-ink ${className}`}
    >
      {children}
      <span
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 transition-transform duration-300 ease-out"
        style={{ backgroundColor: "var(--hairline)" }}
      />
      <span
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
        style={{ backgroundColor: "var(--accent)" }}
      />
    </Link>
  );
}
