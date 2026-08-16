"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

type MegaItem = { name: string; href: string; icon: string };
type NavItem = {
  label: string;
  href: string;
  mega?: { items: MegaItem[]; exploreLabel: string; exploreHref: string };
};

export default function Header({
  brand,
  tagline,
  homeHref,
  nav,
  switchTo,
}: {
  brand: string;
  tagline?: string;
  homeHref: string;
  nav: NavItem[];
  switchTo?: { label: string; href: string };
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeItem = nav.find((item) => item.href === openMenu && item.mega);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileOpen]);

  useEffect(() => {
    if (!openMenu) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openMenu]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/[0.06] bg-[color-mix(in_srgb,var(--paper)_97%,transparent)]"
    >
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

        <nav
          className="relative hidden items-center gap-9 lg:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {nav.map((item) => (
            <div
              key={item.href}
              onMouseEnter={() => item.mega && setOpenMenu(item.href)}
              onFocus={() => setOpenMenu(item.mega ? item.href : null)}
            >
              <Link
                href={item.href}
                className="relative flex items-center gap-1 text-[14px] font-medium tracking-[-0.01em] text-ink/70 transition-colors hover:text-ink"
                aria-expanded={item.mega ? openMenu === item.href : undefined}
                aria-haspopup={item.mega ? "true" : undefined}
              >
                {item.label}
                {item.mega && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-3 w-3 transition-transform duration-200 ${
                      openMenu === item.href ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </Link>
            </div>
          ))}

          {activeItem?.mega && (
            <div className="absolute right-0 top-full z-50 w-[720px] pt-4">
              <div
                className="rounded-[16px] border border-black/[0.06] p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]"
                style={{ backgroundColor: "var(--paper)" }}
              >
                <Link
                  href={activeItem.mega.exploreHref}
                  className="mb-5 flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-[var(--accent)]"
                >
                  {activeItem.mega.exploreLabel}
                  <span aria-hidden>→</span>
                </Link>
                <div className="grid grid-cols-4 gap-3">
                  {activeItem.mega.items.map((mi) => (
                    <Link
                      key={mi.href}
                      href={mi.href}
                      className="group flex flex-col items-start gap-2.5 rounded-[10px] border border-black/[0.06] px-3.5 py-4 transition-colors duration-200 hover:border-[var(--accent)]"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: "var(--tint-1)" }}
                      >
                        <Icon
                          name={mi.icon}
                          className="h-4 w-4"
                          style={{ color: "var(--accent)" }}
                        />
                      </span>
                      <span className="text-[12.5px] font-medium leading-snug text-ink">
                        {mi.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {switchTo && (
            <Link
              href={switchTo.href}
              className="hidden items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors duration-200 lg:inline-flex"
              style={{
                borderColor: "rgba(var(--accent-rgb), 0.28)",
                color: "var(--accent)",
              }}
            >
              {switchTo.label}
              <span aria-hidden>→</span>
            </Link>
          )}

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            style={{ touchAction: "manipulation" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              className="pointer-events-none h-5 w-5 text-ink"
              aria-hidden
            >
              <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
            </svg>
          </button>
        </div>
      </div>

      {switchTo && (
        <Link
          href={switchTo.href}
          className="flex items-center justify-center gap-1.5 border-t border-black/[0.06] py-2 text-[12.5px] font-medium lg:hidden"
          style={{ color: "var(--accent)" }}
        >
          {switchTo.label}
          <span aria-hidden>→</span>
        </Link>
      )}

      {mobileOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto lg:hidden"
          style={{ backgroundColor: "var(--paper)", paddingTop: "env(safe-area-inset-top)" }}
        >
          <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-3.5">
            <Link href={homeHref} className="flex items-center gap-3" onClick={closeMobile}>
              <span className="relative h-8 w-[70px] shrink-0">
                <Image
                  src="/brand/vhr-mark.png"
                  alt="VijayHR"
                  fill
                  sizes="70px"
                  className="object-contain object-left"
                />
              </span>
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMobile}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center"
              style={{ touchAction: "manipulation" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                className="pointer-events-none h-5 w-5 text-ink"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <div key={item.href} className="border-b border-black/[0.06] py-3">
                <Link
                  href={item.href}
                  onClick={closeMobile}
                  className="block py-2 text-[17px] font-medium text-ink"
                >
                  {item.label}
                </Link>
                {item.mega && (
                  <div className="mt-1 flex flex-col gap-1">
                    {item.mega.items.map((mi) => (
                      <Link
                        key={mi.href}
                        href={mi.href}
                        onClick={closeMobile}
                        className="flex items-center gap-3 py-2.5 text-[14.5px] text-ink/65"
                      >
                        <Icon name={mi.icon} className="h-4 w-4 shrink-0" style={{ color: "var(--accent)" }} />
                        {mi.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {switchTo && (
              <Link
                href={switchTo.href}
                onClick={closeMobile}
                className="mt-4 flex items-center justify-center gap-1.5 rounded-full border px-4 py-3 text-[14px] font-medium"
                style={{
                  borderColor: "rgba(var(--accent-rgb), 0.28)",
                  color: "var(--accent)",
                }}
              >
                {switchTo.label}
                <span aria-hidden>→</span>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
