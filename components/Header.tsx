import Link from "next/link";
import Image from "next/image";

type NavItem = { label: string; href: string };

export default function Header({
  brand,
  tagline,
  homeHref,
  nav,
}: {
  brand: string;
  tagline?: string;
  homeHref: string;
  nav: NavItem[];
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[color-mix(in_srgb,var(--paper)_85%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3.5 sm:px-10">
        <Link href={homeHref} className="flex items-center gap-3">
          <span className="relative h-8 w-[70px] shrink-0">
            <Image
              src="/brand/vhr-mark.png"
              alt="VijayHR"
              fill
              sizes="70px"
              className="object-contain object-left"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[16px] font-bold tracking-[-0.03em] text-ink">
              {brand}
            </span>
            {tagline && (
              <span className="text-[10.5px] uppercase tracking-[0.15em] text-ink/45">
                {tagline}
              </span>
            )}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[14px] font-medium tracking-[-0.01em] text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#menu"
          className="text-[14px] font-medium text-ink sm:hidden"
        >
          Menu
        </Link>
      </div>
    </header>
  );
}
