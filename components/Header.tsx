"use client";

import { useState } from "react";
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
}: {
  brand: string;
  tagline?: string;
  homeHref: string;
  nav: NavItem[];
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.mega && setOpenMenu(item.href)}
              onMouseLeave={() => item.mega && setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="relative flex items-center gap-1 text-[14px] font-medium tracking-[-0.01em] text-ink/70 transition-colors hover:text-ink"
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

              {item.mega && openMenu === item.href && (
                <div className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-4">
                  <div
                    className="rounded-[16px] border border-black/[0.06] p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]"
                    style={{ backgroundColor: "var(--paper)" }}
                  >
                    <Link
                      href={item.mega.exploreHref}
                      className="mb-5 flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-[var(--accent)]"
                    >
                      {item.mega.exploreLabel}
                      <span aria-hidden>→</span>
                    </Link>
                    <div className="grid grid-cols-2 gap-3">
                      {item.mega.items.map((mi) => (
                        <Link
                          key={mi.href}
                          href={mi.href}
                          className="group flex items-center gap-3 rounded-[10px] border border-black/[0.06] px-4 py-3.5 transition-colors duration-200 hover:border-[var(--accent)]"
                        >
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: "var(--tint-1)" }}
                          >
                            <Icon
                              name={mi.icon}
                              className="h-[18px] w-[18px]"
                              style={{ color: "var(--accent)" }}
                            />
                          </span>
                          <span className="text-[13.5px] font-medium leading-snug text-ink">
                            {mi.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
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
